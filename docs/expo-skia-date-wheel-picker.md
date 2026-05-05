---
title: Expo Skia Date Wheel Picker
description: Skia overlay와 즉시 콜백을 지원하는 Expo 날짜/시간 휠 피커
---

# Expo Skia Date Wheel Picker

Skia overlay와 즉시 콜백을 지원하는 Expo 날짜/시간 휠 피커 | 2026.05

![Expo Skia Date Wheel Picker 데모](/assets/img/projects/expo-skia-date-wheel-picker.gif)

## 관련 링크

|   |   |
|---|---|
| GitHub | [0610studio/expo-skia-date-wheel-picker](https://github.com/0610studio/expo-skia-date-wheel-picker) |
| 개발 후기 | [Expo Skia Date Wheel Picker 개발 후기](/blog/expo-skia-date-wheel-picker) |

## 프로젝트 개요

`@0610studio/expo-skia-date-wheel-picker`는 Expo와 React Native에서 사용할 수 있는 날짜/시간 휠 피커입니다.

기존 날짜 피커를 사용하면서 불편했던 idle 대기 후 값 변경, 제한적인 폰트/스타일 조정 문제를 해결하기 위해 만들었습니다.

## 주요 기능

- 스크롤 중에도 `onDateChange`가 바로 호출되는 live callback
- `date` / `time` 모드 지원
- `minimumDate` / `maximumDate`, `minuteInterval`, locale, timezone offset 지원
- `fontSize`, `fontFamily`, `rowHeight`, `visibleRows`, 색상 prop을 통한 스타일 조정
- Skia 기반 fade overlay와 선택 영역 guide line 렌더링

## 설치

```bash
npx expo install @shopify/react-native-skia expo-haptics
```
