---
layout: post
title: 'ReactNative - 디자인 패턴 01 - Atomic'
subtitle: 'ReactNative - 디자인 패턴 01 - Atomic'
category: devlog
tags: reactnative
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### ReactNative - 디자인 패턴 01 - Atomic

## Atomic 디자인 패턴 이란?

- Atoms: UI의 가장 작은 부분을 나타내는 컴포넌트. 예: 버튼, 아이콘, 텍스트, 이미지

- Molecules: 두 개 이상의 Atom 컴포넌트를 조합하여 만든 작은 컴포넌트. 예: 로그인 폼, 메시지 박스

- Organisms: Molecule 컴포넌트와 Atom 컴포넌트를 조합하여 만든 큰 컴포넌트. 예: 헤더, 푸터, 사이드바


## 문제점?

Atomic Design 패턴을 사용하면 모듈이 중복으로 import되는 경우가 있을 수 있음. 이러한 중복 import는 불필요한 메모리 사용과 성능 저하를 일으킬 수 있다.

하지만 일반적으로 React Native에서는 Tree Shaking과 같은 최적화 기술을 사용하여, 불필요한 모듈을 제거하고 최적화된 코드를 생성함. 따라서 중복 import가 있더라도 성능에 큰 영향을 미치지는 않음.

- Tree Shaking
    
    번들러(Bundler)에서 사용되는 최적화 기술 중 하나. Tree shaking은 불필요한 코드를 제거하여 번들 크기를 줄인다.
    React Native는 Metro 번들러를 기본적으로 사용하고 있음. Metro 번들러도 Tree shaking을 지원하며, metro.config.js 파일에서 enableBabelRCLookup 옵션을 true로 설정하면 Babel에 의해 Tree shaking이 작동됨.



## Atomic 폴더 구조

```css

src/
├── components/
│   ├── atoms/
│   │   ├── TextAtom/
│   │   │   ├── TextAtom.tsx
│   │   │   └── index.ts
│   │   ├── InputAtom/
│   │   │   ├── InputAtom.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── molecules/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   ├── List/
│   │   │   ├── ListItem.tsx
│   │   │   ├── List.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── organisms/
│   │   ├── Card/
│   │   │   ├── CardItem.tsx
│   │   │   ├── Card.tsx
│   │   │   └── index.ts
│   │   ├── Form/
│   │   │   ├── FormInput.tsx
│   │   │   ├── FormLabel.tsx
│   │   │   ├── FormValidationMessage.tsx
│   │   │   ├── Form.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── templates/
│   │   ├── Login/
│   │   │   ├── Login.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   ├── LoginHeader.tsx
│   │   │   └── index.ts
│   │   └── ...
│   └── index.ts
├── screens/
│   ├── HomeScreen/
│   │   ├── HomeScreen.tsx
│   │   └── index.ts
│   ├── LoginScreen/
│   │   ├── LoginScreen.tsx
│   │   └── index.ts
│   └── ...
└── utils/
    ├── api.ts
    ├── constants.ts
    └── ...


```


### TextAtom

```tsx

import React from 'react';
import { Text, TextProps } from "react-native";

type TextAtomProps = TextProps & {
  // 추가로 선언하고 싶은 props가 있다면 작성.
};

const TextAtom = ({ ...props }: TextAtomProps) => {
    return (
        <Text {...props} style={[props.style]}>{props.children}</Text>
    )
};

TextAtom.defaultProps = {
  style: {
    color:'#000000'
  }, // style props가 전달되지 않았을 경우 디폴트 값
};

export default TextAtom;


```


### ButtonMolecule

```tsx

import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import TextAtom from './TextAtom';

interface Props {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const ButtonMolecule: FC<Props> = ({ title, onPress, containerStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
      <TextAtom text={title} style={styles.title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonMolecule;

```


### LoginFormOrganism

```tsx

import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import TextAtom from './TextAtom';
import ButtonMolecule from './ButtonMolecule';

const LoginFormOrganism: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // 로그인 처리
  };

  return (
    <View style={styles.container}>
      <TextAtom text="Username" style={styles.label} />
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      />
      <TextAtom text="Password" style={styles.label} />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <ButtonMolecule title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});

export default LoginFormOrganism;

```