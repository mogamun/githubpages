---
title: ECS Philosophy (Entity Component System)
created: 2026-04-16
updated: 2026-04-16
tags: [concept, ecs, architecture, game-dev, data-oriented]
sources: [ecs-code-complexity.md]
status: stable
category: concepts
---

# ECS Philosophy (Entity Component System)

## Definition
코드 구조에서 **관계의 복잡도**를 원천 차단하는 아키텍처 철학. 시스템 간 직접 호출을 금지하고, 데이터를 독립된 컴포넌트로 분리하여 순차적 처리.

## Three Pillars

| 요소 | 역할 | 비유 |
|------|------|------|
| **Entity** | 식별자 (ID) | 컨베이어 벨트 위의 작업물 |
| **Component** | 순수 데이터 | 작업물에 붙은 속성 태그들 |
| **System** | 순수 로직 | 컨베이어 벨트의 각 작업대 |

## 핵심 규칙

1. **시스템은 다른 시스템을 호출할 수 없다** — 이것이 관계 복잡도를 원천 차단
2. **컴포넌트 타입에만 의존** — 상속 최소화, 계층 구조 단순화
3. **데이터와 로직의 분리** — 컴포넌트는 데이터만, 시스템은 로직만

## 왜 작동하는가

### OOP의 문제
```
Player.TakeDamage() → callback → GuardianLogic → callback → EventBus → ...
```
호출 체인이 폭발적으로 증가. "누가 이 함수를 부르는지 추적하는 시간이 코드를 읽는 시간보다 김"

### ECS의 해결
```
Tick:
  SkillValidationSystem()    // 검증만 하고 끝
  CooldownSystem()           // 쿨다운만 하고 끝
  TargetSelectionSystem()    // 대상 선정만 하고 끝
  DamageApplicationSystem()  // 데미지 적용만 하고 끝
```
각 시스템이 독립적으로 동작. 새 기능 = 새 시스템 추가. 기존 코드 수정 불필요.

### 콜백/이벤트와의 차이
| | 콜백/이벤트 | ECS |
|--|-----------|-----|
| 의존성 참조 | 끊어냄 | 없음 |
| 실행 흐름 | 콜백 체인 (여전히 복잡) | 순차 처리 (일직선) |
| 호출 스택 | 깊어짐 | 평면 |
| 추적 가능성 | 어려움 | 한눈에 파악 |

## 순수 ECS가 아니어도 적용 가능

MonoBehaviour 기반에서도:
```csharp
void Update() {
    ProcessInputSystem();
    MovementSystem();
    CombatSystem();
    AISystem();
    AnimationSystem();
}
```
시스템 역할 함수들을 순차 나열하는 것만으로도 관계 복잡도를 크게 줄임.

## 실용적 이점

1. **AI 코딩**: 깔끔한 구조를 제공하면 AI 생성 코드 품질 향상
2. **온보딩**: 틱 함수만 보면 전체 흐름 파악 가능
3. **유지보수**: 새 기능 = 새 시스템, 기존 코드 영향 없음
4. **버그 감소**: 시스템 간 꼬임이 원천 차단됨

## 관련 개념과의 연결

- [Essential vs Accidental Complexity](/wiki/concepts/essential-accidental-complexity/) — ECS가 해결하는 것은 우발적 복잡도
- [Data-Oriented Design](/wiki/concepts/data-oriented-design/) — ECS의 이론적 기반
- SOLID 원칙은 같은 문제를 권고로 접근, ECS는 구조로 강제

## See also
- [코드가 복잡해지는 진짜 이유](/wiki/concepts/0LLMWiki/wiki/sources/ecs-code-complexity/)
- [Compounding Artifact](/wiki/concepts/compounding-artifact/)
- [ECS vs 멀티에이전트 조정](/wiki/concepts/ecs-vs-multi-agent-coordination/) — 구조적 동형성 분석
- [구조가 곧 프롬프트다](/wiki/concepts/structure-as-implicit-prompt/) — 깔끔한 구조가 AI 생성 품질을 높이는 이유
