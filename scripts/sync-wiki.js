#!/usr/bin/env node
/**
 * sync-wiki.js
 * Obsidian wiki → Gatsby src/wiki/ + static/wiki-assets/ 동기화 스크립트
 *
 * 수행 작업:
 *  1. src/wiki/ 초기화
 *  2. wiki MD 파일 복사 + 링크/이미지 변환
 *  3. 참조된 이미지를 z.Files/에서 static/wiki-assets/로 복사
 */

const fs = require('fs');
const path = require('path');

// ─── 경로 설정 ────────────────────────────────────────────────────────────────
const WIKI_SRC        = '/Users/mogamun/Documents/Company/0LLMWiki/wiki';
const OBSIDIAN_ASSETS = '/Users/mogamun/Documents/Company/z.Files';
const PROJECT_ROOT    = path.join(__dirname, '..');
const WIKI_DEST       = path.join(PROJECT_ROOT, 'src', 'wiki');
const ASSETS_DEST     = path.join(PROJECT_ROOT, 'static', 'wiki-assets');

// ─── 유틸 ─────────────────────────────────────────────────────────────────────
function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function clearDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

function getAllMdFiles(dir, baseDir = dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllMdFiles(fullPath, baseDir, results);
    } else if (entry.name.endsWith('.md')) {
      results.push({ abs: fullPath, rel: path.relative(baseDir, fullPath) });
    }
  }
  return results;
}

// ─── 슬러그 변환 ──────────────────────────────────────────────────────────────
// src/wiki/concepts/rag.md → /wiki/concepts/rag/
function mdRelToSlug(relPath) {
  const withoutExt = relPath.replace(/\.md$/, '');
  const normalized = withoutExt.replace(/\\/g, '/');
  return `/wiki/${normalized}/`;
}

// .md 파일의 상대 링크를 슬러그로 변환
// currentRel: 현재 파일의 wiki 내 상대 경로 (예: "concepts/rag.md")
// linkHref:   MD 파일 내 링크 (예: "../sources/llm-wiki-pattern.md")
function resolveMdLink(currentRel, linkHref) {
  // 외부 링크 / 앵커 링크는 그대로
  if (/^https?:\/\//.test(linkHref) || linkHref.startsWith('#') || linkHref.startsWith('mailto:')) {
    return null;
  }
  // .md 확장자가 없으면 변환 대상 아님
  if (!linkHref.match(/\.md(#.*)?$/i)) {
    return null;
  }

  const anchor = (linkHref.match(/#(.*)$/) || [])[1];
  const mdPart = linkHref.replace(/#.*$/, '');

  // 현재 파일 디렉토리 기준으로 절대 경로 계산
  const currentDir = path.dirname(currentRel).replace(/\\/g, '/');
  const resolved   = path.posix.normalize(path.posix.join(currentDir, mdPart));
  let slug = mdRelToSlug(resolved);

  if (anchor) slug += `#${anchor}`;
  return slug;
}

// ─── 이미지 참조 추출 ─────────────────────────────────────────────────────────
// Obsidian 이미지: ![](filename.png) 또는 ![alt](filename.png) 또는 ![[filename.png]]
function extractImageRefs(content) {
  const refs = new Set();

  // 표준 마크다운: ![alt](filename.ext)
  const stdRe = /!\[[^\]]*\]\(([^)]+)\)/g;
  let m;
  while ((m = stdRe.exec(content)) !== null) {
    const href = decodeURIComponent(m[1].trim());
    if (!/^https?:\/\//.test(href)) {
      refs.add(path.basename(href));
    }
  }

  // Obsidian embed: ![[filename.ext]]
  const obsRe = /!\[\[([^\]]+)\]\]/g;
  while ((m = obsRe.exec(content)) !== null) {
    refs.add(path.basename(m[1].trim()));
  }

  return refs;
}

// ─── 콘텐츠 변환 ──────────────────────────────────────────────────────────────
function transformContent(content, currentRel) {
  let out = content;

  // 1. 이미지 참조 변환
  //    ![alt](Pasted%20image.png)  →  ![alt](/wiki-assets/Pasted image.png)
  //    ![[image.png]]              →  ![image](/wiki-assets/image.png)
  out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (full, alt, href) => {
    if (/^https?:\/\//.test(href)) return full;
    const decoded = decodeURIComponent(href.trim());
    const basename = path.basename(decoded);
    return `![${alt}](/wiki-assets/${basename})`;
  });

  out = out.replace(/!\[\[([^\]]+)\]\]/g, (full, inner) => {
    const basename = path.basename(inner.trim());
    return `![${basename}](/wiki-assets/${basename})`;
  });

  // 2. .md 링크 변환
  //    [text](../concepts/rag.md)  →  [text](/wiki/concepts/rag/)
  out = out.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (full, text, href) => {
    const slug = resolveMdLink(currentRel, href);
    if (slug === null) return full;
    return `[${text}](${slug})`;
  });

  // 3. Obsidian [[wikilink]] 변환
  //    [[filename]]               →  [filename](/wiki/.../filename/)
  //    [[filename|display text]]  →  [display text](/wiki/.../filename/)
  out = out.replace(/\[\[([^\]]+)\]\]/g, (full, inner) => {
    const [rawFile, displayText] = inner.split('|').map(s => s.trim());
    const baseName = path.basename(rawFile).replace(/\.md$/i, '');
    const label = displayText || baseName;
    // 간단 탐색: wiki 파일에서 baseName 매칭
    const found = wikiFileMap[baseName.toLowerCase()];
    if (found) {
      return `[${label}](${mdRelToSlug(found)})`;
    }
    // 못 찾으면 일단 concepts 아래로 가정
    return `[${label}](/wiki/${baseName}/)`;
  });

  return out;
}

