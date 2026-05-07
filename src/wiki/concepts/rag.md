---
title: RAG (Retrieval-Augmented Generation)
created: 2026-04-16
updated: 2026-04-22
tags: [concept, llm, retrieval, rag]
sources: [llm-wiki-pattern.md, 2026-04-22-geeknews-weekly-352.md]
status: stable
category: concepts
---

# RAG (Retrieval-Augmented Generation)

## Definition
문서를 업로드하면 LLM이 질문 시 관련 청크를 검색(retrieve)해서 답변(generate)하는 패턴. NotebookLM, ChatGPT 파일 업로드, 대부분의 RAG 시스템이 이 방식.

## Limitation (from LLM Wiki Pattern perspective)
- 매 질문마다 원문에서 지식을 **재발견**해야 함
- **축적(accumulation)이 없음** — 5개 문서를 종합해야 하는 미묘한 질문은 매번 조각을 찾아 조립해야 함
- LLM과의 대화가 끝나면 맥락이 사라짐

## Comparison with Wiki Pattern
- RAG: retrieve → generate (매번 새로)
- Wiki Pattern: compile once → query compiled knowledge (지속 가능)

## See also
- [LLM Wiki Pattern](/wiki/sources/llm-wiki-pattern/)
- [Compounding Artifact](/wiki/concepts/compounding-artifact/)
- [지식 저장소 진화](/wiki/concepts/knowledge-repository-evolution/)
