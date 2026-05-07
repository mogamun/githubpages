---
title: Claude Code
created: 2026-04-16
updated: 2026-04-29
tags: [entity, tool, anthropic, cli, ai-agent]
sources: [claude-code-game-studios.md, 2026-04-22-geeknews-weekly-352.md, 2026-04-22-playwright-mcp-setup.md, 2026-04-27-claude-mcp-production-agents.md, 2026-04-29-claude-managed-agents-memory.md]
status: stable
category: entities
---

# Claude Code

## Identity
- **Type**: AI 코딩 CLI 도구
- **Developer**: Anthropic (Boris Cherny 등)
- **Install**: `npm install -g @anthropic-ai/claude-code`

## Key Features (from Game Studios usage)
- **Subagents**: 커스텀 에이전트 정의 (49개까지 확장 가능)
- **Skills**: 슬래시 명령어 시스템 (72개까지)
- **Hooks**: 자동화된 검증 (커밋, 푸시, 세션 라이프사이클)
- **Rules**: 경로 기반 코딩 표준
- **Settings**: 권한 관리, 안전 규칙

## 숨겨진 기능 (Boris Cherny 공개, 2026-04)
- `/loop`: 최대 1주일 자동 반복 작업
- `/batch`: 수천 개 워크트리 병렬 처리
- `--teleport`: 모바일↔데스크탑 세션 이동
- `NO_FLICKER` 모드: `CLAUDE_CODE_NO_FLICKER=1` 화면 깜빡임 해결

## 소스 코드 유출 사태 (2026-04)
- npm 패키지 소스맵 파일 포함으로 전체 소스 노출 (804파일, 22만줄)
- 내부 구조: anti-distillation 가짜 도구, undercover 모드, 욕설 정규식
- 실험 기능: 자율 에이전트 KAIROS, Tamagotchi 동반자 시스템
- 11단계 에이전트 루프, 50개 이상 도구 체계

## MCP 서버
- **Playwright MCP**: `claude mcp add playwright --scope user -- npx -y @playwright/mcp@latest` — 브라우저 자동화 (쿠키 동의 벽 통과, 웹 스크래핑)
- **mcp-chrome**: Chrome Extension 기반 MCP — 사용자의 실제 Chrome 브라우저 제어 (Streamable HTTP)

## Skills 통합
- **agent-browser**: `npx skills add vercel-labs/agent-browser` — CLI 기반 브라우저 자동화. Playwright MCP 대비 82% 적은 컨텍스트

## MCP 생태계에서의 역할 (2026-04)
- Claude Code는 MCP 클라이언트이자 채널 기능의 기반
- MCP SDK 3억 다운로드/월, Claude Cowork·Managed Agents·channels 기반 기술
- CIMD/Vaults로 OAuth 표준화, Tool Search/Programmatic Tool Calling으로 컨텍스트 효율화
- **Managed Agents Memory (2026-04-23)**: 파일시스템 기반 메모리 — Claude Code의 CLAUDE.md/memory와 동일 패턴의 클라우드 구현

## Relevance
이 위키의 실행 환경. LLM Wiki 에이전트 자체도 Claude Code 위에서 동작함.

## See also
- [Claude Code Game Studios](/wiki/entities/0LLMWiki/wiki/sources/claude-code-game-studios/)
- [GeekNews Weekly #352](/wiki/sources/geeknews-weekly-352/)
- [Caveman 토큰 절약](/wiki/sources/caveman-token-reduction/)
- [Playwright MCP 설정](/wiki/sources/playwright-mcp-setup/)
- [MCP 프로토콜](/wiki/entities/mcp-protocol/)
- [Anthropic MCP 프로덕션 패턴](/wiki/sources/claude-mcp-production-agents/)
- [Managed Agents Memory](/wiki/sources/claude-managed-agents-memory/)
- [agent-browser](/wiki/entities/agent-browser/)
- [mcp-chrome](/wiki/entities/mcp-chrome/)
