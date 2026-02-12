---
title: ReactNative - 각종 도구들
description: ReactNative - 각종 도구들
date: '2021-01-01'
authors:
  - righthot
tags:
  - reactnative
  - study
slug: rn-build
---





## 빌드 과정

1. JavaScript 코드 번들링
    
    React Native 애플리케이션은 JavaScript로 작성되기 때문에, JavaScript 코드를 번들링해야 됨. Metro 번들러를 사용하여 JavaScript 코드를 번들링하고, 필요한 모든 의존성을 가져옴.
    
2. JavaScript 코드 실행
    
    번들링된 JavaScript 코드는 JavaScript 엔진에서 실행됨. Hermes 엔진을 사용하여 더 빠른 실행 속도를 제공.

<!--truncate-->

    
3. 네이티브 모듈 로딩
    
    React Native 애플리케이션에서는 네이티브 모듈을 사용. 이를 위해, JavaScript 코드에서 Native Modules를 호출하면 Native Modules를 로딩할 수 있도록 React Native Bridge가 작동.
    
4. 네이티브 코드 컴파일
    
    React Native 애플리케이션에서 사용되는 Native Modules는 Objective-C, Swift, Java 또는 Kotlin 등의 네이티브 코드로 작성. 이러한 네이티브 코드는 애플리케이션 빌드시 컴파일되어 실행 파일로 만들어짐.



## 도구들

- Metro
    
    Metro는 React Native에서 사용되는 JavaScript 번들러(Webpack 역할).
    Metro는 애플리케이션의 JavaScript 코드를 번들링하고, 애플리케이션을 실행하기 위해 필요한 모든 의존성을 가져옴. 
    
    - 모듈 번들링 : 앱의 모든 자바스크립트 코드를 모듈 단위로 번들링. 이를 통해 코드의 재사용성이 증가하며, 앱의 로딩 시간을 단축
    - Hot Reloading : 개발자는 앱 코드를 수정하고 저장할 때마다 브라우저에서 자동으로 새로운 버전을 볼 수 있습니다. 이를 통해 앱 개발의 생산성이 높아집니다.
    - 코드 최적화 : Metro는 코드 최적화 기능을 제공하여 앱의 실행 속도를 높일 수 있습니다. 이 기능은 코드를 자동으로 최적화하며, 코드를 더 효율적으로 실행할 수 있도록 합니다.
    - 소스 맵 지원: 소스 맵은 앱의 디버깅을 더 쉽게 만들어주는 기능입니다. Metro는 소스 맵을 생성하고, 디버깅할 때 원래 소스 코드로 디버깅할 수 있도록 합니다.
    - 다양한 플러그인: Metro는 다양한 플러그인을 제공하여 사용자 정의 기능을 추가할 수 있습니다. 예를 들어, Metro는 Babel 플러그인을 사용하여 ES6+ 문법을 ES5 문법으로 변환할 수 있습니다.


- Babel
    
    JavaScript 코드 컴파일러. Babel은 최신 버전의 JavaScript 코드를 이전 버전의 JavaScript 코드로 변환하여, 모든 브라우저 및 플랫폼에서 실행 가능한 코드로 만들어줌. React Native에서 Babel은 JSX 구문을 일반 JavaScript로 변환하여 애플리케이션에서 사용할 수 있게 함.
    
    - 플러그인 시스템 : Babel은 다양한 플러그인을 지원하여 자바스크립트 코드를 커스터마이징할 수 있습니다. 이를 통해 개발자는 다양한 자바스크립트 환경에서 동작하는 코드를 작성할 수 있습니다.
    - Tree Shaking : 코드 번들링 과정에서 사용하지 않는 코드를 자동으로 제거하는 최적화 기법. 이는 앱의 크기를 줄이고, 초기 로딩 속도를 향상시킬 수 있음.


- Hermes
    
    Hermes는 Facebook에서 개발된 JavaScript 엔진으로, JavaScript 코드의 실행 속도를 높여 React Native 애플리케이션의 성능을 향상. Hermes는 Just-In-Time(JIT) 컴파일러 대신 Ahead-Of-Time(AOT) 컴파일러를 사용하여 더 빠른 실행 속도를 제공.
    
    - 빠른 시작 시간 : AOT 컴파일을 사용하여 런타임에 코드를 컴파일하지 않기 때문에, React Native 애플리케이션의 시작 시간이 더 빨라짐.
    - 더 적은 메모리 사용 : JIT 컴파일을 사용하는 JavaScript 엔진에 비해 적은 메모리를 사용합니다. 이는 React Native 애플리케이션의 메모리 사용량을 줄여주어 더 많은 기기에서 실행될 수 있도록 함.
    - 더 높은 성능 : AOT 컴파일을 사용하여 코드 실행 속도를 향상시킵니다. 이는 React Native 애플리케이션의 성능을 향상시켜 사용자 경험을 개선.


- Flipper
    
    Flipper는 React Native 개발자 도구로, 앱의 디버깅 및 성능 최적화에 도움을 줍니다. Flipper는 iOS, Android 및 React Native 앱에서 작동하며, 네트워크 요청 및 응답, 앱의 상태 및 레이아웃 등을 모니터링 할 수 있습니다. 또한 Flipper 플러그인을 사용하여 앱의 특정 기능을 디버깅 할 수 있습니다.
    

- Yoga
    
    React Native의 레이아웃 시스템으로, CSS와 비슷한 방식으로 작동. Yoga는 다양한 디바이스 및 해상도에서 일관된 레이아웃을 제공하는 데 도움. Yoga는 Flexbox 레이아웃 구현을 기반으로 하며, React Native 앱에서는 JSX 구문을 사용하여 레이아웃을 정의.





