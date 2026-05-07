---
title: Code Orchestration
created: 2026-04-27
updated: 2026-04-27
tags: [concept, mcp, tool-design, ai-agent, sandbox]
sources: [2026-04-27-claude-mcp-production-agents.md]
status: stable
category: concepts
---

# Code Orchestration

## 정의
대규모 API surface(수백~수천 엔드포인트)를 에이전트에 노출할 때, 얇은 도구 표면에 코드를 전달받아 샌드박스에서 실행하는 MCP 서버 설계 패턴.

## 핵심 원칙
- **얇은 도구 표면**: 2~3개 도구만 노출 (예: search, execute)
- **에이전트가 코드 작성**: 에이전트가 짧은 스크립트를 작성해 서버에 전달
- **서버에서 실행**: 샌드박스에서 API 호출, 결과만 반환
- **토큰 효율**: 수천 엔드포인트를 ~1K 토큰에 커버

## 적용 사례
- **Cloudflare MCP**: 2개 도구(search, execute)로 ~2,500개 엔드포인트를 ~1K 토큰에 처리. 에이전트가 Workers 스크립트를 작성하면 서버가 샌드박스에서 실행
- **AWS, Kubernetes 등**: 유사한 대규모 API surface에 동일 패턴 적용 가능

## 언제 사용하나
- Intent-grouped tools로 커버 불가능한 수백 개 이상의 오퍼레이션
- API가 동적이거나 자주 변경되는 경우
- 도구 설명만으로 모든 오퍼레이션을 표현하기 어려운 경우

## See also
- [Intent-Grouped Tools](/wiki/concepts/intent-grouped-tools/)
- [Programmatic Tool Calling](/wiki/concepts/programmatic-tool-calling/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Anthropic MCP 프로덕션 패턴](/wiki/sources/claude-mcp-production-agents/)
