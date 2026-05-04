---
title: "다크 모드 완벽 가이드: CSS 변수부터 테마 토글까지"
category: "Design"
date: "2026-05-03"
thumbnail: ""
summary: "styled-components와 Context API를 활용하여 다크 모드를 구현하는 방법을 알아봅니다."
---

웹사이트에 다크 모드를 적용하는 것은 사용자 경험을 크게 향상시킵니다.

## 왜 다크 모드인가?

- 야간 사용 시 눈의 피로 감소
- 배터리 절약 (OLED 디스플레이)
- 최신 트렌드에 맞는 디자인

## 구현 방법

React의 Context API와 styled-components의 ThemeProvider를 조합하면 간단하게 테마 전환을 구현할 수 있습니다.

```javascript
const theme = isDark ? darkTheme : lightTheme;
```

localStorage를 활용해 사용자의 테마 선택을 저장하면 다음 방문 시에도 유지됩니다.
