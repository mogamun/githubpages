---
title: Warp Terminal
created: 2026-04-29
updated: 2026-04-29
tags: [entity, tool, terminal, rust, gpu, agentic-development, open-source]
sources: [2026-04-29-warp-terminal.md]
status: stable
category: entities
---

# Warp Terminal

## 정체
- **Type**: Rust 기반 GPU 가속 터미널 → Agentic Development Environment (ADE)
- **Developer**: Warp (warpdotdev)
- **GitHub**: https://github.com/warpdotdev/warp
- **Website**: https://www.warp.dev/
- **License**: AGPL v3 (클라이언트), MIT (warpui 프레임워크)
- **Language**: Rust
- **Users**: 70만+ 활성 개발자
- **Open Source**: 2026-04-28

## 역할
터미널에서 탄생한 에이전트 개발 환경. 내장 코딩 에이전트 + 외부 CLI 에이전트(Claude Code, Codex, Gemini CLI) 지원. 인라인 자동완성과 Tab 완성 두 가지 제안 시스템 제공.

## 핵심 기능

### 자동완성 (Autosuggestions)
- **Fish shell 스타일 인라인 제안**: 회색 텍스트로 표시, RIGHT/CTRL-F/TAB으로 수락
- **빠른 이유**: 전체 히스토리 메모리 올림 + `starts_with()` 단일 매칭 + 사전 중복 제거 + 비동기 I/O
- **Trie/인덱스 없음**: 복잡한 데이터 구조 대신 단순함으로 성능 달성

### Tab Completions
- **Fig Completion Specs 기반**: 명령 시그니처, 파일 경로, 플래그, 인수 완성
- **3단계 매치 캐스케이드**: CaseSensitive → CaseInsensitive → Fuzzy(SkimMatcherV2)
- **비동기 엔진**: I/O가 필요한 완성도 백그라운드 스레드에서 실행

### ADE 기능
- **Blocks**: 명령+출력을 개별 참조 가능한 단위로 그룹화
- **Warp Drive**: 지식 관리 레이어 (환경변수, 스니펫, 워크플로우)
- **멀티 에이전트**: Claude Code, Codex, Gemini CLI, 내장 에이전트 지원
- **Oz**: 클라우드 에이전트 오케스트레이션 플랫폼

### 기술 스택
- Rust + GPU 가속 렌더링
- Tokio (비동기 런타임)
- NuShell (파이프라인 데이터 처리)
- Alacritty (터미널 렌더링 기반)
- SQLite (히스토리 영속화)
- SkimMatcherV2 (FZF 스타일 fuzzy 매칭)

## 관련 프로젝트/맥락
- **Claude Code**: Warp에서 실행 가능한 CLI 에이전트 중 하나
- **OpenAI**: 파운딩 스폰서, Oz 에이전트 워크플로우에 GPT 모델 사용
- **Fig**: Tab Completion 사양의 기반 (Fig Completion Specs)

## See also
- [Warp 소스](/wiki/sources/warp-terminal/)
- [간결한 자동완성 아키텍처](/wiki/concepts/lean-autocomplete-architecture/)
- [간결성-정확성 트레이드오프](/wiki/concepts/brevity-accuracy-tradeoff/)
- [Claude Code](/wiki/entities/claude-code/)
- [본질적 vs 우발적 복잡도](/wiki/concepts/essential-accidental-complexity/)
