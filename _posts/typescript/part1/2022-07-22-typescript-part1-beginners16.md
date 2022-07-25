--- 
title: "[TypeScript-part1] 타입 호환" 
excerpt: "typescript 타입 호환"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 16.1 타입 호환이란?

[타입 호환](https://joshua1988.github.io/ts/guide/type-compatibility.html)

타입호환이란 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미한다.  
예를 들면 아래와 같은 코드를 의미한다. 

```javascript
interface Ironman {
    name: string;
}

class Avengers {
    name: string;
}

let i: Ironman;
i = new Avengers(); // OK, because of structural typing
```

C#이나 Java였다면 위에서 에러가 났을것이다.  
왜냐면 `Avengers`클래스가 명시적으로 `Ironman`인터페이스를 상속받아 구현되지 않았기 때문이다.  

하지만 위와 같은 코드가 타입스크립트에서 정상적으로 작동하는 이유는 자바스크립트의 작동방식과 관련있다.  
기본적으로 자바스크립트는 객체 리터럴이나 익명 함수 등을 사용하기 때문에 명시적으로 타입을 지정하는 것보다는 코드의 구조 관점에서 타입을 지정하는 것이 더 잘 어울린다.(structural typing)

### 16.1.1 구조적 타이핑 예시

구조적 타이핑이란?  
코드 구조 관점에서 타입이 서로 호환되는지의 여부를 판단하는 것이다.  
```javascript
interface Avengers {
    name: string;
}

let hero: Avengers;
// 타입스크립트가 추론한 capt의 타입은 { name: string, location: string }이다. 
let capt = { name: 'Captain', location: 'Pangyo' }
hero = capt // hero에는 location이 없지만 에러가 나지 않는다.
```

위 코드에서 `capt`가 `hero`타입에 호환될 수 있는 이유는 `capt`의 속성중에 `name`이 있기 때문이다.  
`Avengers`인터페이스에서 `name`속성을 갖고 있기 떄문에 `capt`는 `Avengers` 타입에 호환이 가능하다. 함수를 호출할 때도 마찬가지이다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/6ab180cd6faca4497766e8a2639a3f05db57c161)

### 16.1.2 Soundness란?

타입스크립트는 컴파일 시점에 타입을 추론할 수 없는 특정 타입에 대해서 일단 안전하다고 보는 특성이 있다.
이걸 `"들리지 않는다(it is said to not be sound)"`라고 표현한다.

### 16.1.3 Enum 타입 호환 주의 사항

이넘 타입은 `number` 타입과 호환 되지만 이넘 타입끼리는 호환 되지 않는다.  

```javascript
enum Status { Ready, Waiting };

enum Color { Red, Blue, Green };

let status1 = Status.Ready;
status1 = Color.Green;  // error
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/17d701737dd65ba15a442e5c10357ce809228830)

### 16.1.4 Class 타입 호환 주의 사항

클래스 타입은 클래스 타입끼리 비교할 때 스태틱 멤버(static member)와 생성자(constructor)를 제외하고 속성만 비교한다.  

```javascript
class Hulk {
    handSize: number;
    constructor(name: string, numHand: number) {
    }
}
class Captain {
    handSize: number;

    constructor(numHand: number) {
    }
}

let a: Hulk;
let s: Captain;

a = s; // OK
s = a; // OK
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/2be9642a12b0152e237de3a7090c6bca663464b5)

### 16.1.5 Generics

제네릭은 제네릭 타입 간의 호환 여부를 판단할 때 타입 인자 `<T>`가 속성에 할당 되었는지를 기준으로 한다.  

```javascript
interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y; // OK
```
위 인터페이스는 일단 속성(member 변수)이 없기 때문에 x와 y는 같은 타입으로 간주 된다.  

```javascript
interface NotEmpty<T>{
    data: T;
}
let xx: NotEmpty<number>;
let yy: NotEmpty<string>;

xx = yy; // error
```
그러나 인터페이스 `NotEmpty`에 넘긴 제네릭 타입 `<T>`에 data속성이 할당되었으므로 x와 y는 서로 다른타입으로 간주된다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/9c1962c9b127c06d4429c574079430d1102c6af5)

## 16.2 타입 호환 예제 - 인터페이스, 클래스

타입스크립트에서는 interface, class등 서로 다른 유형도 비교가 가능하다.  
그 안의 속성들을 통해 비교를 한다.  
이를 구조적 타이핑 이라고 한다.  

```javascript
// 인터페이스
interface Developer {
    name: string;
    skill: string
}

interface Person {
    name: string;
}

let developer: Developer;
let person: Person;

person = developer; // 반면, person 인터페이스의 속성이 더 많고, developer의 속성을 포함하고 있으므로 왼쪽과 같이 명시하면 추론과정에서 에러가 발생하지 않는다.
```
```javascript
// 인터페이스
interface Developer {
    name: string;
    skill: string
}

class Person {
    name: string
}

let developer: Developer;
let person: Person;

developer = new Person(); // error: 왼쪽도 마찬가지 이유로 에러가난다.
                          // 추론 과정에서 developer는 name, skill 속성이 있어야되는데
                          // Person 클래스는 name 속성밖에 없으므로.
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/afd28e1ae9e6eb2f40d37642d2fb45462f98b9e9)

## 16.3 타입 호환 예제 - 함수, 제네릭

```javascript
// 함수
let add = function(a: number) {
    // ...
}
let sum = function (a: number, b: number) {
    // ...
}
// 여기까지의 차이는 일단 파라미터의 갯수 차이가 있다. sum의 구조가 add의 구조보다 크다고 볼 수 있다.

add = sum // 그렇기 때문에 add에 sum을 할당하면 에러가 발생한다.

sum = add // 이거는 가능하다고 판단함

// 제네릭
interface Empty<T> {
    // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
notempty1 = notempty2; // error
notempty2 = notempty1; // error
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/37cdc7e8fe55fccfe5515219170351c71ffc3f38)
