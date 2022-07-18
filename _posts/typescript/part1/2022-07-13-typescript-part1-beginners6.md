--- 
title: "[TypeScript-part1] 인터페이스" 
excerpt: "typescript 인터페이스"
categories: 
    - typescript-part1
tags: 
    - typescript
    - interface
toc: true
--- 
## 6.1 인터페이스 소개 및 변수를 정의하는 인터페이스

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/b9559cb2582ba028305cb883cef723d2668ea265)

## 6.2 함수의 인자를 정의하는 인터페이스

변수에 인터페이스를 활용하는 방법을 사용해보았다면 이번에는 함수에 인터페이스를 활용하는 방법을 사용해 보자  

```javascript
function getUser(user) {
    console.log(user);
}
getUser()
```
여기까지 입력하고 `getUer()`함수를 호출하는 부분에 마우스를 올려보면,  
`function getUser(user: any): void`를 보여주며 any 타입이기 때문에 어떤 타입의 인자가 들어가도 에러가 나지 않는다. 

```javascript
function getUser(user: User) {
    console.log(user);
}
const ja = {
    name: 'jungah'
}
getUser(ja)
```
만약 여기에 `user: User` 위에서 정의한 User인터페이스를 받는다면  
`ja`에는 age가 없기 때문에 에러가 난다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/360e007d8cb944e6dd85c091b1dce58f62fa4aa6)

## 6.3 함수 구조를 정의하는 인터페이스

api를 호출 했을 때, 그 api의 데이터 타입이 어떤지 인터페이스를 정의해서 그것을 활용할때 인터페이스가 빛을 발한다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/d06b7d38811c91b4ceb84786e559946d07e8cee3)

## 6.4 인덱싱 방식을 정의하는 인터페이스

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/5ccae53bb0970b84683efe66be30c979bd86d655)

## 6.5 인터페이스 딕셔너리 패턴

RegExp : 정규표현식 생성자라는 느낌의 예약어?

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/ba556c4b4eb553834d890331ca4a5fa793d11720)

## 6.6 인터페이스 확장(상속)

인터페이스를 상속받아서 기존에 있던것보다 확장해서 사용하는 것  
인터페이스를 각각 정의했을때 각 인터페이스에 중복되는 속성들이 있다면 상속을 받아서 사용할 수 있다.  

```javascript
interface Person {
    name: string;
    age: number;
}

interface Developer {
    name: string;
    age: number;
    language: string;
}

// 상속받아서 확장
interface Developer extends Person {
    language: string;
}
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/cc7993d889893ff00fc8cc02fb39c369ad883567)

