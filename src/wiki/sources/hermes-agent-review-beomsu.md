---
title: 고범수 — Hermes Agent 독스 리뷰
created: 2026-05-04
updated: 2026-05-04
tags: [source, hermes-agent, ai-agent, self-improving, nous-research, agent-architecture]
sources: [2026-05-04-hermes-agent-review-beomsu.md]
status: stable
category: sources
---

# 고범수 — Hermes Agent 독스 리뷰

## 개요
고범수(Beomsu Koh)가 Hermes Agent 공식 독스와 GitHub를 깊게 읽으며 분석한 기술 리뷰. "LLM + Harness" 멘탈 모델, Closed Learning Loop 구조, Memory vs Conversation 분리, Prompt Cache 전략, 컨텍스트 윈도우 관리 등 핵심 아키텍처를 독스 기반으로 정리. 기존 제로초의 실전 비교와 보완되는 기술 심층 분석.

## 핵심 내용

### "LLM + Harness" 멘탈 모델
- Hermes는 단순 LLM 래퍼(API 호출기)가 아님
- LLM에 "하네스(통제 도구)"를 결합한 구조
- 하네스 = LLM이 원하는 방향으로 동작하도록 하는 도구 세트
- 구성요소: Persistent sessions, Tool use, Skills, Memory, Messaging gateway, Scheduling, Approval, Sandbox

### 파일시스템 구조 `~/.hermes/`
- 숨겨진 디렉토리(도트파일)에 전체 상태 저장
- 설정 파일, 환경 변수, API 키, 메모리, 워크플로우, 크론, 세션
- "프로그램이면 파일에 저장되어 있을 것"이라는 접근으로 구조 파악

### Memory vs Conversation 분리
- Conversation = 전체 대화 기록 (전부 보존)
- Memory = 큐레이션된 핵심 지식 (MEMORY.md, USER.md)
- 비유: "전매추로 대화했으면 점심 메뉴만 기억하듯 추출"
- 프롬프트로 주입/삭제 가능

### Closed Learning Loop
1. 작업 경험 → 자동 스킬 생성
2. 스킬 사용 중 → 자동 개선
3. 지식 영속화 → FTS5로 세션 간 회상
4. 모델 웨이트 업데이트는 불가 → 지식은 메모리/스킬로 축적

### Prompt Cache 보존 전략
- 스킬을 사용하는 이유 중 하나가 프롬프트 캐시 유지
- 스킬 앞에 호출 조건을 미리 명시 → 필요할 때만 로드
- 컨텍스트 중간 변경 = 캐시 무효화 = 비용 증가

### 컨텍스트 윈도우 관리
- 100% 채우면 성능 저하 (디스크 용량과 비유)
- 주기적 압축(compress) 필수
- 작업 종료 시 세션 초기화 권장
- execute_code로 다단계를 단일 호출로 압축 → 비용 절감

### 실사용 체감
- Discord: 스킬 호출 시 스레드 자동 생성, 승인 버튼 UI. 슬랙 사용 방식과 유사
- OpenClaw 대비 "진짜 가독성 좋게" 작업 진행
- CLI도 Claude Code와 유사한 코딩 플랫폼으로 활용 가능
- Docker 샌드박스: 신뢰 불가 코드 격리. "이게 되네?"

### Claude Code와의 비교
- Claude Code는 코딩에 국소적 적용, 명시적 스킬 업데이트 필요
- Hermes는 더 큰 범위에서 자동 스킬 관리
- "좋은 문제를 가진 사람이 미디어를 잘한다"

## 원문 인용
> "좀 괜찮은 멘탈 모델은 LM에다가 하네스를 붙인 거다. 이 하네스가 말을 조종하는 도구를 의미한다."

> "메모리랑 대화 내용이 조금 다릅니다. 전매추로 대화를 했으면 점심 메뉴만 기억하듯 뽑힙니다."

> "프롬프트 캐시를 안 깨려고 스킬을 쓰는 거기도 합니다. 필요할 때만 호출할 수 있으니까 컨텍스트 용량을 아낄 수 있어요."

> "명령 많이 쓰지 말라. 한 번에 탁 해라. 트랜스포머는 이전 것들이 다 같이 들어가야 되니까."

## See also
- [고범수](/wiki/entities/beomsu-koh/)
- [Hermes Agent](/wiki/entities/hermes-agent/)
- [제로초 OpenClaw vs Hermes 비교](/wiki/sources/zerocho-openclaw-vs-hermes/)
- [OpenClaw vs Hermes Agent](/wiki/comparisons/openclaw-vs-hermes-agent/)
- [LLM + Harness 모델](/wiki/concepts/llm-harness-model/)
- [Closed Learning Loop](/wiki/concepts/closed-learning-loop/)
- [파일시스템 기반 메모리](/wiki/concepts/filesystem-based-memory/)
- [컨텍스트 로트 방지](/wiki/concepts/context-rot-prevention/)
- [Hermes Agent 설정 가이드](/wiki/important/setup/hermes-agent-setup/)
