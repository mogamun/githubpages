---
title: ProseMirror
created: 2026-04-23
updated: 2026-04-23
tags: [entity, library, editor, prosemirror]
category: prosemirror.md
---

# ProseMirror

웹을 위한 구조화된 콘텐츠 편집 프레임워크. Tiptap, Remirror, BlockNote 등의 기반 기술.

## 핵심 특징

- **문서 모델**: 트리 기반의 불변 문서 구조. JSON으로 직렬화 가능
- **스키마**: 노드 타입, 마크 타입, 속성을 정의하는 문서 구조 제약
- **트랜잭션**: 모든 편집은 트랜잭션으로 처리. undo/redo, 협업 편집 기반
- **플러그인 시스템**: 확장 가능한 편집 동작 추가 메커니즘

## 관련 프로젝트

- **Tiptap**: ProseMirror를 감싼 개발자 친화적 API. 확장 시스템 단순화
- **Remirror**: React 통합에 특화된 ProseMirror 프레임워크
- **BlockNote**: Notion 스타일 블록 에디터

## 관련 위키

- [tiptap-rich-text-editor](/wiki/sources/tiptap-rich-text-editor/) — ProseMirror 기반 헤드리스 에디터
