---
title: "GitHub Actions로 자동 배포 파이프라인 구축하기"
category: "DevOps"
date: "2026-05-02"
thumbnail: ""
summary: "GitHub Actions를 활용하여 Gatsby 블로그를 GitHub Pages에 자동 배포하는 방법을 설명합니다."
---

GitHub Actions를 사용하면 코드를 푸시할 때마다 자동으로 빌드하고 배포할 수 있습니다.

## 워크플로우 설정

`.github/workflows/gatsby.yml` 파일을 생성하여 CI/CD 파이프라인을 구축합니다.

## 주요 단계

1. **Checkout** - 저장소 코드를 가져옵니다
2. **Setup Node** - Node.js 환경을 설정합니다
3. **Install** - 의존성을 설치합니다
4. **Build** - Gatsby 사이트를 빌드합니다
5. **Deploy** - GitHub Pages에 배포합니다

이렇게 설정하면 main 브랜치에 푸시할 때마다 자동으로 사이트가 업데이트됩니다.
