---
title: 바라봄 (2026)
description: Expo 기반으로 재설계한 바라봄 V26 프로젝트
---

# 바라봄 (2026)

Expo 기반으로 재설계한 반려동물 건강수첩 | 2026.03

![바라봄 V26 썸네일](/assets/img/projects/barabom_v26_thumb.png)

## 🌐 관련 링크

|            |                                                                                   |
| ---------- | --------------------------------------------------------------------------------- |
| 🌍 홈페이지 | [barabom.me](https://barabom.me)                                                  |
| 🤖 Android  | [Play Store 다운로드](https://play.google.com/store/apps/details?id=com.rn_drpet) |
| 🍎 iOS      | [App Store 다운로드](https://apps.apple.com/kr/app/id1516235091)                  |

## 프로젝트 개요

바라봄 V26은 6년간 운영한 기존 서비스를 Expo 중심 구조로 다시 설계한 버전입니다.

2025년 스토어 정책 변화(API 35, iOS 18 SDK/Xcode 16 요구)에 대응하면서, 레거시 React Native CLI 기반 구조를 타입 안정성과 운영 효율 중심으로 재정비했습니다.

기존 Atomic Design 기반 구조에서는 공용 폴더가 비대해지고, 컴포넌트 역할과 소유권이 모호해지며, 큰 컴포넌트에 UI와 비즈니스 로직이 함께 섞이는 문제가 있었습니다. 이 구조적 문제를 줄이기 위해 Feature-Sliced Design(FSD)을 참고한 구조로 재정비했습니다.

## 🛠 기술 스택

| 분야              | 기술                         |
| ----------------- | ---------------------------- |
| 모바일 프레임워크 | React Native 0.81.5, Expo 54 |
| 언어              | TypeScript                   |
| 상태/데이터       | Zustand, React Query 5       |
| UI/디자인 시스템  | @0610studio/zs-ui            |
| 배포/운영         | EAS, GitAction                          |
| 백엔드            | Kotlin, Spring Boot          |
| 인프라        | AWS                          |

## 주요 경험

- React Native CLI에서 Expo로 전환하며 네이티브 충돌(Podfile, Gradle, plist/manifest 병합) 부담을 줄이고 배포 구조 단순화
- Node.js + Express 기반 백엔드를 Kotlin + Spring Boot로 전환해 운영 안정성과 개발 생산성 강화
- TypeScript 중심 코드베이스로 재구성해 런타임 이슈를 컴파일 단계에서 조기 감지
- Feature-Sliced Design(FSD)을 참고해 `pages`, `widgets`, `shared` 레이어와 슬라이스 내부 `model`, `ui` 분리 구조를 적용하고, 공통 쓰임새가 명확한 경우에만 `shared`나 `widgets`로 승격시키는 기준을 두어 코드베이스 정리
- 앱 내부 UI를 `@0610studio/zs-ui`로 분리해 도메인 로직과 UI 레이어의 관심사 분리

## 운영 품질 개선

- React Query 기반 캐싱 전략으로 반복 조회 화면의 응답성 개선
- GA4 이벤트 트래킹을 확장해 운영 지표 확인 체계 보강
- preview/production 환경을 분리하고 EAS 기반 빌드·업데이트·제출 스크립트를 정비해 릴리즈 흐름 단순화

## 스크린샷

|                                                                             |                                                                             |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| ![바라봄 V26 스크린샷 1](/assets/img/projects/barabom_v26_screenshot_1.png) | ![바라봄 V26 스크린샷 2](/assets/img/projects/barabom_v26_screenshot_2.png) |
| ![바라봄 V26 스크린샷 3](/assets/img/projects/barabom_v26_screenshot_3.png) | ![바라봄 V26 스크린샷 4](/assets/img/projects/barabom_v26_screenshot_4.png) |
| ![바라봄 V26 스크린샷 5](/assets/img/projects/barabom_v26_screenshot_5.png) | ![바라봄 V26 스크린샷 6](/assets/img/projects/barabom_v26_screenshot_6.png) |

## 시연 영상

React Query prefetch와 staleTime 기반 캐싱을 적용해, 로딩 없이 즉시 데이터를 보여주고 백그라운드에서 최신 상태로 자연스럽게 갱신되는 사용자 경험 제공.

<div style={{
  display: 'flex',
  overflowX: 'auto',
  gap: '20px',
  padding: '0 10px 0 0'
}}>
<video controls playsinline preload="metadata" width="40%">
  <source src="/assets/img/projects/barabom_v26_prefetch.mp4" type="video/mp4" />
  브라우저가 video 태그를 지원하지 않습니다.
</video>
<video controls playsinline preload="metadata" width="47%">
  <source src="/assets/img/projects/barabom_v26_realtime.mp4" type="video/mp4" />
  브라우저가 video 태그를 지원하지 않습니다.
</video>
</div>

## 참고 자료

- [바라봄 V26 업데이트 후기](/blog/v26-update)
- [바라봄 홈페이지](https://barabom.me)
- [Feature-Sliced Design 공식 문서 - Overview](https://feature-sliced.design/docs/get-started/overview)
- [Feature-Sliced Design 소개 글](https://emewjin.github.io/feature-sliced-design/?utm_source=substack&utm_medium=email)
