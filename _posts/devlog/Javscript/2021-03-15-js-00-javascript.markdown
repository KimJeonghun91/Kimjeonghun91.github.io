---
layout: post
title: 'Javascript 기초 00 - 개요'
subtitle: 'Javascript 기초 00 - 개요'
category: devlog
tags: javascript
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### Javascript 기초 00 - 개요

## 자바스크립트란?

자바스크립트는 1995년에 넷스케이프(Netscape)의 브렌던 아이크(Brendan Eich)에 의해 만들어졌다. 처음에는 모카(Mocha)라는 이름으로 개발되었으나, 그 후에 라이브스크립트(LiveScript), 최종적으로는 자바스크립트(JavaScript)라는 이름으로 변경된다.

JavaScript는 C에서 영향을 받은 C-Family 언어로 기본적인 문법이 유사 중괄호로 구분하는 블럭, 세미콜론으로 줄이 끝남을 알리는 것, 변수 쓰는 법, 연산자 사용법 등 기초적인 문법이 C 문법과 크게 다르지 않다. 호이스팅 같은 것도 C언어의 잔재이다.

## 자바스크립트 엔진

자바스크립트 엔진은 소스코드를 가져와서, 문자열 단위로 분해하고(어휘 단위로 정리), 이들 문자열을 컴파일러가 이해할 수 있도록 바이트 코드로 변환한 후, 이를 실 행하며, 메모리를 할당하고, 가비지 컬렉팅을 한다.

![Javascript engine](/assets/img/post/js00engine.png)

## 프로토타입 기반 언어

프로토타입 기반 프로그래밍은 객체지향 프로그래밍의 한 형태의 갈래로 클래스가 없고, 클래스 기반 언어에서 상속을 사용하는 것과는 다르게, 객체를 원형(프로토타입)으로 하여 복제의 과정을 통하여 객체의 동작 방식을 다시 사용할 수 있다.

## 스크립트 언어

일반적인 응용 소프트웨어는 컴파일러를 사용하는 언어에 의해 기계어로 번역된 채로 실행되기 때문에, 수정이 빈번하게 발생하면 수정 후 일일이 컴파일을 다시 해야 한다. 이 때문에 수정이 빈번하게 발생하는 부분은 소스코드를 한줄 한줄 읽어 기계어로 번역 후 바로 실행하는 인터프리터 방식이 상당히 유리하다. 스크립트 언어는 이런 부분에 사용하기 위해 나온 것으로, 응용 소프트웨어에서 스크립트 언어에 맞는 API를 제공, 응용 소프트웨어와 상호작용하면서 돌아가게 된다.

## HTML에서 Javascript 로드

### head 에서 로드

```jsx
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script type="text/javascript" src="fun.js"></script>
</head>

<body>
</body>
</html>
```

### 문서 마지막에 로드

```jsx
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>

<body>
		...
		.....
    <script type="text/javascript" src="fun.js"></script>
</body>
</html>
```

### async 로드

html 파싱과 js 다운로드를 동시에 진행. js 다운로드가 끝나면 html 파싱을 멈추고 js를 실행한다.

js 파일을 여러개 로드시 먼저 다운이 끝난 js 를 실행하기 때문에 주의가 필요함.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script async type="text/javascript" src="fun.js"></script>
</head>

<body>
</body>
</html>
```

### defer 로드

html을 파싱하는동안 자바스크립트를 다운만 해놓고, html 파싱이 끝난 후 실행한다.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script defer type="text/javascript" src="fun.js"></script>
</head>

<body>
</body>
</html>
```

## 'use strict'

- 엄격 모드
1. 기존에는 조용히 무시 되던 에러들을 throwing합니다.
2. JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
3. 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.

```jsx
'use strict'

...
....
```