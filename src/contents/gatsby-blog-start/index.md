---
title: "Gatsby로 블로그 시작하기"
category: "Tutorial"
date: "2026-05-04"
thumbnail: ""
summary: "Gatsby를 이용해 GitHub Pages 블로그를 만드는 방법을 단계별로 알아봅니다."
---

Gatsby를 이용해 GitHub Pages 블로그를 만들었습니다.

## 왜 Gatsby인가?

Gatsby는 React 기반의 정적 사이트 생성기로, 다음과 같은 장점이 있습니다:

- **빠른 로딩 속도** - 정적 HTML을 미리 생성하여 빠른 페이지 로드
- **React 기반** - 컴포넌트 기반 개발로 유지보수가 쉬움
- **마크다운 지원** - 블로그 글을 마크다운으로 작성 가능
- **GitHub Pages 연동** - 쉽게 무료 호스팅 가능

## 새 글 작성하기

`src/contents/` 아래에 새 디렉토리를 만들고 `index.md` 파일을 작성합니다:

```markdown
---
title: "글 제목"
category: "카테고리"
date: "2026-05-04"
thumbnail: ""
summary: "짧은 요약"
---

글 내용을 여기에 작성합니다.
```
