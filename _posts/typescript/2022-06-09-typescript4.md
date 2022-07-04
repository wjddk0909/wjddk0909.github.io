--- 
title: "[TypeScript] #4 함수 타입정의" 
excerpt: "타입스크립트"
categories: 
    - typescript
tags: 
    - typescript
--- 
## 함수를 정의하는 방법

```javascript
function add(num1: number, num2: number): void {
    console.log(num1 + num2);
}

function isAdult(age: number): boolean {
    return age > 19;
}

function hello(name?: string) {
    return `Hellom ${name || "world"}`;
}

const result = hello(); // name?: 옵셔널이 아니면 name을 전달해 주지 않으면 에러가 난다.

// 자바스크립트에서 디폴트값 주기
function hello2(name = "world") {
    return `Hello, ${name}`;
}

function hello(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}

console.log(hello("Sam"));
console.log(hello("Sam", 30));
```