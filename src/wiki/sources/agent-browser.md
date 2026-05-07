---
title: agent-browser — Vercel Labs 브라우저 자동화 CLI
created: 2026-04-28
updated: 2026-04-28
tags: [source, browser-automation, ai-agent, cli, rust, vercel]
sources: [2026-04-28-agent-browser.md]
status: stable
category: sources
---

# agent-browser — Vercel Labs 브라우저 자동화 CLI

## 개요
Vercel Labs가 개발한 AI 에이전트용 브라우저 자동화 CLI. 순수 Rust 데몬 + CLI 아키텍처로 Node.js 없이 동작. Playwright MCP 대비 82% 적은 컨텍스트로 동등한 브라우저 자동화 수행.

## 핵심 내용
- **Ref 기반 요소 선택**: snapshot으로 @e1, @e2 참조를 생성하고 이를 통해 상호작용. CSS 선택자보다 AI에게 최적화
- **클라이언트-데몬 아키텍처**: Rust 데몬이 백그라운드에서 유지, 빠른 후속 명령 실행
- **82% 적은 컨텍스트**: Playwright MCP 대비 동일 작업을 훨씬 적은 토큰으로 수행
- **Skills 통합**: `npx skills add vercel-labs/agent-browser`로 Claude Code, Cursor 등에 통합
- **다중 클라우드**: Browserless, Browserbase, Browser Use, Kernel, AgentCore 지원
- **React DevTools**: 컴포넌트 트리, props, hooks, state 검사 기능 내장

![](/wiki-assets/Pasted image 20260507115527.png)
## 원문 인용
> agent-browser uses a client-daemon architecture: Rust CLI parses commands, communicates with daemon. Pure Rust daemon using direct CDP, no Node.js required.

## See also
- [agent-browser (엔티티)](/wiki/entities/agent-browser/)
- [Vercel Labs](/wiki/entities/vercel-labs/)
- [Ref 기반 선택](/wiki/concepts/ref-based-selection/)
- [클라이언트-데몬 아키텍처](/wiki/concepts/client-daemon-architecture/)
- [간결성-정확성 트레이드오프](/wiki/concepts/brevity-accuracy-tradeoff/)
- [컨텍스트 로트 방지](/wiki/concepts/context-rot-prevention/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Claude Code](/wiki/entities/claude-code/)
