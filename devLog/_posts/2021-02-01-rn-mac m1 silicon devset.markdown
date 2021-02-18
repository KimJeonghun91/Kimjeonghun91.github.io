---
layout: post
title: 'Silicon m1 mac - ReactNative 개발 환경'
subtitle: '인텔 기반 환경 설정'
categories: devLog-rn
tags: ReactNative
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### RSilicon m1 mac - ReactNative 개발 환경

> 애플 m1 환경이 아직 불안정 하기 때문에 인텔 버전으로 설치

### 1. 터미널 로제타로 실행

![mac m1 로제타](/assets/img/post/20210218_m1_001.png)

![mac m1 로제타](/assets/img/post/20210218_m1_002.png)

### 2. Homebrew 설치

- 루비(Ruby)로 개발된 맥OS, 리눅스 용 패키지 관리 애플리케이션

```bash
brew --version

arch -x86_64 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 터미널 재시작
```

출처: [https://www.44bits.io/ko/post/setup-apple-silicon-m1-for-developers](https://www.44bits.io/ko/post/setup-apple-silicon-m1-for-developers)

### 3. Node,yarn,watchman 설치

```bash
node -–version
watchman –version

arch -x86_64 /usr/local/bin/brew install node
arch -x86_64 /usr/local/bin/brew install yarn
arch -x86_64 /usr/local/bin/brew install watchman
```

### 4. Cocoapods 설치

```bash
pod --version

sudo arch -x86_64 gem install cocoapods

# pod 실행시
arch -x86_64 pod install
```

### 5. ffi 설치

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

- **android 빌드 에러**

    buildscript 에서 사용하고 있는 버전들을

    preferences - AndroidSDK 에서 찾아서 전부 설치해준다 (ShowPackageDetail 체크)

    ![reat native android](/assets/img/post/20210218_m1_01.png)

    ![reat native android](/assets/img/post/20210218_m1_02.png)

- config 옵션이 app 이 아닐때
1. 새로 프로젝트를 만들어서 필수 옵션을 다운로드
2. 프로젝트 폴더 오른쪽클릭 → open module settings JDK 경로 확인

dddddsdf.jksdf.sdjfl;ksdjf;sdj;fsdj;fjsdl;fjsdlkjfklsdjflksdjfjklsfklsdhfjlkshflksdhlfjsdhlf

### ??. 루비 설치

```bash
ruby -v
gem -v

brew install rbenv

rbenv install 2.7.2  # Ruby 원하는 버전을 입력하여 설치
rbenv rehash         # 설치한 Ruby 설치 후 재 실행
rbenv global 2.7.2   # 시스템 전체를 지정한 버전으로 지정합니다.
```

- 홈브류 삭제

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```

- 루비 삭제

```bash
ruby -v
gem -v
apt-get --purge remove ruby-full
rbenv versions
rbenv uninstall 2.7.2  # 지정한 버전을 삭제 합니다.

rm -rf /usr/local/lib/ruby
rm -rf /usr/lib/ruby
rm -f /usr/local/bin/ruby
rm -f /usr/bin/ruby
rm -f /usr/local/bin/irb
rm -f /usr/bin/irb
rm -f /usr/local/bin/gem
rm -f /usr/bin/gem

출처: https://devkyu.tistory.com/582 [천천히, 빠르게. 개발자의 Repository]
```

- 루비 인스톨

```bash
brew install rbenv
rbenv install 2.7.2  # Ruby 원하는 버전을 입력하여 설치
rbenv rehash         # 설치한 Ruby 설치 후 재 실행
rbenv global 2.7.2   # 시스템 전체를 지정한 버전으로 지정합니다.
```

```jsx
LoadError - dlopen 2.7.2/lib/ruby/gems/2.7.0/gems/ffi-1.14.2/lib/ffi_c.bundle, 9): no suitable image found. Did find:
```

```jsx
LoadError - dlopen(/Users/righthot/.rbenv/versions/2.7.2/lib/ruby/gems/2.7.0/gems/ffi-1.14.2/lib/ffi_c.bundle, 9): no suitable image found. Did find:
```

```jsx
arch: posix_spawnp: pod: Bad CPU type in executable
```