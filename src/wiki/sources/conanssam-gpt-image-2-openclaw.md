---
title: GPT 이미지 2.0 + OpenClaw 자동화
created: 2026-04-27
updated: 2026-04-27
tags: [source, youtube, gpt-image-2, openclaw, codex, image-generation, automation]
sources: [2026-04-27-conanssam-gpt-image-2-openclaw.md]
status: stable
category: sources
---

# GPT 이미지 2.0 + OpenClaw 자동화

## 개요

GPT 이미지 2.0 실전 프롬프트와 OpenClaw + Codex 이미지 자동화 영상 (10분 32초). 다양한 상업용 이미지 생성 프롬프트(프로필 시트, 표정 비교, 스타일링 보드, 썸네일, 포스터, 인포그래픽, 제품 사진, 광고)를 시연하고, openclaw-codex-image-gen 플러그인으로 30개 이상 이미지를 한 번에 자동 생성하는 방법을 공개.

## 핵심 내용

### 1. GPT 이미지 2.0 실전 프롬프트

| 유형 | 프롬프트 요점 | 특징 |
|------|-------------|------|
| 프로필 시트 | 실제 이미지 기반, 검은 셔츠 남성 프로필 한 화면 | 전신/측면/소품 구성 |
| 표정 비교 | 같은 인물 표정 변화 한 장 비교 | 부드러운 미소/집중/설명/자신감 |
| 스타일링 보드 | 전신, 측면, 후면 + 소품 | 흰 배경, 얇은 선, 브랜드 디자인용 |
| 썸네일 | 가로형, 인물 상반신, 큰 얼굴 | "채GPT 이미지 실전 가이드" |
| 포스터 | 딥그린+아이보리, 스위스 그리드 | 대학원 입학 설명회 |
| 상업 포스터 | 제품 사진 넣고 신상품 컬렉션 런칭 | 엘리베이터 광고 수준 |
| 인포그래픽 | 목적/주제/스타일/구도/제약 5블록 | 교육용, 흰 배경 |
| 제품 사진 | 배경을 회색 스튜디오로, 그림자 추가 | 광고용 제품 디테일 |
| 화장품 광고 | 제품 + 브랜드 컨셉 | 상업용 즉시 활용 |

### 2. 컨텍스트 주의사항

- ChatGPT는 이전 대화 내용을 인식하여 결과에 반영
- 같은 프롬프트라도 대화 컨텍스트에 따라 다른 결과
- 색상이나 스타일이 이전 요청에서 섞여 들어올 수 있음
- 해결: 새 대화에서 시작하거나 명시적으로 "한국어로 해줘" 반복

### 3. 수정 워크플로우

- 이미지 선택 후 특정 부분 수정 요청 가능
- 주제, 인물, 소품, 배경 개별 변경
- 비율 변경: 종비 → 와이드스크린
- "자연스러운 플러팅" 등 주제 전환도 가능

### 4. openclaw-codex-image-gen 플러그인

- GitHub: https://github.com/jkf87/openclaw-codex-image-gen
- OpenClaw에 설치 후 Codex CLI로 이미지 생성 자동화
- 30개 이상 이미지 한 번에 자동 생성
- 429 라운드로빈: 플러스 계정 3개를 번갈아가며 사용
- ohmyclaw Codex OAuth pool로 자동 계정 전환
- 한국어+영어 트리거 라우팅 지원

### 5. 나노바나 → GPT 이미지 2.0 대체

- "기존에 나노바나를 썼다면 이제는 GPT다"
- 나노바나용 프롬프트 모음 사이트 필요성 감소
- GPT 이미지 2.0이 품질, 수정 능력, 한국어 렌더링 모두 우위

## 원문 인용

> "기존에 나노바나를 썼다면 이제는 GPT다."
> "오픈클로를 이용해서 자동화시켰거든요. 한 번에 30개 넘게 뽑았습니다."
> "채 GPT 대화 내역 중에서 내가 같은 프롬프트를 입력하다 하더라도 그 전에 했던 대화 내용을 얘가 인식하고 있거든요. 결과물이 다르게 나오거나 컨텍스트가 섞일 수가 있습니다."

## See also

- [OpenClaw](/wiki/entities/openclaw/) — 플랫폼 엔티티
- [OpenClaw Codex 이미지 자동화 설정](/wiki/important/setup/openclaw-codex-image-gen/) — 플러그인 설정 가이드
- [Claude CLI x OpenClaw 연동](/wiki/sources/conanssam-claude-cli-openclaw/) — 영상 1 소스
- [소스놀이터 GPT 이미지 2.0 코덱스 웹툰](/wiki/sources/gpt-image-2-codex-webtoon/) — 동일 주제 소스
- [GPT 이미지 2.0 15 활용법](/wiki/sources/gpt-image-2-15-use-cases/) — 동일 주제 소스
- [코덱스 이미지 무제한 설정](/wiki/important/setup/codex-image-generation/) — 기존 Codex 이미지 설정
