---
title: SwiftUI - Custom View Modifier
description: SwiftUI - Custom View Modifier
date: '2023-11-11'
authors:
  - righthot
tags:
  - swiftui
  - study
slug: swift-custom-view-modifier
---





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

- CustomButtonView.swift

    ```swift
    import SwiftUI

    struct CustomButtonView<Content: View>: View {
        let content: Content
        let action: () -> Void
        
        public init(
        @ViewBuilder content: () -> Content,
        action: @escaping () -> Void
        ) {
        self.content = content()
        self.action = action
        }
        
        public var body: some View {
            Button(action: {
                action()
            }) {
                content
                    .padding(10)
                    .background(Color.red)
                    .cornerRadius(10)
                    .foregroundColor(.white)
            }
        }
    }
    ```


## Custom Modifier 적용

<!--truncate-->


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
            
            CustomButtonView {
                Text("커스텀 버튼")
            } action: {
                showingAlert = true
            }
            .alert(isPresented: $showingAlert) {
                Alert(
                    title: Text("알림"),
                    message: Text("커스텀 버튼이 탭되었습니다."),
                    dismissButton: .default(Text("확인"))
                )
            }
        }
    }
}

struct ContentMainView_Previews: PreviewProvider {
    static var previews: some View {
        ContentMainView()
    }
}
```
