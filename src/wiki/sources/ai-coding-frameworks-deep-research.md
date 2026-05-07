---
title: AI 코딩 프레임워크 4종 심층 조사 보고서
created: 2026-04-26
updated: 2026-04-26
tags: [source, comparison, framework, superpowers, gsd, gstack, hermes-agent]
sources: [2026-04-26-claude-code-frameworks-deep-research.md]
status: stable
category: sources
---

# AI 코딩 프레임워크 4종 심층 조사 보고서

## 개요
Superpowers, GSD, gstack (Claude Code 플러그인 3종) + Hermes Agent (독립 에이전트)의 심층 비교 조사. 적용 난이도, 이점, 스킬 등록 시 지저분해지는 문제와 해결책 포함.

## 핵심 내용

### 분류상 핵심 차이
- Superpowers/GSD/gstack = Claude Code **플러그인** (런타임 공유)
- Hermes = **독립 에이전트** (별도 Python 런타임, SQLite)

### 적용 난이도
| 프레임워크 | 난이도 | 설치 시간 | 학습 시간 |
|-----------|--------|----------|----------|
| Superpowers | ★★☆☆☆ | 2분 | 30분 |
| GSD | ★★★☆☆ | 1분 | 2~3시간 |
| gstack | ★★★★☆ | 3분 | 1~3일 |
| Hermes | ★★★★★ | 5~30분 | 3~7일 |

### 스킬 등록 지저분함 문제
1. 파일 수 폭증 (총 80+개 파일)
2. 명령어 충돌 (/test, /plan 등)
3. 컨텍스트 오염 (모순된 지시)
4. 성능 저하 (컨텍스트 윈도우 점유)

해결: 프로젝트별 선택적 설치, 레이어 결합 (gstack→GSD→Superpowers), 정기 스킬 청소

## See also
- [claude-code-framework-comparison](/wiki/comparisons/claude-code-framework-comparison/)
- [hermes-agent](/wiki/entities/hermes-agent/)
- [ai-coding-frameworks-setup](/wiki/important/setup/ai-coding-frameworks-setup/)
