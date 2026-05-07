---
title: Design-to-Code 워크플로우
created: 2026-04-24
updated: 2026-04-24
tags: [concept, design, code, mcp, workflow]
category: concepts
---
# Design-to-Code 워크플로우

## 개요
Figma 디자인을 코드로 변환하는 워크플로우 패턴. Figma MCP가 제공하는 구조화된 메타데이터를 활용하여 AI가 정확한 코드를 생성하는 방식.

## 핵심 원칙
1. **스크린샷이 아닌 메타데이터** — 패딩, 색상 hex, 폰트, 간격 등 정확한 수치 전달
2. **양방향 선순환** — Code→Figma→Code 루프로 디자인 일관성 유지
3. **컴포넌트 재사용** — Code Connect로 기존 코드베이스 컴포넌트 매핑
4. **디자인 시스템 규칙** — create_design_system_rules로 일관성 자동 관리

## Figma MCP Tool 호출 순서
1. `get_design_context` → 상세 메타데이터 (핵심)
2. `get_metadata` → 응답 과도 시 고수준 노드 맵
3. `get_screenshot` → 시각적 참조
4. `get_variable_defs` → 디자인 토큰 (색상, 간격, 타이포그래피)
5. `get_code_connect_map` → 기존 컴포넌트 매핑 확인
6. 코드 생성 시작

## 역방향 워크플로우 (Code→Figma)
`generate_figma_design`으로 기존 웹앱을 Figma 편집 가능 레이어로 변환:
- 단순 스크린샷이 아닌 컴포넌트 구조가 개별 레이어로 분리
- 레거시 UI를 Figma 자산으로 정리
- 개발 먼저 → 나중에 디자인 관리 시작

## "구조가 곧 프롬프트"와의 연결
Figma MCP의 핵심 가치는 [structure-as-implicit-prompt](/wiki/synthesis/structure-as-implicit-prompt/)와 일치. 스크린샷(비구조적) 대신 메타데이터(구조적)를 전달하면 AI의 코드 생성 품질이 극적으로 향상됨. 디자인의 구조 자체가 AI에게 더 나은 프롬프트로 작동.

## See also
- [figma](/wiki/entities/figma/) — Figma 엔티티
- [Figma MCP 설치 및 사용방법](/wiki/sources/figma-mcp-setup-usage/) — 상세 가이드
- [structure-as-implicit-prompt](/wiki/synthesis/structure-as-implicit-prompt/) — 구조가 곧 프롬프트 테제
