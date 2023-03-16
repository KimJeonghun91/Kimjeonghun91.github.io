---
layout: post
title: 'TypeScript 기초 01 - Interface and Type'
subtitle: 'TypeScript 기초 01 - Interface and Type'
category: devlog
tags: javascript
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### TypeScript 기초 01 - Interface and Type

## 문법

```ts

interface Person {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
}

```

## interface 사용 예제

인터페이스는 주로 객체의 형태(shape)를 정의하는 데 사용.

interface는 다른 interface나 class에서 extends 키워드를 사용하여 상속할 수 있으며, 상속받은 interface에서 새로운 속성을 추가할 수 있다. 

```ts

interface IPerson {
  name: string;
  age: number;
}

interface ISkill {
  name: string;
  level: number;
}

// 확장
interface IProgrammer extends IPerson {
  skills: ISkill[];
}


// * 함수에서 사용
function getUserInfo(user: IPerson): void {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const createUser = (name: string, age: number): IPerson => {
  const user: IPerson = {
    name,
    age
  };
  return user;
}


// * 클래스에서 사용
class Programmer implements IProgrammer {
  name: string;
  age: number;
  skills: ISkill[];

  constructor(name: string, age: number, skills: ISkill[]) {
    this.name = name;
    this.age = age;
    this.skills = skills;
  }
}

const rightHot = new Programmer('Right Hot', 30, [
  { name: 'ReactNative', level: 5 },
  { name: 'React', level: 4 },
  { name: 'TypeScript', level: 3 },
]);

```

## Type 예제

type은 주로 데이터 타입 자체를 정의하는 데 사용한다. 

튜플(Tuple), 유니온 형식(Union type), 객체 형식(Object type) 등

type은 인터섹션(`&`)과 유니온(`|`) 타입을 사용하여 타입을 결합하거나 제한할 수 있다.

```ts

// Tuple : 고정길이의 배열
type ThreeElementTuple = [number, string, number];
const tupleValue: ThreeElementTuple = [1, 'hello', 2];


// Union Type : 변수의 값이 여러 타입을 가진다.
type TAge = string | number;

let age: TAge;
age = 10;
age = '15';


// Type 에서 확장
type TPerson = TAge & {
  name: string;
}

let person: TPerson;
person = { name: 'John', age: 30 };



// Object 타입 함수 사용 예제
function printObject(obj: object): void {
  console.log(obj);
}

const person = { name: 'John', age: 30 };
const car = { brand: 'Tesla', model: 'Model 3' };

printObject(person); // { name: 'John', age: 30 }
printObject(car); // { brand: 'Tesla', model: 'Model 3' }

```


### type의 인덱스 시그니처([key: string]: any)

동적으로 프로퍼티를 정의

key를 동적으로 정의할 수 있지만, 타입 검사가 약해짐.

```ts

type Person = {
  name: string;
  age: number;
  [key: string]: any;
  // job?: string; // 형태로 하는게 더 좋음
};

const person: Person = {
  name: 'Right Hot',
  age: 30,
  job: 'Developer',
};

```



## 유연하게 사용이 가능하다.

사용에 있어서는 interface와 type을 모두 사용할 수 있지만, 일반적으로 interface는 객체의 형태를, type은 데이터 타입을 정의할 때 사용하는 것이 일반적이다.

```ts

interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
}

const user: IPerson = { name: 'Right Hot', age: 30 };

const user2: TPerson = { name: 'Old Right Hot', age: 40 };

console.log(user) // {name: "Right Hot", age: 30}
console.log(user2) // {name: "Old Right Hot", age: 40}

```