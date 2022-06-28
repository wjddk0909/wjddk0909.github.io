--- 
title: "[TypeScript] #1 타입스크립트를 쓰는 이유" 
excerpt: "타입스크립트"
categories: 
    - typescript
tags: 
    - typescript
--- 
## 타입스크립트 사용하기

```javascript
function add(num1, num2) {
    console.log(num1 + num2);
}

add(); // NaN
add(1); // NaN
add(1,2); // 3
add(3,4,5); // 7 -> 12를 예상했을때 어디서 문제가 발생했는지 찾아봐야함
add('hello', 'world'); // "helloworld"
```

add(1,2)를 제외하고는 원하는 값을 얻을 수 없지만 자바스크립트는 실행하기 전어떠한 경고도 주지 않는다. 

```javascript
function showItems(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}

showItem([1,2,3]); // 1  2  3
showItem(1,2,3); // 에러
```

- 자바스크립트 (동적언어) : 런타임에 타입결정 -> 오류 발견(사용자가 오류를 보게 됨)   
- 자바, 타입스크립트 (정적언어) : 컴파일 타임에 타입 결정 -> 오류 발견

## typescript playground

[TypeScript](https://www.typescriptlang.org/play)  

```javascript
function add(num1:number, num2:number) {
    console.log(num1 + num2);
}

// add(); // NaN
// add(1); // NaN
add(1,2); // 3
// add(3,4,5); // 7 
// add('hello', 'world'); // "helloworld"

function showItems(arr:number[]) {
    arr.forEach((item) => {
        console.log(item);
    });
}

showItem([1,2,3]); // 1  2  3
//showItem(1,2,3); // 에러
```
typescript playground에서 위 예제 코드를 넣어보면 자바스크립트는 오류를 표현하지 않던 부분이 오류를 표현한다.  
add에 인자가 2개가 들어와야하는데 갯수가 맞지 않다고 뜨고, num1과 num2에 타입을 정의해주면 'hello','world'는 타입에러가 뜬다.  

arr:number[]가 아닌 arr:string[]을 적는다면 `showItem([1,2,3]);`에 에러가 잡히게 된다.  
또한, arr:number로 배열을 넣지 않으면 `arr.forEach((item)`이쪽에 에러가 잡힌다.  

또한 add()만 작성해줘도 어떤 인자 타입이 몇개가 필요한지 힌트가 나오기 때문에 내가 짠 코드가 아니더라도 코드를 뒤져보지 않고도 쉽게 코드 작성이 가능하다.  


