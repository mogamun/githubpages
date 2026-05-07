---
title: gstack
created: 2026-04-24
updated: 2026-04-24
tags: [entity, framework, claude-code, role-based]
sources: [2026-04-24-heyjames-claude-code-frameworks.md]
status: stable
category: entities
---

# gstack

## 정체
Garry Tan(Y Combinator CEO)이 개발한 Claude Code용 AI 코딩 프레임워크. 23개 역할 기반 리뷰 게이트가 핵심. 깃허브 스타 71K.

## 역할
- 단일 AI 에이전트에 23개 전문 역할을 번갈아 부여
- CEO, EM, Designer, QA, Security Officer 등 역할별 격리된 컨텍스트
- 실제 Playwright 브라우저 테스트 (QA 모드)
- OWASP Top 10 자동 감사 (Security Officer 모드)
- "Boil the lake" 원칙: 적게 하되 완벽하게

## 관련 프로젝트/맥락
- 개발자 Garry Tan: Y Combinator CEO, Palantir 초기 엔지니어, Posterous 창업 (Twitter 매각)
- 5개 제약 레이어: Role focus, Data flow, Quality control, Boil the lake, Simplicity
- 주요 슬래시 커맨드: /office-hours, /plan-ceo-review, /plan-eng-review, /review, /qa, /ship, /cso
- Claude Code, Codex CLI, OpenCode, Cursor, Factory Droid, Slate, Kiro 지원 (7개 에이전트)
- 설치: `git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup`
- 저장소: https://github.com/garrytan/gstack

## See also
- [claude-code](/wiki/entities/claude-code/)
- [superpowers](/wiki/entities/superpowers/)
- [gsd](/wiki/entities/gsd/)
- [hermes-agent](/wiki/entities/hermes-agent/)
- [role-based-ai-governance](/wiki/concepts/role-based-ai-governance/)
- [claude-code-framework-comparison](/wiki/comparisons/claude-code-framework-comparison/)
