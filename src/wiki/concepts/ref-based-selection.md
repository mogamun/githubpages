---
title: Ref 기반 요소 선택 (Ref-Based Element Selection)
created: 2026-04-28
updated: 2026-04-28
tags: [concept, browser-automation, ai-agent, context-optimization]
sources: [2026-04-28-agent-browser.md]
status: stable
category: concepts
---

# Ref 기반 요소 선택 (Ref-Based Element Selection)

## 정의
브라우저 자동화에서 CSS 선택자나 XPath 대신 접근성 트리의 참조(ref)를 사용하여 요소를 식별하고 상호작용하는 패턴. agent-browser가 도입.

## 핵심 원칙
- **결정론적**: ref는 snapshot에서 가리키는 정확한 요소를 가리킴
- **빠름**: DOM 재조회 불필요
- **AI 친화적**: snapshot + ref 워크플로우가 LLM에게 최적

## 작동 방식
1. `snapshot` 명령으로 접근성 트리 + ref 생성
   ```
   - heading "Example Domain" [ref=e1] [level=1]
   - button "Submit" [ref=e2]
   - textbox "Email" [ref=e3]
   ```
2. ref로 상호작용: `click @e2`, `fill @e3 "test@example.com"`

## 적용 사례
- **agent-browser**: Playwright MCP의 CSS 선택자 방식 대비 82% 적은 컨텍스트로 동등한 자동화 수행. ref 기반이 AI에게 더 효율적인 요소 식별 방법임을 실증.

## 이 위키와의 연결
"간결성=정확성" 트레이드오프의 실례. CSS 선택자보다 간결한 ref가 더 정확한 요소 식별을 제공. 컨텍스트 로트 방지에 직접 기여.

## See also
- [agent-browser](/wiki/entities/agent-browser/)
- [간결성-정확성 트레이드오프](/wiki/concepts/brevity-accuracy-tradeoff/)
- [컨텍스트 로트 방지](/wiki/concepts/context-rot-prevention/)
- [클라이언트-데몬 아키텍처](/wiki/concepts/client-daemon-architecture/)
