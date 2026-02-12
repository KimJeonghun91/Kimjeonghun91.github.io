---
title: 'SwiftUI - Struct, State, Binding'
description: 'SwiftUI - Struct, State, Binding'
date: '2023-10-14'
authors:
  - righthot
tags:
  - swiftui
  - study
slug: swift-struct-state-binding
---





## struct와 class 비교

Swift에서 구조체(struct)와 클래스(class)는 둘 다 데이터를 그룹화하고 동작을 정의하는데 사용되지만 몇가지 차이점이 있다.

1. **값 타입(Value Type):** 구조체는 값 타입(value type)이다. 구조체의 인스턴스가 복사되어 전달될 때 데이터가 복사된다는 것을 의미합니다. 클래스는 참조 타입(reference type)이므로 인스턴스가 참조로 전달되고 공유됨. 이러한 값 타입 특성은 데이터의 불변성을 쉽게 유지하고 예기치 않은 부작용을 방지.
2. **불변성(Immutability):** 구조체의 속성을 선언할 때 상수(let)로 정의하면 해당 속성은 변경할 수 없다. 이것은 데이터의 불변성을 강제함. 클래스는 속성을 상수로 선언해도 인스턴스의 내용을 변경할 수 있기 때문에 불변성을 갖추기가 어려움.
3. **스레드 안전(Thread Safety):** 구조체는 스레드 간에 데이터를 공유하지 않으므로 스레드 안전성을 제공. 클래스는 여러 스레드에서 공유되므로 동시 접근에 대한 조치를 취해야 함.

<!--truncate-->

4. **메모리 관리(Memory Management):** 클래스는 ARC(자동 참조 계산)를 사용하여 메모리를 관리해야 하지만 구조체는 ARC를 필요로하지 않으며 메모리 누수를 방지하는 데 도움이 됨.
5. **복잡성 감소:** 구조체는 간단한 데이터 모델링에 적합하며 클래스보다 간단한 구현을 통해 원하는 동작을 달성할 수 있다.
6. **값 복사 및 비교:** 구조체의 값 복사는 예측 가능한 동작을 제공하며 동일한 값을 가진 두 개의 구조체 인스턴스를 비교할 때 값의 일치를 확인하기가 쉬움.

## State와 Binding

**`@State`**와 **`@Binding`** 속성 래퍼는 일반적으로 구조체(**`struct`**)를 사용할 때 주로 사용. 이는 구조체가 값 타입(value type)이므로 상태 관리와 데이터 전달에 효과적. 구조체의 불변성은 뷰의 상태 변경 및 뷰 간 데이터 전달을 예측 가능.

일반적으로 클래스(**`class`**)와 함께 **`@State`**와 **`@Binding`**를 사용하는 것은 권장되지 않음. 클래스는 참조 타입(reference type)이기 때문에 내부 상태 변경이 클래스의 인스턴스를 참조하는 모든 위치에 영향을 미침.

```swift
// State
@State var fruitName: String = ""

// Binding
TextField("Insert Fruit Name", text: $fruitName)
```
