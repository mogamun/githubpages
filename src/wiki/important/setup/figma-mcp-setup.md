---
title: Figma MCP 서버 설정
created: 2026-04-24
updated: 2026-04-24
tags: [important, setup, figma, mcp, claude-code]
sources: [2026-04-24-goddaehee-figma-mcp-setup.md]
category: important
---

# Figma MCP 서버 설정

## 개요
Figma 공식 MCP 서버(원격)를 Claude Code에 연결하는 설정. OAuth 인증만 완료하면 즉시 사용 가능.

## 설치 명령어

### Claude Code — 현재 프로젝트에만 설치
```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

### Claude Code — 모든 프로젝트에서 사용
```bash
claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp
```

### .mcp.json 직접 설정
```json
{
  "mcpServers": {
    "figma": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

### Claude Desktop 설정
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "figma": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

## 인증 절차 (OAuth)
1. Claude Code에서 `/mcp` 입력
2. **figma** 항목 선택
3. **Authenticate** 클릭
4. 브라우저에서 Figma 로그인
5. **Allow Access** 클릭 → 완료

**인증 후 재시작 필요**: `Authentication successful, but server reconnection failed` 메시지가 뜨면 Claude Code를 완전히 종료 후 재실행.

## 주의사항
- PAT(Personal Access Token) 미지원 — **OAuth만** 사용
- Starter 플랜: 월 6회 Tool 호출 제한
- 인증 만료 시 `/mcp`에서 다시 Authenticate

## 출처
- 원본: [갓대희 블로그 — Figma MCP 설치 및 사용방법](https://goddaehee.tistory.com/545)
- 공식: [Figma MCP Server 개발자 문서](https://developers.figma.com/docs/figma-mcp-server/)
