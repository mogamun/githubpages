---
title: ImageSorcery MCP
created: 2026-04-27
updated: 2026-04-27
tags: [entity, mcp, image-processing, opencv, yolo, ocr, clip]
sources: [2026-04-27-imagesorcery-mcp.md]
status: stable
category: entities
---

# ImageSorcery MCP

## 정체

Python 기반 로컬 이미지 처리 MCP 서버. 17개 이미지 처리 도구를 제공. OpenCV, Ultralytics YOLO, EasyOCR, CLIP 기반으로 구동. sunriseapps에서 개발, MIT 라이선스.

## 역할

- Claude Code / Claude Desktop에서 로컬 이미지 처리 도구 제공
- 객체 감지(YOLO), OCR(EasyOCR), 이미지 검색(CLIP)을 외부 API 없이 실행
- 드로잉 도구(화살표, 원, 사각형, 텍스트)로 이미지 어노테이션
- 리사이즈, 크롭, 회전, 블러 등 기본 이미지 조작
- 이미지 오버레이/합성 기능
- pipx로 글로벌 설치하여 시스템 전체에서 사용 가능

## 관련 프로젝트/맥락

- **개발자**: sunriseapps
- **라이선스**: MIT
- **설치**: pipx install imagesorcery-mcp (권장)
- **모델**: YOLO 4종(yoloe-11l/s-seg-pf.pt, yoloe-11l/s-seg.pt) + CLIP
- **GitHub**: https://github.com/sunriseapps/imagesorcery-mcp
- **PyPI**: https://pypi.org/project/imagesorcery-mcp/
- **Z AI MCP와 비교**: Z AI는 클라우드 API 기반 분석, ImageSorcery는 로컬 처리

## See also

- [ImageSorcery MCP 소스](/wiki/sources/imagesorcery-mcp/) — 소스 요약 페이지
- [ImageSorcery MCP 설정 가이드](/wiki/important/setup/imagesorcery-mcp-setup/) — 설치 설정 가이드
- [Z AI MCP 서버](/wiki/entities/zai-mcp-server/) — 클라우드 기반 이미지 분석 MCP
- [Figma MCP 설정](/wiki/important/setup/figma-mcp-setup/) — 디자인 도구 MCP
- [크로마키 프롬프트](/wiki/sources/image-prompt-chroma-key/) — 이미지 배경 분리
