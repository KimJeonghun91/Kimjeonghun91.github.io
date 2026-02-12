---
title: Javascript 기초 02 - 값
description: Javascript 기초 02 - 값
date: '2019-03-22'
authors:
  - righthot
tags:
  - javascript
  - study
slug: js-02-value
---





# 배열

자바스크립트의 배열은 자유롭게 어떠한 값이든 넣을 수 있으며, 배열의 크기를 미리 선언 할 필요도 없다.

```jsx
let array = [26, '스물여섯', ['1-1', '1-2'], function () { 'fun' }]

console.log(array.length)   // 4
console.log(array[0])       // 26
console.log(array[1])       // '스물여섯'
console.log(array[2][0])    // 1-1
console.log(array[2][1])    // 1-2
console.log(array[3])       // f () { 'fun' }
```

배열에 값을 추가하거나 변경할때도 제약이 없이 자유롭다.

심지어, 아래처럼 빠진 슬롯이 있는 배열 생성도 가능하다.

```jsx
let array = [];

array[3] = '세번째 값'

console.log(array.length)   // 4
console.log(array[2])       // undefined
console.log(array[3])       // 세번째 값
```

자바 스크립트의 배열에는 주의점이 있다. 배열도 하나의 객체이기 때문에 `키/프로퍼티 값`을 추가 할 수 있다. 이 때 배열의 length 가 증가하지 않으니 주의 가 필요하다.

<!--truncate-->


```jsx
let array = [];

array['첫번째키'] = '첫번째 값'
array['두번째키'] = '두번째 값'

console.log(array.length)       // 0
console.log(array[0])           // undefined
console.log(array[1])           // undefined
console.log(array['첫번째키'])    // '첫번째 값'
console.log(array['두번째키'])    // '두번째 값'
```

# 문자열

자바스크립트의 문자열과 배열은 비슷하지만 문자열은 불변값, 배열은 가변값 이라는 점이 다르다.

문자열은 불변 값이므로 문자열 메서드는 그 내용을 변경하지 않고 항상 새로운 문자열을 생성한 후 반환하지만 대부분의 배열 메서드는 그 자리에서 곧바로 원소를 수정한다.

메서드 역시 같이 사용하는 메서드가 있는 반면 사용할 수 없는 메서드가 있으니 주의가 필요하다.

```jsx
let str = "right"
let array = ["r","i","g","h","t"]

console.log(str.length)           // 5
console.log(array.length)         // 5

console.log(str.indexOf("i"))     // 1
console.log(array.indexOf("i"))   // 1

console.log(str.map)              // undefined
console.log(array.map)            // f map() { [native code] }
```

# 숫자

자바스크립트의 숫자 타입은 number가 유일하다.

대부분은 숫자는 10진수가 디폴트이며 소수점 이하 0은 생략된다.

아주 크거나 아주 작은 숫자는 지수형으로 표시한다.

### 작은 소수 값

이진 부동 소수점 숫자의 비교 문제.

```jsx
console.log((0.1+0.2) === (0.3))   // false
```

위의 코드에서 false 인 이유는 이진 부동 소수점으로 나타낸 0.1 과 0.2 는 원래의 숫자와 일치 하지 않는다. 따라서 둘을 더한 값 역시 정확히 0.3 이 아닌 0.3000000000004 이다.

컴퓨터로 숫자를 표현하는 데에는 한계가 있고, 무한 수를 유한하게 표현 하려다 보니 미세한 값들이 초과되거나 손실되어 계산 오류가 일어난다.


이진 부동 소수점을 비교하려면 미세한 반올림 오차 `Number.EPSILON`를 허용 공차로 처리하면 된다.

### 안전한 정수 범위

`Math.pow(-2,31)` ~ `Math.pow(2,31)-1`  →  약 `-21억` ~ `+21억`

안전한 정수 여부는 Number.isSafeInteger() 로 체크 한다.

숫자는 내부적으로 64비트 형식 IEEE-754으로 표현되기 때문에 숫자를 저장하려면 정확히 64비트가 필요하다. 64비트 중 52비트는 숫자를 저장하는 데 사용되고, 
11비트는 소수점 위치를(정수는 0), 1비트는 부호를 저장하는 데 사용된다. 그런데 너무 큰 수는 표현하는 데 64비트를 초과하기 때문에 Infinity로 처리 된다

따라서, 아래 예제 코드는 52비트를 넘는 값은 false 를 반환 한다.

```jsx
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER))  // true

console.log(Math.pow(2,53))                                 // 9007199254740992
console.log(Number.isSafeInteger(Math.pow(2,53)))           // false

console.log(Math.pow(2,53)-1)                               // 9007199254740991
console.log(Number.isSafeInteger(Math.pow(2,53)-1))         // true
```

# 값  vs 레퍼런스

- 값 복사 : 단순 스칼라 원시값 (null, undefined, string, number, boolean, symbol)
- 레퍼런스 복사 : 합성 값(객체, 함수 등)

레퍼런스(참조) 복사는 값을 복사하는 것이 아니라 주소를 복사한다. 

따라서 아래 예제 코드를 보면 a 는 ref 의 주소를 가지고 있어서 ref 의 값이 변경되면 a 역시 영향을 받는다.

```jsx
let ref = [1,2]
let a = ref

console.log(a)   // [1,2]

ref[0] = 3

console.log(a)   // [3,2]
```
