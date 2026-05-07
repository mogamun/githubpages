---
title: Claude Code Game Studios
created: 2026-04-16
updated: 2026-04-16
tags: [claude-code, game-dev, multi-agent, template, github, studio-structure]
sources: [claude-code-game-studios.md]
status: stable
category: sources
---

# Claude Code Game Studios

## One-line Summary
Claude Code를 완전한 게임 개발 스튜디오로 변환하는 템플릿. 49개 전문 에이전트, 72개 워크플로우 스킬, 실제 스튜디오 계층 구조를 미러링하는 조정 시스템.

## Key Takeaways

1. **문제 인식**: AI로 게임을 혼자 만들 때 구조가 없음 — 매직 넘버 하드코딩, 디자인 문서 스킵, 스파게티 코드 등을 막아주는 사람이 없음
2. **해결책**: 하나의 Claude Code 세션에 실제 스튜디오 구조를 부여 — 비전을 지키는 디렉터, 도메인을 소유하는 부서장, 실무를 담당하는 스페셜리스트
3. **협업 프로토콜**: 자율적이지 않음. Ask → Present options → User decides → Draft → Approve
4. **3티어 계층**: Directors (Opus) → Department Leads (Sonnet) → Specialists (Sonnet/Haiku)
5. **안전 자동화**: 12개 hooks가 커밋/푸시/에셋/세션 단계에서 자동 검증

## Scale

| Category | Count |
|----------|-------|
| Agents | 49 |
| Skills (slash commands) | 72 |
| Hooks | 12 |
| Rules | 11 |
| Templates | 39 |

## Agent Hierarchy

```
Tier 1 — Directors (Opus)
  creative-director, technical-director, producer

Tier 2 — Department Leads (Sonnet)
  game-designer, lead-programmer, art-director,
  audio-director, narrative-director, qa-lead,
  release-manager, localization-lead

Tier 3 — Specialists (Sonnet/Haiku)
  gameplay-programmer, engine-programmer, ai-programmer,
  network-programmer, tools-programmer, ui-programmer,
  systems-designer, level-designer, economy-designer,
  technical-artist, sound-designer, writer, world-builder,
  ux-designer, prototyper, performance-analyst,
  devops-engineer, analytics-engineer, security-engineer,
  qa-tester, accessibility-specialist, live-ops-designer,
  community-manager
```

## Engine Support

| Engine | Lead Agent | Sub-Specialists |
|--------|-----------|----------------|
| Godot 4 | godot-specialist | GDScript, Shaders, GDExtension |
| Unity | unity-specialist | DOTS/ECS, Shaders/VFX, Addressables, UI Toolkit |
| Unreal Engine 5 | unreal-specialist | GAS, Blueprints, Replication, UMG/CommonUI |

## Coordination Model

1. **Vertical delegation** — 디렉터 → 리드 → 스페셜리스트
2. **Horizontal consultation** — 동일 티어 간 상담은 가능하나, 타 도메인 바인딩 결정은 불가
3. **Conflict resolution** — 공통 상위 에이전트로 에스컬레이션
4. **Change propagation** — 크로스 부서 변경은 producer가 조정
5. **Domain boundaries** — 위임 없이 타 도메인 파일 수정 불가

## Hook System

| Hook | Trigger | Purpose |
|------|---------|---------|
| validate-commit.sh | PreToolUse (Bash) | 하드코딩 값, TODO 포맷, JSON 유효성 검사 |
| validate-push.sh | PreToolUse (Bash) | 보호 브랜치 푸시 경고 |
| validate-assets.sh | PostToolUse (Write/Edit) | 에셋 명명 규칙 검증 |
| session-start.sh | Session open | 현재 브랜치/최근 커밋 표시 |
| detect-gaps.sh | Session open | 신규 프로젝트 감지, 누락 디자인 문서 탐지 |
| pre-compact.sh | Before compaction | 세션 진행 상태 보존 |
| post-compact.sh | After compaction | 세션 상태 복원 알림 |
| log-agent.sh | Agent spawned | 서브에이전트 감사 추적 시작 |
| log-agent-stop.sh | Agent stops | 서브에이전트 감사 추적 종료 |
| notify.sh | Notification event | Windows 토스트 알림 표시 |
| session-stop.sh | Session close | active.md 아카이브, git 활동 기록 |
| validate-skill-change.sh | PostToolUse (Write/Edit) | 스킬 변경 후 /skill-test 실행 권고 |

## Path-Scoped Rules

| Path | Enforces |
|------|----------|
| src/gameplay/** | 데이터 기반 값, delta time, UI 참조 금지 |
| src/core/** | hot path 제로 할당, 스레드 안전성 |
| src/ai/** | 퍼포먼스 예산, 디버그 가능성 |
| src/networking/** | 서버 권위적, 버전 메시지 |
| src/ui/** | 게임 상태 소유 금지, 로컬라이제이션 준비 |
| design/gdd/** | 필수 8섹션, 수식 포맷 |
| tests/** | 테스트 명명, 커버리지 요구사항 |
| prototypes/** | 완화된 기준, README 필수 |

## Design Philosophy

- **MDA Framework** — Mechanics, Dynamics, Aesthetics
- **Self-Determination Theory** — Autonomy, Competence, Relatedness
- **Flow State Design** — Challenge-skill balance
- **Bartle Player Types** — Audience targeting
- **Verification-Driven Development** — Tests first

## Customization

- 에이전트 추가/제거, 프롬프트 편집
- 스킬 수정, 룰 추가, 훅 튜닝
- 엔진 선택 (Godot / Unity / Unreal / None)
- 리뷰 강도: `full` / `lean` / `solo`

## Key Skills

**Onboarding**: /start, /help, /project-stage-detect, /setup-engine
**Design**: /brainstorm, /design-system, /create-epics, /create-stories
**Development**: /dev-story, /architecture-decision, /code-review
**QA**: /qa-plan, /smoke-check, /regression-suite
**Production**: /sprint-plan, /milestone-review, /bug-triage
**Release**: /release-checklist, /launch-checklist, /patch-notes
**Team**: /team-combat, /team-narrative, /team-ui, /team-release, /team-polish

## Open Questions

- 실제 게임 프로젝트에 적용했을 때 에이전트 간 커뮤니케이션 오버헤드는?
- 49 에이전트가 컨텍스트 윈도우에 미치는 영향
- 소규모 프로젝트에서 어느 정도 서브셋이 실용적인가?

## See also

- [Multi-Agent Hierarchy](/wiki/sources/multi-agent-hierarchy/)
- [Verification-Driven Development](/wiki/sources/verification-driven-development/)
- [Agent Coordination Patterns](/wiki/sources/agent-coordination/)
