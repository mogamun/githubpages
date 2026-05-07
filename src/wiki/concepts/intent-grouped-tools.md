---
title: Intent-Grouped Tools
created: 2026-04-27
updated: 2026-04-27
tags: [concept, mcp, tool-design, ai-agent, api]
sources: [2026-04-27-claude-mcp-production-agents.md]
status: stable
category: concepts
---

# Intent-Grouped Tools

## 정의
에이전트용 도구를 API 엔드포인트 단위가 아닌 사용자 의도(intent) 단위로 설계하는 패턴. 적은 수의 잘 설명된 도구가 방대한 API 미러링보다 일관적으로 우수한 성능을 발휘.

## 핵심 원칙
- **API 1:1 미러링 금지**: 모든 엔드포인트를 개별 도구로 노출하지 않음
- **의도 중심 그룹화**: 사용자가 달성하려는 목적 단위로 도구 구성
- **호출 수 최소화**: 여러 프리미티브를 조합하는 대신 한두 번의 호출로 작업 완료

## 적용 사례
- **Atlassian**: `create_issue_from_thread` 하나로 get_thread + parse_messages + create_issue + link_attachment 대체
- **Cloudflare**: 2개 도구(search, execute)로 ~2,500개 엔드포인트를 ~1K 토큰에 커버 (→ [Code Orchestration](/wiki/concepts/code-orchestration/))
- **Figma MCP**: 13개 도구가 체계적 호출 순서를 가지며 의도 단위로 설계

## 대안: Code Orchestration
API surface가 수백~수천 개인 경우 intent-grouping만으로는 한계. 얇은 도구 표면에 코드를 전달받아 샌드박스에서 실행하는 패턴이 더 적합. → [Code Orchestration](/wiki/concepts/code-orchestration/)

## See also
- [Code Orchestration](/wiki/concepts/code-orchestration/)
- [MCP Apps](/wiki/concepts/mcp-apps/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Anthropic MCP 프로덕션 패턴](/wiki/sources/claude-mcp-production-agents/)
