---
title: OpenClaw vs Hermes Agent
created: 2026-04-29
updated: 2026-05-06
tags: [comparison, ai-agent, openclaw, hermes-agent, real-world-usage]
sources: [2026-04-29-zerocho-openclaw-vs-hermes.md, 2026-05-04-hermes-agent-review-beomsu.md, 2026-05-06-hermes-agent-github-update.md]
status: stable
category: comparisons
---

# OpenClaw vs Hermes Agent

## 공통점
- 둘 다 서버에 설치하여 메신저(Telegram 등)로 대화하며 작업 시킬 수 있는 AI 에이전트
- 파일, 터미널, 브라우저 작업 가능
- 다양한 모델 지원 (GPT, Claude, DeepSeek, MiniMax 등)
- MIT 오픈소스

## 차이점

| 구분 | OpenClaw | Hermes Agent |
|------|----------|-------------|
| **방향성** | 개인 비서 | AI 직원 (개발자 지향) |
| **학습** | 수동 설정 필요 | 자동 스킬 생성 (학습 루프) |
| **메모리** | 세션 기반, ACP 통합 | Mem0 장기 기억, Honcho 사용자 모델링 |
| **인터럽트** | 순차 큐 처리 | 실행 중 작업에 새 지시 병합 |
| **Telegram** | 토픽 라우팅 우수, 다중 봇 자연스러움 | 토픽 라우팅 미흡, 다중 봇 충돌 |
| **Discord** | 하나씩 다 해야 하는 느낌 | 스킬 호출 시 스레드 자동 생성, 승인 버튼 UI |
| **개발 속도** | 안정적 | 2주 단위 릴리즈, v0.12.0에서 213명 기여자 |
| **CLI** | — | Ink 기반 TUI (React/Ink + JSON-RPC 백엔드) |
| **마이그레이션** | — | `hermes claw migrate` 있으나 불완전 |
| **기억의 가치** | 쌓인 맥락이 전환 장벽 | 스킬로 체계적 축적 |
| **철학** | 범용 비서 | 컴파운드 엔지니어링 (경험→스킬→개선) |

## 선택 기준

### OpenClaw 선택
- 일상 비서 업무가 주 목적
- Telegram 토픽 기반 업무 분리가 중요
- 이미 쌓인 맥락과 자동화가 있음
- 비개발자도 사용 가능한 UI 필요

### Hermes Agent 선택
- 반복 작업을 스킬로 자동화하고 싶음
- 장기 기억(Mem0) 기반 작업 축적이 필요
- 실행 중 작업에 실시간 지시 수정이 잦음
- 개발자 수준의 설정이 가능함

### 둘 다 사용 (권장)
- 제로초의 실전 결론: **역할 분담**
- OpenClaw: 일상 비서, 텔레그램 자동화, 기존 맥락 활용 작업
- Hermes: 스킬 축적 작업, 개발 실무, 세션 검색, Mem0 기반 장기 기억

## 핵심 통찰
> "어떻게 보면 유전자가 다르다고 할 수 있겠죠. 오픈 클로는 아무리 헤르메스 따라가려고 해도 동일하게 세팅을 했을 때 헤르메스보다 장기 기억을 잘하거나 스킬을 잘 만들거나 그러지는 못하는 거 같아요." — 제로초

"태어날 때의 목적"이 다른 두 에이전트는 설정으로 상호 대체 불가능. 각자의 강점에 맞춘 역할 분담이 최적.

## See also
- [제로초 비교 영상 소스](/wiki/sources/zerocho-openclaw-vs-hermes/)
- [고범수 Hermes Agent 리뷰](/wiki/sources/hermes-agent-review-beomsu/) — 독스 기반 기술 심층 분석
- [OpenClaw](/wiki/entities/openclaw/)
- [Hermes Agent](/wiki/entities/hermes-agent/)
- [제로초](/wiki/entities/zerocho/)
- [고범수](/wiki/entities/beomsu-koh/)
- [Compounding Artifact](/wiki/concepts/compounding-artifact/)
- [Closed Learning Loop](/wiki/concepts/closed-learning-loop/)
- [Claude Code 프레임워크 비교](/wiki/comparisons/claude-code-framework-comparison/)
