---
title: Javascript 기초 04 - 타입 변환
description: Javascript 기초 04 - 타입 변환
date: '2019-04-06'
authors:
  - righthot
tags:
  - javascript
  - study
slug: js-04-type-conversion
---





- 타입 캐스팅(Type Casting) : 명시적으로 타입을 바꾸는 경우

    ```jsx
    let a = 26
    let b = String(a)
    ```

- 강제 변환(Coercion) : 암시적으로 타입을 바꾸는 경우

    ```jsx
    let a = 26
    let b = 26 + ""
    ```

# ToString

문자열이 아닌 값을 문자열로 변환

```jsx
let a = true;
a = a.toString()
let b = 26
b = b.toString()

console.log(a)          // "true"
console.log(typeof a)   // string

console.log(b)          // "26"
console.log(typeof b)   // string

console.log(Object.prototype.toString.call(a))  // [object String]
console.log(Object.prototype.toString.call(b))  // [object String]
```

 `null` , `undefined` 원시값은 타입 캐스팅을 사용할 수 없으니 주의해야 한다.

<!--truncate-->


```jsx
let a = undefined;  
a = a.toString()     // Cannot read property 'toString' of undefined

let b = null;       
b = b.toString()     // Cannot read property 'toString' of null
```

타입 캐스팅은 불가능 하나, 강제 변환은 가능하다.

```jsx
let a = undefined;  
a = a+""
console.log(a)  // "undefined"

let b = null;  
b = b+""
console.log(b)  // "null"
```

# ToNumber

숫자가 아닌 값을 `수식 연산이 가능한 숫자` 로 변환 한다.

- true , false , null 은 정해진 숫자를 반환 한다.

```jsx
let a = true
let b = false
let c = null

console.log(Number(a))  // 1
console.log(Number(b))  // 0
console.log(Number(c))  // 0
```

- 문자열이 변환에 실패할 경우 , undefined 의 경우 NaN(Not-A-Number) 을 반환한다.

```jsx
let a = "26"
let b = "이십육"
let c = undefined
let d = ["1", "2"]
let e = { key: "value" }

console.log(Number(a))  // 26
console.log(Number(b))  // NaN
console.log(Number(c))  // NaN
console.log(Number(d))  // NaN
console.log(Number(e))  // NaN
```

- 문자열을 숫자로 변환하는 함수로 `parseInt("문자열")` 도 있다.

    `Number()` 는 변환 실패시 즉시 NaN을 반환하지만 parseInt 는 숫자로 시작시 숫자가 끝나는 지점까지 변환 한다.

```jsx
let a = "26은 한글로 이십육"
let b = "26은 한글로 이십육"
let c = "이십육은 숫자로 26"

console.log(Number(a))    // NaN
console.log(parseInt(b))  // 26
console.log(parseInt(c))  // NaN
```
