---
title: ZS-ui
description: Expo 환경을 고려해 설계한 React Native UI 라이브러리
---

# ZS-ui

React Native Expo UI 컴포넌트 라이브러리 | 2026.02

## 🌐 관련 링크

|   |   |
|---|---|
| 📘 문서 | [ZS-ui 문서](https://0610studio.github.io/zs-ui/docs/intro) |
| 🧪 Playground | [Expo Snack 예제](https://snack.expo.dev/@studio0610/zs-ui_13_playground) |

## 프로젝트 개요

ZS-ui는 바라봄 앱을 React Native CLI에서 Expo로 마이그레이션하는 과정에서, 프로덕션 UI를 분리해 만든 라이브러리입니다.

디자인 시스템을 서비스 밖으로 독립시키면서 앱은 도메인 로직에 집중하고, UI는 재사용 가능한 구조로 관리할 수 있도록 설계했습니다.


## 주요 경험

- Expo managed workflow를 고려해 네이티브 의존성 없는 순수 JavaScript 기반으로 설계
- 프로덕션 앱에서 사용하던 UI를 라이브러리로 분리해 재사용성과 유지보수성 강화
- Alert, BottomSheet, Snackbar, Loader, Modality, PopOver를 선언적으로 관리할 수 있는 overlay 구조 설계
- 123개 테스트, 100% 통과율, 약 94% 코드 커버리지로 품질 기반 마련

## 주요 기능

- 다크 모드와 커스터마이징 가능한 색상 팔레트, 의미론적 타이포그래피 토큰 지원
- ZSView, ZSContainer, ZSText, ZSTextField, ZSPressable, ZSBlockButton, ZSRadioGroup, ZSSwitch, ZSAboveKeyboard, ZSSkeleton 등 기본 UI 컴포넌트 제공
- iOS/Android 환경과 접힘 디바이스에 맞는 스타일 자동 적응 지원

## 데모

<div style={{
  display: 'flex',
  overflowX: 'auto',
  gap: '20px',
  padding: '0 10px 0 0'
}}>
  <div style={{
    minWidth: '300px',
    flexShrink: 0
  }}>
    <video controls width="300">
      <source src="/assets/img/projects/theme.mp4" type="video/mp4" />
    </video>
    <p>Theme</p>
  </div>
  <div style={{
    minWidth: '300px',
    flexShrink: 0
  }}>
    <video controls width="300">
      <source src="/assets/img/projects/layout.mp4" type="video/mp4" />
    </video>
    <p>Layout</p>
  </div>
  <div style={{
    minWidth: '300px',
    flexShrink: 0
  }}>
    <video controls width="300">
      <source src="/assets/img/projects/overlay.mp4" type="video/mp4" />
    </video>
    <p>Overlay</p>
  </div>
</div>