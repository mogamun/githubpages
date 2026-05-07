---
title: Vibe to Spec
created: 2026-04-23
updated: 2026-04-23
tags: [concept, prompt-engineering, meta-prompt, methodology]
sources: [메타프롬프트 Vibe to Spec 앱 개발 기획 변환기2025-06-10T153302+0900.md]
status: stable
category: concepts
---

# Vibe to Spec

## 정의
비개발자의 추상적 아이디어("Vibe")를 개발자가 즉시 작업 가능한 구조화된 기획 문서(Spec)로 변환하는 메타프롬프트 방법론. "Vibe Coding"의 역방향 — 느낌에서 명세로.

## 핵심 원칙
- **페르소나 분산**: 단일 AI 역할이 아닌 5가지 전문 역할(경청·질문·번역·설계·제안)의 결합
- **점진적 구체화**: 개방형 질문 → 기능 질문 → 데이터 탐색 → UX 컨셉 → 기술 검토 → 검증의 6단계
- **사용자 스토리 중심**: 모든 기능을 "~로서, 나는 ~을 위해 ~하고 싶다" 형식으로 정의
- **자기 수정 루프**: AI가 스스로 "개발자가 이해할 수 있는가?" 질문 후 수정
- **제로샷 유도 금지**: 사용자가 "당연히 알 것"이라고 가정하지 않음

## 적용 사례
- 크로스워드 퍼즐 PDF 생성 웹앱 기획서 (tilnote.io)
- 기획서에 앱 개요→타겟→기능→아키텍처→UI/UX→기술스택→비기능요구사항 7섹션 자동 생성

## See also
- [Vibe to Spec 소스](/wiki/sources/vibe-to-spec/)
- [구조가 곧 프롬프트](/wiki/concepts/structure-as-implicit-prompt/)
- [간결성-정확성 트레이드오프](/wiki/concepts/brevity-accuracy-tradeoff/)
