---
title: Node - express-generator 구조
description: Node - express-generator 구조
date: '2019-02-28'
authors:
  - righthot
tags:
  - node
  - study
slug: node-express-g
---





# express-generator 설치 및 환경

```bash
npm i -g express-generator

# express 프레임워크 기반 워크스페이스 폴더 생성
express [폴더명] --view=[뷰엔진] 
cd [폴더명]

npm install
```

# express-generator 폴더 구조 

> bin/www

```jsx
var app = require('../app');  
var debug = require('debug')('learn-express:server');  
var http = require('http');
```

- **app** : express() 인스턴스. `app.set(키,값)` 형태로 데이터를 저장할 수 있으며 `app.get(키)`로 가져올 수 있다.
- **debug** : 콘솔에 로그를 남길 수 있는 모듈

<!--truncate-->

- **http** : 서버 생성 모듈

 

```jsx
 var port = normalizePort(process.env.PORT || '3000');
```

- process.env 객체에 PORT 값이 있으면 사용하고 없으면 3000을 기본 포트로 사용 

 

```jsx
 var server = http.createServer(app);  
 server.listen(port);
```

- 지정된 포트로 서버 실행

 

> app.js

```jsx
var app = express();  
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'pug');
```

- `app.set` 을 사용하여 express 환경 설정 가능

 

```jsx
app.use(logger('dev'));                            // morgan
app.use(express.json());                           // body-parser
app.use(express.urlencoded({ extended: false }));  // body-parser
app.use(cookieParser());                           // cookie-parser
app.use(express.static(path.join(__dirname, 'public')));
```

- `app.use` 를 사용하여 미들웨어 추가

 

```jsx
...  
module.exports = app;
```

- 모듈로 내보내고 `www` 에서 사용

   

# express 미들웨어

### 미들웨어란?

> 요청과 응답의 중간에 위치하여 기능을 추가하거나 필터링함.

- 미들웨어 형태

    ```jsx
     app.use(function(req, res, next) {
         ...
         next();
     })
    ```

- **next()** : 요청의 흐름을 제어함
    - `next()` : 다음 미들웨어로 이동
    - `next('route')` : 다음 라우터로 이동
    - `next(error내용)` : 에러 핸들러 이동

 

### 미들웨어 종류 및 기능

- **morgan**

    콘솔 기록 미들웨어

- **body-parser**

    본문을 해석해주는 미들웨어. json, raw, text등의 본문 데이터들을 해석해 req.body에 추가함

    - 예제

        URL-encoded 형태의 `name=righthot&age=30` 데이터를  `{name: 'righthot', age:30}` 으로 변형

- **cookie-parser**

    쿠키를 해석해주는 미들웨어

- **static**

    정적인 파일 제공, 정적 파일을 불러올 수 있으며, 경로를 다르게 지정 가능

    - 정적 파일이란?

        정적 파일이란, 직접 값에 변화를 주지 않는 이상 변하지 않는 파일을 의미합니다. 

        예를 들면, image, css 파일, js 파일 등을 의미

    ```jsx
    app.use('/pd', express.static(path.join(__dirname, 'images/pd')));

    // 실제경로 : http://localhost:3000/images/pd
    // 요청경로 : http://localhost:3000/pd
    ```

- **express-session**

    세션 관리 미들웨어
