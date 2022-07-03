--- 
title: "[TypeScript] #2 기본타입" 
excerpt: "타입스크립트"
categories: 
    - typescript
tags: 
    - typescript
--- 
## 기본타입

```javascript
let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];
```

## tuple 튜플

```javascript
let b:[string, number];

b = ['z', 1];
// b = [1, 'z']; // 에러

b[0].toLowerCase();
b[1].toLowerCase(); // number에는 없는 메소드라고 에러 발생
```

## void, never

void : 함수에서 아무것도 반환하지 않을떄 사용

```javascript
function sayHello():void {
    console.log('hello');
}
```

never : 항상 에러를 반환하거나, 영원히 끝나지 않는 함수의 타입으로 사용

```javascript
function showError():never {
    throw new Error();
}

function infLoop():never {
    while (true) {
        // do something
    }
}
```

## enum

enum : 비슷한 값들끼리 묶였다

```javascript
enum Os {
    Window,
    Ios,
    Android
}
```

typescript에서 enum을 사용하지 않는게 좋은 이유  
[참고 링크](https://engineering.linecorp.com/ko/blog/typescript-enum-tree-shaking/)