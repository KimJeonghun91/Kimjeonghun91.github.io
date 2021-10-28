---
layout: post
title: '파이썬 기초 문법 - 자료형'
subtitle: '파이썬 기초 문법 - 자료형'
category: devlog
tags: python
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### 파이썬 기초 문법 - 자료형



# 1. 숫자

- 정수형
    
    양수, 음수, 0은 정수형(Integer) 이다.
    
    ```python
    a = 123
    b = -123
    c = 0
    
    print(type(a))
    print(type(b))
    print(type(c))
    ```
    
    ```
    <class 'int'>
    <class 'int'>
    <class 'int'>
    ```
    

 

- 실수형
    
    소수점이 포함된 숫자를 실수형(Floating-point)라고 한다.
    
    아래 c 변수의 경우 `e(E)` 가 사용된 것을 볼 수 있는데 지수를 표현하는 방법이다.
    
    ```python
    a = 0.123
    b = -1.123
    c = 1.23e10   # 1.23*10^10
    d = 1.23e-2   # 1.23*10^-2
    
    print(c)
    print(d)
    print(type(a))
    print(type(b))
    print(type(c))
    print(type(d))
    ```
    
    ```
    12300000000.0
    0.0123
    <class 'float'>
    <class 'float'>
    <class 'float'>
    <class 'float'>
    ```
    

- 숫자의 연산
    
    ```python
    a = 3
    b = 4
    
    # 사칙연산
    print('a+b: ',a+b)
    print('a-b: ',a-b)
    print('a/b: ',a/b)
    print('a*b: ',a*b)
    
    # 제곱
    print('a**b: ',a**b)
    
    # 나머지
    print('a%b: ',a%b)
    print('a%b: ',b%a)
    
    # 몫
    print('a//b: ',a//b)
    print('a//b: ',b//a)
    ```
    
    ```
    a+b:  7
    a-b:  -1
    a/b:  0.75
    a*b:  12
    a**b:  81
    a%b:  3
    a%b:  1
    a//b:  0
    a//b:  1
    ```
    

# 2. 문자

- 문자열(string)이란 문자들의 집합을 의미한다.
    
    `'` , `"` , `'''` , `"""` 으로 문자를 감싸서 만들 수 있다.
    
    아래 예제에서 a 변수의 타입을 확인해보면 위 기호로 감싼 숫자는 문자로 인식된다.
    
    ```python
    a = '123'
    b = "반가워요"
    c = '저는 "RightHot"입니다.'
    d = "줄바꿈은 \n'\\n'으로합니다."
    e = '''이렇게
    줄바꿈도 가능해요'''
    
    print(type(a))
    print(a)
    print(b)
    print(c)
    print(d)
    print(e)
    ```
    
    ```
    <class 'str'>
    123
    반가워요
    저는 "RightHot"입니다.
    줄바꿈은 
    '\n'으로합니다.
    이렇게
    줄바꿈도 가능해요
    ```
    

 

- 문자열 길이
    
    ```python
    a = '안녕하세요.'
    
    print(len(a))
    ```
    
    ```
    6
    ```
    

 

- 문자열 인덱싱
    
    ```python
    a = '안녕하세요.'
    
    print(a[0])
    print(a[1])
    print(a[2])
    print(a[3])
    print(a[4])
    print(a[5])
    ```
    
    ```python
    안
    녕
    하
    세
    요
    .
    ```
    

 

- 문자열 슬라이싱
    
    문자열을 잘라서 원하는 단어를 뽑아낼 수 있다.
    
    ```python
    a = "Don't dream, Be it"
    
    print(a[0:])
    print(a[:5])
    print(a[6:11])
    print(a[-5:])
    ```
    
    ```python
    Don't dream, Be it
    Don't
    dream
    Be it
    ```
    

- 문자열 포매팅
    
    문자열 안에서 특정한 값을 변경할때 사용한다.
    
    `%d` 를 사용해 정수를, `%f` 를 사용해 소수를, `%s` 를 사용해 문자를 대입할 수 있다.
    
    ```python
    a = "I'm %s years old. Born in %d." % ('eighteen', 2002)
    
    print(a)
    ```
    
    ```
    I'm eighteen years old. Born in 2002.
    ```
    
- 문자열 관련 함수
    
    ```python
    a = "  Don't dream, Be it  "
    
    # 문자 개수 세기
    print('t의 개수 : ',a.count('t'))
    
    # 문자 위치
    print('t의 위치 : ',a.count('t'))
    
    # 양쪽 공백 제거
    print('공백 제거 : ',a.lstrip())
    
    # 문자열 나누기
    print('공문자열 나누기 : ',a.split(','))
    ```
    
    ```
    t의 개수 :  2
    t의 위치 :  2
    공백 제거 :  Don't dream, Be it  
    공문자열 나누기 :  ["  Don't dream", ' Be it  ']
    ```