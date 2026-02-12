---
title: 'ReactNative - 실시간 Data streaming (SSE) '
description: ReactNative - 실시간 Data streaming (SSE)
date: '2023-06-18'
authors:
  - righthot
tags:
  - reactnative
  - study
slug: rn-data-stream
---





## Server-Sent Events(SSE) 란?

서버에서 클라이언트로 실시간으로 데이터를 보낼 수 있게 해주는 웹 기술.

SSE는 HTTP 연결을 사용하며, 클라이언트가 'text/event-stream'이라는 MIME 타입으로 GET 요청을 서버에 보내고, 서버는 이 연결을 유지. 이후 서버가 새로운 이벤트를 이 연결을 통해 전송함.

웹소켓과 비슷하지만, SSE는 단방향 통신만을 지원함. 만약 클라이언트에서 요청을 보내기 위해서는 별도의 HTTP 요청을 사용해야 됨.


## RN 에서의 SSE

<!--truncate-->


노드나 기타 JS 환경에서는 기본적으로 제공되는 객체인 EventSource , fetch 를 통해 SSE 구현이 가능하다.

 - EventSource

```jsx
const eventSource = new EventSource('https://your-api-endpoint');

eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
};
```

 - fetch

```jsx
const response = await fetch('https://your-api-endpoint');
const reader = response.body.getReader();
const decoder = new TextDecoder('utf-8');

while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value);
};
```

하지만, 안타깝게도 RN 에서는 위 방법 모두 지원하지 않는다. (axios도 지원하지 않는다.)

따라서 RN에서 SSE를 구현하기 위해선 `XMLHttpRequest`를 사용해야 한다.


## XMLHttpRequest 와 fetch

XMLHttpRequest는 웹 브라우저가 서버와 비동기로 데이터를 교환할 수 있게 해주는 객체.

XML을 전송하는 데 사용되었지만, 다양한 종류의 데이터를 처리할 수 있으며 JSON, HTML 및 일반 텍스트를 포함할 수 있다.

2015년경 부터 브라우저가 fetch 를 지원하기 시작하면서 현재 XMLHttpRequest는 잘 사용되지 않는다.

fetch는 Promise , CORS , HTTP/2등 더 다양한 기능을 제공한다.


## 결론

fetch에 비해 사용 방법이 꽤 복잡하기 때문에 필자는 아래 라이브러리를 사용하여 구현했다.

(더 이상 유지 보수되고 있지 않지만 소스도 그리 길지 않고 크게 문제 될 소지는 없어 보인다.)

https://github.com/jordanbyron/react-native-event-source


```jsx

import RNEventSource from 'react-native-event-source';

const eventSource = new RNEventSource('https://your-api-endpoint');

eventSource.addEventListener('message', async (response: any) => {
    // ...
});

```
