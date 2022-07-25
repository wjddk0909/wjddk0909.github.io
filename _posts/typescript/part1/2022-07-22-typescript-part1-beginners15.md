--- 
title: "[TypeScript-part1] 타입 가드" 
excerpt: "typescript 타입 가드"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 15.1 타입 가드를 위한 예제 소개

```javascript
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

let tony = introduce();
console.log(tony.skill); // 유니온 타입은 공통된 속성에만 접근 가능해서 에러가 난다.
```

위와 같은 에러를 해결하기 위해 타입 단언을 활용 할 수 있다.  

```javascript
// 타입단언
if ((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    let age = (tony as Person).age;
    console.log(age);
}
```

그러나 이렇게 하면 가독성도 별로고 코드도 복잡해 진다.  
이때 타입 가드를 사용하면 된다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/7b745e42388b2d690d77912aa65cd97bc521fc0b)

## 15.2 타입 가드 소개와 적용

```javascript
// 티입 가드
function isDeveloper(target: Developer | Person): target is Developer {// Developer인지 아닌지
    return (target as Developer).skill !== undefined; // skill이 있을때(undefined가 아닐때)
}

if(isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}
```
> [diff check](https://github.com/wjddk0909/typescript-part1/commit/a4c36343fee48535097a9590211facea7969d97f)
