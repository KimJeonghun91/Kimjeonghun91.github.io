---
layout: post
title: 'Javascript 실행 컨텍스트와 호이스팅'
subtitle: 'Javascript 실행 컨텍스트와 호이스팅'
category: devlog
tags: javascript
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### Javascript 실행 컨텍스트와 호이스팅

자바스크립트는 함수 선언보다 함수 실행을 먼저 하더라도 동작이 된다.

코드는 위에서 아래로 실행이 된다고 알고 있는데 왜 그런걸까?

### 실행 컨텍스트

실행 컨텍스트`execution context`는 실행할 **코드의 환경 정보**를 모아 놓은 객체로, **가장 먼저 실행**되어 스택에 들어가게 된다.

이 실행 컨텍스트가 생성될 때, 호이스팅이 된다.

### 호이스팅

호이스팅`hoisting`이란 실행 컨텍스트에 환경 정보를 저장할때 **매개변수의 이름, 함수 선언, 변수명**등을 끌어 올려서 기록하는 것 입니다.

> 원본 코드

```jsx
var a               // 수집대상  
var a = 3           // 선언부만 호이스팅, 할당은 원래 자리에 남겨둠.   
function f(arg) {   // 수집대상(함수 선언문은 호이스팅됨)      
    var fv1         // 수집대상      
    var fv2 = 4     // 선언부만 호이스팅, 할당은 원래 자리에 남겨둠.  
}

// 익명 함수 표현식은 할당이기 때문에 변수 선언만 호이스팅, 할당은 원래자리  
var f2 = function () { }
```

> 호이스팅 후

```jsx
var a  
function f (arg) {}  
var fv1  
var fv2  
var f2   
a = 3  
fv = 4  
f2 = function () {}
```

편의상 식별자를 모두 다르게 했지만 같은 식별자를 썼다면 오버라이딩`overriding`되며 예상했던 결과와 전혀 다른 결과가 나올 수 있다.

특히 **함수 선언문**의 경우 통째로 호이스팅되기 때문에 되도록 **함수 표현식**을 쓰는게 좋다.

### 함수 선언문 사용

> 원본 코드

```jsx
function sum(a, b) { return a + b; }

console.log(sum(1, 2));     // 3이 아닌 12가 출력   

function sum(a, b) { return a + '' + b; }

console.log(sum(1, 2));     // 12 출력
```

> 호이스팅

```jsx
function sum(a, b) { return a + b }
function sum(a, b) { return a + '' + b }    // overriding  
 
console.log(sum(1, 2));                     // 12 출력  
console.log(sum(1, 2));                     // 12 출력
```

### 함수 표현식 사용

> 원본 코드

```jsx
var sum = function (a, b) { return a + b; }
console.log(sum(1, 2));

var sum = function (a, b) { return a + '' + b; }
console.log(sum(1, 2));
```

> 호이스팅

```jsx
var sum;// 선언부만 호이스팅된다.  

var sum = { return a + b }      // 할당은 원래 자리에서.   
console.log(sum(1, 2));         // 3 출력  

var sum = { return a + '' + b } // 할당은 원래 자리에서.
console.log(sum(1, 2));         // 12 출력
```