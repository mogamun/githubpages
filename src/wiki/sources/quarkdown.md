---
title: Quarkdown
created: 2026-04-29
updated: 2026-04-29
tags: [source, markdown, typesetting, document-generation, turing-complete]
sources: [2026-04-29-quarkdown.md]
status: stable
category: sources
---

# Quarkdown

## 개요
iamgio가 개발한 현대 Markdown 기반 조판 시스템. CommonMark/GFM 확장으로 함수 호출을 도입해 Turing-complete Markdown을 실현. 하나의 `.qd` 파일에서 book, paper, slides, docs를 모두 생성.

## 핵심 내용

1. **함수 호출 문법**: `.function {arg1} {arg2}` 형태로 Markdown에 프로그래밍 도입. 변수, 조건문, 반복문 모두 Markdown 내에서 정의 가능
2. **4가지 출력 타겟**: `.doctype` 함수로 plain/paged(slides)/docs 전환. paged.js(책/논문), reveal.js(프레젠테이션), docs(위키/기술문서)
3. **LaTeX 대비 압도적 간결성**: 동일 문서를 LaTeX 대비 ~60% 적은 코드로 작성. 학습 곡선 🟢 vs LaTeX 🔴
4. **VS Code + Live Preview**: 확장 프로그램으로 실시간 미리보기. `quarkdown c file.qd -p -w`로 라이브 리로드
5. **크로스 플랫폼**: brew, curl, scoop로 설치. Java 17+ 필수, PDF 출력은 Node.js 필요

## 원문 인용

> Quarkdown is a modern Markdown-based typesetting system designed for **versatility**. It allows a single project to compile seamlessly into a print-ready book, academic paper, knowledge base, or interactive presentation.

> This out-of-the-box scripting support opens doors to complex and dynamic content that would be otherwise impossible to achieve with vanilla Markdown.

## 커뮤니티 반응
- Reddit r/LaTeX: "simplicity of Markdown and versatility/customization of LaTeX"
- Hacker News: Quarkdown과 Typst를 "programmable markup languages"로 분류
- Google AI Forum: "Official Quarkdown Support for LLMs" 기능 제안 게시
- Obsidian Forum: 플러그인 요청

## See also
- [Quarkdown 엔티티](/wiki/entities/quarkdown/)
- [Turing-complete Markdown](/wiki/concepts/turing-complete-markdown/)
- [Markdown 조판 시스템 비교](/wiki/comparisons/markdown-typesetting-systems/)
- [Quarkdown 설정](/wiki/important/setup/quarkdown/)
- [LLM Wiki 패턴](/wiki/sources/llm-wiki-pattern/)
- [지식 저장소 진화](/wiki/concepts/knowledge-repository-evolution/)
