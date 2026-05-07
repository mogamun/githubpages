---
title: mcp-chrome 설정
created: 2026-04-28
updated: 2026-04-28
tags: [important, setup-guide, mcp, chrome, browser-automation]
sources: [2026-04-28-mcp-chrome.md]
status: stable
category: important
---

# mcp-chrome 설정

## 개요
Chrome Extension 기반 MCP 서버를 설치하여 AI 어시스턴트가 사용자의 실제 Chrome 브라우저를 제어할 수 있게 설정.

## 전제 조건
- Node.js >= 20.0.0
- Chrome 또는 Chromium 브라우저

## 설치 단계

### 1. Bridge 글로벌 설치
```bash
npm install -g mcp-chrome-bridge
```

### 2. Chrome Extension 다운로드
GitHub Releases에서 최신 확장 프로그램 다운로드:
```
https://github.com/hangwin/mcp-chrome/releases
```

### 3. Chrome Extension 로드
1. Chrome에서 `chrome://extensions/` 열기
2. "개발자 모드" 활성화
3. "압축해제된 확장 프로그램을 로드합니다" 클릭
4. 다운로드한 확장 프로그램 폴더 선택
5. 확장 프로그램 아이콘 클릭 → "Connect" 클릭

### 4. Claude Code에 MCP 추가 (Streamable HTTP — 권장)
```bash
claude mcp add chrome-mcp-server --scope user --transport http --url http://127.0.0.1:12306/mcp
```

또는 `~/.claude/settings.json`에 직접 추가:
```json
{
  "mcpServers": {
    "chrome-mcp-server": {
      "type": "streamableHttp",
      "url": "http://127.0.0.1:12306/mcp"
    }
  }
}
```

### 4-1. STDIO 대안 (Windows 또는 HTTP 불가 시)
```json
{
  "mcpServers": {
    "chrome-mcp-stdio": {
      "command": "npx",
      "args": [
        "node",
        "/path/to/mcp-chrome-bridge/dist/mcp/mcp-server-stdio.js"
      ]
    }
  }
}
```

## 확인
1. Chrome 확장 프로그램에서 "Connected" 상태 확인
2. Claude Code에서 MCP 서버 연결 확인
3. `get_windows_and_tabs` 도구로 열린 탭 목록 반환 테스트

## 출처
- https://github.com/hangwin/mcp-chrome

## See also
- [mcp-chrome 소스](/wiki/sources/mcp-chrome/)
- [agent-browser 설정](/wiki/important/setup/agent-browser/)
- [Playwright MCP 설정](/wiki/important/setup/figma-mcp-setup/)
- [브라우저 자동화 접근법 비교](/wiki/comparisons/browser-automation-approaches/)
