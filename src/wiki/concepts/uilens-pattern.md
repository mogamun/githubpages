---
title: UILens Pattern
created: 2026-04-22
updated: 2026-04-22
tags: [pattern, react, context, long-press, bottom-sheet]
status: stable
category: concepts
---

# UILens Pattern

## 정의
UI 요소에 **길게 누르기** → 바텀시트로 메타정보(태그)를 표시하는 React 패턴. AI 버튼의 경우 편집 가능한 지침 탭을 추가로 제공.

## 핵심 구조
- **UILensContext** — `openUILens(info)` 전역 함수 제공
- **UILensSheet** — 정보 탭(태그 칩) + 지침 탭(템플릿 편집) 바텀시트
- **useLongPress** — 500ms 길게 누르기 감지 훅 (터치 + 마우스)

## UILensInfo 인터페이스
```typescript
{
  label: string;           // 요소 식별명
  tags: string[];          // 컨텍스트 태그 (항상)
  promptTemplate?: string; // 고정 지침 (AI 버튼만)
  onSaveTemplate?: (edited: string) => void; // 저장 콜백
}
```

## 설계 원칙
1. **모든 UI 요소에 적용** — 태그만으로 정보 탭 사용. AI 버튼은 지침 탭 추가.
2. **템플릿/동적 분리** — 편집은 고정 지침만. 동적 필드(이전 글, 캐릭터 등)는 실행 시 주입.
3. **3파일 이식** — Context + Sheet + Hook만으로 다른 프로젝트에 즉시 적용 가능.
4. **제어 역전** — 태그 생성과 템플릿 저장은 각 페이지가 담당. UILens는 표시만.

## See also
- [Source: UILens 패턴 상세](/wiki/sources/uilens-pattern/)
