---
title: ImageSorcery MCP 서버 설정
created: 2026-04-27
updated: 2026-04-27
tags: [important, setup-guide, mcp, image-processing, opencv, yolo, ocr]
sources: [2026-04-27-imagesorcery-mcp.md]
status: stable
category: important
---

# ImageSorcery MCP 서버 설정

## 개요

ImageSorcery MCP 서버를 글로벌로 설치하여 Claude Code에서 17개 로컬 이미지 처리 도구를 사용하는 설정. 외부 API 없이 YOLO 객체 감지, EasyOCR, CLIP 이미지 검색 등을 로컬에서 실행.

## 전제 조건

- macOS (이 시스템)
- Python 3.10+
- pipx (설치 필요 — 현재 미설치)
- ffmpeg

## 설치 단계

### 1. pipx 설치

```bash
brew install pipx && pipx ensurepath
```

### 2. ImageSorcery MCP 설치

```bash
pipx install imagesorcery-mcp
```

### 3. 모델 다운로드

```bash
imagesorcery-mcp --post-install
```

YOLO 4종(yoloe-11l-seg-pf.pt, yoloe-11s-seg-pf.pt, yoloe-11l-seg.pt, yoloe-11s-seg.pt) + CLIP 모델이 자동 다운로드됨.

### 4. 글로벌 MCP 설정

`~/.claude/settings.json`에 `mcpServers` 키를 추가:

```json
"mcpServers": {
  "imagesorcery-mcp": {
    "command": "imagesorcery-mcp",
    "transportType": "stdio",
    "autoApprove": ["blur", "change_color", "config", "crop", "detect", "draw_arrows", "draw_circles", "draw_lines", "draw_rectangles", "draw_texts", "fill", "find", "get_metainfo", "ocr", "overlay", "resize", "rotate"],
    "timeout": 100
  }
}
```

**주의**: 기존 `settings.json`에 `mcpServers` 키가 없으므로 새로 추가. 기존 설정(`env`, `alwaysThinkingEnabled` 등)은 보존.

### 5. Claude Code 재시작

Claude Code를 재시작하여 MCP 서버 연결.

## 제공 도구 (17개)

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

## 확인

- Claude Code 시작 시 `imagesorcery-mcp` 연결 로그 확인
- 임의 도구(예: `get_metainfo`) 호출 테스트하여 정상 응답 확인

## 출처

- https://github.com/sunriseapps/imagesorcery-mcp

## See also

- [Z AI MCP 서버 설정](/wiki/important/setup/zai-mcp-server/) — 클라우드 기반 이미지 분석 MCP (비교)
- [Figma MCP 설정](/wiki/important/setup/figma-mcp-setup/) — 디자인 도구 MCP
- [코덱스 이미지 무제한 생성 설정](/wiki/important/setup/codex-image-generation/) — 이미지 생성 설정
- [ImageSorcery MCP 소스](/wiki/sources/imagesorcery-mcp/) — 소스 요약 페이지
