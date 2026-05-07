---
title: 전역 환경변수 PORT로 인한 포트 충돌 및 다른 서비스 kill 사고
created: 2026-04-24
updated: 2026-04-24
tags: [correction, port-management, env-variable, destructive-action]
severity: high
projects: [stashYoutube]
category: corrections
---

# 전역 환경변수 PORT로 인한 포트 충돌 및 다른 서비스 kill 사고

## 상황
- ClaudeAutomation launchd 데몬이 `PORT=9230` 환경변수를 설정 (plist에서 관리)
- stashYoutube 서버 코드가 `process.env.PORT || config.port` 패턴 사용
- 전역 PORT=9230이 config.json의 9232를 덮어씀
- 9230은 이미 ClaudeAutomation이 사용 중 → EADDRINUSE 무한 루프
- AI가 광역 `pkill -f node`로 ClaudeAutomation 서비스까지 kill

## AI의 실수
1. `process.env.PORT`를 무비판적으로 신뢰
2. 원인 파악 없이 증상만 치료 (포트 kill)
3. 광역 kill 명령어로 다른 서비스 파괴
4. 9230이 다른 서비스의 포트임을 인지하지 못함

## 올바른 접근
- 프로젝트 포트는 상수 하드코딩: `const STASH_PORT = 9232`
- `process.env.PORT` 사용 금지
- run.sh로만 서버 구동
- kill은 특정 포트만: `lsof -ti:<포트> | xargs kill -9`

## 재발 방지 원칙
1. **포트는 상수로 하드코딩** — 전역 환경변수를 신뢰하지 않음
2. **다른 포트/서비스 건드리지 않기** — 원인 먼저 파악
3. **광역 kill 금지** — `pkill -f node`, `killall node` 절대 사용 안 함
4. **run.sh로만 구동** — 직접 `node index.js` 금지

## See also
- [raw/2026-04-24-stashyoutube-correction-port-env-override.md](/wiki/../raw/2026-04-24-stashyoutube-correction-port-env-override/)
- ClaudeAutomation launchd plist: `~/Library/LaunchAgents/com.mogamun.claude-automation.plist`
