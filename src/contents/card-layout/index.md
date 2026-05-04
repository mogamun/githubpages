---
title: "네이버 스타일의 깔끔한 카드형 레이아웃 만들기"
category: "Tech & Dev"
date: "2026-05-04"
thumbnail: ""
summary: "Gatsby의 GraphQL과 CSS Grid를 활용하여 반응형 콘텐츠 모아보기 페이지를 구축하는 방법을 알아봅니다."
---

Gatsby의 GraphQL과 CSS Grid를 활용하여 반응형 콘텐츠 모아보기 페이지를 구축하는 방법을 알아봅니다.

## CSS Grid로 카드 레이아웃

`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`를 사용하면 화면 크기에 맞춰 자동으로 카드가 배열됩니다.

## 마크다운 프론트매터

각 콘텐츠는 `title`, `category`, `date`, `thumbnail`, `summary` 필드를 포함합니다:

```yaml
---
title: "글 제목"
category: "카테고리"
date: "2026-05-04"
thumbnail: ""
summary: "짧은 요약"
---
```

다음 글에서는 다크 모드 지원과 인터랙션에 대해 알아보겠습니다.
