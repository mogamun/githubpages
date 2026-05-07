---
title: Tool Search (온디맨드 툴 로드)
created: 2026-04-27
updated: 2026-04-27
tags: [concept, mcp, context-efficiency, token-optimization]
sources: [2026-04-27-claude-mcp-production-agents.md]
status: stable
category: concepts
---

# Tool Search (온디맨드 툴 로드)

## 정의
MCP 클라이언트가 모든 툴 정의를 사전에 로드하지 않고, 런타임에 카탈로그를 검색하여 필요한 툴만 가져오는 컨텍스트 효율 패턴.

## 핵심 원칙
- **사전 로드 지연**: 전체 툴 카탈로그를 컨텍스트에 올리지 않음
- **런타임 검색**: 에이전트가 작업에 필요한 툴을 검색해서 동적으로 로드
- **토큰 대폭 절감**: 툴 정의 토큰 85%+ 절감, 선택 정확도는 유지

## 효과
- 서버가 많아질수록 이점 증가 (여러 MCP 서버 연결 시 특히 유효)
- [Programmatic Tool Calling](/wiki/concepts/programmatic-tool-calling/)과 자연스럽게 조합

## 관련 개념
- [컨텍스트 로트 방지](/wiki/concepts/context-rot-prevention/)와 동일한 원리: 컨텍스트에 불필요한 정보를 최소화

## See also
- [Programmatic Tool Calling](/wiki/concepts/programmatic-tool-calling/)
- [컨텍스트 로트 방지](/wiki/concepts/context-rot-prevention/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Anthropic MCP 프로덕션 패턴](/wiki/sources/claude-mcp-production-agents/)
