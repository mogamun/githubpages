---
title: OpenClaw + Codex 이미지 자동화 설정
created: 2026-04-27
updated: 2026-04-27
tags: [important, setup, openclaw, codex, image-generation, gpt-image, automation]
sources: [2026-04-27-conanssam-gpt-image-2-openclaw.md]
status: stable
category: important
---

# OpenClaw + Codex 이미지 자동화 설정

## 개요

OpenClaw에 `openclaw-codex-image-gen` 플러그인을 설치하여, Codex CLI를 통해 GPT 이미지 2.0 이미지를 자동으로 대량 생성하는 설정 가이드. 한 번의 명령으로 30개 이상의 이미지를 자동 생성할 수 있으며, 429 라운드로빈으로 복수 계정을 자동 전환한다.

## 전제 조건

- OpenClaw 설치됨 (https://github.com/openclaw/openclaw)
- Codex CLI 설치 및 로그인 완료
- OpenAI 플러스 계정 (복수 계정 권장, 429 라운드로빈용)
- ohmyclaw(오마이클로) 설치 (라우팅용, 선택)

## 설치 단계

### 1. 플러그인 저장소 클론

```bash
# jkf87/openclaw-codex-image-gen 플러그인 다운로드
git clone https://github.com/jkf87/openclaw-codex-image-gen.git
```

### 2. OpenClaw에 플러그인 설치

```
# OpenClaw 에이전트에게 설치 지시
OpenClaw 에이전트에게 플러그인 링크를 전달하고 설치 요청
```

플러그인이 등록하면 `codex_image_generate` 도구가 OpenClaw 에이전트에 추가된다.

### 3. Codex 로그인 확인

```bash
# Codex CLI 로그인 상태 확인
codex auth status
```

로그인이 되어 있어야 이미지 생성이 가능하다.

### 4. 이미지 생성 테스트

```
# OpenClaw 에이전트에게 이미지 생성 요청
프로필 시트 이미지 만들어줘
```

codex responses로 `image_generation` 툴을 직접 호출하여 이미지를 생성한다.

### 5. 429 라운드로빈 설정 (복수 계정)

플러스 계정을 여러 개 사용하는 경우:
- ohmyclaw Codex OAuth pool이 복수 계정을 관리
- 429 에러(요청 한도) 발생 시 자동으로 다음 계정으로 전환
- 플러스 계정 3개 기준으로 번갈아가며 사용
- 한국어+영어 트리거 라우팅 지원

### 6. 대량 이미지 생성

```
# 30개 이상 이미지 한 번에 생성
다음 주제별로 이미지를 만들어줘:
1. 프로필 시트
2. 표정 비교
3. 스타일링 보드
4. 썸네일
5. 포스터
...
```

OpenClaw가 각 항목별로 자동으로 Codex를 호출하여 이미지를 생성한다.

## 확인

- OpenClaw 대시보드에서 생성된 이미지 확인
- Codex CLI에서 토큰 사용량 확인 (5시간 주간 한도)
- 429 에러 발생 시 자동 계정 전환 되는지 로그 확인

## 주의사항

- Codex CLI 토큰은 주간 5시간 한도. 대량 생성 시 토큰 관리 필요
- 컨텍스트 주의: ChatGPT 대화 내역이 이미지 결과에 영향. 새 대화에서 시작 권장
- 동일 프롬프트라도 이전 대화 컨텍스트가 섞일 수 있으므로 명시적 지시 필요
- "한국어로 해줘" / "영어로 해줘" 명시적으로 반복 요청

## 출처

- 플러그인 저장소: https://github.com/jkf87/openclaw-codex-image-gen
- OpenClaw GitHub: https://github.com/openclaw/openclaw
- 참고 영상: https://www.youtube.com/watch?v=oBO8GkhoU7I

## See also

- [OpenClaw](/wiki/entities/openclaw/) — 플랫폼 엔티티
- [코덱스 이미지 무제한 설정](/wiki/important/setup/codex-image-generation/) — 기존 Codex CLI 이미지 설정
- [GPT 이미지 2.0 + OpenClaw 자동화](/wiki/sources/conanssam-gpt-image-2-openclaw/) — 상세 소스
- [소스놀이터 GPT 이미지 2.0 코덱스 웹툰](/wiki/sources/gpt-image-2-codex-webtoon/) — 동일 주제 소스
