---
title: MCP Apps
created: 2026-04-27
updated: 2026-04-27
tags: [concept, mcp, protocol-extension, interactive-ui]
sources: [2026-04-27-claude-mcp-production-agents.md]
status: stable
category: concepts
---

# MCP Apps

## 정의
MCP의 최초 공식 프로토콜 확장. 도구가 텍스트 대신 인터랙티브 UI(차트, 폼, 대시보드)를 채팅 인터페이스에 인라인 렌더링.

## 핵심 원칙
- **텍스트 한계 돌파**: 텍스트만 반환하는 도구보다 의미적으로 높은 채택률과 리텐션
- **인라인 렌더링**: 별도 페이지가 아닌 채팅 흐름 내에 직접 표시
- **제품 UI 노출**: 에이전트나 최종 사용자에게 필요한 순간에 제품 UI를 직접 제공

## 지원 환경
- Claude.ai
- Claude Cowork
- 기타 주요 AI 도구

## Elicitation (보완 기능)
도구 호출 중 서버가 사용자 입력을 요청:
- **Form mode**: 스키마 전송 → 클라이언트가 네이티브 폼 렌더링. 누락 파라미터, 파괴적 작업 확인, 모호성 해소
- **URL mode**: 브라우저로 리다이렉트. 하위 OAuth 완료, 결제, 자격 증명 수집

## 적용 사례
- MCP Apps를 제공하는 서버가 텍스트만 제공하는 서버보다 의미적으로 높은 채택/리텐션

## See also
- [Intent-Grouped Tools](/wiki/concepts/intent-grouped-tools/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Anthropic MCP 프로덕션 패턴](/wiki/sources/claude-mcp-production-agents/)
