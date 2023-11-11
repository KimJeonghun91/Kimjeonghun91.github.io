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

- CustomModifier.swift

    ```swift
    import SwiftUI

    struct CustomModifier: ViewModifier {
        func body(content: Content) -> some View {
            content
                .padding(10)
                .background(Color.gray)
                .cornerRadius(10)
        }
    }

    extension View {
        func customViewModifier() -> some View {
            modifier(CustomModifier())
        }
    }


    extension View {
        func customViewModifier2() -> some View {
            self
                .font(.title)
                .padding(10)
                .foregroundColor(.red)
        }
    }

    ```

- CustomNewView.swift

    ```swift
    import SwiftUI

    struct CustomNewView<Content: View>: View {
        let content: Content
        
        init(@ViewBuilder content: () -> Content) {
            self.content = content()
        }
        
        var body: some View {
            content
                .font(.title)
                .padding(30)
                .foregroundColor(.purple)
        }
    }

    ```


## Custom Modifier 적용

```swift
import SwiftUI

struct ContentMainView: View {
    var body: some View {
        VStack{
            Text("Custom Modifier")
                .modifier(CustomModifier())
            
            Text("View Modifier")
                .customViewModifier()
            
            Text("View Modifier 2")
                .customViewModifier2()
            
            CustomNewView(
                content:{
                    Text("My View")
                }
            )
        }
    }
}

struct ContentMainView_Previews: PreviewProvider {
    static var previews: some View {
        ContentMainView()
    }
}
```
