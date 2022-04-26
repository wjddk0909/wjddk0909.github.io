--- 
title: "5 - ES6 for Vue.js - const & let" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
toc: true
--- 

## ES6 배경과 Babel 소개

es6(ECMAScript 2015)
- 2015년은 ES5(2009년)이래로 진행한 첫 메이저 업데이트가 승인된 해
- 최신 Front-End Framework인 React, Angular, Vue에서 권고하는 언어 형식
- ES5에 비해 문법이 간결해져서 익숙해지면 코딩을 훨씬 편하게 할 수 있음

Babel
- 구 버전 브라우저 중에서는 ES6의 기능을 지원하지 않는 브라우저가 있으므로 tranpiling이 필요
- ES6의 문법을 각 브라우저의 호환 가능한 ES5로 변환하는 컴파일러

## 5.1 const & let 소개

- 블록 단위 `{}` 로 변수의 범위 제한
- `const` : 한번 선언한 값에 대해서 변경 불가능(상수개념)
- `let` : 한번 선언한 값에 대해서 다시 선언할 수 없음

## 5.2 [ES5의 주요 특징]변수 스코프와 호이스팅

변수의 Scope
- 기존의 ES5는 `{}`에 상관없이 스코프가 설정됨

```javascript
var sum = 0;
for (var i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum); // 15
console.log(i) // 6
```

for문을 벗어나도 i에 접근이 가능  

Hoisting
- 함수나 변수를 해석기가 가장 상단으로 끌어올림
- js 해석기는 코드의 라인 순서와 관계 없이 함수선언식과 변수를 위한 메모리 공간을 먼저 확보한다.
- 함수표현문과 const, let 은 호이스팅이 일어나지 않는다.

## 5.3 const와 let 추가 설명 및 정리

- `{}`단위로 변수의 범위가 제한

```javascript
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum); // 15
console.log(i) // Uncaught ReferenceError: i is not defined
```

for문이 끝나면 i에 접근 불가

- `const`로 지정한 값 변경 불가능
- 객체나 배열의 내부는 변경할 수 있다.

```javascript
const a = {};
a.num = 10;
console.log(a); // {num:10}

const b = [];
b.push(20);
console.log(b); // [20]
```

## 5.4 [리팩토링] const와 let

- var -> const, let으로 변환

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/85137b3439c6920ac23efdafad8b97e9f05f30cf)