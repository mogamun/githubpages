---
title: Hermes Agent GitHub README 업데이트 (v0.9.0~v0.12.0)
created: 2026-05-06
updated: 2026-05-06
tags: [source, hermes-agent, nous-research, release-notes, ai-agent]
sources: [2026-05-06-hermes-agent-github-update.md]
status: stable
category: sources
---

# Hermes Agent GitHub README 업데이트 (v0.9.0~v0.12.0)

## 개요
2026-04-26 이후 Hermes Agent GitHub 저장소의 README와 릴리즈 노트(v0.9.0~v0.12.0) 종합 분석. 2주 단위로 4번의 메이저 릴리즈가 이루어지며 터미널 백엔드 6→8, 메시징 18→19, 자율 Curator, Transport ABC, Ink TUI 재작성 등 대폭적 확장.

## 핵심 내용

### 자율 Curator (v0.12.0)
백그라운드 에이전트가 7일 주기로 스킬 라이브러리 등급/정리/가지치기. `hermes curator status`로 사용량 순위 확인. Closed Learning Loop에 "큐레이션" 단계 추가.

### Transport ABC (v0.11.0)
HTTP 전송을 플러그형 계층으로 추상화. AnthropicTransport, ChatCompletionsTransport, ResponsesApiTransport, BedrockTransport로 12개 프로바이더 지원.

### 게이트웨이 플러그인 호스트 (v0.12.0)
메시징 어댑터를 코어 외부로 분리하는 확장성 아키텍처 전환. Microsoft Teams가 첫 번째 플러그인 배송 플랫폼.

### Ink 기반 TUI 재작성 (v0.11.0)
React/Ink + Python JSON-RPC 백엔드. 스티키 컴포저, OSC-52 클립보드, 서브에이전트 오버레이. 콜드 스타트 57% 감소.

### 개발 속도
v0.12.0에서 1,096 커밋, 550 PR, **213명 기여자**. v0.11.0에서는 1,556 커밋, 761 PR. 2주 단위 릴리즈 주기.

## 원문 인용
> "The agent that grows with you" — Hermes Agent 태그라인

> 1,096 commits · 550 merged PRs · 217,776 insertions · 213 community contributors — v0.12.0 릴리즈 노트

## See also
- [Hermes Agent](/wiki/entities/hermes-agent/) — 엔티티 페이지 (대폭 갱신)
- [고범수 Hermes Agent 리뷰](/wiki/sources/hermes-agent-review-beomsu/) — 이전 분석 (아키텍처 심층)
- [Closed Learning Loop](/wiki/concepts/closed-learning-loop/) — Curator 단계 추가
- [LLM + Harness 모델](/wiki/concepts/llm-harness-model/) — 새 Harness 구성요소
- [OpenClaw vs Hermes Agent](/wiki/comparisons/openclaw-vs-hermes-agent/) — 개발 속도 차이 확대
- [Hermes Agent 설정 가이드](/wiki/important/setup/hermes-agent-setup/) — 설치 가이드
