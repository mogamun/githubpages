---
title: ImageSorcery MCP — 로컬 이미지 처리 MCP 서버
created: 2026-04-27
updated: 2026-04-27
tags: [source, mcp, image-processing, opencv, ocr, yolo, clip]
sources: [2026-04-27-imagesorcery-mcp.md]
status: stable
category: sources
---

# ImageSorcery MCP — 로컬 이미지 처리 MCP 서버

## 개요

Python 기반 MCP 서버. 17개 이미지 처리 도구를 로컬에서 실행. OpenCV, Ultralytics YOLO, EasyOCR, CLIP 기반. 외부 API 호출 없이 모든 처리가 로컬에서 수행됨. sunriseapps 개발, MIT 라이선스.

## 핵심 내용

### 17개 도구

| 도구 | 기능 |
|------|------|
| `blur` | 이미지 블러 처리 (가우시안 블러) |
| `change_color` | 색상 변경 |
| `config` | 서버 설정 관리 |
| `crop` | 이미지 자르기 |
| `detect` | 객체 감지 (YOLO) — 바운딩 박스 반환 |
| `draw_arrows` | 화살표 그리기 |
| `draw_circles` | 원 그리기 |
| `draw_lines` | 선 그리기 |
| `draw_rectangles` | 사각형 그리기 |
| `draw_texts` | 텍스트 그리기 |
| `fill` | 영역 채우기 |
| `find` | 이미지에서 객체 찾기 (CLIP) |
| `get_metainfo` | 이미지 메타데이터 조회 |
| `ocr` | OCR 텍스트 인식 (EasyOCR) |
| `overlay` | 이미지 오버레이/합성 |
| `resize` | 이미지 크기 조절 |
| `rotate` | 이미지 회전 |

### 핵심 특징

1. **전 로컬 처리**: 외부 API 없이 이미지 처리. 데이터가 외부로 전송되지 않음
2. **YOLO 객체 감지 + CLIP 이미지 검색**: 비전 AI 기능을 MCP로 제공
3. **EasyOCR**: 별도 OCR API 불필요
4. **드로잉 도구**: 화살표, 원, 사각형, 텍스트로 이미지 위에 어노테이션 가능
5. **pipx 글로벌 설치**: 시스템 전체에서 사용 가능
6. **글로벌 MCP 등록 시**: 17개 도구 스키마가 매 세션 컨텍스트에 포함

### 시스템 요구사항

- Python 3.10+
- ffmpeg (macOS: brew)
- `--post-install`으로 YOLO 4종 + CLIP 모델 자동 다운로드

### 전송 옵션

- `stdio` (기본) — Claude Code, Claude Desktop
- `sse` — HTTP Server-Sent Events
- `streamable-http` — HTTP 스트리밍

## 원문 인용

> pipx install imagesorcery-mcp
> imagesorcery-mcp --post-install

> `"autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"]`

## See also

- [ImageSorcery MCP 엔티티](/wiki/entities/imagesorcery-mcp/) — 엔티티 페이지
- [ImageSorcery MCP 설정 가이드](/wiki/important/setup/imagesorcery-mcp-setup/) — 설치 설정 가이드
- [Z AI MCP 서버 설정](/wiki/important/setup/zai-mcp-server/) — 클라우드 기반 이미지 분석 MCP (비교)
- [Figma MCP 설정](/wiki/important/setup/figma-mcp-setup/) — 디자인 도구 MCP
- [크로마키 프롬프트](/wiki/sources/image-prompt-chroma-key/) — 이미지 배경 분리 프롬프트
