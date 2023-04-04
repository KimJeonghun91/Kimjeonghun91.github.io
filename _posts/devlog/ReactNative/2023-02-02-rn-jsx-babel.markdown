---
layout: post
title: 'ReactNative - JSX와 Babel'
subtitle: 'ReactNative - JSX와 Babel'
category: devlog
tags: reactnative
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### ReactNative - JSX와 Babel

## JSX란?

JSX는 Facebook에서 개발한 JavaScript의 확장 문법. React와 함께 사용되며, 컴포넌트 기반 UI 라이브러리.

JSX는 XML과 유사한 문법으로, HTML 태그와 비슷한 형태로 UI를 작성할 수 있음.

컴파일러에 의해 JavaScript 코드로 변환됨.


## Babel이란?

자바스크립트 컴파일러.

Babel은 JSX와 같은 다른 언어나 확장 기능을 지원하며, 커스터마이즈 가능한 플러그인 시스템을 제공하여 자신만의 변환 규칙을 만들 수 있음.


## ReactNative에서 JSX와 Babel 동작 예제

```jsx
import React from "react";
import { View } from 'react-native';

// JSX 표현식
const element = (
    <View style="{{ backgroundColor: 'red' }}">
        <Text style="{{ color: 'black' }}">Test1</Text>
    </View>
)

// Babel에 의해 아래처럼 컴파일됨.
const element2 =
    React.createElement(View, { style: { backgroundColor: 'red' } },
        React.createElement(Text, { style: { color: 'black' } }, "Test2"));


return (
    {
        element
    }
    {
        element2
    }
)
```