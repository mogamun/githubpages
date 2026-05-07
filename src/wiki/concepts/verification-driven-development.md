---
title: Verification-Driven Development
created: 2026-04-16
updated: 2026-04-23
tags: [concept, testing, methodology, game-dev, security]
sources: [claude-code-game-studios.md]
status: stable
category: concepts
---

# Verification-Driven Development (VDD)

## Definition
테스트를 먼저 작성하고 그 다음에 구현하는 개발 방법론. Claude Code Game Studios의 핵심 설계 철학 중 하나.

## Core Principle

> Tests first, then implementation.

구현에 앞서 검증 기준을 명확히 정의함으로써:
1. **요구사항 명확화** — 코드를 짜기 전에 "완료"의 정의를 합의
2. **회귀 방지** — 변경 시 기존 기능이 망가지는 것을 자동 감지
3. **문서화 효과** — 테스트가 살아있는 명세가 됨

## Relation to Other Methodologies

| Methodology | Order | VDD와의 관계 |
|-------------|-------|-------------|
| TDD (Test-Driven Development) | Red → Green → Refactor | VDD의 원조, 단위 테스트에 집중 |
| BDD (Behavior-Driven Development) | 행위 명세 → 구현 | VDD와 유사, 비즈니스 행위에 집중 |
| VDD | 검증 기준 → 구현 | 게임 개발 맥락에 특화 |

## In Game Development Context

게임 개발에서 VDD가 특히 강력한 이유:
- **게임플레이 값**의 변경이 시스템 전체에 미치는 영향을 자동 검증
- **path-scoped rules**과 결합: `tests/**` 경로에 명명/커버리지/픽스처 패턴 강제
- **CI/CD hooks**: 커밋 시 자동으로 테스트 검증 (validate-commit.sh)

## In Security Testing Context

Shannon의 "No Exploit, No Report" 원칙은 VDD의 보안 테스트 적용:
- **검증 = 실제 익스플로잇**: 취약점 가설이 실제 공격으로 증명되어야만 보고
- **위양성 제거**: 테스트(익스플로잇)가 실패하면 결과(취약점)를 보고하지 않음
- **재현 가능한 PoC**: 테스트 자체가 결과물 — 복사-붙여넣기로 재현 가능

## See also
- [Claude Code Game Studios](/wiki/concepts/0LLMWiki/wiki/sources/claude-code-game-studios/)
- [Shannon](/wiki/entities/shannon/) — "No Exploit, No Report" = VDD의 보안 테스트 적용
