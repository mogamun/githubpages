---
title: Claude Managed Agents
created: 2026-04-29
updated: 2026-04-29
tags: [entity, anthropic, ai-agent, cloud, managed-service]
sources: [2026-04-29-claude-managed-agents-memory.md]
status: stable
category: entities
---

# Claude Managed Agents

## 정체
- **Type**: 클라우드 호스티드 AI 에이전트 플랫폼
- **Developer**: Anthropic
- **상태**: 퍼블릭 베타 (2026-04-23 Memory 기능 추가)

## 역할
클라우드에서 실행되는 Claude 에이전트를 관리하는 플랫폼. MCP 서버 연결, OAuth 토큰 관리(Vaults), 이제 파일시스템 기반 메모리까지 제공.

## 핵심 기능
- **MCP 서버 연결**: 원격 MCP 서버를 통해 외부 시스템 접근
- **Vaults**: OAuth 토큰 저장/재사용/자동 리프레시
- **Memory (2026-04)**: 파일시스템에 마운트되는 내장 메모리
  - 조직 전체 스토어 (읽기 전용)
  - 사용자별 스토어 (읽기/쓰기)
  - 다중 에이전트 동시 접근
  - 감사 로그, 버전 롤백
- **Connectors**: 외부 시스템 연결 (2026-04 발표)

## 엔터프라이즈 고객
- **Netflix**: 장기 프로젝트 세션 간 컨텍스트 유지
- **Rakuten**: 에러 97% 감소, 비용 27% 절감, 레이턴시 34% 감소
- **Wisedocs**: 문서 검증 30% 빠른 처리
- **Ando**: 직장 메시징 대화 연속성

## 관련 프로젝트/맥락
- Claude Code와 동일한 MCP 생태계 위에서 동작
- Claude Cowork, Claude Code channels와 형제 서비스
- 이 위키의 CLAUDE.md/memory와 동일 패턴의 클라우드 구현

## See also
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Claude Code](/wiki/entities/claude-code/)
- [파일시스템 기반 메모리](/wiki/concepts/filesystem-based-memory/)
- [Anthropic MCP 프로덕션 패턴](/wiki/sources/claude-mcp-production-agents/)
- [Managed Agents Memory 소스](/wiki/sources/claude-managed-agents-memory/)
