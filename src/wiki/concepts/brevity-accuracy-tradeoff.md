---
title: 간결성-정확성 트레이드오프
created: 2026-04-22
updated: 2026-04-29
tags: [concept, llm, token-optimization, brevity, accuracy]
sources: [2026-04-22-caveman-token-reduction.md, 2026-04-22-geeknews-weekly-352.md, 2026-04-29-warp-terminal.md]
status: stable
category: concepts
---

# 간결성-정확성 트레이드오프

## 정의
LLM의 장황한 응답이 항상 더 정확한 것은 아니라는 통찰. 구조적 제약(간결 강제)이 오히려 정확도를 높이는 경우가 존재함.

## 핵심 원칙
- **Verbose ≠ Accurate**: 장황한 응답이 항상 정확한 것은 아님
- **구조적 제약의 효과**: 간결한 응답을 강제하면 불필요한 추론이 줄어들어 정확도가 향상될 수 있음
- **출력 토큰 최적화**: 사고/추론 토큰은 유지하면서 출력만 압축하는 접근이 품질-비용 트레이드오프의 실용적 해법

## 적용 사례
- **Caveman 스킬**: 원시인 말투로 응답 강제 → 평균 65~75% 출력 토큰 절감 + 정확도 유지/향상
- **2026년 3월 논문**: "Brevity Constraints Reverse Performance Hierarchies in Language Models" — 간결 강제 시 특정 벤치마크에서 정확도 26%p 향상, 성능 순위 역전 확인

## 이 위키와의 연결
"구조가 곧 프롬프트다" 테제의 또 다른 측면. 간결함을 강제하는 구조적 제약도 일종의 "좋은 프롬프트".

## See also
- [Caveman 토큰 절약](/wiki/sources/caveman-token-reduction/)
- [Structure as Implicit Prompt](/wiki/synthesis/structure-as-implicit-prompt/)
- [Ref 기반 선택](/wiki/concepts/ref-based-selection/) — CSS 선택자 대비 82% 적은 컨텍스트로 동등 정확도
- [간결한 자동완성 아키텍처](/wiki/concepts/lean-autocomplete-architecture/) — Warp가 starts_with() 단일 매칭으로 최고 체감 성능 달성
