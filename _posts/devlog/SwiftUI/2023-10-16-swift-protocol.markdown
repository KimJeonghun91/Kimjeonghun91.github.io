---
layout: post
title: 'SwiftUI - Protocol'
subtitle: 'SwiftUI - Protocol'
category: devlog
tags: SwiftUI
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### SwiftUI - Protocol

### 프로토콜 구현 예제

```swift
protocol ProtocolName {
    // 메서드 요구사항
    func methodName()
    
    // 속성 요구사항
    var property: Type { get set }
}

struct MyStruct: ProtocolName {
    // ProtocolName 프로토콜의 메서드와 속성을 구현
    func methodName() {
        // 구현 내용
    }
    
    var property: Type {
        get {
            // getter 구현
        }
        set {
            // setter 구현
        }
    }
}
```

## 비교 : SwiftUI , TS , JAVA

### SwiftUI

```swift
import SwiftUI

protocol SnsLogin {
    func logout(uuid: String) -> Bool
    func login(uuid: String) -> Bool
    func type() -> String
}

struct GoogleLogin: SnsLogin {
    func logout(uuid: String) -> Bool { return true }
    func login(uuid: String) -> Bool { return true }
    func type() -> String { return "Google" }
}

struct KakaoLogin: SnsLogin {
    func logout(uuid: String) -> Bool { return true }
    func login(uuid: String) -> Bool { return true }
    func type() -> String { return "Kakao" }
}

struct ExamProtocol_Previews: PreviewProvider {
    static var previews: some View {
        let kakaoLogin:KakaoLogin = KakaoLogin()
        let googleLogin:GoogleLogin = GoogleLogin()
        
        print("kakaoLogin Type : \(kakaoLogin.type())")
        print("googleLogin Type : \(googleLogin.type())")
        
        return Text("Hello, world!")
    }
}
```

### TS

```jsx
interface SnsLogin {
    logout(uuid: string): boolean;
    login(uuid: string): boolean;
    type(): string;
}

class GoogleLogin implements SnsLogin {
    logout(uuid: string): boolean {
        return true;
    }

    login(uuid: string): boolean {
        return true;
    }

    type(): string {
        return "Google";
    }
}

class KakaoLogin implements SnsLogin {
    logout(uuid: string): boolean {
        return true;
    }

    login(uuid: string): boolean {
        return true;
    }

    type(): string {
        return "Kakao";
    }
}

function useSnsLogin(loginType: 'google' | 'kakao'): SnsLogin {
    if (loginType === 'google') {
        return new GoogleLogin();
    } else if (loginType === 'kakao') {
        return new KakaoLogin();
    } else {
        throw new Error("Invalid login type");
    }
}

const kakaoLogin = useSnsLogin('kakao');
const googleLogin = useSnsLogin('google');

console.log("kakaoLogin Type: " + kakaoLogin.type());
console.log("googleLogin Type: " + googleLogin.type());
```

### JAVA

```java
interface SnsLogin {
    boolean logout(String uuid);
    boolean login(String uuid);
    String type();
}

class GoogleLogin implements SnsLogin {
    public boolean logout(String uuid) {
        return true;
    }

    public boolean login(String uuid) {
        return true;
    }

    public String type() {
        return "Google";
    }
}

class KakaoLogin implements SnsLogin {
    public boolean logout(String uuid) {
        return true;
    }

    public boolean login(String uuid) {
        return true;
    }

    public String type() {
        return "Kakao";
    }
}

public class Main {
    public static void main(String[] args) {
        SnsLogin kakaoLogin = new KakaoLogin();
        SnsLogin googleLogin = new GoogleLogin();

        System.out.println("kakaoLogin Type: " + kakaoLogin.type());
        System.out.println("googleLogin Type: " + googleLogin.type());
    }
}
```