---
title: 클라이언트-데몬 아키텍처 (Client-Daemon Architecture)
created: 2026-04-28
updated: 2026-04-28
tags: [concept, architecture, cli, performance, rust]
sources: [2026-04-28-agent-browser.md]
status: stable
category: concepts
---

# 클라이언트-데몬 아키텍처 (Client-Daemon Architecture)

## 정의
CLI 도구를 얇은 클라이언트와 지속 실행 데몬으로 분리하는 아키텍처 패턴. 클라이언트는 명령 파싱만 담당하고, 데몬이 실제 작업을 수행.

## 핵심 원칙
- **클라이언트**: 명령어 파싱, 데몬과 통신 (가벼움)
- **데몬**: 실제 작업 수행, 명령 간 상태 유지 (지속 실행)
- **자동 시작**: 첫 명령 시 데몬이 자동 시작, 이후 재사용
- **유휴 타임아웃**: 설정 가능한 비활성 시간 후 자동 종료

## 적용 사례
- **agent-browser**: Rust CLI (클라이언트) + Rust 데몬 (CDP 직접 통신). Node.js 런타임 불필요. 데몬이 브라우저 상태를 유지하여 후속 명령이 빠름.
- **IDE 언어 서버**: LSP도 동일한 패턴 (클라이언트=에디터, 데몬=언어 서버)

## 장점
- 명령 간 상태 유지로 빠른 후속 실행
- 클라이언트가 가벼워 설치/실행 빠름
- 데몬만 무거운 런타임(브라우저 등)을 관리

## See also
- [agent-browser](/wiki/entities/agent-browser/)
- [Ref 기반 선택](/wiki/concepts/ref-based-selection/)
- [ECS 철학](/wiki/concepts/ecs-philosophy/) — 역할 분리 원칙과 유사
