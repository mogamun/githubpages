---
title: Safe Area Inset 패턴
created: 2026-04-22
updated: 2026-04-22
tags: [css, mobile, design-pattern, safe-area]
sources: [모바일앱 지침.md]
status: stable
category: concepts
---

# Safe Area Inset 패턴

## 정의
iOS 노치, 홈 인디케이터, Android 내비게이션 바 등 모바일 기기의 안전 영역을 CSS `env()` 함수로 처리하는 레이아웃 패턴.

## 핵심 원칙
- **중첩 구조로 제한** — 외부 div가 안전 영역 패딩을 담당하고, 내부 div가 실제 콘텐츠 영역이 되는 구조
- **오버레이 격리** — `absolute inset-0` 오버레이가 내부 div(안전 영역 내부)에만 적용되도록 `relative` 컨테이너로 제한
- **단일 패턴** — 모든 화면에서 동일한 중첩 구조 사용

## 적용 사례
```html
<!-- 외부: 안전 영역 패딩 -->
<div style="padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)">
  <!-- 내부: 실제 콘텐츠 + relative 컨테이너 -->
  <div style="position: relative">
    <!-- 오버레이는 내부 div 안에만 제한됨 -->
    <div style="position: absolute; inset: 0">...</div>
  </div>
</div>
```

## See also
- [모바일앱 개발 지침](/wiki/sources/mobile-app-guidelines/)
