--- 
title: "[TypeScript-part1] 연산자를 이용한 타입 정의" 
excerpt: "typescript 연산자 이용"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 8.1 연산자를 이용한 타입 정의 - Union Type

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/d6a98809b130c7389993b94248aff79c72a61476)

## 8.2 유니온 타입의 장점

유니온 타입은 특정 파라미터나 변수에 여러가지 타입을 지정하고 싶을 때 사용한다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/bfa08f4fe10154a2e5d3db6e6675ccdb35462b18)

### 타입 가드
```javascript
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString()
    }
    if (typeof value === 'string') {
        value.toUpperCase()
    }
}
```

위와 같이 `if문`으로 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정

### 에러처리(타입 가드)
```javascript
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString()
    }
    if (typeof value === 'string') {
        value.toUpperCase()
    }
    throw new TypeError('value must be string or number');
}
```

위와 같이 지정된 타입 이외의 타입이 들어오면 에러 처리도 할 수 있다.

## 8.3 유니온 타입의 특징

```javascript
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
function askSomeone(someone: Developer | Person) {
    someone.name = 'abc';
    someone.skill = 'javascript'
}
```

인터페이스를 두개를 선언하고 아래에서 유니온 타입으로 파라미터로 정의해 줬을때,  
someone에 접근할 수 있는 속성은 `name`뿐이다.  
아직 어떤 형태의 객체가 들어올지 모르는 상황에서 `skill, age` 속성들을 모두 열어 놓는다면 에러가 발생할 수도 있다고 판단하기 때문에 위와 같이 유니온 타입을 썼을때는 공통속성에만 접근할 수 있도록 한다.  

이 `skill, age`같은 속성에 접근하고 싶다면 이전 시간에 봤던 `타입가드`를 이용해서 특정 타입으로 제한을 하고 그 후에 그 타입으로 인자가 들어왔을 때 처리하는 방식으로 해야한다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/7cc601b5f38ac11997eac77e90293035bb9eb6c5)

## 8.4 인터섹션 타입 소개

`&` 앤드 연산자를 사용한 인터섹션 타입

```javascript
function askSomeone2(someone: Developer & Person) {
    someone.name = 'abc';
    someone.skill = 'javascript'
}
```

위 유니온 타입에서는 `someone.skill` 속성이 뜨지 않고 `someone.skill = 'javascript'`이 에러가 나는 반면 인터섹션 타입에서는 `someone.skill = 'javascript'`이 에러가 나지 않는다.  
Developer 인터페이스와 Person 인터페이스 속성 모두를 가지고 있는 데이터 타입.
이것이 & 인터섹션이다.  
그러나 실무에서는 유니온 타입이 더 많이 쓰인다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/1f38d6ebcb428bb4cfc682075023e0e098bc9e8f)

## 8.5 유니온 타입과 인터섹션 타입의 차이점

- 유니온 타입: 여러 타입 중 하나의 타입만 만족하면 되므로 상황에 따라 원하는 타입을 만족하는 데이터를 넘기면됨
- 인터섹션 타입: 인터섹션으로 선언된 모든 타입을 만족하는 데이터를 넘겨야된다.

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/944f98a8cbb6a5d29fa3f1ec894d583384c13445)