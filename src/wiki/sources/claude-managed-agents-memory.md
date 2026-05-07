---
title: Anthropic — Managed Agents Memory
created: 2026-04-29
updated: 2026-04-29
tags: [source, anthropic, managed-agents, memory, filesystem, enterprise]
sources: [2026-04-29-claude-managed-agents-memory.md]
status: stable
category: sources
---

# Anthropic — Managed Agents Memory

## 개요
Anthropic이 Claude Managed Agents에 내장 메모리 기능을 퍼블릭 베타로 출시 (2026-04-23). 메모리가 파일시스템에 직접 마운트되어 에이전트가 기존 bash/code 실행 능력으로 접근. 새 API 학습 불필요.

## 핵심 내용

### 파일시스템 기반 메모리
- 메모리는 파일로 저장 → 에이전트가 표준 파일 조작으로 접근
- 기존 bash/code 실행 능력 그대로 사용, 새 API 불필요
- API로 메모리 검사, 권한 관리, 감사 로그, 버전 롤백 가능
- 내보내기 가능한 구조

### 범위 권한 (Scoped Permissions)
- **조직 전체 스토어**: 읽기 전용. 사내 가이드라인, 스타일 가이드 등
- **사용자별 스토어**: 읽기/쓰기. 개인화된 컨텍스트
- 다중 에이전트 동시 접근 지원 (적절한 스코핑으로 충돌 방지)

### 엔터프라이즈 사례
| 고객 | 효과 |
|------|------|
| Netflix | 장기 프로젝트에서 에이전트의 세션 간 컨텍스트 유지 |
| Rakuten | 1차 패스 에러 97% 감소, 비용 27% 절감, 레이턴시 34% 감소 |
| Wisedocs | 문서 검증 30% 빠른 처리 |
| Ando | 직장 메시징에서 대화 연속성 유지 |

## 원문 인용
> "Memory on Managed Agents mounts directly onto the filesystem. That means agents use the same bash and code execution capabilities they already have, so there's no new API to learn or special syntax to pick up."

> "Because memory is just files, it's exportable. You can use the API to inspect memories, manage permissions, maintain audit logs, and roll back versions."

## See also
- [Managed Agents](/wiki/entities/managed-agents/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Claude Code](/wiki/entities/claude-code/)
- [파일시스템 기반 메모리](/wiki/concepts/filesystem-based-memory/)
- [컨텍스트 로트 방지](/wiki/concepts/context-rot-prevention/)
- [Anthropic MCP 프로덕션 패턴](/wiki/sources/claude-mcp-production-agents/)
