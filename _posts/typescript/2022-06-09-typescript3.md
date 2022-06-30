--- 
title: "[TypeScript] #3 인터페이스" 
excerpt: "타입스크립트"
categories: 
    - typescript
tags: 
    - typescript
    - interface
--- 
## 오브젝트 인터페이스

```javascript
let user:object;

user = {
    name: 'abc',
    age: 20
}

console.log(user.name)
```

타입스크립트에서 객체를 만들고 오브젝트 타입으로 정의한 후 콘솔로 찍어보면 에러가 발생한다.  
오브젝트에는 특정 속성 값에 대한 정보가 없기 때문이다. `name`에 커서를 올려보면 오브젝트에는 name이 없다고 뜬다.  

```javascript
interface User {
    name: string;
    age: number;
}

let user: User = {
    name: 'abc',
    age: 20
}

console.log(user.age)
```

이제 `console.log(user.)`까지만 찍어도 어떤 프로퍼티들이 있는지 힌트가 뜬다.  

```javascript
type Score = 'A' | 'B' | 'C' | 'F';

interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade: number]: Score;
}

let user: User = {
    name: 'abc',
    age: 20,
    birthYear: 2000,
    1: 'A',
    2: 'B'
}

user.age = 10;
user.gender = "male"
console.log(user.age)
```

여기에서 `user.age = 10;`으로 변경은 문제가 없지만 `user.gender = "male"`은 에러가 발생한다.  
interface안에 있어도 되고 없어도 되는 옵셔널 속성으로 넣어주고 추가하면 된다.  
readonly속성은 생성할때만 할당이 가능하고 이후에는 수정이 불가하다.  

여러가지 추가해야될 속성이 생길때, 예들들어 학년별로 성적을 추가해야한다고 할때  
옵셔널 말고 다른방법으로는 `[grade: number]` -> 문자열 인덱스 서명을 추가하는 방법


## 인터페이스에 함수

```javascript
interface Add {
    (num1: number, num2: number): number; // : number 는 리턴값이 number라는 뜻
}

const add: Add = function(x, y){
    return x + y;
}

add(10, 20);

interface isAdult {
    (age:number): boolean;
}

const a: isAdult = (age) => {
    return age > 19;
}

a(33) // true
```

## 인터페이스 확장(extends)

```javascript
interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price: number;
}
```






