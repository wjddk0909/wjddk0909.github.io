--- 
title: "[TypeScript-part1] 클래스" 
excerpt: "typescript class"
categories: 
    - typescript-part1
tags: 
    - typescript
    - class
toc: true
--- 
## 10.1 클래스 소개

자바스크립트에서 클래스란 생성자 함수이다.  
함수가 특정 기능을 하는 구문을 묶을 때 사용하는 문법이라면, 클래스는 이렇게 만들어진 수많은 변수와 함수 중 연관 있는 변수와 함수만을 선별해 포장하는 기술  
다시 말해, 연관있는 변수와 함수를 하나로 묶을 때 사용, 이렇게 클래스로 포장하는 이유는 객체 단위로 코드를 그룹화 할 수 있으며 코드를 재사용 하기 위해서이다. 

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/d6e122b2e1eecf7451c3a4812a2781df0bf2f944)

## 10.2 자바스크립트 프로토타입 소개

[MDN 자바스크립트 프로토타입과 상속](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

```javascript
const user = {
    name: 'capt',
    age: 100
};
const admin = {
    name: 'capt',
    age: 100,
    role: 'admin'
}
// 이런식으로 중복되는 코드들이 있을때
// 자바스크립트에서는 상속이 있다.
const admin2 = {};
admin2.__proto__ = user;
admin2.name //'capt'
admin2.age //100

admin2; // 콘솔에서 찍어보면 빈객체가 나오고 그 밑에 admin2.__proto__ = user; 프로토 타입을 정의 해서 활용 가능
// {}
// __proto__: Object
//     age: 100
//     name: 'capt'
//     __proto__: Object

admin2.role = 'admin';
admin2;
// {role: 'admin'}
// role: 'admin'
//     __proto__: Object
//         age: 100
//         name: 'capt'
//         __proto__: Object
```

## 10.3 자바스크립트 프로토타입의 활용 사례

[MDN Object 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)

- Built-in JavaScript API 또는 JavaScript Native Api  
아래와 같이 자바스크립트 코딩을 하면서 자연스럽게 프로토타입을 활용하고 있다는 것을 알 수 있다.  
단순히 객체의 정보를 확장하는 것 뿐아니라, 실제 빌트인 오브젝트에 정의되어 있는 기능(메소드) 들을 바로바로 가져다 쓸 수 있도록 구성되어 있다 라고 이해하면 된다. 

```javascript
const obj = { a: 10 };
obj.toString(); // "[object Object]"
Object.keys(obj); // ["a"]
obj.hasOwnProperty('a'); // true
obj; // 콘솔에서 찍으면 아래가 찍힌다 
// {a: 10} // 펴보면
// __proto__: Object // 최상위에 Object라는 객체가 있고 그 객체에 정의 되어있는 메소드들을 가져다 쓸 수 있는것


const arr = [];
arr;
// []
// __proto__: Array(0)
```

## 10.4 프로토타입과 클래스와의 관계

클래스라는 것은 결국 기존 문법(생성자함수)의 보기 좋은 코드라고 볼 수 있다.(기존 성질은 바뀌지 않음)  

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

class Person {
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/ab6eadeebc65f03b41580c83e5637355cb8c58d4)

## 10.5 타입스크립트의 클래스 문법

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/a9454883b37642e52493ae2006b3a191459a8f02)

- 리액트 클래스 기반 코드 (예전 문법)
```javascript
class App extends React.Component {
    //...
}
```

- 리액트 훅 기반 함수형 코드 (최신 문법)
```javascript
function App() {
    return <div>Hello World</div>
}
```
