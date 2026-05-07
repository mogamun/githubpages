---
title: agent-browser 설치 및 설정
created: 2026-04-28
updated: 2026-04-28
tags: [important, setup-guide, browser-automation, cli, rust]
sources: [2026-04-28-agent-browser.md]
status: stable
category: important
---

# agent-browser 설치 및 설정

## 개요
AI 에이전트용 브라우저 자동화 CLI. 설치 후 브라우저 제어, 스크린샷, 폼 입력 등을 명령어 하나로 수행 가능.

## 전제 조건
- Node.js (npm 설치 시) 또는 Rust/Cargo (Cargo 설치 시)
- macOS / Linux / Windows

## 설치 단계

### 1. 패키지 설치 (글로벌 권장)
```bash
npm install -g agent-browser
```

또는 Homebrew:
```bash
brew install agent-browser
```

또는 Cargo:
```bash
cargo install agent-browser
```

### 2. Chrome 브라우저 다운로드
```bash
agent-browser install
```
Chrome for Testing(Google 공식 자동화 채널)에서 다운로드. 기존 Chrome/Brave 설치는 자동 감지됨.

### 3. Claude Code에 Skills로 통합
```bash
npx skills add vercel-labs/agent-browser
```

## 확인
```bash
agent-browser open example.com
agent-browser snapshot
agent-browser close
```

## 주요 명령어
```bash
agent-browser open <url>              # 브라우저 열기 + 이동
agent-browser snapshot                # 접근성 트리 + ref 가져오기
agent-browser click @e2               # ref로 클릭
agent-browser fill @e3 "text"         # ref로 입력
agent-browser screenshot page.png     # 스크린샷
agent-browser close                   # 브라우저 닫기
agent-browser chat "명령어"           # AI 자연어 제어
```

## 설정 파일
`./agent-browser.json` 또는 `~/.agent-browser/config.json`:
```json
{
  "headed": true,
  "proxy": "http://localhost:8080",
  "profile": "./browser-data"
}
```

## 클라우드 연동
| 제공자 | 환경변수 |
|--------|----------|
| Browserless | `BROWSERLESS_API_KEY` |
| Browserbase | `BROWSERBASE_API_KEY` |
| Browser Use | `BROWSER_USE_API_KEY` |
| Kernel | `KERNEL_API_KEY` |

## 출처
- https://github.com/vercel-labs/agent-browser
- https://agent-browser.dev

## See also
- [agent-browser (엔티티)](/wiki/entities/agent-browser/)
- [Playwright MCP 설정](/wiki/important/setup/playwright-mcp-setup/) — MCP 기반 대안
- [Figma MCP 설정](/wiki/important/setup/figma-mcp-setup/)
