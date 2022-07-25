--- 
title: "[TypeScript-part1] 타입 단언" 
excerpt: "typescript 타입 단언"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 14.1 타입 단언 소개

타입스크립트보다 오히려 개발자가 타입을 추론하는것이 더 빠르고 정확할 때가 있기 때문에 개발자가 정의한 타입으로 간주하라고 하는것이 `타입단언`이다.  

타입 단언은 DOM API를 조작할 때 가장 많이 사용된다.

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/6d589f06539bb26b7f743f2980d5576896f6c1c6)

## 14.2 타입 단언 예제

```javascript
let div = document.querySelector('div');
// div에 호버해보면 HTMLDivElement 또는 null일수 있다고 추론한다.
// 때문에 바로 div.innerText등으로 사용하면 에러가 발생하기때문에 null이 아님을 보장해줘야함
if (div) {
  div.innerText;
}
// let div = document.querySelector('div') as HTMLDivElement; // 이렇게 타입 단언을 해서 null이 있는 유니온 타입이 아닌 타입을 단언해주는 방법도 있음
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/6a8c4c7442393bdc5e483188035c38e5f58ae483)

