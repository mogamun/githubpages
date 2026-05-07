---
title: 코드가 복잡해지는 진짜 이유, 범인은 관계다
created: 2026-04-16
updated: 2026-04-16
tags: [ecs, complexity, oop, game-dev, architecture, korean]
sources: [ecs-code-complexity.md]
status: stable
category: sources
---

# 코드가 복잡해지는 진짜 이유, 범인은 관계다

## One-line Summary
코드 복잡도의 진짜 원인은 기능이 아니라 **관계**다. ECS 철학은 시스템 간 호출을 원천 차단하여 관계 복잡도를 제거한다.

## Source
- **유형**: YouTube 영상
- **채널**: [Array's DevBook](https://www.youtube.com/@arraysdevbook)
- **게시**: 2026-04-15
- **길이**: 15:16
- **원문**: [YouTube](https://www.youtube.com/watch?v=NSkk3wkZINg)

## Key Takeaways

### 1. 두 가지 복잡도
- **본질적 복잡도 (Essential)**: 문제 자체가 복잡한 것 (전투 시스템, 상태 이펙트, 멀티 동기). 어쩔 수 없음.
- **우발적 복잡도 (Accidental)**: 설계 방식에서 생겨난 복잡도. 기능들이 서로 엮이고 얽히면서 발생. **제거 가능.**

### 2. 근본 원인: 데이터와 로직의 결합
- 컨트롤러가 HP를 들고, 데미지 처리도 하고, 사망 판정도 하고, UI 업데이트도 트리거
- 데이터를 가진 객체가 로직도 직접 실행 → 그 로직이 또 다른 객체의 로직을 호출 → 호출 체인 폭발
- "팀에서 가장 용감한 닌자 코더만이 감히 들어갈 수 있는 5,000줄짜리 쓰레기장 소스"

### 3. 콜백/이벤트는 근본 해결책이 아님
- 의존성 참조는 끊어내지만, **실행 흐름 관점**에서는 동일한 문제
- 직접 호출 대신 콜백 체인으로 연결되었을 뿐, 호출 스택은 그대로 쌓임

### 4. ECS의 해결책: "무식하게" 단순하게
- 큐에 담거나 단순히 값만 놓고, 시스템에서 읽어서 처리
- **직접 호출이 없음** → 실행 흐름이 복잡해지지 않음

### 5. 핵심 규칙 2가지
1. **시스템은 다른 시스템을 호출할 수 없다** → 로직 꼬임 원천 차단
2. **컴포넌트 타입에만 의존** → 상속 최소화, 계층 구조 단순화

### 6. 컨베이어 벨트 비유
- 데이터가 시스템들을 순차적으로 통과하는 공장 라인
- 각 시스템은 독립적으로 필요한 데이터만 읽어서 처리

### 7. 실용적 적용
- 순수 ECS가 아니어도 철학 적용 가능
- MonoBehaviour Update 함수 안에 시스템 역할 함수들을 순차 나열하는 것만으로도 큰 효과
- 새로운 기능 = 새로운 시스템 추가. 기존 코드 수정 불필요.

### 8. 파급 효과
- **AI 코딩**: 한눈에 보이는 구조를 AI에게 제공하면 더 나은 코드 생성
- **팀 온보딩**: "NPC 도메인 담당해. 틱 안에 있는 시스템들 쭉 봐." → 한눈에 이해
- **SOLID와의 관계**: SOLID로 해결 가능하지만, 제약이 아닌 권고라 어기기 쉬움. ECS는 문제 자체를 발생시키지 않는 구조

## Important Quotes

> "코드를 읽는 것보다 함수를 누가 부르는지 추적하는 시간이 더 길다면, 그건 기능이 복잡한 게 아니라 연결이 복잡한 것이다."

> "ECS에서는 무식하게 큐에 담아놓거나 단순히 값만 놓고 시스템에서 읽어서 그대로 적용한다. 무식한 방법일 수 있지만 실행 흐름 복잡도를 획기적으로 개선한다."

## See also
- [ECS Philosophy](/wiki/sources/ecs-philosophy/)
- [Essential vs Accidental Complexity](/wiki/sources/essential-accidental-complexity/)
- [Data-Oriented Design](/wiki/sources/data-oriented-design/)
