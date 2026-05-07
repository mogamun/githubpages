---
title: Essential vs Accidental Complexity
created: 2026-04-16
updated: 2026-04-29
tags: [concept, complexity, software-engineering, fred-brooks]
sources: [ecs-code-complexity.md, 2026-04-29-warp-terminal.md]
status: stable
category: concepts
---

# Essential vs Accidental Complexity (본질적 복잡도 vs 우발적 복잡도)

## Definition
소프트웨어 복잡도를 두 가지로 분리하는 프레임워크. Fred Brooks의 "No Silver Bullet" (1986)에서 유래.

### 본질적 복잡도 (Essential Complexity)
- **우리가 풀려는 문제 자체가 복잡한 것**
- 예: 전투 시스템, 상태 이펙트, 멀티플레이어 동기화
- **어쩔 수 없음** — 기능이 많고 도메인이 복잡하면 본질적으로 복잡
- 개선은 가능하지만 완전 제거는 불가

### 우발적 복잡도 (Accidental Complexity)
- **설계 방식에서 생겨난 복잡도**
- 기능들이 서로 엮이고 얽히면서 발생
- **제거 가능** — 이것이 ECS 등의 아키텍처가 공격하는 대상

## 진단 기준

> "코드를 읽는 것보다 함수를 누가 부르는지 추적하는 시간이 더 길다면, 그건 기능이 복잡한 게 아니라 **연결이 복잡한 것**이다."

이 현상이 나타나면 우발적 복잡도가 통제를 벗어난 것.

## ECS가 해결하는 것

ECS는 본질적 복잡도는 그대로 두고, **우발적 복잡도를 원천 차단**:
- 시스템 간 호출 금지 → 관계 복잡도 발생 불가
- 컴포넌트 타입에만 의존 → 상속 체인 복잡도 방지
- 순차적 처리 → 실행 흐름을 일직선으로 만듦

## SOLID와의 관계
- SOLID 원칙으로도 동일한 문제 해결 가능
- 하지만 SOLID는 **권고**이지 **제약**이 아님 → 하나씩 어기다 보면 눈덩이
- ECS는 문제를 **구조적으로 발생시키지 않음** — 강제력의 차이

## Broader Context
이 분석 프레임은 코드 리뷰, 아키텍처 결정, 기술 부채 평가에 모두 적용 가능:
- "이 복잡도가 본질적인가?" → YES: 기능을 단순화하거나 수용
- "이 복잡도가 우발적인가?" → YES: 아키텍처 개선으로 제거

## See also
- [ECS Philosophy](/wiki/concepts/ecs-philosophy/)
- [코드가 복잡해지는 진짜 이유](/wiki/concepts/0LLMWiki/wiki/sources/ecs-code-complexity/)
