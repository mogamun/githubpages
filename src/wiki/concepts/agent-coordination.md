---
title: Agent Coordination Patterns
created: 2026-04-16
updated: 2026-04-23
tags: [concept, multi-agent, coordination, delegation, security]
sources: [claude-code-game-studios.md]
status: stable
category: concepts
---

# Agent Coordination Patterns

## Definition
다수의 AI 에이전트가 협업할 때 사용하는 조정 메커니즘의 집합. Claude Code Game Studios에서 구현된 5가지 패턴을 중심으로 정리.

## Patterns

### 1. Vertical Delegation (수직 위임)
상위 에이전트가 하위 에이전트에게 작업을 위임.
- **흐름**: Director → Lead → Specialist
- **장점**: 명확한 책임 체계, 에스컬레이션 경로 명확
- **단점**: 병목 가능성, 과도한 위임 체인

### 2. Horizontal Consultation (수평 상담)
동일 티어의 에이전트 간 상담. 바인딩 결정은 불가.
- **용도**: 기술적 조언, 도메인 간 인터페이스 논의
- **제약**: 타 도메인에 대한 최종 결정권은 없음

### 3. Conflict Resolution (갈등 해결)
의견 불일치 시 공통 상위 에이전트로 에스컬레이션.
- **디자인 갈등**: creative-director가 판단
- **기술 갈등**: technical-director가 판단
- **일정 갈등**: producer가 판단

### 4. Change Propagation (변경 전파)
크로스 부서 변경 사항을 조정자가 관리.
- **담당**: producer
- **목적**: 한 부서의 변경이 다른 부서에 미치는 영향을 추적

### 5. Domain Boundaries (도메인 경계)
에이전트가 자신의 도메인 외부를 수정하지 않는 원칙.
- **예**: gameplay-programmer는 UI 코드를 직접 수정하지 않음
- **예외**: 명시적 위임이 있을 때만 가능

## Collaborative Protocol (Not Autonomous)

모든 에이전트가 따르는 필수 프로토콜:

```
1. Ask        → 사용자에게 먼저 질문
2. Present    → 2-4개 옵션을 장단점과 함께 제시
3. Decide     → 사용자가 항상 최종 결정
4. Draft      → 확정 전 초안을 보여줌
5. Approve    → 승인 없이는 아무것도 기록되지 않음
```

**핵심**: 자율(auto-pilot) 시스템이 아님. 에이전트는 구조와 전문성을 제공하지만, 사용자가 통제권을 유지.

## See also
- [Multi-Agent Hierarchy](/wiki/concepts/multi-agent-hierarchy/)
- [Claude Code Game Studios](/wiki/concepts/0LLMWiki/wiki/sources/claude-code-game-studios/)
- [ECS vs 멀티에이전트 조정](/wiki/concepts/ecs-vs-multi-agent-coordination/) — "도메인 경계" ≡ "시스템 간 호출 금지"
- [구조가 곧 프롬프트다](/wiki/concepts/structure-as-implicit-prompt/)
- [Shannon](/wiki/entities/shannon/) — 보안 테스트에서 오케스트레이터 기반 5단계 병렬 에이전트 조정
