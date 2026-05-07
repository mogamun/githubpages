---
title: Data-Oriented Design (DOD)
created: 2026-04-16
updated: 2026-04-16
tags: [concept, dod, architecture, performance, game-dev]
sources: [ecs-code-complexity.md]
status: stable
category: concepts
---

# Data-Oriented Design (DOD)

## Definition
데이터의 배치와 접근 패턴을 중심으로 소프트웨어를 설계하는 접근법. OOP의 객체 중심 설계와 대비되는 데이터 중심 설계.

## Core Principles

1. **데이터와 로직의 분리** — 데이터는 데이터만, 로직은 로직만
2. **메모리 친화적 배치** — 연관 데이터를 연속 메모리에 배치 (캐시 효율)
3. **구조 중심 사고** — "이 객체는 뭘 하는가?" → "이 데이터는 어떻게 변환되는가?"

## OOP vs DOD 비교

| 관점 | OOP | DOD |
|------|-----|-----|
| 기본 단위 | 객체 (Object) | 데이터 (Data) |
| 로직 위치 | 객체 내부 메서드 | 독립된 시스템/함수 |
| 관계 | 상속, 다형성 | 컴포지션, 쿼리 |
| 설계 질문 | "이 객체의 책임은?" | "이 데이터의 변환은?" |
| 복잡도 원인 | 객체 간 관계 | (관계를 최소화) |

## ECS와의 관계
ECS는 DOD를 구현하는 구체적인 아키텍처 패턴:
- Entity = 데이터의 식별자
- Component = 순수 데이터 구조체
- System = 데이터를 변환하는 순수 함수

## 성능 이점
- 캐시 적중률 향상 (데이터가 연속 배치)
- 병렬 처리 용이 (시스템 간 독립성)
- SIMD 최적화 가능 (동질 데이터 배열)

## 실용적 관점
영상에서 강조한 것처럼, DOD의 핵심 혜택은 성능만이 아님:
- **코드 가독성**: 실행 흐름이 일직선으로 표현됨
- **유지보수성**: 새 기능 = 새 시스템, 기존 수정 없음
- **AI 코딩 효율**: 깔끔한 구조가 AI의 코드 생성 품질을 높임

## See also
- [ECS Philosophy](/wiki/concepts/ecs-philosophy/)
- [Essential vs Accidental Complexity](/wiki/concepts/essential-accidental-complexity/)
