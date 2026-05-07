---
title: Quarkdown 설정
created: 2026-04-29
updated: 2026-04-29
tags: [important, setup-guide, markdown, typesetting, quarkdown]
sources: [2026-04-29-quarkdown.md]
status: stable
category: important
---

# Quarkdown 설정

## 개요
Markdown에 함수 호출을 도입한 Turing-complete 조판 시스템. 하나의 `.qd` 파일에서 책, 논문, 프레젠테이션, 위키를 모두 생성.

## 전제 조건
- **Java 17+** (필수)
- **Node.js + npm** (PDF 출력 시에만 필요, Puppeteer용)
- VS Code (권장, Live Preview 확장 존재)

## 설치 단계

### 1. macOS/Linux (Homebrew)

```bash
brew install quarkdown-labs/quarkdown/quarkdown
```

또는 curl 스크립트:

```bash
curl -fsSL https://raw.githubusercontent.com/quarkdown-labs/get-quarkdown/refs/heads/main/install.sh | sudo env "PATH=$PATH" bash
```

### 2. Windows (Scoop)

```powershell
scoop bucket add java
scoop bucket add quarkdown https://github.com/quarkdown-labs/scoop-quarkdown
scoop install quarkdown
```

또는 PowerShell:

```powershell
irm https://raw.githubusercontent.com/quarkdown-labs/get-quarkdown/refs/heads/main/install.ps1 | iex
```

### 3. 프로젝트 생성

```bash
quarkdown create my-project
```

프롬프트 기반 위저드가 메타데이터와 초기 콘텐츠를 자동 생성.

### 4. 컴파일 & Live Preview

```bash
# 기본 컴파일
quarkdown c main.qd

# Live Preview (파일 변경 시 자동 재컴파일 + 브라우저 리로드)
quarkdown c main.qd -p -w

# PDF 출력
quarkdown c main.qd --pdf

# REPL 모드 (학습용)
quarkdown repl
```

### 5. VS Code 확장

마켓플레이스에서 `pallandos.quarkdown` 설치. Live Preview 지원.

## 문서 타입 선택

소스 파일 상단에 함수 호출:
```
.doctype {plain}    # 기본 — Notion/Obsidian 스타일
.doctype {paged}    # 책/논문 (paged.js)
.doctype {slides}   # 프레젠테이션 (reveal.js)
.doctype {docs}     # 위키/기술문서
```

## 확인
```bash
quarkdown --version
quarkdown c mock/main.qd -p   # Mock 문서로 기능 체험
```

## 출처
- GitHub: https://github.com/iamgio/quarkdown
- 설치 가이드: https://github.com/quarkdown-labs/get-quarkdown

## See also
- [Quarkdown 엔티티](/wiki/entities/quarkdown/)
- [Turing-complete Markdown](/wiki/concepts/turing-complete-markdown/)
- [Markdown 조판 시스템 비교](/wiki/comparisons/markdown-typesetting-systems/)
- [LLM Wiki 패턴](/wiki/sources/llm-wiki-pattern/)
