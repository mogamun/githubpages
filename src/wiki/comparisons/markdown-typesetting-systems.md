---
title: Markdown 조판 시스템 비교
created: 2026-04-29
updated: 2026-04-29
tags: [comparison, markdown, typesetting, latex, typst, quarkdown]
sources: [2026-04-29-quarkdown.md]
status: stable
category: comparisons
---

# Markdown 조판 시스템 비교: Quarkdown vs Typst vs LaTeX vs AsciiDoc vs MDX

## 공통점
모두 구조화된 문서를 작성하고 PDF/HTML 등으로 출력하는 조판/문서 생성 도구. 프로그래밍 가능한 문서(p                     rogrammable document)라는 공통 목표.

## 차이점

### 기본 철학

| 도구 | 철학 | 기반 언어 | 학습 곡선 |
|------|------|-----------|-----------|
| **Quarkdown** | Markdown에 함수 추가 | CommonMark/GFM 확장 | 🟢 낮음 |
| **Typst** | 새로운 마크업 언어 | 독자 문법 | 🟠 중간 |
| **LaTeX** | 조판의 표준 | TeX 매크로 | 🔴 높음 |
| **AsciiDoc** | 기술 문서 특화 | AsciiDoc 문법 | 🟢 낮음 |
| **MDX** | React 컴포넌트 + Markdown | MDX (JSX in Markdown) | 🟢 낮음 |

### 기능 비교

| 기능 | Quarkdown | Typst | LaTeX | AsciiDoc | MDX |
|------|-----------|-------|-------|----------|-----|
| 간결+가독성 | ✅ | ✅ | ❌ | ✅ | ✅ |
| 문서 전체 제어 | ✅ | ✅ | ✅ | ❌ | ❌ |
| 스크립팅 | ✅ | ✅ | 부분 | ❌ | ✅ |
| 책/논문 출력 | ✅ | ✅ | ✅ | ✅ | 서드파티 |
| 프레젠테이션 | ✅ | ✅ | ✅ | ✅ | 서드파티 |
| 정적 사이트 | ✅ | ❌ | ❌ | ✅ | ✅ |
| 위키/문서 | ✅ | ❌ | ❌ | ✅ | ✅ |
| 출력 타겟 | HTML,PDF,TXT | HTML,PDF | PDF,PS | HTML,PDF,ePub | HTML |

### 성능

| 도구 | 컴파일 속도 | 대규모 문서 |
|------|------------|------------|
| **Quarkdown** | 빠름 | 양호 |
| **Typst** | 매우 빠름 (LaTeX 대비 3-4배) | 2000+ 페이지 1분 |
| **LaTeX** | 느림 | 2000+ 페이지 18분 |
| **AsciiDoc** | 빠름 | 양호 |
| **MDX** | 빠름 | 양호 |

### 생태계

| 도구 | 패키지 수 | 학술 수용 | 커뮤니티 |
|------|----------|----------|---------|
| **Quarkdown** | 성장 중 | ❌ 초기 | GitHub 30k+ |
| **Typst** | 성장 중 | ❌ 초기 | 활발 |
| **LaTeX** | 방대 (CTAN) | ✅ 표준 | 거대 |
| **AsciiDoc** | 중간 | ❌ | 안정 |
| **MDX** | React 생태계 | ❌ | 활발 |

## 선택 기준

- **Quarkdown**: 하나의 소스에서 여러 출력(책+슬라이드+위키)이 필요할 때. Markdown 기반이므로 기존 지식 활용 가능. LLM 생성 문서에 적합.
- **Typst**: 순수 학술 논문/책을 빠르게 작성할 때. LaTeX 대비 문법이 훨씬 간결. 하지만 Markdown 호환 안 됨.
- **LaTeX**: 학술 저널 제출, 수학 논문, 방대한 패키지가 필요할 때. 여전히 학술계의 표준.
- **AsciiDoc**: 기술 문서, 매뉴얼, 다국어 문서에 특화. 출력 포맷 다양.
- **MDX**: React 웹사이트에 문서를 임베드할 때. 인터랙티브 컴포넌트 필요시.

## See also
- [Quarkdown](/wiki/entities/quarkdown/)
- [Turing-complete Markdown](/wiki/concepts/turing-complete-markdown/)
- [Quarkdown 소스](/wiki/sources/quarkdown/)
- [LLM Wiki 패턴](/wiki/sources/llm-wiki-pattern/)
