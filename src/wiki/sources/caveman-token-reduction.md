---
title: Caveman — 원시인 말투로 토큰 절약
created: 2026-04-22
updated: 2026-04-22
tags: [source, llm, token-optimization, claude-code, codex]
sources: [2026-04-22-caveman-token-reduction.md]
status: stable
category: sources
---

# Caveman — 원시인 말투로 토큰 절약

## 개요
원시인 말투로 응답하도록 강제해 평균 65~75%의 출력 토큰을 절감하는 Claude Code/Codex 플러그인. 기술적 정확성은 유지하면서 불필요한 단어를 제거.

## 핵심 내용
- **출력 토큰만 절감** — 사고/추론 토큰은 영향 없음
- **3단계 압축**: Lite(문법 유지), Full(관사·군더더기 제거), Ultra(최대 압축)
- **벤치마크**: React 리렌더링 87%, PostgreSQL 연결 풀 84%, Docker 빌드 72% 절감
- **과학적 근거**: 2026년 3월 논문에서 간결 강제 시 정확도 26%p 향상 확인
- **설치**: `npx skills add JuliusBrussee/caveman`

## 원문 인용
> "Verbose not always better. Sometimes less word = more correct"

## See also
- [간결성-정확성 트레이드오프](/wiki/concepts/brevity-accuracy-tradeoff/)
- [Claude Code](/wiki/sources/claude-code/)
- [GeekNews Weekly #352](/wiki/sources/geeknews-weekly-352/)
