---
title: LLM Wiki Pattern
created: 2026-04-16
updated: 2026-04-16
tags: [pattern, knowledge-management, llm, wiki, personal-knowledge-base]
sources: [llm-wiki-pattern.md]
status: stable
category: sources
---

# LLM Wiki Pattern

## One-line Summary
RAG의 한계를 넘어, LLM이 지속적으로 관리하는 개인 지식 위키 패턴. 소스를 추가할 때마다 위키가 풍부해지는 compounding artifact.

## Key Takeaways

1. **RAG의 문제**: 매 질문마다 원문에서 지식을 재발견해야 함. 축적이 없음.
2. **핵심 전환**: 원문에서 매번 검색하는 대신, LLM이 위키라는 persistent artifact를 점진적으로 구축하고 유지.
3. **3계층 아키텍처**: Raw sources (불변) → Wiki (LLM이 소유) → Schema (설정/규칙)
4. **3가지 오퍼레이션**: Ingest (소스 추가), Query (질의), Lint (건강 검진)
5. **보상 구조**: 위키는 지속 가능 — LLM의 유지비용이 0에 가까워서 인간이 포기하는 지점에서도 살아남음.

## Architecture

| Layer | Role | Who owns it |
|-------|------|-------------|
| Raw sources | 불변 원본 문서 | User |
| Wiki | LLM 생성 마크다운 페이지들 | LLM |
| Schema | 위키 구조/규칙/워크플로우 정의 | User + LLM |

## Historical Context

- Vannevar Bush의 **Memex** (1945)와 정신적으로 연결됨 — 개인 큐레이티드 지식 저장소 + 문서 간 연관 트레일
- Bush가 해결 못 했던 문제: "누가 유지보수를 하는가?" → LLM이 해결

## Notable Tools & References

- **Obsidian** — 위키 브라우징, 그래프 뷰, Web Clipper
- **qmd** — 로컬 마크다운 검색엔진 (BM25 + vector + LLM re-ranking)
- **Marp** — 마크다운 기반 슬라이드 덱
- **Dataview** — Obsidian 플러그인, frontmatter 쿼리

## Open Questions

- 대규모(1000+ 소스)에서 index.md 방식의 한계는 어디인가?
- 다중 사용자 환경에서 conflict 해소 전략은?
- 소스가 모순될 때 LLM이 어떻게 판단하는가 — 신뢰도 평가 기준 필요

## See also

- [RAG](/wiki/sources/rag/)
- [Compounding Artifact](/wiki/sources/compounding-artifact/)
- [Memex](/wiki/sources/memex/)
