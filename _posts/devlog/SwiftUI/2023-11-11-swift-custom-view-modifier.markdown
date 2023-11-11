---
layout: post
title: 'SwiftUI - Custom View Modifier'
subtitle: 'SwiftUI - Custom View Modifier'
category: devlog
tags: swiftui
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### SwiftUI - Custom View Modifier 

## Custom Modifier란?

SwiftUI에서 Custom Modifier란 사용자가 정의한 수정자. SwiftUI에서는 ViewModifier 프로토콜을 준수하는 구조체로 이를 구현하여 사용자 정의 수정자를 만들 수 있다.

```swift
import SwiftUI

struct RoundedBorderModifier: ViewModifier {
    func body(content: Content) -> some View {
        content
            .padding(10)
            .background(Color.gray)
            .cornerRadius(10)
    }
}
```

## Custom Modifier 적용

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, SwiftUI!")
            .modifier(RoundedBorderModifier())
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```
