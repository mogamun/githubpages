---
title: Hermes Agent GitHub 리포지토리 분석
created: 2026-04-26
updated: 2026-04-26
tags: [source, hermes-agent, ai-agent, self-improving]
sources: [2026-04-26-hermes-agent-github.md]
status: stable
category: sources
---

# Hermes Agent GitHub 리포지토리 분석

## 개요
Nous Research의 Hermes Agent 공식 GitHub 리포지토리 심층 분석. 독립 실행형 자가 개선 AI 에이전트의 아키텍처, 기능, 설치 방법을 종합 정리.

## 핵심 내용

### 아키텍처
- AIAgent 코어 루프 (~10,700줄) + HermesCLI (~10,000줄)
- 3개 API 모드: chat_completion, codex_response, anthropic
- SQLite + FTS5 세션 저장소
- 47개 도구, 19개 툴셋, 6개 터미널 백엔드

### 자가 개선 루프
1. 복잡한 작업 완료 → 에이전트가 스킬 자동 생성
2. 비슷한 작업 시 스킬 자동 활용
3. 사용하면서 스킬 지속 개선
4. FTS5로 과거 대화 검색 → 세션 간 회상
5. Honcho dialectic으로 사용자 모델링 심화

### 멀티플랫폼 게이트웨이
- Telegram, Discord, Slack, WhatsApp, Signal
- 음성 메모 전사
- 플랫폼 간 대화 연속성
- 단일 게이트웨이 프로세스로 모든 플랫폼 관리

### 서버리스 백엔드
- Daytona, Modal: 유휴 시 최소 비용, 필요 시 자동 복원
- $5/월 VPS에서도 실행 가능

## See also
- [hermes-agent](/wiki/entities/hermes-agent/)
- [claude-code-framework-comparison](/wiki/comparisons/claude-code-framework-comparison/)
- [ai-coding-frameworks-setup](/wiki/important/setup/ai-coding-frameworks-setup/)
