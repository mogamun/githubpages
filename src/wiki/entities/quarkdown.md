---
title: Quarkdown
created: 2026-04-29
updated: 2026-04-29
tags: [entity, tool, markdown, typesetting, document-generation, java]
sources: [2026-04-29-quarkdown.md]
status: stable
category: entities
---

# Quarkdown

## 정체
- **Type**: Markdown 기반 조판 시스템 (Turing-complete)
- **Developer**: [iamgio](https://github.com/iamgio)
- **GitHub**: https://github.com/iamgio/quarkdown
- **Website**: https://www.quarkdown.net/
- **License**: GNU GPLv3 (모듈), GNU AGPLv3 (CLI/LSP)
- **Language**: Java 17+
- **VS Code Extension**: `pallandos.quarkdown`

## 역할
하나의 Markdown 소스에서 책, 논문, 프레젠테이션, 위키를 모두 생성하는 차세대 조판 도구. CommonMark/GFM에 함수 호출을 도입해 Markdown을 Turing-complete 언어로 확장.

## 핵심 기능

### 함수 시스템
```
.function {greet}
    to from:
    **Hello, .to** from .from!

.greet {world} from:{iamgio}
```
- 표준 라이브러리: 레이아웃 빌더, I/O, 수학, 조건문, 반복문
- 사용자 정의 함수/변수 가능
- 서드파티 라이브러리 지원

### 출력 타겟
| 타겟 | 함수 | 설명 |
|------|------|------|
| Plain HTML | `.doctype {plain}` | Notion/Obsidian 스타일 연속 흐름 |
| Paged | `.doctype {paged}` | paged.js 기반, 책/논문 |
| Slides | `.doctype {slides}` | reveal.js 기반 프레젠테이션 |
| Docs | `.doctype {docs}` | 위키/기술문서/지식베이스 |
| PDF | `--pdf` 플래그 | 모든 HTML 타겟 지원 |

### 도구 체인
- `quarkdown create [dir]` — 프로젝트 위저드
- `quarkdown c file.qd` — 컴파일
- `quarkdown c file.qd -p -w` — Live Preview
- `quarkdown repl` — 인터랙티브 REPL
- GitHub Actions 통합 (setup-quarkdown)

## 관련 프로젝트/맥락
- **LLM Wiki**: Quarkdown의 `.doctype {docs}` 타겟은 이 위키의 출력 포맷으로 활용 가능
- **Google AI Forum**: LLM 통합 공식 지원 제안됨
- **Obsidian**: 플러그인 요청 존재
- **Typst**: 같은 "programmable markup" 카테고리의 경쟁자

## See also
- [Quarkdown 소스](/wiki/sources/quarkdown/)
- [Turing-complete Markdown](/wiki/concepts/turing-complete-markdown/)
- [Markdown 조판 시스템 비교](/wiki/comparisons/markdown-typesetting-systems/)
- [Quarkdown 설정](/wiki/important/setup/quarkdown/)
- [LLM Wiki 패턴](/wiki/sources/llm-wiki-pattern/)
- [지식 저장소 진화](/wiki/concepts/knowledge-repository-evolution/)
