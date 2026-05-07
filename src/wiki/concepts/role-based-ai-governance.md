---
title: 역할 기반 AI 거버넌스 (Role-Based AI Governance)
created: 2026-04-24
updated: 2026-04-24
tags: [concept, ai-agent, governance, multi-agent]
sources: [2026-04-24-heyjames-claude-code-frameworks.md]
status: stable
category: concepts
---

# 역할 기반 AI 거버넌스 (Role-Based AI Governance)

## 정의
단일 AI 에이전트에 여러 전문 역할을 번갈아 부여하고, 각 역할에 격리된 컨텍스트만 제공하여 판단 오류를 방지하는 패턴.

## 핵심 원칙
- **역할 격리**: 엔지니어는 제품 로드맵을 못 보고, QA는 구현 디테일을 못 봄
- **필요 컨텍스트만 제공**: 각 역할이 자기 업무에만 집중
- **리뷰 게이트**: 역할 전환 시 품질 검증 통과 필수
- **"Boil the lake" 원칙**: 모든 걸 mediocre하게 하지 말고, 할 수 있는 것만 완벽하게

## 적용 사례
- **gstack**: 23개 역할 (CEO, EM, Designer, QA, Security Officer 등). Garry Tan이 Y Combinator CEO로서의 실무 경험을 반영
- **이 위키의 멀티에이전트 계층과 연결**: 역할 기반 거버넌스는 계층 구조의 대안적 접근. 한 에이전트에 다양한 관점을 주입

## See also
- [gstack](/wiki/entities/gstack/)
- [multi-agent-hierarchy](/wiki/concepts/multi-agent-hierarchy/)
- [agent-coordination](/wiki/concepts/agent-coordination/)
- [ecs-philosophy](/wiki/concepts/ecs-philosophy/)
