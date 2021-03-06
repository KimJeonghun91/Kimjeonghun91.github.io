---
layout: post
title: 'Silicon m1 mac - ReactNative 개발 환경'
subtitle: '인텔 기반 환경 설정'
category: devlog
tags: reactnative
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### Silicon m1 mac - ReactNative 개발 환경

> 애플 m1 환경이 아직 불안정 하기 때문에 인텔 버전으로 설치

### 1. 터미널 로제타로 실행

![mac m1 로제타](/assets/img/post/20210218_m1_001.png)

![mac m1 로제타](/assets/img/post/20210218_m1_002.png)

### 2. Java 설치 & 환경변수 설정

- 자바 설치 : [https://www.java.com/ko/download/](https://www.java.com/ko/download/)
- JDK 설치 : [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html)
- 환경변수 : [https://whitepaek.tistory.com/28https://stackoverflow.com/questions/38835931/react-native-adb-reverse-enoent](https://stackoverflow.com/questions/38835931/react-native-adb-reverse-enoent)

```bash
java -version   # jre
javac -version  # jdk

# 설치된 자바 확인
/usr/libexec/java_home -V | grep jdk

```

### 3. Homebrew 설치

- 루비(Ruby)로 개발된 맥OS, 리눅스 용 패키지 관리 애플리케이션

```bash
brew --version

arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 터미널 재시작
```

출처: [https://www.44bits.io/ko/post/setup-apple-silicon-m1-for-developers](https://www.44bits.io/ko/post/setup-apple-silicon-m1-for-developers)

### 4. Node, yarn, watchman 설치

```bash
node -–version
watchman –version

arch -x86_64 /usr/local/bin/brew install node
arch -x86_64 /usr/local/bin/brew install yarn
arch -x86_64 /usr/local/bin/brew install watchman
```

### 5. Cocoapods 설치

```bash
pod --version

sudo arch -x86_64 gem install cocoapods

# pod 실행시
arch -x86_64 pod install
```

### 6. ffi 설치

```bash
arch -x86_64 sudo gem install ffi
```

---

---

# 에러

- **xcrun: error: SDK "iphoneos" cannot be located**

```jsx
sudo xcode-select --switch /Applications/Xcode.app
```

- **java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7**

```jsx
// gradle-wrapper.properties

distributionUrl=https\://services.gradle.org/distributions/gradle-6.2-all.zip
// 아래 버전으로 변경
distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip
```

- **android 빌드 에러**

    buildscript 에서 사용하고 있는 버전들을

    preferences - AndroidSDK 에서 찾아서 전부 설치해준다 (ShowPackageDetail 체크)

    ![reat native android](/assets/img/post/20210218_m1_01.png)

    ![reat native android](/assets/img/post/20210218_m1_02.png)

- config 옵션이 app 이 아닐때
1. 새로 프로젝트를 만들어서 필수 옵션을 다운로드
2. 프로젝트 폴더 오른쪽클릭 → open module settings JDK 경로 확인

- **Java 삭제**

```bash
# 자바 삭제
sudo rm -rf /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin
sudo rm -rf /Library/Java/JavaVirtualMachines
sudo rm -rf /Library/Application\ Support/Oracle/Java/
sudo rm -rf /Library/PreferencePanes/JavaControlPanel.prefPane
```
