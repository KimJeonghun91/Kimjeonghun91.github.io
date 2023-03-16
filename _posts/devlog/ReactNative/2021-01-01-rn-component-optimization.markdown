---
layout: post
title: 'ReactNative - 컴포넌트 최적화'
subtitle: 'ReactNative - 컴포넌트 최적화'
category: devlog
tags: reactnative
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### ReactNative - 컴포넌트 최적화

## Pure Component / memo / shouldComponentUpdate

부모 컴포넌트가 업데이트되었을 때 자식 컴포넌트의 불필요한 렌더링을 방지

```tsx

import React, { PureComponent } from 'react';
import { Text } from 'react-native';

export default class MyComponent extends PureComponent {
  render() {
    return (
      <Text>{this.props.text}</Text>
    );
  }
}

```

```tsx

import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// ** 자식의 상태 변화가 없으면 (title, count) 렌더링 되지 않음.

// title 변경시 다시 렌더링됨.
const MyComponent = React.memo(({ title }) => {
  const [count, setCount] = useState(0); // 변경시 렌더링됨.

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log('Rendered MyComponent');

  return (
    <TouchableOpacity onPress={handleClick}>
      <Text>{title}</Text>
      <Text>{count}</Text>
    </TouchableOpacity>
  );
});

export default MyComponent;

```



## VirtualizedList

대용량의 데이터를 렌더링해야 하는 경우 사용.
VirtualizedList는 기본적으로 화면에 보이는 영역 내의 데이터만 렌더링하고, 스크롤하면 새로운 데이터를 동적으로 로드함.
이를 통해 대량의 데이터를 처리하더라도 화면이 끊김 없이 빠르게 렌더링됨.

`FlatList`와 `SectionList`도 이 컴포넌트를 상속받아 구현됨.



## 코드 스플리팅 (dynamic import)

초기로딩 시간을 줄이고 성능 향상을 위해 사용.

```tsx

import { TouchableOpacity } from 'react-native';
import { useCallback, useState } from 'react';

function MyButton(props) {
  const [MyModal, setMyModal] = useState(null);

  const handleClick = useCallback(() => {
    if (MyModal) {
      MyModal.show();
    } else {
      import('./MyModal').then((MyModal) => {
        setMyModal(MyModal);
        MyModal.show();
      });
    }
  }, [MyModal]);

  return (
    <TouchableOpacity onPress={handleClick}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  );
}

```



## 메모리 누수 방지

useEffect 에서 cleanup 함수 사용

```tsx

useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      // ...
    });

    const intervalId = setInterval(() => {
      // 타이머 로직
    }, 1000);

    return () => {
        unsubscribe;
        clearInterval(intervalId);
        intervalId = null; // 참조 삭제
    };
}, []);

```