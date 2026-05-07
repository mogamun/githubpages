---
title: Figma
created: 2026-04-24
updated: 2026-04-24
tags: [entity, tool, design, mcp]
category: entities
---
# Figma

## 개요
웹 기반 디자인 협업 도구. 2026년 기준 MCP 서버를 공식 제공하여 AI 에이전트가 디자인 파일의 메타데이터를 직접 읽고, 캔버스에 직접 쓰기(write to canvas)도 가능.

## 핵심 기능 (MCP 관련)
- **MCP 원격 서버**: `mcp.figma.com` — OAuth 인증, 모든 플랜 사용 가능
- **MCP 데스크탑 서버**: 로컬 실행 — Dev/Full 시트 필요
- **13개 MCP Tool**: get_design_context, get_screenshot, get_metadata, get_variable_defs, generate_figma_design, whoami 등
- **Code Connect**: Figma 노드 ↔ 코드 컴포넌트 매핑
- **Write to Canvas**: AI가 Figma 캔버스에 직접 디자인 자산 생성/수정
- **Code to Canvas**: 라이브 웹 UI를 편집 가능한 Figma 레이어로 역변환

## 플랜별 제한
- Starter/View/Collab: 월 6회 Tool 호출 (원격 서버)
- Professional+: 분당 Rate Limit (REST API Tier 1 동일)

## 관련 소스
- [Figma MCP 설치 및 사용방법](/wiki/sources/figma-mcp-setup-usage/) — 갓대희 블로그 상세 가이드

## See also
- [claude-code](/wiki/entities/claude-code/) — Figma MCP가 연동되는 주요 클라이언트
- [design-to-code-workflow](/wiki/concepts/design-to-code-workflow/) — 디자인→코드 변환 패턴
