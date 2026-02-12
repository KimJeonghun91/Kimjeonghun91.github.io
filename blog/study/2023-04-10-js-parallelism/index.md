---
title: Javascript - 병렬처리
description: Javascript - 병렬처리
date: '2023-04-10'
authors:
  - righthot
tags:
  - javascript
  - study
slug: js-parallelism
---





## Promise.all

Promise.all()을 사용하면 여러 개의 Promise 객체를 동시에 실행함. Promise.all()은 배열 형태로 여러 개의 Promise 객체를 받아들이며, 모든 Promise 객체가 완료될 때까지 기다렸다가, 모든 Promise 객체의 결과 값을 배열 형태로 반환.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('첫번째 작업 완료!');
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('두번째 작업 완료!');
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('세번째 작업 완료!');
  }, 1000);
});

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.error(error);
  });


// ["첫번째 작업 완료!","두번째 작업 완료!","세번째 작업 완료!"]
```

## async/await 사용

```js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function parallel() {
  const task1 = async () => {
    await sleep(3000);
    return '첫번째 작업 완료!';
  }

  const task2 = async () => {
    await sleep(2000);
    return '두번째 작업 완료!';
  }

  const task3 = async () => {
    await sleep(1000);
    return '세번째 작업 완료!';
  }

  const [result1, result2, result3] = await Promise.all([task1(), task2(), task3()]);
  console.log(result1, result2, result3);
}

parallel();

// "첫번째 작업 완료!" "두번째 작업 완료!" "세번째 작업 완료!"
```


<!--truncate-->
