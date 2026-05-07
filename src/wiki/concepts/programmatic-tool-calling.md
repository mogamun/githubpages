---
title: Programmatic Tool Calling
created: 2026-04-27
updated: 2026-04-27
tags: [concept, mcp, context-efficiency, token-optimization, code-execution]
sources: [2026-04-27-claude-mcp-production-agents.md]
status: stable
category: concepts
---

# Programmatic Tool Calling

## 정의
도구 호출의 결과를 모델 컨텍스트에 직접 반환하지 않고, 코드 실행 샌드박스에서 처리하여 최종 출력만 컨텍스트에 도달하게 하는 패턴.

## 핵심 원칙
- **원시 결과 숨기기**: 도구 호출의 원시 응답을 모델에게 보여주지 않음
- **코드에서 후처리**: 루프, 필터, 집계를 코드에서 수행
- **최종 결과만 전달**: 처리된 요약 결과만 컨텍스트에 포함

## 효과
- 복잡한 다단계 워크플로우에서 토큰 사용량 약 37% 절감
- [Tool Search](/wiki/concepts/tool-search/)와 조합 시 시너지: 더 적은 컨텍스트로 더 많은 작업 수행

## 관련 개념
- [Code Orchestration](/wiki/concepts/code-orchestration/)과 유사하지만 방향이 다름: Code Orchestration은 에이전트→서버로 코드 전송, Programmatic Tool Calling은 클라이언트 내에서 코드 실행

## See also
- [Tool Search](/wiki/concepts/tool-search/)
- [Code Orchestration](/wiki/concepts/code-orchestration/)
- [컨텍스트 로트 방지](/wiki/concepts/context-rot-prevention/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
