---
title: 시각화 프롬프트 템플릿
created: 2026-04-23
updated: 2026-04-23
tags: [concept, prompt-engineering, visualization, template]
sources: [클로드 100개 시각화 스킨 무료 배포! (Claude 3.7 Sonnet 시각화)2025-03-17T154622+0900.md]
status: stable
category: concepts
---

# 시각화 프롬프트 템플릿

## 정의
LLM이 고품질 시각적 산출물(HTML 프레젠테이션 슬라이드)을 생성하도록 구조화된 프롬프트 템플릿 패턴. "컬러 스킨(스타일) + 레이아웃 규칙 + 콘텐츠 구조 + 품질 체크리스트"의 4레이어 구성.

## 핵심 원칙
- **스타일-콘텐츠 분리**: 컬러 스킨과 레이아웃을 변수처럼 교체 가능하게 정의 → 동일한 콘텐츠를 100가지 스타일로 출력
- **레이아웃 명세화**: 헤더 영역, 본문 영역(2단 비율), 카드 컴포넌트(둥근 모서리, 그림자) 등을 CSS 수준으로 상세 지정
- **콘텐츠 구조 템플릿**: 요약 → 데이터 시각화 → 핵심 포인트 → 강조 문장 → 팩터 박스의 고정 흐름
- **품질 체크리스트**: 푸터, 16:9 비율, 시선 흐름, 고급 시각 요소 — AI의 자가 검증 기준
- **매개변수화된 스킨**: 주요 색상(HEX), 특징, 활용 분야를 명시하여 AI가 스킨에 맞게 디자인 일관성 유지

## 적용 사례
- Claude 3.7 Sonnet에서 Accenture/Deloitte급 컨설팅 슬라이드 생성
- 10개 카테고리 100개 스킨으로 비즈니스/명품/산업/디자인/국가/자동차/아이스크림/과일/직업/영화 테마 커버

## See also
- [클로드 100개 시각화 스킨](/wiki/sources/claude-visualization-skins/)
- [구조가 곧 프롬프트](/wiki/concepts/structure-as-implicit-prompt/)
- [Vibe to Spec](/wiki/concepts/vibe-to-spec/)
