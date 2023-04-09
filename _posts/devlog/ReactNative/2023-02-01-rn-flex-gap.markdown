---
layout: post
title: 'ReactNative - 레이아웃 스타일 Flex Gap'
subtitle: 'ReactNative - 레이아웃 스타일 Flex Gap'
category: devlog
tags: reactnative
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### ReactNative - 레이아웃 스타일 Flex Gap

## Gap 이란?

react native 0.71 버전 부터 지원.

Flex Gap 속성을 사용하면 각 아이템들의 margin 값을 일일히 조정하지 않고도, 아이템들 사이의 간격을 일관되게 유지할 수 있음. 

(단, 0.71 버전의 경우 픽셀만 지원. 백분율과 같은 값은 불가.)


마진 사용시 가장자리까지 적용됨.

![react_dev_log.png](/assets/img/post/gap_01.png)


Gap 사용시 내부 간격만 조절 가능.

![react_dev_log.png](/assets/img/post/gap_02.png)



## 속성

- gap

- rowGap

- columnGap



## 예제


```tsx
import { View } from 'react-native';

<View style={ display: 'flex', gap: 10, backgroundColor: 'white', flex: 1 }>
    <View style={ flex: 1, backgroundColor: 'red' }></View>
    <View style={ flex: 1, backgroundColor: 'blue' }></View>
    <View style={ flex: 1, backgroundColor: 'green' }></View>
</View>
```