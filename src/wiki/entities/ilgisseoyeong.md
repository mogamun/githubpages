---
title: ilgisseoyeong
created: 2026-04-24
updated: 2026-04-24
tags: [project, react, typescript, capacitor, mobile-app, vite7, zustand, diary-app]
status: stable
category: entities
---

# ilgisseoyeong (일기써영)

## 개요
영어 일기 작성 + AI 교정 모바일 앱. Capacitor 기반 네이티브 앱으로, 로컬 Gemma 모델을 사용한 온디바이스 AI 영어 교정. 기존 autopenna 프로젝트에서 마이그레이션.

## 기술 스택
- React 19 + TypeScript 6
- Vite 7 (빌드)
- Capacitor 8 (네이티브 래핑, Android)
- Tailwind CSS 3 (스타일링)
- Zustand 5 + persist (상태 관리)
- @mogamun/ai-core (서브모듈) — Ollama 웹 / Gemma 네이티브
- TipTap 3 (리치 텍스트 에디터)

## 프로젝트 구조 (분석: 2026-04-24)

### 디렉토리 트리
```
src/
├── main.tsx                          # React 진입점
├── App.tsx                           # 라우팅 + 에러바운더리
├── index.css                         # 글로벌 스타일
├── app/
│   ├── ErrorBoundary.tsx             # 에러 바운더리
│   └── MainLayout.tsx                # 공통 레이아웃 (TopBar + Outlet + BottomNav)
├── assets/
│   └── fonts/                        # Pretendard, Jua 폰트
├── pages/
│   ├── ProjectListPage.tsx           # 홈: 일기장 목록
│   ├── WritingListPage.tsx           # 일기 항목 목록
│   ├── WritingPage.tsx               # 일기 작성 + AI 교정
│   └── MorePage.tsx                  # 설정/내보내기
├── widgets/
│   ├── AiBubble.tsx                  # AI 웰컴 말풍선
│   ├── AIHistoryPanel.tsx            # AI 통신 기록 패널
│   ├── AiPromptPanel.tsx             # AI 프롬프트 + 선택지 UI (276줄, 핵심)
│   ├── AIStatusBar.tsx               # AI 모델 상태 바
│   ├── BottomNav.tsx                 # 하단 내비게이션 (홈/일기쓰기/더보기)
│   ├── ModelPanel.tsx                # 모델 설정 풀스크린 패널 (492줄, 최복잡)
│   ├── PermissionGate.tsx            # Android 권한 게이트
│   ├── PromptLensSheet.tsx           # 프롬프트 편집 바텀시트
│   ├── TopBar.tsx                    # 상단 타이틀 + AI 상태
│   ├── UILensSheet.tsx               # UI 요소 검사 바텀시트 (디버그)
│   ├── UILensTarget.tsx              # UILens 타겟 래퍼 (no-op)
│   └── tiptap/
│       └── ChapterEditor.tsx         # Tiptap 리치 텍스트 에디터
└── services/
    ├── ProjectStore.ts               # Zustand 스토어 리익스포트
    ├── AIHistoryService.ts           # AI 통신 기록 (max 200)
    ├── BackupService.ts              # IndexedDB 자동 백업 (5분 간격)
    ├── Constants.ts                  # 미리보기/컨텍스트 길이 상수
    ├── GemmaManager.ts               # Gemma AI 모델 매니저 (323줄, 핵심)
    ├── ImageStorageService.ts        # Capacitor 파일시스템 이미지
    ├── StreamingParser.ts            # 스트리밍 문장 파서
    ├── SystemPromptService.ts        # 영어 교정 시스템 프롬프트 빌더
    ├── UndoStore.ts                  # Undo/Redo (max 50 스냅샷)
    ├── useAiPrompt.ts                # AiPromptPanel 상태 훅
    ├── useStreamingChoices.ts        # 스트리밍 선택지 파싱 훅
    └── project/
        ├── index.ts                  # 메인 스토어 (56줄)
        ├── types.ts                  # DiaryEntry, Project 타입
        ├── projectSlice.ts           # 프로젝트 CRUD
        ├── entrySlice.ts             # 일기 항목 CRUD
        └── helpers.ts                # updateProject 헬퍼
```

### 진입점
- 프론트엔드: `src/main.tsx` — StrictMode + App 마운트
- 백엔드: `server/index.ts` (146줄) — Express 포트 3001, 프롬프트/템플릿/동기화 API
- 모바일: `capacitor.config.ts` — appId: com.mogamun.ilgisseoyeong

### 라우팅
- `/` → ProjectListPage (일기장 홈)
- `/writing` → WritingListPage (일기 목록)
- `/project/:id/write` → WritingPage (일기 작성 + AI 교정)
- `/project/:id/more` → MorePage (설정)

### 상태 관리
- ProjectStore: Zustand + persist, localStorage 키 `ilgi-sseoyeong-projects`. Project(id, name, entries[], activeEntryId, customPrompt) + DiaryEntry(id, title, content, timestamps)
- UndoStore: 인메모리, max 50 스냅샷
- AIHistoryStore: Zustand + persist, localStorage 키 `ilgi-sseoyeong.ai-history`, max 200 항목
- GemmaManager: 싱글톤, window.__gemmaManager. 네이티브/Ollama 듀얼 백엔드

### 빌드 파이프라인
```
npm install --include=dev
npx tsx scripts/sync-server-data.ts && npx vite build
npx cap sync android
cd android && ./gradlew assembleDebug
cp android/app/build/outputs/apk/debug/app-debug.apk "/Volumes/My/ilgisseoyeong-debug.apk"
```

## LLM Wiki 연동
- 연동 시작: 2026-04-24
- 자동 기록: 실수 교정, 사용자 지시, 반복 패턴

## 기록된 교정 사항
- (아직 없음)

## 사용자 선호 패턴
- (아직 없음)

## See also
- [CLAUDE.md](/wiki/entities/Users/mogamun/projects/todaydailyeng/CLAUDE/)
- [autopenna (이전 프로젝트)](/wiki/entities/autopenna/)
- [모바일앱 개발 지침](/wiki/sources/mobile-app-guidelines/)