// ─── 프론트매터 정규화 ────────────────────────────────────────────────────────
// category 필드를 폴더명으로 자동 주입
function normalizeFrontmatter(content, relPath) {
  const category = relPath.split('/')[0]; // concepts, sources, entities ...

  if (content.startsWith('---')) {
    // 이미 frontmatter 있음 → category 없으면 추가
    return content.replace(/^(---\n)([\s\S]*?)(---\n)/, (full, open, body, close) => {
      if (!body.includes('category:')) {
        return `${open}${body}category: ${category}\n${close}`;
      }
      return full;
    });
  }

  // frontmatter 없음 → 기본값으로 생성
  const title = path.basename(relPath, '.md');
  return `---\ntitle: ${title}\ncategory: ${category}\n---\n\n${content}`;
}

// ─── 메인 ─────────────────────────────────────────────────────────────────────
// wikilink 탐색용 맵: baseName(소문자) → rel 경로
const wikiFileMap = {};

function buildFileMap(files) {
  for (const { rel } of files) {
    const key = path.basename(rel, '.md').toLowerCase();
    wikiFileMap[key] = rel.replace(/\\/g, '/');
  }
}

async function main() {
  // CI 환경 대응: wiki 원본이 없으면 스킵
  if (!fs.existsSync(WIKI_SRC)) {
    console.log(`⚠  Wiki 원본 경로 없음 (${WIKI_SRC}) — CI 환경으로 간주, 동기화 스킵`);
    process.exit(0);
  }

  console.log('🔄  Wiki 동기화 시작...\n');

  // 1. 대상 폴더 초기화 (삭제 파일도 반영되도록 양쪽 모두 초기화)
  clearDir(WIKI_DEST);
  clearDir(ASSETS_DEST);

  // 2. 파일 목록 수집
  const files = getAllMdFiles(WIKI_SRC);
  buildFileMap(files);
  console.log(`📄  MD 파일 발견: ${files.length}개`);

  let copiedMd = 0;
  let copiedImg = 0;
  const missingImages = [];

  // 3. MD 파일 처리
  for (const { abs, rel } of files) {
    const relNorm = rel.replace(/\\/g, '/');
    let content = fs.readFileSync(abs, 'utf-8');

    // 이미지 파일 복사
    const imgRefs = extractImageRefs(content);
    for (const imgName of imgRefs) {
      const srcImg = path.join(OBSIDIAN_ASSETS, imgName);
      const destImg = path.join(ASSETS_DEST, imgName);
      if (fs.existsSync(srcImg)) {
        fs.copyFileSync(srcImg, destImg);
        copiedImg++;
      } else {
        missingImages.push({ file: relNorm, image: imgName });
      }
    }

    // 콘텐츠 변환
    content = normalizeFrontmatter(content, relNorm);
    content = transformContent(content, relNorm);

    // 파일 쓰기
    const destPath = path.join(WIKI_DEST, relNorm);
    ensureDir(path.dirname(destPath));
    fs.writeFileSync(destPath, content, 'utf-8');
    copiedMd++;
  }

  // 4. 결과 리포트
  console.log(`✅  MD 복사:    ${copiedMd}개`);
  console.log(`🖼   이미지 복사: ${copiedImg}개`);

  if (missingImages.length > 0) {
    console.log(`\n⚠  이미지 원본 없음 (${missingImages.length}건):`);
    for (const { file, image } of missingImages) {
      console.log(`   [${file}] → ${image}`);
    }
  }

  console.log(`\n🎉  동기화 완료!`);
  console.log(`   src/wiki/        → ${copiedMd}개 파일`);
  console.log(`   static/wiki-assets/ → ${copiedImg}개 이미지`);
  console.log('\n다음 명령으로 커밋하세요:');
  console.log('   git add src/wiki/ static/wiki-assets/ && git commit -m "sync wiki" && git push');
}

main().catch(err => {
  console.error('❌  동기화 실패:', err.message);
  process.exit(1);
});
