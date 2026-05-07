---
title: Claude CLI x OpenClaw 연동
created: 2026-04-27
updated: 2026-04-27
tags: [source, youtube, openclaw, claude-code, acp, multi-agent, session-management]
sources: [2026-04-27-conanssam-claude-cli-openclaw.md]
status: stable
category: sources
---

# Claude CLI x OpenClaw 연동

## 개요

OpenClaw에서 Claude Code(Claude CLI)를 연동하는 방법과 멀티에이전트 운영 실전 영상 (27분 3초). ACP(Agent Client Protocol)의 개념, 퍼시스턴트 모드와 세션 스포닝의 차이, 세션 찌꺼기 메모리 누수 해결법, 14개 에이전트 운영 사례를 다룸.

## 핵심 내용

### 1. 독립 에이전트 vs 서브 에이전트

| 구분 | 독립 에이전트 | 서브 에이전트 |
|------|-------------|-------------|
| 워크스페이스 | 별도 생성 | 메인 에이전트 하위 |
| 수명 | 영구 | 세션 종료 시 소멸 |
| 용도 | 전문적 장기 작업 | 긴 일회성 작업 |
| 구조 | 작업 반장 또는 개별 전문가 | 알바생, 하위 도구 |

### 2. ACP (Agent Client Protocol) 4가지 방식

1. **퍼시스턴트 바인딩**: 에이전트 자체를 ACP로 완전 바인딩. Claude Code 세션과 완전 연동되지만 다른 에이전트와 소통 어려움
2. **작업 반장 + 하위 세션 스폰**: 하나를 팀장으로 두고 하위에서 Claude Code 호출
3. **특정 채널/토픽 바인딩**: 거의 사용 안 함
4. **Claude CLI 직접 연동**: 4/15 업데이트로 추가, MCP 루프백으로 스킬 공유 (공식 아님)

### 3. 세션 찌꺼기와 메모리 누수

- 문제: 세션 종료 후에도 메모리에 남아 누적 → OpenClaw 단독 10GB 메모리 차지
- 원인: 기본값이 keep (세션 자동 삭제 안 됨)
- 해결:
  - `acp_runtime_ttl`: 세션 자동 만료 시간 (예: 30분)
  - `acp_runtime_max`: 동시 세션 최대 수 (예: 50개)
  - cleanup 프롬프트: "10분 이상 유효한 세션 전부 close"
  - 대시보드에서 죽은 세션 확인 후 정리 요청

### 4. Claude CLI 연동 (4/15 업데이트)

- OpenClaw onboarding 시 "Anthropic Claude Code (Claude CLI)" 선택 가능
- 프로바이더 변경 필요 (기본 Anthropic → 사용자 설정)
- Telegram에서 모델 선택 후 바로 사용 가능 (Opus 4.7 등)
- MCP 루프백 활성화: Claude Code 스킬 + OpenClaw 스킬 동시 사용
- **주의**: 공식 지원이 아니므로 폴백으로 사용. 언제든 차단 가능

### 5. 14개 에이전트 실전 운영

- GPT 5.4 메인, GLM 4.7 자문, 오마이클로 라우팅
- 실전 사례: Obsidian 자료 → 블로그 + 유튜브 + 쓰레드 동시 작업
- 블로그 5개 동시 생성 (건강보험료, 스케일링, 임플란트, 다이어트약, 한방다이어트)
- 쇼츠 7개 자동 업로드 (AI 프렌드 채널)

### 6. AI Korea 한국인 합성 페르소나 데이터셋

- 7백만 개 한국인 합성 페르소나 공개
- 개인정보 제거, 통계 + 시대 데이터 기반
- 용도: "30대 남자 서울 사람들의 관심사" 등 페르소나 시뮬레이션
- 유튜브 구독자 분석 → 비슷한 에이전트 여러 개 생성 → 콘텐츠 평가

## 원문 인용

> "오픈 클로 환경을 OS로 보면 오픈클로 안에 있는 재미니 CLI, 코덱스, 클로드 코드, 오픈 코드 이런 것들을 하나의 앱처럼 사용할 수가 있습니다."
> "세션이 여러 개가 누적이 돼서 오픈 클루만 메모리를 10G를 차지하고 있더라고요."
> "클로드 코드가 공식적으로 지원하는 방식이 아닙니다. 언젠가는 차단이 될 수 있기 때문에 폴백으로 지정해 놓습니다."

## See also

- [OpenClaw](/wiki/entities/openclaw/) — 플랫폼 엔티티
- [ACP](/wiki/concepts/agent-client-protocol/) — 프로토콜 개념
- [GPT 이미지 2.0 + OpenClaw 자동화](/wiki/sources/conanssam-gpt-image-2-openclaw/) — 영상 2 소스
- [Hermes Agent](/wiki/entities/hermes-agent/) — 언급된 독립 에이전트
