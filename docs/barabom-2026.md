---
title: 바라봄 (2026)
description: Expo 기반으로 재설계한 바라봄 V26 프로젝트
---

# 바라봄 (2026)

Expo 기반으로 재설계한 반려동물 건강수첩 | 2026.03

![바라봄 V26 썸네일](/assets/img/projects/barabom_v26_thumb.png)

<br>

## 🌐 관련 링크

|   |   |
|---|---|
| 🌍 홈페이지 | [barabom.me](https://barabom.me) |
| 🤖 Android | [Play Store 다운로드](https://play.google.com/store/apps/details?id=com.rn_drpet) |
| 🍎 iOS | [App Store 다운로드](https://apps.apple.com/kr/app/id1516235091) |

<br>

## 프로젝트 개요

바라봄 V26은 기존 React Native CLI 기반 레거시 앱을 Expo 중심 구조로 전환하면서, 타입 안정성과 유지보수성을 크게 높인 버전입니다.

6년간 운영된 서비스의 복잡도와 2025년 스토어 정책 변화(API 35, iOS 18 SDK/Xcode 16 요구)에 대응하기 위해 제로베이스 재설계를 진행했습니다.

## 🛠 기술 스택

| 분야 | 기술 |
|------|------|
| 모바일 프레임워크 | React Native 0.81.5, Expo 54 |
| 언어 | TypeScript |
| 백엔드 | Kotlin, Spring Boot |
| 상태/데이터 | Zustand, React Query 5 |
| UI/디자인 시스템 | @0610studio/zs-ui |
| 배포/운영 | EAS Build, EAS Update, EAS Submit |

## 아키텍처 변경 포인트

- **React Native CLI -> Expo 전환**: 네이티브 충돌(Podfile, Gradle, plist/manifest 병합) 부담을 줄이고 배포 파이프라인 단순화
- **백엔드 스택 전환**: Node.js + Express에서 Kotlin + Spring Boot로 전환해 운영 안정성과 개발 생산성 강화
- **TypeScript 중심 코드베이스**: 런타임 이슈를 컴파일 타임에 조기 감지
- **FSD 응용 구조 도입**: `pages`, `widgets`, `shared` 레이어 + 슬라이스 내부 `model`, `ui` 분리
- **디자인 시스템 분리**: 앱 내부 UI를 `@0610studio/zs-ui`로 독립해 핵심 도메인 로직 집중

## V26에서 강화한 운영 품질

- **캐싱 중심 UX**: React Query 도입으로 반복 조회 화면 응답성 개선
- **분석 체계 강화**: GA4 이벤트 트래킹 확장
- **빌드/릴리즈 자동화**: preview/production 환경 분리 및 EAS 기반 빌드/업데이트/제출 스크립트 정비

## 주요 의존성 하이라이트

- Expo 생태계: `expo`, `expo-router`, `expo-updates`, `expo-notifications`, `expo-location`
- 코어 라이브러리: `react@19`, `react-native@0.81`, `@tanstack/react-query`, `zustand`
- 품질/관측: `@sentry/react-native`, `@react-native-firebase/analytics`
- UI/성능: `@0610studio/zs-ui`, `react-native-reanimated`, `@shopify/flash-list`, `@shopify/react-native-skia`

## 앱 스크린샷

|  |  |
|---|---|
| ![바라봄 V26 스크린샷 1](/assets/img/projects/barabom_v26_screenshot_1.png) | ![바라봄 V26 스크린샷 2](/assets/img/projects/barabom_v26_screenshot_2.png) |
| ![바라봄 V26 스크린샷 3](/assets/img/projects/barabom_v26_screenshot_3.png) | ![바라봄 V26 스크린샷 4](/assets/img/projects/barabom_v26_screenshot_4.png) |
| ![바라봄 V26 스크린샷 5](/assets/img/projects/barabom_v26_screenshot_5.png) | ![바라봄 V26 스크린샷 6](/assets/img/projects/barabom_v26_screenshot_6.png) |

## 실시간 공유 시연 영상

<video controls playsinline preload="metadata" width="100%">
  <source src="/assets/img/projects/barabom_v26_realtime.mp4" type="video/mp4" />
  브라우저가 video 태그를 지원하지 않습니다.
</video>

## 참고 글

- [바라봄 V26 업데이트 후기](/blog/v26-update)
- [바라봄 홈페이지](https://barabom.me)
