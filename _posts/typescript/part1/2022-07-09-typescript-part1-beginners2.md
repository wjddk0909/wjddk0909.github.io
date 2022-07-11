--- 
title: "[TypeScript-part1] 타입스크립트 소개와 배경" 
excerpt: "typescript 소개"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 2.1 타입스크립트란?

타입스크립트는 자바스크립트에 타입을 부여한 언어.  
자바스크립트의 확장된 언어라고 볼 수 있다. 타입스크립트는 자바스크립트와 다르게 브라우저에서 실행하기 위해 파일을 한번 변환해줘야 함.  
이 과정을 `컴파일(compile)`이라고 한다.  

## 2.2 왜 타입스크립트를 쓰면 좋은가요?

- [HTTP 요청 라이브러리 axios](https://github.com/axios/axios)
- [Promise 소개 글](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
- [JSONPlaceHolder 사이트](https://jsonplaceholder.typicode.com/)

clone 받았던 레포지토리에서 `why-ts`폴더의 `index.html`을 참고한다.  
사용자정보를 받아오는 웹페이지를 작성해 둔 상태이다.

axios를 이용해서 유저 정보를 api호출을 통해 유저 정보를 가져오자.  

```javascript
var url = 'https://jsonplaceholder.typicode.com/users';

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user)
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address;
    })
    .catch(function (error) {
      console.log(error);
    });
}
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/a390b64ee3e1c51f645359c7536ff0344ef051a0)  

위와 같이 작성해도 코드상에서는 문제가 없어 보인다.  
하지만 화면에서 확인해보면 `주소: [object Object]`라는 문구가 나온다.  
address가 객체형태이기 때문이다.  
`address.innerText = user[0].address.street;`라고 작성한다면 문제가 없다.  
그러나 `address.innerText = user[0].addres.street;` 이런식으로 오타가 있으면 화면에서는 undefined를 찍어낸다.  

이렇게 코드상에서 잘못 입력하더라도 화면에서 직접 확인해야지 해당 코드가 잘못 되었는지 확인이 가능하다.   
이런 부분들을 타입스크립크를 사용하면 더 명확하게 할 수 있는 부분이다.  


## 2.3 자바스크립트에 타입이 있을 때의 첫 번째 장점

타입스크립트의 2가지 관점에서 자바스크립트 코드의 품질과 개발 생산성을 높인다. 

- 에러의 사전 방지
- 코드 가읻 및 자동 완성(개발 생산성 향상)

에러의 사전 방지 : 에러를 사전에 미리 예방  


Jsdoc의 표준 문법 : /** 치고 엔터를 치면 된다.  

```javascript
/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */
/**
 * @returns {Promise<User>}
 */
```

타입스크립트 이전에 자바스크립트에서는 위와 같은 Jsdoc 규칙으로 주석을 달아서 어떤 데이터타입인지 어떤 속성인지 명시를 했다.  
타입스크립트를 사용하면 어떤 데이터 타입이 들어오는지 속성이 무엇이 있는지 코드상에서 바로바로 잡아준다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/26e35a45796ef357ad39659cc735598786b6cd6e)  

## 2.4 자바스크립트에 타입이 있을 때의 두 번째 장점

```javascript
// sample.js

function sum(a, b) {
    return a + b;
}

sum(10, '20'); // 1020

function sum(a, b) {
    return a + b;
}

sum(10, '20'); // 1020

// 자바스크립트는 숫자와 문자를 더하면 전부다 문자로 취급
// 타입스크립트를 사용하면 a와 b에 모두 숫자만 들어오게 정의할 수 있다.
```

```javascript
//sample.ts

function sum(a: number, b: number): number { // a와 b는 number, 그리고 함수가 반환하는 값의 타입까지 number라고 정의
    return a + b;
}

sum(10, 20);
sum(10, '20'); // 지정한 타입과 다른 타입의 값을 넣으면 에러가 남
```

`const result = sum(10, 20);` 이런식으로 변수에 넣어주면 `result.`을 찍어보면
result는 number타입이 명시 되어 있기 때문에 number에서 제공하는 property를 전부 활용 할 수 있게 된다. 타입스크립트가 아니라면 온갖 프로퍼티가 다 나온다.  

이런 코드 자동완성 기능을 intellisence라고 한다. (또는 code completion)
[코드 자동완성](https://www.jetbrains.com/help/webstorm/auto-completing-code.html)

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/9dac152d5b0d0f0a7238b9f6073678e48c37b24a)

## 2.5 자바스크립트를 타입스크립트처럼 코딩하는 방법

앞서 사용했던 것 처럼 Jsdoc을 사용해서 다시 정의해보면,  

```javascript
/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b){
    return a + b;
}
```

sum함수에 커서를 올려보면 preview가 보이는데 a와 b에 number가 들어가는게 보인다.

```javascript
sum(10, 20);
sum(10, '20'); // 그러나 이렇게 넣어도 자바스크립트에서는 에러로 잡지는 않는다. 웹스톰에서는 잡는듯..? 설정을 미리 따로 해줘서 그런것 같기도? 잘 모르겠다...ㅠ
// vs code에서 자바스크립트에 Jsdoc주석 위에 // @ts-check 추가 하면 ts 문법으로 에러 검사해준다고 함 
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/22dbd8bdf75373b402624a3b82b387a8d3e67aa5)