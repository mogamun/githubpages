---
title: mcp-chrome
created: 2026-04-28
updated: 2026-04-28
tags: [entity, tool, mcp, chrome, browser-automation, chrome-extension]
sources: [2026-04-28-mcp-chrome.md]
status: stable
category: entities
---

# mcp-chrome

## 정체
- **Type**: Chrome Extension 기반 MCP 서버
- **Developer**: hangwin (GitHub)
- **Install**: `npm install -g mcp-chrome-bridge` + Chrome Extension 로드
- **GitHub**: https://github.com/hangwin/mcp-chrome
- **License**: MIT
- **Language**: TypeScript 5.8+

## 역할
AI 어시스턴트(Claude, VS Code, Cursor, Windsurf)가 사용자의 실제 Chrome 브라우저를 제어할 수 있게 하는 MCP 서버. Playwright와 달리 별도의 headless 브라우저가 아닌 사용자의 일상적 브라우저 환경을 그대로 활용.

## 핵심 특징
- **기존 브라우저 재사용**: 로그인 상태, 북마크, 확장 프로그램, 설정 모두 보존
- **완전 로컬**: 순수 로컬 MCP 서버로 사용자 프라이버시 보장
- **Streamable HTTP**: HTTP 기반 MCP 연결 (STDIO도 지원)
- **시맨틱 검색**: WebAssembly SIMD 가속 벡터 DB로 열린 탭 전체 AI 검색 (4-8배 빠른 벡터 연산)
- **20+ 툴**: 브라우저 관리, 스크린샷, 네트워크 캡처, 콘텐츠 분석, 인터랙션, 북마크/히스토리 관리
- **크로스 탭**: 여러 탭 간 컨텍스트 공유

## 관련 프로젝트/맥락
- **agent-browser**와 비교: agent-browser는 CLI 기반 Rust 데몬(별도 Chrome 다운로드), mcp-chrome은 Extension 기반(기존 Chrome 사용)
- **Playwright MCP**와 비교: Playwright는 headless 독립 브라우저, mcp-chrome은 실제 사용자 브라우저
- **API vs CLI vs MCP** 비교에서 MCP 경로에 해당
- Claude Code, Cherry Studio 등 MCP 클라이언트에서 사용 가능

## See also
- [mcp-chrome 소스](/wiki/sources/mcp-chrome/)
- [agent-browser](/wiki/entities/agent-browser/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Claude Code](/wiki/entities/claude-code/)
- [브라우저 자동화 접근법 비교](/wiki/comparisons/browser-automation-approaches/)
- [mcp-chrome 설정 가이드](/wiki/important/setup/mcp-chrome/)
- [API vs CLI vs MCP](/wiki/comparisons/api-vs-cli-vs-mcp/)
