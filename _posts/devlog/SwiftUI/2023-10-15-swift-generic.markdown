---
layout: post
title: 'SwiftUI - Generic'
subtitle: 'SwiftUI - Generic'
category: devlog
tags: swiftui
comments: true
# image: 
#   path: /assets/img/default_code.png
---

### SwiftUI - Generic

제네릭(Generic)은 데이터 형식이나 함수를 일반화하고, 재사용 가능한 코드를 작성하는 데 도움을 주는 기능.

제네릭은 특정한 데이터 형식에 의존하지 않고, 여러 다양한 데이터 형식에 대해 동일한 코드를 작성할 수 있음.


## 비교 : SwiftUI , TS , JAVA

### SwiftUI

```swift
import SwiftUI

struct MyArray<T> {
    var data: [T] = []
    
    mutating func append(_ item: T) {
        data.append(item)
    }
    
    func printAll() {
        data.forEach { item in
            print(item)
        }
    }
}

struct ExamGeneric_Previews: PreviewProvider {
    static var previews: some View {
        
        var myInt = MyArray<Int>()
        var myStr = MyArray<String>()
        
        myInt.append(1)
        myInt.append(2)
        myInt.printAll()
        
        myStr.append("A")
        myStr.append("B")
        myStr.printAll()
        
        return Text("Hello, world!")
    }
}
```

### TS

```tsx
class MyArray<T> {
  private data: T[] = [];

  append(item: T): void {
    this.data.push(item);
  }

  printAll(): void {
    this.data.forEach((item) => {
      console.log(item);
    });
  }
}

const myInt = new MyArray<number>();
const myStr = new MyArray<string>();

myInt.append(1);
myInt.append(2);
myInt.printAll();

myStr.append("A");
myStr.append("B");
myStr.printAll();
```

### Java

```java
import java.util.ArrayList;
import java.util.List;

class MyArray<T> {
    private List<T> data = new ArrayList<>();

    public void append(T item) {
        data.add(item);
    }

    public void printAll() {
        for (T item : data) {
            System.out.println(item);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyArray<Integer> myInt = new MyArray<>();
        MyArray<String> myStr = new MyArray<>();

        myInt.append(1);
        myInt.append(2);
        myInt.printAll();

        myStr.append("A");
        myStr.append("B");
        myStr.printAll();
    }
}
```