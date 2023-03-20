---
layout: post
title: 'ReactNative - 디자인 패턴 02 - HOC'
subtitle: 'ReactNative - 디자인 패턴 02 - HOC'
category: devlog
tags: reactnative
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### ReactNative - 디자인 패턴 02 - HOC

## HOC 이란?

Higher-Order Component

HOC 패턴은 기존 컴포넌트를 감싸서 새로운 기능을 추가하는 방식.

HOC는 고차 컴포넌트를 반환하며, 이를 이용해 상태 관리, 인증, 라우팅 등 다양한 기능을 추가함.


## 예제

```tsx

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

interface AuthProps {
  isLoggedIn: boolean;
}

const withAuth = <P extends AuthProps>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuth: React.FC<P> = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
      // 주로 redux와 결합하여 사용.
      const isLoggedIn = await AuthService.checkAuthStatus();
      setIsLoggedIn(isLoggedIn);
    };


    // 로그인이 되어있지 않으면 별도의 메시지를 보여줌.
    if (isLoggedIn) {
      return <WrappedComponent {...props} />;
    } else {
      return (
        <View>
          <Text>Please login to access this page</Text>
        </View>
      );
    }
  };

  return WithAuth;
};

interface MyComponentProps {
  // Props for MyComponent
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return (
    <View>
      <Text>Welcome to MyComponent!</Text>
    </View>
  );
}

const MyComponentWithAuth = withAuth(MyComponent);

export default MyComponentWithAuth;

```