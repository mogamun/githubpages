---
title: Turing-complete Markdown
created: 2026-04-29
updated: 2026-04-29
tags: [concept, markdown, turing-complete, programmable-document, document-generation]
sources: [2026-04-29-quarkdown.md]
status: stable
category: concepts
---

# Turing-complete Markdown

## 정의
Markdown을 단순한 마크업 언어가 아닌 Turing-complete 프로그래밍 언어로 확장하는 개념. 함수 정의, 변수, 조건문, 반복문을 Markdown 본문 내에서 직접 사용하여, 문서의 "내용"과 "로직"을 하나의 소스에서 통합.

## 핵심 원칙

1. **함수 도입**: `.function {name}` 문법으로 Markdown에 함수 호출 추가. CommonMark/GFM의 자연스러운 확장
2. **내용=코드**: 문서 작성과 프로그래밍의 경계 해소. 동적 콘텐츠, 조건부 렌더링, 데이터 기반 테이블 생성이 Markdown 내에서 가능
3. **다중 출력**: 하나의 소스에서 함수 호출 하나(`.doctype`)로 책/논문/슬라이드/위키 전환. 로직이 출력 형식을 결정
4. **점진적 복잡성**: 평범한 Markdown으로 시작 → 필요시 함수 사용 → 필요시 라이브러리 작성. 학습 곡선이 완만

## 적용 사례

### Quarkdown
가장 적극적인 구현. `.somefunction {arg}` 문법으로 Markdown에 함수 호출을 도입:
```
.function {greet}
    to from:
    **Hello, .to** from .from!

.greet {world} from:{iamgio}
```
표준 라이브러리(레이아웃, I/O, 수학, 흐름제어) + 사용자 정의 함수 + 서드파티 라이브러리.

### Typst
독자적인 마크업 언어로 Turing-completeness 달성. Markdown 기반이 아닌 새 문법. LaTeX 대비 3-4배 빠른 컴파일. 하지만 Markdown 호환성 없음.

### MDX
JSX를 Markdown에 삽입. React 컴포넌트 사용 가능. 하지만 문서 제어력 제한 (출력은 HTML만) 및 React 지식 필요.

## LLM과의 연결

Turing-complete Markdown은 LLM 생성 문서에 새 가능성을 열음:
- LLM이 Markdown에 익숙하므로, 함수 확장만 학습하면 조판/프레젠테이션/위키를 모두 자동 생성
- Google AI Forum에서 "Official Quarkdown Support for LLMs" 제안
- "구조가 곧 프롬프트" 테제의 확장: 구조화된 Markdown이 곧 실행 가능한 프로그램

## 한계

- **생태계**: LaTeX의 CTAN(수천 패키지)에 비해 초기 단계
- **학술 수용**: 저널 템플릿은 여전히 LaTeX가 표준
- **표준화**: Quarkdown Flavor는 공식 Markdown 표준이 아님
- **디버깅**: Markdown 내 로직 디버깅 도구 부족

## See also
- [Quarkdown](/wiki/entities/quarkdown/)
- [Markdown 조판 시스템 비교](/wiki/comparisons/markdown-typesetting-systems/)
- [LLM Wiki 패턴](/wiki/sources/llm-wiki-pattern/)
- [지식 저장소 진화](/wiki/concepts/knowledge-repository-evolution/)
- [Compounding Artifact](/wiki/concepts/compounding-artifact/)
