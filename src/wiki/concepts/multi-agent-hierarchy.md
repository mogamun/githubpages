---
title: Multi-Agent Hierarchy
created: 2026-04-16
updated: 2026-04-23
tags: [concept, multi-agent, hierarchy, game-dev, security]
sources: [claude-code-game-studios.md]
status: stable
category: concepts
---

# Multi-Agent Hierarchy

## Definition
다수의 전문화된 AI 에이전트를 계층적으로 조직화하여 실제 조직 구조를 모방하는 패턴. Claude Code Game Studios에서 3티어 구조로 구현됨.

## Three-Tier Model

```
Tier 1 — Directors (최고 품질 모델, e.g. Opus)
  비전 수호, 크로스 도메인 결정, 에스컬레이션 최종 판단

Tier 2 — Department Leads (중간 모델, e.g. Sonnet)
  도메인 소유권, 품질 게이트, 부서 내 조정

Tier 3 — Specialists (효율적 모델, e.g. Sonnet/Haiku)
  실무 수행, 세부 구현, 도메인 내 전문 작업
```

## Key Principles

1. **Vertical delegation** — 상위에서 하위로 명령 흐름
2. **Horizontal consultation** — 동일 티어 간 상담은 가능하나 타 도메인 결정권은 없음
3. **Conflict resolution** — 공통 상위 에이전트로 에스컬레이션
4. **Domain boundaries** — 명시적 위임 없이 타 도메인 침범 금지
5. **Change propagation** — 크로스 부서 변경은 조정자(producer)가 관리

## Cost-Quality Tradeoff
각 티어에 다른 모델 품질을 배정함으로써 비용과 품질의 균형을 달성:
- Directors: 복잡한 판단, 비전 수호 → 고성능 모델
- Leads: 도메인 전문성, 조정 → 중간 모델
- Specialists: 반복적 실무 → 효율적 모델

## Broader Applicability
게임 개발 외에도 적용 가능:
- 소프트웨어 개발 스튜디오 (CTO → Tech Leads → Developers)
- 콘텐츠 제작팀 (편집장 → 섹션 에디터 → 작가)
- 연구팀 (수석 연구원 → 주임 연구원 → 연구 보조)
- **보안 테스트 (Shannon)**: Orchestrator → 5개 OWASP 카테고리별 병렬 에이전트 (Injection, XSS, SSRF, Auth, Authz) → Exploit 에이전트

## See also
- [Claude Code Game Studios](/wiki/concepts/0LLMWiki/wiki/sources/claude-code-game-studios/)
- [Agent Coordination](/wiki/concepts/agent-coordination/)
- [Shannon](/wiki/entities/shannon/) — 보안 테스트에서의 멀티에이전트 파이프라인 실례
