---
layout: post
title: 'SwiftUI - 옵셔널 변수, 암시적 언래핑'
subtitle: 'SwiftUI - 옵셔널 변수, 암시적 언래핑'
category: devlog
tags: swiftui
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### SwiftUI - 옵셔널 변수, 암시적 언래핑

### 옵셔널 타입 변수

UI 요소의 상태나 속성이 정의되지 않았거나 초기화되지 않았을 때 사용. 도중에 `nil` 을 할당할 수 있다.

- 옵셔널 바인딩
    
    옵셔널 변수의 값을 안전하게 추출하기 위해 if let 또는 guard let 문을 사용할 수 있음.
    
    ```swift
    var age: Int? = 30
    
    age = 20
    age = nil
    
    if let unwrappedAge = age {
        print("나이는 \(unwrappedAge)세 입니다.")
    } else {
        print("나이 정보가 없습니다.")
    }
    ```
    

### implicitly unwrapped optional

암시적으로 언래핑한 옵셔널은 변수를 선언할 때 느낌표(**`!`**)를 사용하여 표시. 사용 방법은 옵셔널 타입 변수와 동일하지만 초기화 하지 않고 `nil` 이 담겨있는 암시적 언래핑 옵셔널 변수를 사용하면 프로그램이 종료된다.

특정 시점 이후로 반드시 값이 들어있음을 보장하는 경우 사용한다. (ex. IBOutlet)

```swift
var myName: String!

myName = "Alice"

// 이후로 myName에 nil이 들어가지 않는 경우 사용.
// 강제로 nil 할당시 런 타임 에러

let greeting = "Hello, \(myName)"
```