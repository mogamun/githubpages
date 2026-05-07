---
title: Superpowers vs GSD vs gstack 비교, Claude 코딩 프레임워크 3종 선택 가이드
created: 2026-04-24
updated: 2026-04-24
tags: [source, claude-code, framework, comparison]
sources: [2026-04-24-heyjames-claude-code-frameworks.md]
status: stable
category: sources
---

# Superpowers vs GSD vs gstack 비교, Claude 코딩 프레임워크 3종 선택 가이드

## 개요
헤이제임스 채널에서 Claude Code 기반 AI 코딩 프레임워크 3종(Superpowers, GSD, gstack)을 비교 분석한 영상. 각 프레임워크가 푸는 문제의 층이 다름을 강조하며, 상황별 선택 가이드와 세 개를 레이어로 쌓아 쓰는 방법까지 제시.

## 핵심 내용

### 세 프레임워크의 문제 영역
- **Superpowers**: "어떻게 일할 것인가" — 실행 프로세스 품질 제약 (TDD 강제)
- **GSD**: "어디서 일할 것인가" — 작업 환경 품질 제약 (컨텍스트 격리)
- **gstack**: "무엇을 할 것인가" — 결정과 관점 품질 제약 (역할 기반 리뷰 게이트)

### Superpowers (Jesse Vincent, 149K stars)
- 7단계 워크플로우 강제: 브레인스토밍 → 스펙 → 플래닝 → TDD → 서브에이전트 → 리뷰 → 파이널라이즈
- 테스트 없이 짠 코드는 삭제 후 재작성 강제
- chardet v7.0.0 재작성으로 41x 성능 향상 달성 사례
- 설치: `/plugin install superpowers@claude-plugins-official`

### GSD (Lex Christopherson, 51K stars)
- 컨텍스트 로트 해결: 0~30% 최상, 50%+ 품질 저하, 70%+ 환각
- Plan/Execute/Review 3단계, 각각 새 서브 에이전트에 20만 토큰 깨끗한 컨텍스트
- 결과물은 디스크에 저장하여 다음 단계로 전달
- 아마존, 구글, 쇼피파이, 웹플로우 엔지니어 사용 인증
- 설치: `npx get-shit-done-cc@latest`

### gstack (Garry Tan, 71K stars)
- 23개 역할 기반 리뷰 게이트: CEO, EM, Designer, QA, Security Officer 등
- 각 역할은 필요한 컨텍스트만 수신 (역할 격리)
- OWASP Top 10 자동 감사, 실제 Playwright 브라우저 테스트
- "Boil the lake" 원칙: 적게 하되 완벽하게
- 설치: `git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup`

### 레이어 구조 (세 개 함께 쓰기)
1. **최상층 gstack**: 의사결정 레이어 — 무엇을 만들지 결정
2. **중간 GSD**: 컨텍스트 레이어 — 장기 세션 동안 플랜 유지
3. **최하층 Superpowers**: 실행 레이어 — TDD로 코드 작성

### 주의사항
- gstack 스킬 전체 활성화 시 실행당 만 토큰 이상 소모 → 코어 스킬만 켜기
- Superpowers 인터랙티브 프롬프트가 GSD 컨텍스트 격리와 충돌 가능
- 작은 작업에 모든 프레임워크 적용 금지 (오버엔지니어링)

### 시작 추천
Superpowers 2주 사용 → 불편한 지점 파악 → GSD/gstack 추가

## 원문 인용
> "슈퍼파워즈는 어떻게 일할 것인가? GSD는 어디서 일할 것인가? 지스택은 무엇을 할 것인가? 같은 문제를 푼 게 아니라 서로 다른 층에 있다는 게 핵심이에요."

> "컨텍스트 사용량이 0에서 30%일 때는 최상의 품질이 나오는데 50%를 넘어가면 쫓기듯이 짜기 시작하고 70%를 넘기면 환각을 일으키면서 요구 사항을 까먹는다"

## See also
- [claude-code](/wiki/entities/claude-code/)
- [heyjames](/wiki/entities/heyjames/)
- [superpowers](/wiki/entities/superpowers/)
- [gsd](/wiki/entities/gsd/)
- [gstack](/wiki/entities/gstack/)
- [claude-code-framework-comparison](/wiki/comparisons/claude-code-framework-comparison/)
- [context-rot-prevention](/wiki/concepts/context-rot-prevention/)
- [tdd-enforcement](/wiki/concepts/tdd-enforcement/)
- [role-based-ai-governance](/wiki/concepts/role-based-ai-governance/)
