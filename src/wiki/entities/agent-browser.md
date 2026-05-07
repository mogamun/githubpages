---
title: agent-browser
created: 2026-04-28
updated: 2026-04-28
tags: [entity, tool, browser-automation, ai-agent, cli, rust, vercel]
sources: [2026-04-28-agent-browser.md]
status: stable
category: entities
---

# agent-browser

## Identity
- **Type**: AI 에이전트용 브라우저 자동화 CLI
- **Developer**: [Vercel Labs](/wiki/entities/vercel-labs/)
- **Install**: `npm install -g agent-browser`
- **GitHub**: https://github.com/vercel-labs/agent-browser (30.8k stars)
- **Website**: https://agent-browser.dev
- **License**: Apache-2.0
- **Language**: Rust 85%, TypeScript 12.4%

## Key Features
- **Ref 기반 요소 선택**: `snapshot`으로 @e1, @e2 참조 생성 → `click @e2`로 상호작용. CSS 선택자보다 AI 친화적
- **클라이언트-데몬 아키텍처**: Rust 데몬이 백그라운드 유지, 빠른 후속 명령. Node.js 불필요
- **Playwright MCP 대비 82% 적은 컨텍스트**: 동일 브라우저 자동화를 훨씬 적은 토큰으로 수행
- **AI Chat 모드**: 자연어로 브라우저 제어 (`agent-browser chat "google에서 고양이 검색"`)
- **다중 클라우드**: Browserless, Browserbase, Browser Use, Kernel, AWS AgentCore
- **iOS Simulator**: Safari + WebDriver로 iOS 브라우저 자동화
- **React DevTools**: 컴포넌트 트리, props, hooks, state, render 프로파일링
- **Skills 통합**: `npx skills add vercel-labs/agent-browser`로 Claude Code/Cursor 등에 통합
- **보안**: 인증 vault, 도메인 allowlist, action policy, content boundary markers

## 설치
```bash
npm install -g agent-browser
agent-browser install  # Chrome for Testing 다운로드
```

## Relevance
MCP 없이도 브라우저 자동화가 가능함을 보여주는 사례. CLI 기반 접근이 MCP 프로토콜 기반보다 컨텍스트 효율적일 수 있음을 실증.

## See also
- [Vercel Labs](/wiki/entities/vercel-labs/)
- [Claude Code](/wiki/entities/claude-code/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Ref 기반 선택](/wiki/concepts/ref-based-selection/)
- [클라이언트-데몬 아키텍처](/wiki/concepts/client-daemon-architecture/)
- [agent-browser 소스](/wiki/sources/agent-browser/)
- [agent-browser 설정](/wiki/important/setup/agent-browser/)
- [mcp-chrome](/wiki/entities/mcp-chrome/)
- [브라우저 자동화 접근법 비교](/wiki/comparisons/browser-automation-approaches/)
