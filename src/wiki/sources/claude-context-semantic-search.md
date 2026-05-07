---
title: claude-context — 시맨틱 코드 검색 MCP
created: 2026-04-22
updated: 2026-04-22
tags: [source, mcp, semantic-search, vector-database, claude-code]
sources: [2026-04-22-claude-context-semantic-search.md]
status: stable
category: sources
---

# claude-context — 시맨틱 코드 검색 MCP

## 개요
Zilliz의 MCP 플러그인. Claude Code에 하이브리드 시맨틱 코드 검색(BM25 + dense vector)을 추가하여 전체 코드베이스에서 관련 코드만 컨텍스트에 로드.

## 핵심 내용
- **하이브리드 검색**: BM25(키워드) + dense vector(의미) 결합
- **~40% 토큰 절감**: 전체 디렉토리 로드 대신 관련 코드만 삽입
- **AST 기반 청킹** + **증분 인덱싱**(Merkle tree)
- **4개 MCP 도구**: `index_codebase`, `search_code`, `clear_index`, `get_indexing_status`

## 설치
```bash
claude mcp add claude-context \
  -e OPENAI_API_KEY=sk-xxx \
  -e MILVUS_TOKEN=xxx \
  -- npx @zilliz/claude-context-mcp@latest
```

## 원문 인용
> 전체 코드베이스를 벡터 DB에 인덱싱하여 관련 코드만 컨텍스트에 로드

## See also
- [RAG](/wiki/concepts/rag/)
- [Claude Code](/wiki/entities/claude-code/)
- [Playwright MCP 설정](/wiki/sources/playwright-mcp-setup/)
