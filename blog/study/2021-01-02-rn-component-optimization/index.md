---
title: ReactNative - 컴포넌트 최적화
description: ReactNative - 컴포넌트 최적화
date: '2021-01-02'
authors:
  - righthot
tags:
  - reactnative
  - study
slug: rn-component-optimization
---





## Pure Component / memo / shouldComponentUpdate

부모 컴포넌트가 업데이트되었을 때 자식 컴포넌트의 불필요한 렌더링을 방지.

그렇다고 해서 모든 컴포넌트에 memo를 사용하게 되면 컴포넌트가 다시 렌더링되지 않도록 최적화를 하지만, 이를 위해서는 컴포넌트를 비교하는 작업이 추가적으로 필요. 

이 작업은 일반적인 렌더링 작업보다 더 많은 리소스와 시간이 소모될 수 있기 때문에, 오버헤드가 발생할 가능성이 있음.

렌더링 속도가 느린경우, 자주 불필요하게 재렌더링이 예샹되는 경우에만 사용.

<!--truncate-->


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



## useMemo

useMemo는 계산 비용이 높은 함수의 "결과값"을 기억하여, 같은 값을 계산하는 비용을 줄이는 데 사용.

useMemo는 함수를 실행하고 그 결과를 기억하여, 같은 인수로 다시 호출될 때 이전에 계산된 값을 반환. 이를 통해 계산 비용이 높은 함수를 한 번만 실행하고, 그 결과값을 재사용하여 성능을 최적화할 수 있다.

```tsx
import React, { useMemo } from 'react';

function MyComponent({ number }) {
  const result = useMemo(() => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }, [number]);

  return <div>{result}</div>;
}
```



## useCallback

useCallback으로 "함수"를 메모이제이션하면, 자식 컴포넌트는 의존성 목록(dependency list)이 변경된 경우에만 다시 렌더링됨.

```tsx

import React, { useState, useCallback } from 'react';
import { View, Button } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <View>
      <Button title="Click me!" onPress={handleClick} />
    </View>
  );
};

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
