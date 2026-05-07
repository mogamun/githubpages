---
title: TDD 강제 (TDD Enforcement)
created: 2026-04-24
updated: 2026-04-24
tags: [concept, tdd, ai-agent, quality]
sources: [2026-04-24-heyjames-claude-code-frameworks.md]
status: stable
category: concepts
---

# TDD 강제 (TDD Enforcement)

## 정의
AI 코딩 에이전트가 테스트 없이 프로덕션 코드를 작성하지 못하도록 구조적으로 강제하는 패턴. 권장이 아닌 강제가 핵심.

## 핵심 원칙
- **Red-Green-Refactor 사이클 강제**: 실패하는 테스트 → 최소 코드로 통과 → 리팩토링
- **테스트 없는 코드 삭제**: 테스트 없이 먼저 작성된 코드는 자동 삭제 후 테스트부터 재작성
- **서브 에이전트 병렬 실행**: 각 태스크별 독립 에이전트로 구현
- **자동 코드 리뷰**: 계획 대비 구현 검증

## 적용 사례
- **Superpowers 프레임워크**: 7단계 중 4번째 단계에서 TDD 강제. chardet v7.0.0 재작성으로 41x 성능 향상 달성
- **이 위키의 "구조가 곧 프롬프트" 테제와 연결**: TDD 강제라는 구조적 제약이 프롬프트보다 더 강력한 품질 보장

## See also
- [superpowers](/wiki/entities/superpowers/)
- [verification-driven-development](/wiki/concepts/verification-driven-development/)
- [structure-as-implicit-prompt](/wiki/concepts/structure-as-implicit-prompt/)
