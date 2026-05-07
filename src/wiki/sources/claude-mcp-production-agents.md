---
title: Anthropic — MCP 프로덕션 에이전트 패턴
created: 2026-04-27
updated: 2026-04-27
tags: [source, mcp, anthropic, production, ai-agent, tool-use, skills]
sources: [2026-04-27-claude-mcp-production-agents.md]
status: stable
category: sources
---

# Anthropic — MCP 프로덕션 에이전트 패턴

## 개요
Anthropic이 정리한 MCP 기반 프로덕션 에이전트 구축 패턴. 에이전트-시스템 연결 3경로(API/CLI/MCP) 비교, MCP 서버 설계 원칙, 컨텍스트 효율 클라이언트 패턴, Skills 페어링 전략.

## 핵심 내용

### 에이전트-시스템 연결 3경로
1. **Direct API**: 에이전트가 직접 HTTP 요청. 소규모는 괜찮으나 M×N 통합 문제 발생
2. **CLI**: 셸에서 명령어 실행. 로컬 환경에 적합, 모바일/웹/클라우드 한계
3. **MCP**: 공통 프로토콜 레이어. 원격 서버 하나가 모든 호환 클라이언트(Claude, ChatGPT, Cursor, VS Code)에 도달

### MCP 서버 설계 원칙
- **Remote 서버 구축**: 웹/모바일/클라우드 모든 환경에서 접근 가능
- **Intent-grouped tools**: API를 1:1 미러링하지 말고 의도 단위로 그룹화. `create_issue_from_thread` > 4개 개별 호출
- **Code orchestration**: 대규모 API surface는 코드를 받아 샌드박스에서 실행. Cloudflare: 2개 도구(search, execute)로 ~2,500 엔드포인트, ~1K 토큰
- **MCP Apps**: 도구가 차트/폼/대시보드 등 인터랙티브 UI 반환. 최초 공식 프로토콜 확장
- **Elicitation**: 도구 호출 중 서버가 사용자 입력 요청 (Form mode / URL mode)
- **CIMD + Vaults**: 표준화된 OAuth 클라이언트 등록 + Managed Agents에서 토큰 재사용

### 컨텍스트 효율 패턴
- **Tool search**: 툴 정의 온디맨드 로드 → 토큰 85%+ 절감
- **Programmatic tool calling**: 코드 샌드박스에서 결과 처리 → 복잡 워크플로우에서 37% 토큰 절감

### Skills + MCP 페어링
- **플러그인 번들**: Skills + MCP 서버 + hooks + LSP를 하나의 배포 단위로
- **서버에서 스킬 배포**: MCP 서버가 스킬도 함께 제공 (Canva, Notion, Sentry 사례)

### 성장 지표
- MCP SDK 월 3억 다운로드 (연초 1억에서 3배 성장)
- Claude Cowork, Managed Agents, Claude Code channels의 기반 기술

## 원문 인용
> "Fewer, well-described tools consistently outperform exhaustive API mirrors."

> "A remote server is what gives you distribution—it's the only configuration that runs across web, mobile, and cloud-hosted agents."

> "Skills and MCP are complementary. MCP gives an agent access to tools and data from external systems, while skills teach an agent the procedural knowledge of how to use those tools to accomplish real work."

## See also
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Claude Code](/wiki/entities/claude-code/)
- [Intent-Grouped Tools](/wiki/concepts/intent-grouped-tools/)
- [Code Orchestration](/wiki/concepts/code-orchestration/)
- [MCP Apps](/wiki/concepts/mcp-apps/)
- [API vs CLI vs MCP 비교](/wiki/comparisons/api-vs-cli-vs-mcp/)
- [컨텍스트 로트 방지](/wiki/sources/context-rot-prevention/)
- [Figma MCP 설정](/wiki/important/setup/figma-mcp-setup/)
- [Z AI MCP 설정](/wiki/important/setup/zai-mcp-server/)
