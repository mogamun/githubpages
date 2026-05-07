---
title: 바이브코딩 치트키 15
created: 2026-04-23
updated: 2026-04-23
tags: [concept, vibe-coding, prompt-engineering, methodology]
sources: [2026-04-23-ttj-vibe-coding-cheatkey-15.md]
status: stable
category: concepts
---

# 바이브코딩 치트키 15

## 정의
바이브 코딩에서 AI를 효과적으로 조련하기 위한 15가지 실전 방법론. 투더제이가 체계화한 가이드로, "AI를 잘 쓰는 것"이 아니라 "AI를 잘 조련하는" 접근.

## 핵심 원칙

### 시작 전 준비 (1-3)
1. **PRD 먼저, 코드는 나중에**: 제품 요구사항 문서를 먼저 작성하여 AI에게 "설계도" 제공
2. **AI에게 역할을 부여하라**: 페르소나 부여 ("10년차 시니어 Next.js 개발자")로 답변 품질 향상
3. **기술 스택을 고정하라**: 규칙 파일(CLAUDE.md)에 스택 고정. AI의 잦은 스택 변경 방지

### AI 소통 (4-6)
4. **컨텍스트를 사수하라**: 규칙 파일, 대화 요약, 과부하 방지
5. **한 번에 하나씩만**: 1프롬프트 = 1기능. 작게 시키고 확인하고 다음으로
6. **프롬프트 체이닝**: 복잡 기능은 단계 분할 (예: 데이터 모델 → API → UI)

### 코드 관리 (7-9)
7. **에러 메시지는 금**: 에러 메시지를 AI에게 그대로 전달
8. **구조를 읽어라**: 전체 코드 이해보다 아키텍처 파악에 집중
9. **도구를 선택하라**: Claude Code, Cursor 등 용도에 맞는 도구 사용

### 품질 관리 (10-12)
10. **테스트는 AI에게**: AI가 스스로 문제를 파악하게 함
11. **UI는 레퍼런스로**: "예쁘게" → "벤토디자인 적용" 구체적 지시
12. **AI를 의심하라**: 사용자가 AI를 컨트롤하는 주도권 유지

### 마무리 (13-15)
13. **배포를 미루지 마라**: 완성도 추구 대신 빠른 배포
14. **리팩토링은 AI의 특기**: 나중에 정리는 AI가 잘함
15. **문서화는 미래의 선물**: 기록의 누적 가치

## 적용 사례
- 투더제이 수강생들이 치트키 적용 후 반년~1년 내 수익화 달성
- CLAUDE.md 규칙 파일 사용이 이 위키의 운영 방식과 직접 연결
- "컨텍스트를 사수하라" → LLM Wiki 패턴의 본질과 동일 (컴파일된 지식 = 영구 컨텍스트)

## See also
- [투더제이](/wiki/entities/ttj/)
- [Structure as Implicit Prompt](/wiki/synthesis/structure-as-implicit-prompt/)
- [간결성-정확성 트레이드오프](/wiki/concepts/brevity-accuracy-tradeoff/)
- [시각화 프롬프트 템플릿](/wiki/concepts/visualization-prompt-template/)
- [RAG](/wiki/concepts/rag/)
