---
layout: post
title: '파이썬 기초 02 - 자료형 (리스트)'
subtitle: '파이썬 기초 02 - 자료형 (리스트)'
category: devlog
tags: python
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### 파이썬 기초 02 - 자료형 (리스트)
 
  
# 3. 리스트

- 리스트(list)란? : 원소들이 연속적으로 저장되는 형태의 자료형
    
    ```python
    a = []
    b = ['a', 'b', 'c']
    c = [1, 2, 3]
    d = ['a', 1, 'b', 2]
    e = [1, 2, ['a','b'], [3,4]]
    
    print(a)
    print(b)
    print(c)
    print(d)
    print(e)
    ```
    
    ```
    []
    ['a', 'b', 'c']
    [1, 2, 3]
    ['a', 1, 'b', 2]
    [1, 2, ['a','b'], [3,4]]
    ```
    

 

 

- 리스트 인덱싱
    
    리스트안에 있는 요소의 순번으로 접근 가능하다.
    
    ```python
    e = [1, 2, ['a','b'], [3,4]]
    
    print(e[-1])
    print(e[1])
    print(e[2])
    ```
    
    ```
    [3, 4]
    2
    ['a', 'b']
    ```
    

 

 

- 리스트 슬라이싱
    
    ```python
    e = [1, 2, ['a','b'], [3,4]]
    
    print(e[0:2])
    print(e[2:4])
    
    print(e[:2])
    print(e[2:])
    ```
    
    ```
    [1, 2]
    [['a', 'b'], [3, 4]]
    [1, 2]
    [['a', 'b'], [3, 4]]
    ```
    

 

 

- 리스트의 길이
    
    ```python
    e = [1, 2, ['a','b'], [3,4]]
    
    print('리스트길이: ',len(e))
    ```
    
    ```python
    리스트길이:  4
    ```
    

 

 

- 리스트 수정 / 삭제 / 추가
    
    ```python
    e = [1, 2, ['a','b'], [3,4]]
    
    print(e)
    
    e[1] = 'change'
    print('1번째 요소 변경 : ',e)
    
    del e[0]
    print('0번째 요소 삭제 : ',e)
    
    del e[1:]
    print('',e)
    
    e.append('add')
    print(e)
    ```
    
    ```
    [1, 2, ['a', 'b'], [3, 4]]
    1번째 요소 변경 : [1, 'change', ['a', 'b'], [3, 4]]
    0번째 요소 삭제 : ['change', ['a', 'b'], [3, 4]]
    ['change']
    ['change', 'add']
    ```
    

 

 

- 리스트 정렬
    
    숫자와 문자 모두 정렬이 가능하다.
    
    ```python
    a = [4,2,1,5,3]
    a.sort()
    
    b = ['c','d','e','a','b']
    b.sort()
    
    print(a)
    print(b)
    ```
    
    ```
    [1, 2, 3, 4, 5]
    ['a', 'b', 'c', 'd', 'e']
    ```
    

 

 

- 리스트의 역순 변환
    
    정렬이 아닌 단순 역순 변환 이므로 유의해야한다.
    
    ```python
    a = [2,3,4,5,6]
    a.reverse()
    
    print(a)
    ```
    
    ```
    [6, 5, 4, 3, 2]
    ```
    

 

 

- 리스트안에서 요소의 위치 찾기
    
    ```python
    a = ['a','b','c','d','e']
    
    print(a.index('a'))
    print(a.index('c'))
    print(a.index('e'))
    ```
    
    ```
    0
    2
    4
    ```
    

 

 

- 리스트에 요소 삽입
    
    n 번째 위치에 요소를 삽입할 수 있다.
    
    ```python
    a = ['a','b','c','d','e']
    
    a.insert(1,1)
    print(a)
    
    a.insert(3,2)
    print(a)
    
    a.insert(5,3)
    print(a)
    ```
    
    ```
    ['a', **1**, 'b', 'c', 'd', 'e']
    ['a', 1, 'b', **2**, 'c', 'd', 'e']
    ['a', 1, 'b', 2, 'c', **3**, 'd', 'e']
    ```
    

 

 

- 리스트의 요소 삭제
    
    첫번째로 나오는 특정 요소를 삭제하는 함수이다.
    
    ```python
    a = ['a','b','c','d','e','b']
    
    a.remove('b')
    print(a)
    ```
    
    ```
    ['a', 'c', 'd', 'e', 'b']
    ```
    

 

 

- 리스트의 요소 갯수 세기
    
    ```python
    a = ['a','b','c','d','e','b']
    
    print(a.count('b'))
    ```
    
    ```
    2
    ```