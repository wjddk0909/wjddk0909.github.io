--- 
title: "[TypeScript-part1] 첫 번째 프로젝트 - 할 일 관리 애플리케이션" 
excerpt: "typescript 할 일 관리"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 5.1 첫 번째 실습 프로젝트 소개, 환경 구성, 코드 분석

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/84f846d996ceb396f57c9a83b88bd1fa1fe3cacd)

## 5.2 프로젝트 구성 파일 소개(NPM, ESLint, TS)

tsconfig.json  
`compilerOptions`: 타입스크립트에서 자바스크립트로 변환할때 적용되는 옵션  
그중에 `"noImplicitAny": false`를 true로 바꾸면 에러가 뜨기 시작한다.  
이 에러들은 제거하지 않으면 자바스크립트로 컴파일시 컴파일이 되지 않는다.  
이런 에러난 부분에 대해서 꼭 타이핑(typing: 타입이 정의되지 않은 코드에 타입을 입혀주는 행위)을 해줘야 함  

## 5.3 실습 방법 안내 및 any, void 소개

tsconfig.json파일을 열어서 `noImplicitAny`속성을 true로 바꿔주고  
quiz/1_todo/src/index.ts 파일을 열어서 `todoItems` 변수에 마우스를 갖다대면 any라는 타입이 보입니다.  

이 any라는 타입은 어떤 타입이 들어와도 상관없다는 뜻  
실행하는 시점에 해당 값의 타입을 파악해서 타입을 할당하는 방식  
그러나 최대한 타입을 정확하게 명시하는것을 추천 (필요할 때가 있을 수 있으므로 알아둘 필요는 있음)  

두번째로 아래 `addTodo`함수에 마우스를 갖다대면 리턴타입으로 void가 뜬다.  
void는 반환값이 없다는 것을 명시하는 것으로 리턴값이 없는 함수는 반환값에 void라고 명시하면 된다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/e1c4fb885e6ab8513fcdc424fd12cdd4cb5c5b8d)

## 5.4 실습 풀이 1 - 변수, 함수 타입

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/829e1ff7d52935d3ddbaa3e478d6d49c6cfcbc35)

## 5.5 실습 풀이 2 - filter API & 화살표 함수 소개

```javascript
let arr = [
    { gender: 'male', name: 'john' },
    { gender: 'female', name: 'ellin' },
    { gender: 'male', name: 'ben' },
]

const filtered = arr.filter(function(item) {
    if(item.gender === 'female') {
        return item;
    }
})

console.log(filtered) // [ { gender: 'female', name: 'ellin' } ]
```

* a.js파일을 src폴더에 만들고 터미널에서 node a.js 명령어를 실행하면 브라우저를 실행하지 않고 node로 js파일을 실행 할 수 있다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/6eeaa0f7ae1608102e3741bdc64d3c3bd9d6a700)

## 5.6 실습 풀이 3 - 함수 구현

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/f34844ae3e39726d7dc2bb7919eb27850c41c79a)

## 5.7 실습 풀이 4 - 오류 해결 및 구체적인 타입 정의

원래 `let todoItems: object[];`으로 정의 했던 타입을 좀 더 구체적으로 `let todoItems: { id: number; title: string; done: boolean }[];`으로 정의 해 준다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/c17bc0e2f5a29d2b560629c5572d77c9b0b2a24e)

## 5.8 실습 풀이 5 - 중복된 코드 제거 및 인터페이스 소개

코드를 살펴보면 object의 코드를 구체적으로 명시하는 부분이 게속해서 반복적으로 나온다.  
이런 부분을 공통으로 묶어줄 수 있다. 

```javascript
type Todo = {
  id: number;
  title: string;
  done: boolean;
};

let todoItems: Todo[]; // 할 일 목록 받는 변수
```

이런 방법도 있지만  
interface를 사용하는 방법도 있다.  

```javascript
interface Todo {
  id: number;
  title: string;
  done: boolean;
};

let todoItems: Todo[]; // 할 일 목록 받는 변수
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/2f30ce786215e2009780a4b67410fa05c0f16f6d)