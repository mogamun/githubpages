---
title: Figma MCP 설치 및 사용방법
created: 2026-04-24
updated: 2026-04-24
tags: [source, figma, mcp, claude-code, design-to-code]
sources: [2026-04-24-goddaehee-figma-mcp-setup.md]
status: stable
category: sources
---
# Figma MCP 설치 및 사용방법

## 개요
갓대희의 "개발자를 위한 MCP 추천(4)" 시리즈. Figma MCP 서버의 설치, 13개 Tool 활용, 양방향 워크플로우(Figma↔Code), Dev Mode/REST API와의 비교를 실전 예시로 정리. Figma 공식 원격 서버(`mcp.figma.com`) 기반.

## 핵심 내용

### Figma MCP란
- Figma 공식 MCP 서버 — AI 에이전트가 디자인 파일의 구조·컴포넌트·변수·스타일을 직접 읽어 코드 생성
- 스크린샷이 아닌 **구조화된 메타데이터**(레이아웃 제약, 색상 hex, 간격, 폰트) 전달 → 픽셀 퍼펙트 구현
- **양방향**: Figma→Code뿐 아니라 `generate_figma_design`으로 Code→Figma 역캡처도 가능

### 서버 타입 비교
| 구분 | 원격 서버 | 데스크탑 서버 |
|---|---|---|
| 위치 | mcp.figma.com | 로컬 (Figma 앱) |
| 플랜 | 모든 플랜 (무료 포함) | Dev/Full 시트 (유료) |
| 인증 | OAuth | Figma 앱 |
| Starter 제한 | 월 6회 | 해당 없음 |

### 13개 Tool 목록
1. **get_design_context** — 핵심 Tool. 노드의 상세 메타데이터 (컴포넌트 트리, 변수, 레이아웃 제약, 스타일)
2. **get_screenshot** — 노드 스크린샷 + 기본 속성
3. **get_metadata** — 고수준 노드 맵 (응답이 클 때 사용)
4. **get_variable_defs** — 디자인 변수/토큰 (색상, 간격, 타이포그래피)
5. **get_code_connect_map** — Figma 노드 ↔ 코드 컴포넌트 매핑 조회
6. **add_code_connect_map** — 매핑 추가
7. **get_code_connect_suggestions** — 매핑 후보 제안
8. **send_code_connect_mappings** — 매핑 확정
9. **create_design_system_rules** — 디자인→코드 변환 규칙 파일 생성
10. **get_figjam** — FigJam 다이어그램 XML 변환
11. **generate_diagram** — Mermaid→FigJam 다이어그램 생성
12. **generate_figma_design** — 웹 UI→Figma 레이어 역변환 (원격 전용)
13. **whoami** — 인증 사용자 정보 (원격 전용)

### 권장 호출 순서
1. `get_design_context` → 상세 메타데이터
2. (응답 과도 시) `get_metadata` → 필요 노드만 재조회
3. `get_screenshot` → 시각적 참조
4. `get_variable_defs` → 디자인 토큰 (선택)
5. 코드 생성 시작

### Figma MCP vs Dev Mode vs REST API
| 방법 | 인증 | 용도 |
|---|---|---|
| MCP | OAuth | AI 자동화, Claude Code 연동 |
| REST API | PAT | CI/CD, 스크립트 자동화 |
| Dev Mode | Figma 로그인 | 수동 수치 확인, Handoff |

### Starter 플랜 Rate Limit
- 월 6회 Tool 호출
- 역캡처 1회: whoami(1) + generate_figma_design(≈3) = 약 4회 소모
- 활발한 사용 시 유료 플랜 필수

## 원문 인용
> "Figma MCP는 양방향 도구다. Figma → Code 방향만 있는 게 아니다. `generate_figma_design` Tool을 사용하면 이미 만들어진 웹 페이지를 편집 가능한 Figma 레이어로 역변환할 수 있다."

> "스크린샷을 보고 AI가 코드를 생성하면 '버튼 패딩이 12px인지 16px인지' 정확히 알 수 없다. 하지만 Figma MCP는 구조화된 메타데이터를 통해 정확한 수치, 폰트 이름, 색상 hex 값, 자동 레이아웃 설정 등을 전달한다."

> "디자인 시스템이 잘 갖춰진 팀에서는 초기 개발 시간을 50~70% 단축할 수 있다."

## See also
- [figma-mcp-setup](/wiki/important/setup/figma-mcp-setup/) — 설치 명령어 모음
- [figma](/wiki/entities/figma/) — Figma 엔티티
- [goddaehee](/wiki/entities/goddaehee/) — 갓대희 블로거
- [claude-code](/wiki/entities/claude-code/) — Claude Code 엔티티
- [design-to-code-workflow](/wiki/concepts/design-to-code-workflow/) — 디자인→코드 변환 워크플로우 개념
- [playwright-mcp-setup](/wiki/sources/playwright-mcp-setup/) — Playwright MCP 설정 (같은 시리즈)
- [structure-as-implicit-prompt](/wiki/synthesis/structure-as-implicit-prompt/) — 구조가 곧 프롬프트
