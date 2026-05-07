---
title: Z AI MCP 서버 설정
created: 2026-04-24
updated: 2026-04-27
tags: [important, setup-guide, mcp, zai, image-analysis]
sources: [2026-04-24-setup-zai-mcp-server.md]
status: stable
category: important
---

# Z AI MCP 서버 설정

## 개요
Z AI의 이미지 분석, 데이터 시각화 분석, UI 비교, 동영상 분석 등 기능을 Claude Code에서 사용하기 위한 MCP 서버 설정. Z AI 사용 시 **반드시 필요**.

## 전제 조건
- Node.js 설치됨 (npx 사용 가능)

## 설치 단계

1. **Claude Code MCP 설정에 추가**
   ```bash
   claude mcp add zai -- npx @z_ai/coding-helper
   ```

2. **또는 수동으로 settings.json에 추가**
   ```json
   {
     "mcpServers": {
       "zai-mcp-server": {
         "command": "npx",
         "args": ["@z_ai/coding-helper"]
       }
     }
   }
   ```

3. **Claude Code 재시작** 후 MCP 서버 연결 확인

## 제공 도구

| 도구 | 기능 |
|------|------|
| `analyze_image` | 범용 이미지 분석 |
| `analyze_data_visualization` | 차트/그래프/대시보드 분석 |
| `analyze_video` | 동영상 콘텐츠 분석 (MP4, MOV, M4V, 최대 8MB) |
| `ui_to_artifact` | UI 스크린샷 → 코드/프롬프트/스펙 변환 |
| `ui_diff_check` | 두 UI 스크린샷 비교 |
| `diagnose_error_screenshot` | 에러 스크린샷 진단 |
| `extract_text_from_screenshot` | OCR 텍스트 추출 |
| `understand_technical_diagram` | 기술 다이어그램 분석 (아키텍처, 플로우차트, UML 등) |

## 확인
- Claude Code 시작 시 MCP 서버 연결 로그에서 `zai-mcp-server` 확인
- `analyze_image` 등 도구 호출 시 정상 응답하면 설정 완료

## 출처
- 사용자 지시 (2026-04-24)

## See also
- [Playwright MCP 설정](/wiki/important/setup/playwright-mcp-setup/) — 브라우저 자동화 MCP
- [코덱스 이미지 설정](/wiki/important/setup/codex-image-generation/) — 이미지 생성 MCP
- [ImageSorcery MCP 설정](/wiki/important/setup/imagesorcery-mcp-setup/) — 로컬 이미지 처리 MCP (17개 도구, YOLO/OCR/CLIP)
