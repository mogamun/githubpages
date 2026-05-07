---
title: AI 코딩 프레임워크 4종 따라하기 설정 가이드
created: 2026-04-26
updated: 2026-04-26
tags: [important, setup-guide, framework, superpowers, gsd, gstack, hermes-agent]
sources: [2026-04-26-claude-code-frameworks-deep-research.md]
status: stable
category: important
---

# AI 코딩 프레임워크 4종 따라하기 설정 가이드

## 개요
Superpowers, GSD, gstack, Hermes Agent의 설치부터 첫 사용까지 따라하기 형태 가이드. 각 프레임워크의 적용 난이도와 이점 포함.

---

## 1. Superpowers — TDD 강제 워크플로우

### 적용 난이도: ★★☆☆☆ (낮음)
### 적용 이점: "오늘 되는데 내일 안 되는" 코드 사라짐. 모든 변경이 테스트를 먼저 통과해야 함.

### 설치 (2분)

```
# Claude Code 내에서
/plugin install superpowers@claude-plugins-official
```

또는 수동:
```bash
git clone https://github.com/obra/superpowers.git ~/.claude/skills/superpowers
```

### 첫 사용 (5분)

```
# Claude Code에서 일반적인 요청
"사용자 인증 기능을 추가해줘"

# Superpowers가 자동으로 7단계 TDD 워크플로우 적용:
# 1. Plan — 계획 수립
# 2. Test — 실패하는 테스트 먼저 작성
# 3. Implement — 테스트 통과하는 코드 작성
# 4. Refactor — 코드 정리
# 5. Review — 자동 코드 리뷰
# 6. Debug — 필요시 디버깅
# 7. Document — 문서화
```

---

## 2. GSD — 컨텍스트 격리

### 적용 난이도: ★★★☆☆ (중간)
### 적용 이점: 며칠~몇 주 걸리는 프로젝트에서도 품질 유지. 세션 중단 시 복구 가능.

### 설치 (1분)

```bash
npx get-shit-done-cc@latest
```

### 프로젝트 초기화 (3분)

```bash
cd my-project
gsd init
```

### 작업 시작 (5분)

```
# Claude Code에서
/gsd plan "사용자 대시보드 기능 구현"

# 핵심 명령어:
# /gsd plan <task>     — 작업 계획
# /gsd execute          — 실행
# /gsd wave             — 병렬 서브에이전트 실행
# /gsd status           — 현재 상태
# /gsd recover          — 크래시 복구
```

---

## 3. gstack — 23역할 리뷰 게이트

### 적용 난이도: ★★★★☆ (높음)
### 적용 이점: 23개 관점에서 리뷰 → 프로덕션 레디 코드. OWASP Top 10 자동 검사.

### 설치 (3분)

```bash
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && ./setup
```

### Sprint 시작 (5분)

```
# Claude Code에서
/gstack sprint "결제 시스템 구현"

# Sprint 프로세스:
# Think → Plan → Build → Review(23역할) → Test → Ship → Reflect
```

### 고급 기능

```
/gstack brain store "이 프로젝트는 JWT 인증 사용"  # 영구 지식 저장
/gstack pair-agent "GPT-4로 코드 리뷰해줘"          # 다른 AI와 협업
/gstack codex review                                 # 다중 AI 리뷰
/gstack checkpoint on                                # 연속 체크포인트
/gstack parallel "기능 A" "기능 B"                   # 병렬 Sprint
```

---

## 4. Hermes Agent — 독립 자가 개선 에이전트

### 적용 난이도: ★★★★★ (가장 높음)
### 적용 이점: 사용할수록 학습. 어디서나 접근. 모델 lock-in 없음. 24/7 자동화.

### 설치 (5~30분)

```bash
# 자동 설치
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# 셸 리로드
source ~/.bashrc  # 또는 source ~/.zshrc
```

지원: Linux, macOS, WSL2, Android (Termux). Windows는 WSL2 필요.

### 초기 설정 (5분)

```bash
hermes setup        # 대화형 설정 마법사
hermes model        # LLM 모델 선택
hermes tools        # 도구 설정
```

### 첫 대화 (2분)

```bash
hermes              # 대화형 TUI 시작
# 멀티라인 편집, 슬래시 명령어 자동완성, 대화 기록
```

### 메시징 게이트웨이 (10분)

```bash
hermes gateway setup   # Telegram/Discord 등 설정
hermes gateway start   # 게이트웨이 시작
# 이제 Telegram에서 봇과 대화 가능
```

### 스킬 시스템

```
/skills              # 사용 가능한 스킬 목록
/skills browse       # Skills Hub 탐색
# 복잡한 작업 후 자동으로 스킬 생성 → 사용 중 개선
```

### 컨텍스트 파일

Hermes는 프로젝트 컨텍스트를 자동 읽기:
```
.hermes.md > AGENTS.md > CLAUDE.md  (우선순위 순)
```

---

## 스킬 등록 지저분함 해결법

### 문제: 여러 프레임워크를 skills/에 설치하면?
- 80+개 파일이 `~/.claude/skills/`에 산재
- 명령어 충돌 (/test, /plan 등)
- 모순된 지시 ("TDD 먼저" vs "Plan 먼저")
- 컨텍스트 윈도우 점유 → 실제 작업 공간 감소

### 해결: 프로젝트별 하나만 선택

| 프로젝트 유형 | 권장 | 이유 |
|-------------|------|------|
| 개인 프로젝트 | Superpowers | 가장 가볍고 TDD만으로 충분 |
| 중규모 팀 | GSD | 컨텍스트 관리가 핵심 |
| 스타트업 제품 | gstack + Superpowers | 리뷰 + TDD |
| 24/7 자동화 | Hermes | 독립 실행 + 크론 |
| 모바일/원격 | Hermes | Telegram/Discord 접근 |

### 레이어 결합 시 핵심만 추출

```
gstack: PM 리뷰 + Security 리뷰만 사용
GSD: 컨텍스트 격리만 사용
Superpowers: TDD 워크플로우만 사용
나머지는 제외
```

## 출처
- [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent)
- [Superpowers GitHub](https://github.com/obra/superpowers)
- [GSD GitHub](https://github.com/gsd-build/get-shit-done)
- [gstack GitHub](https://github.com/garrytan/gstack)

## See also
- [claude-code-framework-comparison](/wiki/comparisons/claude-code-framework-comparison/)
- [hermes-agent](/wiki/entities/hermes-agent/)
- [superpowers](/wiki/entities/superpowers/)
- [gsd](/wiki/entities/gsd/)
- [gstack](/wiki/entities/gstack/)
