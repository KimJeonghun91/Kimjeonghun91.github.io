---
title: ZS-ui
description: React Native Expo UI 컴포넌트 라이브러리
---

# ZS-ui

React Native Expo UI 컴포넌트 라이브러리 | 2026.02

## 🛠 기술 스택

| 분야 | 기술 |
|------|------|
| 모바일 | React Native, Expo |
| 언어 | TypeScript, JavaScript |

<br>

## ZS-ui란?

JavaScript만으로 구현된 Expo용 UI 컴포넌트 라이브러리입니다. 다크 모드, 테마, 타이포그래피, Alert과 같은 주요 UI 요소가 포함되어 있으며, 직관적이고 일관된 사용자 인터페이스를 구현할 수 있습니다.

<br>

<p>
  <a
    href="https://0610studio.github.io/zs-ui/docs/intro"
    target="_blank"
    rel="noreferrer"
    className="button button--primary"
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', paddingTop: 12, paddingBottom: 12 }}
  >
    <span>문서 보기</span>
  </a>
  <a
    href="https://snack.expo.dev/@studio0610/zs-ui_13_playground"
    target="_blank"
    rel="noreferrer"
    className="button button--secondary button--outline"
    style={{ marginLeft: '0.5rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', paddingTop: 12, paddingBottom: 12 }}
  >
    <span>Playground 열기</span>
  </a>
</p>

## 개발 배경

ZS-ui는 **바라봄(Barabom) 앱의 UI 컴포넌트를 분리하기 위해 개발**되었습니다. 바라봄을 React Native CLI에서 Expo로 마이그레이션하면서, 프로덕션 애플리케이션에서 사용되던 UI 컴포넌트들을 독립적인 라이브러리로 추출했습니다.

**설계 철학**: 초급자도 코드를 해석할 수 있도록 단순한 구조를 지향하며, Expo를 시작하는 분들에게 영감을 주는 라이브러리가 되는 것을 목표로 합니다.

<br>

## 주요 기능

- **테마 시스템**: 다크모드 지원, 커스터마이징 가능한 색상 팔레트, 의미론적 타이포그래피 토큰
- **UI 컴포넌트**: ZSView, ZSContainer, ZSText, ZSTextField, ZSPressable, ZSBlockButton, ZSRadioGroup, ZSSwitch, ZSAboveKeyboard, ZSSkeleton 등
- **Overlay 관리**: Alert, BottomSheet, Snackbar, Loader, Modality, PopOver를 선언적으로 관리 가능
- **순수 JavaScript**: 네이티브 의존성 없음, Expo managed workflow 완벽 지원
- **접힘 디바이스 지원**: iOS/Android 네이티브 스타일 자동 적응
- **완벽한 테스트**: 123개 테스트, 100% 통과율, ~94% 코드 커버리지

<br>
