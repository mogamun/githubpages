---
title: 코덱스 이미지 무제한 생성 설정
created: 2026-04-24
updated: 2026-04-24
tags: [important, setup-guide, codex, image-generation, gpt]
sources: [2026-04-24-gpt-image-2-codex-webtoon.md]
status: stable
category: important
---

# 코덱스 이미지 무제한 생성 설정

## 개요
OpenAI 코덱스(Codex) CLI에서 GPT 이미지 2.0을 사용하여 무제한 이미지를 생성하는 설정. 5시간 주간 한도 내에서 이미지는 무제한. 코덱스의 토큰을 사용하므로 별도 과금 없음.

## 전제 조건
- OpenAI 계정 (코덱스 접근 권한)
- 코덱스 CLI 설치됨
- 5시간 주간 사용 한도 내 (이미지는 한도에서 무제한)

## 설치 단계

1. **코덱스 CLI 실행**
   ```bash
   codex
   ```

2. **config 파일의 이미지 생성 설정 활성화**
   코덱스에 자연어로 부탁:
   ```
   config 파일의 features 항목 중 image_generation을 true로 설정해 줘
   ```

3. **이미지 생성 요청 시 주의사항**
   프롬프트 마지막에 반드시 포함:
   ```
   dall-e image
   ```
   이 키워드가 없으면 이미지가 생성되지 않음.

4. **GPT 5.4 Fast 모델 선택 (선택사항)**
   속도가 1.5배 빠르지만 토큰 소모 2배. 빠른 결과가 필요할 때:
   ```
   GPT 5.4 Fast 모델로 설정해 줘
   ```

## 확인
- 이미지가 정상적으로 생성되는지 테스트
- "dall-e image" 키워드 포함 여부 확인
- 16:9 비율 필요시 프롬프트에 명시: "16:9 비율로"

## 팁
- 나노바나나 프로 대비 장점: 워터마크 없음, 한국어 정확도 완벽
- 나노바나나 프로 대비 단점: 해상도가 상대적으로 낮음
- 코덱스는 자율 에이전트 → 복잡한 작업(웹툰, 타임라인, 비교 분석)도 자동 수행
- 캐릭터 일관성 유지를 원하면 프롬프트에 명시

## 출처
- 소스놀이터: https://www.youtube.com/watch?v=cOKrWxr5Er8

## See also
- [GPT 이미지 2.0 코덱스 웹툰 자연화](/wiki/sources/gpt-image-2-codex-webtoon/)
- [소스놀이터 엔티티](/wiki/entities/source-playground/)
- [크로마키 이미지 프롬프트](/wiki/sources/image-prompt-chroma-key/)
- [시각화 프롬프트 템플릿](/wiki/concepts/visualization-prompt-template/)
