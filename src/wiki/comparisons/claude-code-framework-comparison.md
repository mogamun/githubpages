---
title: AI 코딩 프레임워크 4종 비교 (Superpowers vs GSD vs gstack vs Hermes)
created: 2026-04-24
updated: 2026-04-26
tags: [comparison, claude-code, framework, hermes-agent]
sources: [2026-04-24-heyjames-claude-code-frameworks.md, 2026-04-26-hermes-agent-github.md, 2026-04-26-claude-code-frameworks-deep-research.md]
status: stable
category: comparisons
---

# Superpowers vs GSD vs gstack vs Hermes

## 분류상 차이 (가장 중요)

| 구분 | Superpowers / GSD / gstack | Hermes Agent |
|------|---------------------------|--------------|
| **위치** | Claude Code **플러그인** | **독립 실행** 에이전트 |
| **런타임** | Claude Code CLI 위에서 동작 | 자체 Python 런타임 |
| **LLM 의존** | Claude API 중심 | 200+ 모델 (OpenRouter 등) |
| **설치** | skills/ 또는 npx | pip/curl 독립 설치 |
| **접근성** | 터미널 | Telegram/Discord/Slack/WhatsApp/Signal + CLI |
| **학습** | 없음 (정적 규칙) | 자가 개선 루프 |

## 공통점 (Superpowers/GSD/gstack)
- 모두 Claude Code 위에서 동작하는 오픈소스 프레임워크
- AI 코딩의 공통 문제(규칙 무시, 컨텍스트 로트, 범위 드리프트) 해결 목표
- 다중 에이전트/런타임 지원
- 서브 에이전트 활용

## 차이점

| | Superpowers | GSD | gstack | Hermes |
|---|---|---|---|---|
| **제약 대상** | 실행 프로세스 | 작업 환경 | 결정과 관점 | 전체 에이전트 |
| **핵심 질문** | 어떻게 일할 것인가? | 어디서 일할 것인가? | 무엇을 할 것인가? | 누가 일할 것인가? |
| **오케스트레이션** | 단일 메가 오케스트레이터 | 단계별 개별 오케스트레이터 | 23개 전문 역할 | 자체 런타임 + 서브에이전트 |
| **컨텍스트 관리** | 단일 윈도우 | 디스크 상태 저장, 단계별 갱신 | 역할 범위 핸드오프 | SQLite + FTS5 + Honcho |
| **자가 개선** | 없음 | 없음 | GBrain (지식 베이스) | 경험→스킬→개선 루프 |
| **강점** | TDD, 서브에이전트, 계획 실행 | 마라톤 세션, 병렬 작업, 크래시 복구 | 제품 전략, 다각도 리뷰, 브라우저 QA | 자가 개선, 멀티플랫폼, 모델 독립 |
| **약점** | 빌드 단계 이후 제한 | 소규모 작업 오버킬, 역할 분리 없음 | 실제 코드 작성 약함, 토큰 많이 소모 | Claude Code 생태계 분리, 설치 복잡 |
| **적합 대상** | 테스트 규율 필요한 솔로 | 며칠~몇 주 복잡 프로젝트 | 제품 수준 완성도 파운더 | 24/7 자동화, 멀티플랫폼 |
| **깃허브 스타** | 149K | 57.4K | 71K | — |
| **에이전트/런타임** | 6개 | 15+개 | 7개 | 200+ 모델 |
| **개발자** | Jesse Vincent | Lex Christopherson | Garry Tan (YC CEO) | Nous Research |
| **적용 난이도** | ★★☆☆☆ | ★★★☆☆ | ★★★★☆ | ★★★★★ |

## 선택 기준

| 문제 상황 | 추천 | 이유 |
|-----------|------|------|
| 코드가 오늘 되고 내일 고장남 | Superpowers | TDD로 모든 변경이 테스트 선행 |
| 첫 1시간 이후 품질 저하 | GSD | 단계별 새 컨텍스트 |
| 요청하지 않은 기능 추가 | gstack | 엔지니어링 전 제품 리뷰 |
| Claude Code 없이 24/7 자동화 | Hermes | 독립 런타임 + 크론 + 서버리스 |
| 모바일/원격에서 에이전트 접근 | Hermes | Telegram/Discord 게이트웨이 |
| 모델 lock-in 피하고 싶음 | Hermes | 200+ 모델 자유 전환 |

## 레이어 결합 구조 (Claude Code 프레임워크 3종)
```
gstack (의사결정: 무엇/왜) → GSD (컨텍스트: 어디서) → Superpowers (실행: 어떻게)
```

## 설치 명령어 요약

```bash
# Superpowers
/plugin install superpowers@claude-plugins-official

# GSD
npx get-shit-done-cc@latest

# gstack
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup

# Hermes (Claude Code 외부)
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

## 스킬 등록 시 주의사항

### 문제
- 파일 수 폭증: Superpowers ~20 + GSD ~10 + gstack ~50+ = 80+ 파일
- 명령어 충돌: /test, /plan 등 중복
- 컨텍스트 오염: "TDD 먼저" vs "Plan 먼저" vs "Think 먼저" 모순
- 성능 저하: 컨텍스트 윈도우를 스킬 파일이 점유

### 해결
1. **프로젝트별 선택적 설치** — 글로벌에 모두 설치하지 말고 프로젝트마다 하나만
2. **레이어에서 핵심만 추출** — gstack(PM+Security) + GSD(컨텍스트 격리) + Superpowers(TDD)
3. **정기적 스킬 청소** — 사용하지 않는 스킬 제거
4. **Hermes는 별도 환경** — Claude Code와 충돌하지 않음

## See also
- [superpowers](/wiki/entities/superpowers/)
- [gsd](/wiki/entities/gsd/)
- [gstack](/wiki/entities/gstack/)
- [hermes-agent](/wiki/entities/hermes-agent/)
- [heyjames](/wiki/entities/heyjames/)
- [context-rot-prevention](/wiki/concepts/context-rot-prevention/)
- [tdd-enforcement](/wiki/concepts/tdd-enforcement/)
- [role-based-ai-governance](/wiki/concepts/role-based-ai-governance/)
- [ai-coding-frameworks-setup](/wiki/important/setup/ai-coding-frameworks-setup/)
