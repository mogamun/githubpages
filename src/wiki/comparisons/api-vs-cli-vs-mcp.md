---
title: API vs CLI vs MCP — 에이전트-시스템 연결 3경로 비교
created: 2026-04-27
updated: 2026-04-27
tags: [comparison, mcp, api, cli, ai-agent, integration]
sources: [2026-04-27-claude-mcp-production-agents.md]
status: stable
category: comparisons
---

# API vs CLI vs MCP — 에이전트-시스템 연결 3경로 비교

## 공통점
세 방식 모두 에이전트가 외부 시스템에 연결하는 수단. 성숙한 통합은 세 가지 모두 제공.

## 차이점

| 측면 | Direct API | CLI | MCP |
|------|-----------|-----|-----|
| **공통 레이어** | 없음 | 얇음 (셸/파일시스템) | 프로토콜 (표준화) |
| **확장성** | M×N 통합 문제 | 로컬 제한 | 1:N (서버 하나→모든 클라이언트) |
| **환경** | 제한 없음 | 로컬/샌드박스 | 웹/모바일/클라우드 모두 |
| **인증** | 각 서비스별 | CLI 자체 메커니즘 | 표준화 (CIMD/OAuth) |
| **초기 투자** | 낮음 | 낮음 | 중간 |
| **장기 보상** | 낮음 (비스포크 유지) | 중간 | 높음 (이식성, 확장) |
| **의미론** | 낮음 (원시 API) | 중간 | 높음 (도구 설명, 발견) |

## 선택 기준
- **Direct API**: 1~2개 서비스만 연결, 재사용 필요 없음 → 빠른 시작
- **CLI**: 로컬 환경, 파일시스템 필요, 빠른 통합 → 개발/데브옵스
- **MCP**: 프로덕션 클라우드 에이전트, 다중 클라이언트, 장기 운영 → 프로덕션

## 성숙한 통합의 3계층
```
API (기반) + CLI (로컬 우선) + MCP (클라우드 에이전트)
```
- API는 기반 기술로 항상 필요
- CLI는 로컬 환경에서 편의성 제공
- MCP는 클라우드 기반 프로덕션 에이전트를 위한 핵심 레이어

## See also
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Intent-Grouped Tools](/wiki/concepts/intent-grouped-tools/)
- [Anthropic MCP 프로덕션 패턴](/wiki/sources/claude-mcp-production-agents/)
