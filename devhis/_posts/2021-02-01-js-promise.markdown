---
layout: post
title: 'Javascript - 프로미스(Promise)'
subtitle: 'API 예제로 프로미스 알아보기'
categories: devhis-js
tags: js git javascript
comments: true
---

### Javascript - 프로미스(Promise)

> Promise 란?

비동기 작업의 결과값(성공,실패)를 저장하고 있는 컨테이너, `resolve` 와 `reject`를 통해 원하는 시점에 결과를 리턴할 수 있다.

> Promise 생성

```
 const promise = new Promise((resolve, reject)=>{
     if(true){
         resolve()
    }else{
         reject()
    }
 })
```

> Promise를 사용한 콜백 처리.

**미국 달러와 원화 , 엔화를 차례대로 서버에 요청하는 예제이다.**

**CORS를 피해갈 마땅한 GET 요청이 없어서 아래 API 사용했으므로 과다한 호출은 삼가 부탁드립니다.**

각 나라별로 차례대로 환율을 비교해야하는 상황에 동시에 조회하는 API가 없다면 콜백 헬이 엄청나게 깊어 질 수도 있다.

하지만 아래와 같이 promise 를 사용하면 콜백헬을 극복할 수 있다.

```
 <!DOCTYPE html>
 <html>
 ​
 <head>
     <meta charset="utf-8">
 </head>
 <script>
     const reqPromise = async (reqServerApi) => {
         return new Promise((resolve, reject) => {
             console.log("요청 : " + reqServerApi)
 ​
             // AJAX HTTP 요청
             const xhr = new XMLHttpRequest();
             xhr.onreadystatechange = () => {
                 if (xhr.readyState === xhr.DONE) {
                     if (xhr.status === 200 || xhr.status === 201) {
                         resolve(xhr.responseText) // then
                    } else {
                         reject(xhr.status) // catch
                    }
                }
            };
             xhr.open('GET', reqServerApi);
             xhr.send();
        })
    }
 ​
     reqPromise('https://earthquake.kr:23490/query/USDKRW')
        .then((resData) => {
             console.log("요청 결과 1 : " + JSON.stringify(resData)) // USDKRW 환율 결과
             return reqPromise('https://earthquake.kr:23490/query/USDJPY')
        })
        .then((resData) => {
             console.log("요청 결과 2 : " + JSON.stringify(resData)) // USDJPY 환율 결과
        })
        .catch((errData) => {
             console.error(JSON.stringify(errData))
        })
 </script>
 ​
 <body>
 </body>
 ​
 </html>
```

 요청 : https://earthquake.kr:23490/query/USDKRW  
 ​  
 요청 결과 1 : "{\\"update\\":1602865436646,\\"USDKRW\\":\[1141.43,-3.409912,-0.29785056,1144.84,1144.83,1140.21,1147.53\]}"  
 ​  
 요청 : https://earthquake.kr:23490/query/USDJPY  
 ​  
 요청 결과 2 : "{\\"update\\":1602865436646,\\"USDJPY\\":105.377,-0.037002563,-0.035102133,105.414,105.403,105.16,105.442\]}"

> async/await 패턴

위 패턴을 아래 처럼 변경해서 사용가능하다. 코드줄수는 좀 짧아졌지만 개인적으로는 전자의 패턴이 더 눈에 잘 들어오는듯 함.

 <!DOCTYPE html>  
 <html\>  
 ​  
 <head\>  
  <meta charset\="utf-8"\>  
 </head\>  
 <script\>  
  const reqPromise \= async (reqServerApi) \=> {  
  return new Promise((resolve, reject) \=> {  
  console.log("요청 : " + reqServerApi)  
 ​  
  // AJAX HTTP 요청  
  const xhr \= new XMLHttpRequest();  
  xhr.onreadystatechange \= () \=> {  
  if (xhr.readyState \=== xhr.DONE) {  
  if (xhr.status \=== 200 || xhr.status \=== 201) {  
  resolve(xhr.responseText) // then  
  } else {  
  reject(xhr.status) // catch  
  }  
  }  
  };  
  xhr.open('GET', reqServerApi);  
  xhr.send();  
  })  
  }  
 ​  
  async function getRate () {  
  try{  
  let resData;  
 ​  
  resData \= await reqPromise('https://earthquake.kr:23490/query/USDKRW');  
  console.log("요청 결과 1 : " + JSON.stringify(resData)) // USDKRW 환율 결과  
    
  resData \= await reqPromise('https://earthquake.kr:23490/query/USDJPY');  
  console.log("요청 결과 2 : " + JSON.stringify(resData)) // USDJPY 환율 결과  
  }catch(error){  
  console.error(error)  
  }  
  }  
 ​  
  getRate();  
 ​  
 </script\>  
 ​  
 <body\>  
 </body\>  
 ​  
 </html\>

결과는 위와 동일.

---

환율 API 출처 : [https://jaeheon.kr/12](https://jaeheon.kr/12)