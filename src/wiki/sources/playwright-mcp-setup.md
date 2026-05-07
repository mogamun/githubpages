---
title: Playwright MCP 글로벌 설정
created: 2026-04-22
updated: 2026-04-22
tags: [source, claude-code, mcp, playwright, setup]
sources: [2026-04-22-playwright-mcp-setup.md]
status: stable
category: sources
---

# Playwright MCP 글로벌 설정

## 개요
Claude Code에 Playwright 브라우저 자동화 MCP 서버를 글로벌로 추가하는 명령어.

## 핵심 내용
- **명령어**: `claude mcp add playwright --scope user -- npx -y @playwright/mcp@latest`
- **효과**: 모든 프로젝트에서 브라우저 자동화 도구 사용 가능
- **도구**: browser_navigate, browser_click, browser_snapshot, browser_take_screenshot, browser_type, browser_fill_form 등
- **활용**: YouTube community post 등 쿠키 동의 벽이 있는 페이지 접근, 웹 UI 자동화

## 원문 인용
> claude mcp add playwright --scope user -- npx -y @playwright/mcp@latest

## See also
- [Claude Code](/wiki/entities/claude-code/)
- [GeekNews Weekly #352](/wiki/sources/geeknews-weekly-352/)
