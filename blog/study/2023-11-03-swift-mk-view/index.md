---
title: SwiftUI - View
description: SwiftUI - View
date: '2023-11-03'
authors:
  - righthot
tags:
  - swiftui
  - study
slug: swift-mk-view
---






```swift
struct MyView: View {
	var body: some View {
	    VStack {
	        titleView
	        titleView2()
			TitleView3()
	    }
	}
	
    // MARK: 프로퍼티
	var titleView: some View {
	    Text("title")
	}
	
    // MARK: 메서드
	func titleView2() -> some View {
	    Text("title2")
	}
}


// MARK: 구조체 하위뷰
private struct TitleView3: View {
    fileprivate var body: some View {
        Text("title3")
    }
}
```

## 구조체로 정의

### 장점:

- 재사용 가능한 커스텀 View를 정의할 수 있습니다.

- SwiftUI가 자동으로 상태 관리를 처리하기 때문에, 데이터의 변경에 대한 업데이트를 처리하기 쉽습니다.

### 단점:

<!--truncate-->


- 복잡한 UI를 구성할 때에는 코드의 길이가 늘어날 수 있습니다.


# 메서드로 정의

### 장점:

- 코드를 모듈화하여 재사용 가능한 메서드로 View를 생성할 수 있습니다.

- 가독성을 향상시키고 UI 코드를 더 단순하게 관리할 수 있습니다.

### 단점:

- 재사용이 어려움.
