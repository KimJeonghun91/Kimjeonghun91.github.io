---
title: SwiftUI - AppDelegate 사용
description: SwiftUI - AppDelegate 사용
date: '2023-11-08'
authors:
  - righthot
tags:
  - swiftui
  - study
slug: swift-app-delegate
---






## NSObject란?
SwiftUI는 Swift 기반의 UI 프레임워크이지만, Objective-C와의 상호운용성을 고려하여 설계됨. 따라서 NSObject를 사용하여 Objective-C 코드와의 호환성을 유지하거나 기존 코드를 재활용하는 경우에는 NSObject를 사용.

- Objective-C 호환성: SwiftUI는 Objective-C와의 상호운용성을 제공하기 때문에, Objective-C에서 정의된 클래스나 라이브러리를 SwiftUI에서 사용할 수 있다.

- UIKit과의 연동: UIKit 기반의 앱에서 SwiftUI를 점진적으로 도입하는 경우, NSObject를 사용하여 UIKit 뷰 컨트롤러와 상호작용 필요.

- 기존 코드 재사용: 기존 Objective-C 또는 UIKit 프로젝트에서 사용하던 NSObject 클래스나 라이브러리를 SwiftUI에서 재사용하려면 NSObject를 상속하거나 포함해야 됨.

<!--truncate-->


= Objective-C 라이브러리: Objective-C로 작성된 라이브러리를 SwiftUI 프로젝트에서 사용시 필요.

## UIApplicationDelegate의 역할
iOS 앱의 핵심 생명 주기 이벤트를 처리하는 데 사용되는 프로토콜.


```swift
import SwiftUI

@main
struct YourApp: App {
    // 앱의 주요 AppDelegate를 연결
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

// UIApplicationDelegate를 구현한 클래스
class AppDelegate: NSObject, UIApplicationDelegate {
    // 앱이 시작될 때 호출되는 메서드
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        // 앱 시작 시 필요한 초기화 작업을 수행합니다.
        return true
    }

    // 앱이 백그라운드로 전환될 때 호출되는 메서드
    func applicationDidEnterBackground(_ application: UIApplication) {
        // 백그라운드 전환 시 필요한 작업을 수행합니다.
    }

    // 앱이 포그라운드로 전환될 때 호출되는 메서드
    func applicationDidBecomeActive(_ application: UIApplication) {
        // 포그라운드 전환 시 필요한 작업을 수행합니다.
    }

    // 앱이 종료될 때 호출되는 메서드
    func applicationWillTerminate(_ application: UIApplication) {
        // 앱 종료 시 필요한 정리 작업을 수행합니다.
    }

    // 푸시 알림을 받을 때 호출되는 메서드
    func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable : Any]) {
        // 푸시 알림을 처리하고 사용자에게 표시합니다.
    }
}

```
