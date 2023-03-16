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

# interface 사용 예제

인터페이스는 확장(extends) 가능하며 인터페이스, 클래스, 함수등 다양한 위치에서 사용가능하다.

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

주로 튜플(Tuple), 유니온 형식(Union type), 객체 형식(Object type), 함수 등에서 사용

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
