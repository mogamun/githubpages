---
title: mcp-chrome
created: 2026-04-28
updated: 2026-04-28
tags: [source, mcp, chrome, browser-automation]
sources: [2026-04-28-mcp-chrome.md]
status: stable
category: sources
---

# mcp-chrome: Chrome Extension 기반 MCP 서버

## 개요
hangwin이 개발한 Chrome Extension 기반 MCP 서버. 사용자의 실제 Chrome 브라우저를 AI 어시스턴트(Claude, VS Code, Cursor, Windsurf)가 제어할 수 있게 함. Playwright가 별도의 headless 브라우저를 실행하는 것과 달리 기존 브라우저 환경(로그인, 북마크, 확장 프로그램)을 그대로 활용.

## 핵심 내용
- **Chrome Extension 아키텍처**: MCP 서버를 Chrome 확장 프로그램으로 구현. 별도 프로세스 없이 브라우저 자체가 MCP 서버 역할
- **Streamable HTTP 연결**: MCP 클라이언트와 HTTP로 연결 (STDIO도 지원하지만 HTTP 권장)
- **20+ 툴**: 브라우저 관리(7), 스크린샷(1), 네트워크 모니터링(4), 콘텐츠 분석(4), 인터랙션(3), 데이터 관리(5)
- **시맨틱 검색 내장**: WebAssembly SIMD로 가속화된 벡터 데이터베이스로 열린 탭 전체 AI 검색
- **Playwright MCP 대비 장점**: 기존 로그인 상태 활용, 사용자 환경 보존, 빠른 시작, 더 빠른 응답

## 원문 인용
> Unlike traditional browser automation tools (like Playwright), Chrome MCP Server directly uses your daily Chrome browser, leveraging existing user habits, configurations, and login states.

## See also
- [mcp-chrome 엔티티](/wiki/entities/mcp-chrome/)
- [agent-browser](/wiki/entities/agent-browser/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [API vs CLI vs MCP](/wiki/comparisons/api-vs-cli-vs-mcp/)
- [브라우저 자동화 접근법 비교](/wiki/comparisons/browser-automation-approaches/)
- [mcp-chrome 설정](/wiki/important/setup/mcp-chrome/)
