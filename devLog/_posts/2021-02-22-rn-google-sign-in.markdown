---
layout: post
title: 'ReactNative - google 로그인'
subtitle: 'ReactNative - google 로그인'
categories: devLog-rn
tags: ReactNative
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### ReactNative - google 로그인

## 파이어베이스 설정

> [https://rnfirebase.io/](https://rnfirebase.io/)

### 파이어베이스,  google-signin 모듈 설치

```bash
yarn add @react-native-firebase/app
yarn add @react-native-community/google-signin
```

### 파이어베이스 콘솔에 프로젝트 추가

[https://console.firebase.google.com/](https://console.firebase.google.com/) 

### 안드로이드 셋업

1. 파이어베이스 안드로이드 앱등록
2. 파이어베이스 콘솔 `빌드/authentication` 에서 구글 로그인 허용
3. 디버그 서명 인증서 SHA-1 확인

    ```bash
    cd android && ./gradlew signingReport
    ```

4. `android/app` 경로에 google-services.json 복사
5. `/android/build.gradle` 경로에 아래 코드 추가

    ```java
    buildscript {
      dependencies {
        // ... other dependencies
        classpath 'com.google.gms:google-services:4.3.3'
        // Add me --- /\
      }
    }
    ```

6. `/android/app/build.gradle` 경로에 아래 코드 추가

    ```java
    apply plugin: 'com.android.application'
    apply plugin: 'com.google.gms.google-services' // <- Add this line
    ```

### IOS 셋업

1. 파이어 베이스 IOS 앱등록
2. `/ios/[프로젝트 이름]` 경로에 GoogleService-Info.plist 추가
3. `/ios/{projectName}/AppDelegate.m` 코드추가

    ```jsx
    #import <Firebase.h>

    - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
      if ([FIRApp defaultApp] == nil) {
        [FIRApp configure];
      }
    }
    ```

4. `inpo.plist` 에 REVERSED_CLIENT_ID 추가

    ```jsx
    <key>CFBundleURLTypes</key>
    	<array>
    		<dict>
    			<key>CFBundleTypeRole</key>
    			<string>Editor</string>
    			<key>CFBundleURLSchemes</key>
    			<array>
    				<string>[REVERSED_CLIENT_ID]</string>
    			</array>
    		</dict>
    	</array>
    ```

### ReactNative 코드

```jsx
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin'
import auth from '@react-native-firebase/auth'

GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '', // client ID of type WEB for your server (needed to verify user ID and offline access)
    iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
})

await GoogleSignin.hasPlayServices()
const userInfo = await GoogleSignin.signIn()

// Create a Google credential with the token
const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken)
const userCredential = await auth().signInWithCredential(googleCredential)
```