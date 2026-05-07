---
title: MCP (Model Context Protocol)
created: 2026-04-27
updated: 2026-04-29
tags: [entity, protocol, anthropic, ai-agent, mcp, tool-use]
sources: [2026-04-27-claude-mcp-production-agents.md, 2026-04-29-claude-managed-agents-memory.md]
status: stable
category: entities
---

# MCP (Model Context Protocol)

## 정체
- **Type**: AI 에이전트-외부 시스템 연결 프로토콜
- **Developer**: Anthropic 주도, 오픈 표준
- **채택**: Claude, ChatGPT, Cursor, VS Code 등 주요 AI 클라이언트

## 역할
에이전트가 외부 시스템(도구, 데이터)에 연결하는 공통 레이어. Direct API와 CLI의 한계(M×N 통합 문제, 환경 제약)를 해결. 원격 서버 하나가 모든 호환 클라이언트에 도달.

## 핵심 기능
- **인증 표준화**: CIMD(Client ID Metadata Documents)로 OAuth 클라이언트 등록 자동화
- **Vaults**: Claude Managed Agents에서 OAuth 토큰 저장/재사용, 자동 리프레시
- **MCP Apps**: 최초 공식 확장. 도구가 차트/폼/대시보드 등 인터랙티브 UI 반환
- **Elicitation**: 도구 호출 중 서버가 사용자 입력 요청 (Form mode / URL mode)
- **Tool Search**: 온디맨드 툴 로드로 토큰 85%+ 절감
- **Programmatic Tool Calling**: 코드 샌드박스 결과 처리로 37% 토큰 절감

## 성장 지표
- MCP SDK 월 3억 다운로드 (2026년 초 1억에서 3배 성장)
- 디렉토리에 200+ MCP 서버 등록
- 수백만 명이 매일 Claude에서 MCP 사용

## 관련 프로젝트/맥락
- **Claude Cowork**: MCP 기반 협업 환경
- **Claude Managed Agents**: 클라우드 호스티드 에이전트, Vaults로 토큰 관리
- **Claude Code channels**: MCP 기반 채널 시스템
- 이 위키의 모든 MCP 설정 가이드가 MCP 프로토콜 위에서 동작

## See also
- [Anthropic MCP 프로덕션 패턴](/wiki/sources/claude-mcp-production-agents/)
- [Managed Agents Memory](/wiki/sources/claude-managed-agents-memory/)
- [Claude Code](/wiki/entities/claude-code/)
- [Managed Agents](/wiki/entities/managed-agents/)
- [Intent-Grouped Tools](/wiki/concepts/intent-grouped-tools/)
- [API vs CLI vs MCP 비교](/wiki/comparisons/api-vs-cli-vs-mcp/)
- [Figma MCP 설정](/wiki/important/setup/figma-mcp-setup/)
- [Z AI MCP 설정](/wiki/important/setup/zai-mcp-server/)
- [Playwright MCP 설정](/wiki/important/setup/playwright-mcp-setup/)
