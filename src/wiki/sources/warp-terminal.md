---
title: Warp Terminal
created: 2026-04-29
updated: 2026-04-29
tags: [source, terminal, rust, autocomplete, open-source, agentic-development]
sources: [2026-04-29-warp-terminal.md]
status: stable
category: sources
---

# Warp Terminal

## 개요
Rust 기반 GPU 가속 터미널. 2026-04-28 AGPL v3로 오픈소스화. 터미널에서 탄생한 Agentic Development Environment(ADE). 자동완성이 "영리한 알고리즘이 아닌 영리한 아키텍처"로 구현된 사례.

## 핵심 내용

1. **오픈소스화**: 5년의 엔지니어링 축적물을 AGPL v3로 공개. UI 프레임워크(warpui)는 MIT. OpenAI가 파운딩 스폰서
2. **자동완성 아키텍처**: Trie/인덱스 없이 전체 히스토리를 메모리에 올리고 `starts_with()` 하나로 매칭. 사전 중복 제거, 비동기 SQLite 쓰기, Arc 제로카피 공유로 속도 달성
3. **두 가지 제안 시스템**: Autosuggestions(인라인, Fish 스타일)과 Tab Completions(드롭다운, Fig Specs 기반)이 분리된 시스템
4. **Oz 플랫폼**: 클라우드 에이전트 오케스트레이션. 커뮤니티가 에이전트를 통해 기여하는 새 모델
5. **ADE로의 진화**: 단순 터미널에서 Claude Code/Codex/Gemini CLI를 모두 지원하는 멀티 에이전트 허브로

## 원문 인용

> "The biggest bottleneck to development is no longer writing code – it's all the human-in-the-loop activities around the code: speccing the product and verifying behavior"
> — Warp CEO, 오픈소스 발표

> "We build up the suggestions to avoid having to iterate over the same set of suggestions multiple times. This is performance-sensitive code."
> — Warp 소스코드 주석

## See also
- [Warp 엔티티](/wiki/entities/warp-terminal/)
- [간결한 자동완성 아키텍처](/wiki/concepts/lean-autocomplete-architecture/)
- [간결성-정확성 트레이드오프](/wiki/concepts/brevity-accuracy-tradeoff/)
- [본질적 vs 우발적 복잡도](/wiki/concepts/essential-accidental-complexity/)
- [Claude Code](/wiki/entities/claude-code/)
