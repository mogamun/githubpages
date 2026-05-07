---
title: 구조가 곧 프롬프트다 (Structure as Implicit Prompt)
created: 2026-04-16
updated: 2026-04-22
tags: [synthesis, ai-coding, architecture, ecs, multi-agent]
sources: [ecs-code-complexity.md, claude-code-game-studios.md, 2026-04-22-caveman-token-reduction.md, 2026-04-23-ttj-vibe-coding-cheatkey-15.md]
status: stable
category: synthesis
---

# 구조가 곧 프롬프트다

> **Thesis**: 코드의 구조 자체가 AI에게 주어지는 암묵적 프롬프트다. 깔끔한 구조는 곧 좋은 프롬프트이며, 꼬인 구조는 곧 나쁜 프롬프트다. 같은 AI라도 구조에 따라 생성 코드의 품질이 극적으로 달라진다.

## 독립적 수렴: 두 소스가 같은 결론에 도달

이 통찰은 서로 다른 맥락에서 서로 다른 사람이 독립적으로 도달한 같은 결론이다.

### 소스 1: Array's DevBook (ECS 영상)
> "한눈에 보이는 구조를 AI에게 제공하면, AI가 더 나은 코드를 생성한다. 꼬인 구조 vs 깔끔한 구조 — 같은 AI라도 결과 품질이 다르다."

맥락: ECS 철학을 적용하여 Update 함수 안에 시스템들을 순차 나열하면, AI가 전체 흐름을 한눈에 파악하고 더 정확한 코드를 생성.

### 소스 2: Claude Code Game Studios
> 49개 에이전트에 path-scoped rules, hooks, templates를 제공하는 것 = AI에게 작업의 올바른 구조를 주입하는 것.

맥락: 에이전트의 행동을 구조화된 규칙으로 제약하면, AI가 자율적으로 실수하는 것을 원천 차단. 구조가 품질을 보장.

## 왜 구조가 프롬프트인가

### LLM의 작동 방식과의 연결

LLM은 **컨텍스트 윈도우 안의 모든 것**을 조건으로 삼아 출력을 생성한다. 이 말은:

1. **코드 구조 = 컨텍스트 = 프롬프트의 일부**
2. 꼬인 의존성, 깊은 상속 체인, 콜백 지옥 = AI에게 "이런 식으로 작성해도 된다"는 암묵적 허가
3. 깔끔한 순차 구조, 명확한 도메인 분리 = AI에게 "이 패턴을 따르라"는 암묵적 지시

### 구체적 메커니즘

| 구조적 특성 | AI에 미치는 영향 |
|-------------|-----------------|
| 시스템 간 호출 없음 (ECS) | AI도 새 시스템을 기존 것과 엮지 않음 |
| Path-scoped rules | AI가 해당 경로의 규칙을 자동으로 준수 |
| 명확한 도메인 경계 | AI가 타 도메인을 침범하지 않음 |
| 순차 나열된 함수들 | AI가 같은 패턴으로 새 함수를 추가 |
| 템플릿/스키마 | AI가 정해진 형식을 따름 |

## 더 넓은 시사점

### 1. "AI 코딩 시대의 아키텍처"는 다른 의미를 갖는다
- 과거: 아키텍처는 **인간 개발자**를 위한 것 (가독성, 유지보수성)
- 현재: 아키텍처는 **AI + 인간** 모두를 위한 것 (AI의 출력 품질까지 좌우)
- 따라서: 아키텍처 결정이 곧 AI 성능 결정

### 2. "구조적 강제"가 "프롬프트 엔지니어링"보다 강력하다
- 프롬프트로 "SOLID를 지켜"라고 해도, 코드베이스가 이미 꼬여 있으면 AI는 기존 패턴을 따름
- 반면 구조 자체가 SOLID를 강제하면 (ECS, hooks, rules), 프롬프트 없이도 AI가 올바른 코드 생성
- **ECS 영상의 통찰**: "SOLID는 권고라 어기기 쉽지만, ECS는 문제 자체를 발생시키지 않는 구조" → 이것이 AI에게도 적용됨

### 3. Harness Engineering의 부상
- ECS 영상에서 언급: "AI 하네스 엔지니어링의 부상"
- Game Studios가 구현한 것: hooks, rules, path-scoped standards = AI의 **하네스(harness)**
- 하네스 = AI가 달릴 수 있는 궤도. 궤도가 좋으면 AI가 빠르고 안전하게 달림

## 실천적 가이드

코드 구조를 "암묵적 프롬프트"로 설계하는 방법:

1. **패턴의 가시성**: Update/Tick 함수 안에 시스템들을 명시적으로 나열 → AI가 패턴을 인식
2. **도메인 격리**: 파일/디렉토리로 도메인을 물리적 분리 → AI가 경계를 인식
3. **규칙의 자동화**: hooks/linters로 규칙 강제 → AI가 위반하면 즉시 피드백
4. **템플릿 제공**: 정해진 형식의 문서/코드 템플릿 → AI가 형식을 따름
5. **새 기능의 추가 방식**: "기존 코드 수정 없이 새 모듈 추가" 패턴 → AI가 기존 코드를 건드리지 않음

## 검증 가능한 가설

이 가설은 다음으로 검증할 수 있다:
1. 동일한 기능 요구사항을 꼬인 코드베이스 vs 깔끔한 코드베이스에서 AI에게 구현시킴
2. 결과의 정확도, 버그 발생률, 아키텍처 일관성을 비교
3. ECS 철학 적용 전후의 AI 생성 코드 품질을 정량 측정

## 반론 고려

- "그냥 프롬프트를 더 길게 쓰면 되지 않나?" → 컨텍스트 윈도우 한계, 프롬프트는 휘발성, 구조는 영속성
- "AI가 충분히 똑똑하면 구조 상관없지 않나?" → 현재 AI는 컨텍스트에 강하게 의존. 구조 독립적이려면 더 큰 모델/더 긴 컨텍스트 필요
- "과도한 제약이 창의성을 해치지 않나?" → 구조는 형식을 제약하지만 내용을 제약하지 않음. 건축의 뼈대와 같음

## See also
- [ECS Philosophy](/wiki/concepts/ecs-philosophy/)
- [Agent Coordination](/wiki/concepts/agent-coordination/)
- [Essential vs Accidental Complexity](/wiki/concepts/essential-accidental-complexity/)
- [간결성-정확성 트레이드오프](/wiki/concepts/brevity-accuracy-tradeoff/) — 간결 강제도 일종의 구조적 제약
- [바이브코딩 치트키 15](/wiki/concepts/vibe-coding-cheatkey/) — CLAUDE.md, PRD, 프롬프트 체이닝 = 구조적 프롬프트
- [Claude Code Game Studios](/wiki/sources/claude-code-game-studios/) — hooks, rules as AI harness
- [코드가 복잡해지는 진짜 이유](/wiki/sources/ecs-code-complexity/) — AI 코딩과 구조의 관계
