---
layout: post
title: 'Javascript - Event Loop'
subtitle: 'Javascript - Event Loop'
category: devlog
tags: javascript
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### Javascript - Event Loop

## 이벤트 루프란?

자바스크립트는 싱글 스레드(single-thread) 기반으로 동작됨. 즉, 한 번에 하나의 작업만 처리할 수 있다는 것을 의미.
하지만 자바스크립트는 이벤트 루프(event loop)를 통해 비동기적으로 동작할 수 있도록 지원.

이벤트 루프는 자바스크립트 엔진의 메인 스레드에서 동작하는 무한 루프. 
이 루프는 실행 중인 코드와 이벤트 큐(event queue)를 관찰하고, 이벤트 큐에 이벤트가 들어오면 해당 이벤트를 처리하는 작업을 수행.

**RreactNative는 네이티브에서 동작하는 자체 이벤트루프(EventLoopController 모듈)를 사용함. 따라서 JS 이벤트루프와 다르게 동작할 수 있음.**



## 이벤트 종류

- 타이머(timer) 이벤트: setTimeout() 또는 setInterval() 함수로 등록된 이벤트. 지정된 시간이 지나면 해당 이벤트가 발생하며, 이벤트 루프는 해당 이벤트를 실행.

- 이벤트 핸들러(event handler) 이벤트: 마우스 클릭, 키보드 입력 등 사용자의 이벤트 동작으로 등록된 이벤트. 해당 이벤트가 발생하면 이벤트 루프는 이벤트 핸들러를 호출.

- 비동기 함수(async function) 이벤트: Promise 객체의 상태가 변경되면 해당 이벤트가 발생. 이벤트 루프는 이벤트 핸들러를 호출하고, Promise 객체의 상태에 따라 콜백 함수가 호출.

- 입출력(I/O) 이벤트: 파일 읽기, 네트워크 요청 등의 I/O 작업을 수행할 때 발생하는 이벤트입니다. 이벤트 루프는 I/O 작업이 완료될 때까지 해당 이벤트를 처리하지 않으며, 완료되면 해당 이벤트를 실행합니다.



## Queue

![img_loop.png](/assets/img/post/img_loop.gif)

[출처-saravanaeswari22](https://medium.com/@saravanaeswari22/microtasks-and-macro-tasks-in-event-loop-7b408b2949e0)

- 콜 스택(Call Stack)
자바스크립트에서 함수 호출 시, 해당 함수는 콜 스택에 쌓임. 그리고 함수가 종료되면 콜 스택에서 제거.
콜 스택은 동기적인 코드 실행을 위해 사용.

- 마이크로태스크 큐(Microtask Queue)
마이크로태스크 큐는 Promise, Object.observe와 같은 비동기 작업이 완료되면 실행되는 작은 작업들의 큐.
마이크로태스크 큐는 콜 스택이 비어있을 때, 가장 먼저 처리되어야 하는 작업들이 들어있는 큐.

- 태스크 큐(Macrotask Queue)
매크로 태스크 큐는 콜백 함수, setTimeout, setInterval, requestAnimationFrame, I/O 등의 비동기 작업이 완료되면 실행되는 작업들의 큐.
마이크로태스크 큐보다 우선순위가 낮아서 콜 스택이 비어있을 때, 마이크로태스크 큐가 모두 실행된 후 실행.


마이크로태스크 큐가 우선순위가 높기 때문에 태스크 큐 보다 먼저 실행됨.



## 예제

```js

console.log('start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve()
    .then(() => {
        console.log('Promise');
    });

console.log('End');

```

start -> End -> Promise -> setTimeout

순서로 실행된다.

Promise 와 setTimeout 은 큐에 들어가게 되고 스택이 비워지기 까지 기다리기 때문임.

그중에서도 마이크로태스크 큐의 우선순위가 더 높기 때문에 Promise가 먼저 실행된다.