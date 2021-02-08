---
layout: post
title: 'Javascript 싱글 스레드'
subtitle: 'Javascript 싱글 스레드 눈으로 확인하기.'
categories: devhistory
tags: js git javascript
comments: true
---

## Javascript 싱글 스레드 눈으로 확인하기.

자바스크립트는 자바와는 다르게 싱글 스레드라고 한다.

한번에 하나의 작업만 수행할 수 있음에도 불구하고 비동기, 논블로킹등을 지원하기에 실제 코드상 눈으로 확인하긴 어렵다.

따라서 아래 자바와의 비교를 코드를 통해 싱글 스레드를 눈으로 확인해보겠다.

**잘못 된 정보가 있다면 댓글로 알려주길 바랍니다!**
<br/>
 

> JAVA

```java
public class NoSyncDataMain {
    public static Data data = new Data();
    // static으로 공용으로 사용하는 객체 생성
    // Tom클래스와 Jane 클래스에서 동시에 값을 막 넣음
    public static void main(String[] args) {
        System.out.println("main 시작");
        Tom t = new Tom();
        Jane j = new Jane();
        t.start();
        j.start();
        System.out.println("main 종료");
    }
}
class Tom extends Thread {
    public void run() {
        for (int i = 0; i < 1000000; i ++) {
            NoSyncDataMain.data.i ++;
        }
        System.out.println("Tom : " + NoSyncDataMain.data.i);
        // 최종 출력이 다르게 찍히는건 그때 10만연산이 끝났기 때문.
        // 예를들어 Tom은 17만일때 10만이 끝났는데 Jane이 3만남음.
    }
}
class Jane extends Thread {
    public void run() {
        for (int i = 0; i < 1000000; i ++) {
            NoSyncDataMain.data.i ++;
        }
        System.out.println("Jane : " + NoSyncDataMain.data.i);
    }
}
class Data {
    public int i = 0;
}
```

![Javascript test](/assets/img/post/99F9A74E5FA152002B.png)
<br/><br/>
 

> Javascript

```javascript
let mCnt = 0;

console.log("main 시작")

new Promise((resolve, reject) => {
    for (let i = 0; i < 1000000; i++) {
        mCnt = mCnt + 1;
    }
    resolve()
}).then((resData) => {
    console.log("Tom : " + mCnt)
});

new Promise((resolve, reject) => {
    for (let i = 0; i < 2000000; i++) {
        mCnt = mCnt + 1;
    }
    resolve()
}).then((resData) => {
    console.log("Jane : " + mCnt)
});

console.log("main 종료")
```

![Javascript test](/assets/img/post/997BD04E5FA152102A.png)
<br/><br/>
 

 

온라인 코드실행기 : https://hashcode.co.kr/code_runners?language=javascript