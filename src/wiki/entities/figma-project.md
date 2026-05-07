---
title: figma (영어APP HTML 변환 프로젝트)
created: 2026-04-24
updated: 2026-04-24
tags: [project, figma, mcp, html]
status: stable
category: entities
---

# figma (영어APP HTML 변환 프로젝트)

## 개요
Figma MCP를 통해 영어 학습 앱(영어APP)의 피그마 디자인을 HTML/CSS/JS로 변환하는 프로젝트.

## 기술 스택
- **소스**: Figma 파일 `tEgwyJNEExNGVbCVVzCFf7` (영어APP 최종)
- **변환 방식**: Figma MCP 서버(`mcp.figma.com`)를 통해 get_design_context → HTML
- **타겟**: iPhone 390×844
- **컬러 시스템**: 웜크림(#faf7f2) + 보라(#7a5ea6) + 다크브라운(#3d2b1f)

## 프로젝트 구조 (분석: 2026-04-24)

### 디렉토리 트리
```
figma/
├── .mcp.json          # Figma MCP 서버 설정
├── CLAUDE.md          # 프로젝트 지침 + LLM Wiki 연동
└── figmalist.md       # Figma 파일 페이지 목록
```

### Figma 파일 페이지 구조
- **메인 플로우** (8화면): 달력홈 → 일기작성 → AI변환 → 교정 → 단어정리 → 완료 → 레벨업
- **탭 페이지** (2화면): 단어장, 통계/마이페이지
- **디자인 시스템** (4페이지): Design System, Components, Card Components, Calendar Components

### 화면 목록
| Node ID | 이름 | 설명 |
|---------|------|------|
| `0:189` | 📅 01 · 달력 홈 | 캘린더 메인 |
| `0:31` | 📖 02 · 이전 일기 보기 | 과거 일기 상세 |
| `0:318` | ✍️ Step 1 · 오늘의 일기 | 일기 작성 |
| `0:341` | 🤖 Step 2 · AI 변환 + 다시 쓰기 | AI 영어 변환 |
| `0:99` | ✅ Step 3 · 교정하기 | 영어 교정 |
| `0:136` | 📚 Step 6 · 단어 정리 | 단어 학습 |
| `10:12` | 🎉 Step 5 · 완료 | 완료 축하 |
| `10:67` | 🏆 레벨업 · 전체화면 | 레벨업 팝업 |
| `38:2720` | 📚 단어장 | 저장된 단어 목록 |
| `38:2576` | 📈 통계 · 마이페이지 | 학습 통계 |

## LLM Wiki 연동
- 연동 시작: 2026-04-24
- 자동 기록: 실수 교정, 사용자 지시, 반복 패턴

## See also
- [CLAUDE.md](/wiki/entities/Users/mogamun/projects/figma/CLAUDE/)
- [figmalist.md](/wiki/entities/Users/mogamun/projects/figma/figmalist/)
- [figma](/wiki/entities/figma/) — Figma 엔티티
- [Figma MCP 설치 및 사용방법](/wiki/sources/figma-mcp-setup-usage/)
