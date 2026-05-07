---
title: Agent Client Protocol (ACP)
created: 2026-04-27
updated: 2026-04-27
tags: [concept, protocol, multi-agent, orchestration, openclaw]
sources: [2026-04-27-conanssam-claude-cli-openclaw.md]
status: stable
category: concepts
---

# Agent Client Protocol (ACP)

## 정의

OpenClaw 환경에서 다양한 AI CLI 도구(Gemini CLI, Codex, Claude Code, Open Code 등)를 하나의 앱처럼 통합하여 사용하기 위한 프로토콜. OpenClaw를 OS로 보고, 내부 AI 도구들을 애플리케이션처럼 다루는 개념.

## 핵심 원칙

### 1. 퍼시스턴트 모드 (정직원)
- 에이전트를 완전히 바인딩하여 지속적으로 사용
- `openclaw.json`에 선언: 에이전트에 `persistent` 속성 설정
- 장점: 항상 연결 상태 유지, 즉시 사용 가능
- 단점: 다른 에이전트와의 소통이 어려움, 바인딩 해제 시 다른 에이전트 도움 필요
- 적합: Claude Code를 전용 보수로 사용할 때

### 2. 세션 스폰 (외주)
- 에이전트를 호출하여 작업 수행 후 해제
- send: 단순 전송 (결과 수신 안 됨)
- spawn: 전송 + 결과 수신 (비동기 처리)
- 장점: 유연한 호출, 다른 에이전트와 병렬 작업 가능
- 단점: 반복 호출 시 오버헤드
- 적합: 이번 대화만 사용하고 끝낼 때

### 3. 세션 관리
- 세션 찌꺼기: 종료된 세션이 메모리에 남아 누수 발생 (최대 10GB)
- 해결책:
  - TTL 설정: `acp_runtime_ttl` (예: 30분)
  - 최대 세션 수: `acp_runtime_max` (예: 50개)
  - Cleanup 프롬프트: "10분 이상 유효한 세션 전부 close 해"
  - `acp_close` 명령어로 수동 정리

### 4. MCP 루프백
- Claude Code CLI를 OpenClaw에 연결 시, MCP 루프백으로 양쪽 스킬 공유
- Claude Code의 스킬(슈퍼파워스, OMC 등)과 OpenClaw 스킬 모두 사용 가능

## 적용 사례

### 코난쌤의 14개 에이전트 운영
- GPT 5.4 메인 에이전트 + GLM 4.7 자문
- 오마이클로로 라우팅
- 블로그 5개 동시 생성, 쇼츠 7개 자동 업로드
- 작업 반장(팀장) + 직원(하위 에이전트) 구조

### Claude Code 연동 주의사항
- Claude CLI는 4/15 업데이트로 OpenClaw 지원 시작했으나 **공식 지원 아님**
- 언제든 차단될 수 있으므로 폴백(fallback)으로 사용 권장
- `claude -R`로 세션 조회가 안 될 수 있음 — 세션 ID로 직접 접근 필요

## See also

- [OpenClaw](/wiki/entities/openclaw/) — ACP를 구현한 플랫폼
- [코난쌤](/wiki/entities/conanssam/) — ACP 실전 운영자
- [멀티에이전트 계층](/wiki/concepts/multi-agent-hierarchy/) — 에이전트 계층 구조 패턴
- [에이전트 조정](/wiki/concepts/agent-coordination/) — 멀티에이전트 협업 패턴
- [코난쌤 Claude CLI x OpenClaw](/wiki/sources/conanssam-claude-cli-openclaw/) — 상세 소스
