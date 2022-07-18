--- 
title: "[TypeScript-part1] 타입 별칭" 
excerpt: "typescript 타입 별칭"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 7.1 타입 별칭 소개

타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미합니다.  

```javascript
// string 타입을 사용할 때
const name: string = 'capt';

// 타입 별칭을 사용할 때
type MyName = string;
const name: MyName = 'capt';

// interface 레벨의 복잡한 타입에도 별칭 부여 가능
type Developer = {
    name: string;
    skill: string;
}

// 타입 별칭에 제네릭도 사용가능
type User<T> = {
    name: T
}
```

## 7.2 타입 별칭 코드 예제

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/30ee844445f3081b96be8d0bea796ce59473e966)

## 7.3 타입 별칭과 인터페이스의 차이점

타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.  

인터페이스로 선언한 타입을 프리뷰로 확인하면 인터페이스를 가리킨다. 

![인터페이스](/assets/images/ts/part1-7_01.png)  

인터페이스를 가리키기 때문에 인터페이스로 바로 이동이 가능하다. (커맨드 + b)  

타입은 확장이 되지 않는다.  
인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능하다. 따라서 `type` 보다는 `interface`로 선언해서 사용하는 것을 추천  




