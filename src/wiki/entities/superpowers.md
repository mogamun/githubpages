---
title: Superpowers
created: 2026-04-24
updated: 2026-04-24
tags: [entity, framework, claude-code, tdd]
sources: [2026-04-24-heyjames-claude-code-frameworks.md]
status: stable
category: entities
---

# Superpowers

## 정체
Jesse Vincent가 개발한 Claude Code용 AI 코딩 프레임워크. TDD(테스트 주도 개발)를 강제하는 7단계 워크플로우가 핵심. 깃허브 스타 149K.

## 역할
- AI 코딩 에이전트에 시니어 개발자의 작업 방식 이식
- 7단계 프로세스 강제: 브레인스토밍 → 스펙 → 플래닝 → TDD → 서브에이전트 → 리뷰 → 파이널라이즈
- Red-Green-Refactor 사이클 강제 (테스트 없는 코드는 삭제 후 재작성)
- 서브 에이전트 병렬 실행 + 자동 코드 리뷰
- Visual Companion으로 설계 결정 시각화

## 관련 프로젝트/맥락
- chardet v7.0.0: Superpowers로 재작성, 41x 성능 향상 달성
- Anthropic 공식 마켓플레이스 배포
- Claude Code, Cursor, Codex, OpenCode, GitHub Copilot CLI, Gemini CLI 지원 (6개 에이전트)
- 개발자 Jesse Vincent: Perl 커뮤니티 레전드, Keyboardio 공동 창업자
- 설치: `/plugin install superpowers@claude-plugins-official`
- 저장소: https://github.com/obra/superpowers

## See also
- [claude-code](/wiki/entities/claude-code/)
- [gsd](/wiki/entities/gsd/)
- [gstack](/wiki/entities/gstack/)
- [hermes-agent](/wiki/entities/hermes-agent/)
- [heyjames](/wiki/entities/heyjames/)
- [tdd-enforcement](/wiki/concepts/tdd-enforcement/)
- [claude-code-framework-comparison](/wiki/comparisons/claude-code-framework-comparison/)
