--- 
title: "11 - async & await를 이용한 비동기 처리" 
excerpt: "Vue news"
categories: 
    - vue-lv3
tags: 
    - vue
    - async
    - await
    - promise
    - callback
toc: true
--- 

## 11.1 자바스크립트 비동기 처리 패턴의 발전 과정

비동기 처리에 대해서 모르고 자바스크립트로 어떤 데이터를 받아와서 처리하려고 할때 일반적인 사고라면 아래와 같이 작성할 것이다.

```javascript
var id = $.get('domain.com/id'); // #1 domain.com/id 로 get 요청을 보내서 결과값을 id에 담고
if (id === 'john') { // #2 그 id가 john이면
    var products = $.get('domain.com/products'); // #3 domain.com/products 로 get 요청을 받아서 결과값을 products에 담아라
}
```

그러나 위와 같이 코드를 짠다면 `var id = $.get('domain.com/id');` 여기서 데이터 요청을 보내고 받아오기 전에 아래줄이 실행이 되기때문에, 이것에 대해 콜백 처리가 필요하다.

```javascript
$.get('domain.com/id', function(id) {
    if (id === 'john') {
        $.get('domain.com/products', function(products) {
            console.log(products);
        });
    }
});
```

이것을 Promise를 적용해보면,(대충 아래같은 식으로 코드 작성)
```javascript
// $.get('domain.com/id', function(id) {
//     if (id === 'john') {
//         $.get('domain.com/products', function(products) {
//             console.log(products);
//         });
//     }
// });
function getId() {
    return new Promise(function(resolve reject) {
        $.get('domain.com/id', function(id) {
            resolve(id);
        })
    })
}
function getProduct() {
    if (id === 'john') {
        $.get('domain.com/products', function(products) {
            console.log(products);\
            return new Promise(...)
        });
    }
}
function logProduct(products) {
    console.log(products)
}
getId() // #1 id를 가져오면
    .then(getProduct()) // #2 product를 가져오고
    .then(logProduct()) // #3 콘솔에 product를 찍기
    .catch()
```

## 11.2 async & await 문법 소개

async & await는 자바스크립트 비동기 처리 패턴의 최신 문법.  
Promise와 Callback에서 주는 단점들을 해결 하고 자바스크립트의 비동기전 사고 방식에서 벗어나 동기적(절차적)으로 코드를 작성할 수 있게 도와준다.

기본문법

```javascript
async function fetchData() {
    await getUserList();
}
```
async함수는 함수의 앞에 `async`를 붙여주고 함수의 내부 로직 중 비동기 처리 로직 앞에 `await`를 붙여주면 된다.  
좀 더 정확하게 말하면 `Promise`객체를 반환하는 API 호출 함수 앞에 `await`를 붙인다.

예제를 좀 더 살펴보면  
```javascript
function fetchData() {
    var list = getUserList();
    console.log(list);
}
function getUserList() {
    return new Promise(function(resolve, reject) {
        var userList = ['user1', 'user2', 'user3'];
        resolve(userList);
    });
}

fetchData()
// Promise {<fulfilled>: Array(3)}
// undefined
```

여기에 async await를 적용하면  
```javascript
async function fetchData1() {
    var list = await getUserList1();
    console.log(list);
}
function getUserList1() {
    return new Promise(function(resolve, reject) {
        var userList = ['user1', 'user2', 'user3'];
        resolve(userList);
    });
}

fetchData()
// (3) ['user1', 'user2', 'user3']
// Promise {<fulfilled>: Array(3)}
```

## 11.3 async & await 예제 소개

>[diff check](https://github.com/wjddk0909/vue-news/commit/0737fe51e0aa5b5727af0e46305a249db996c090)

## 11.4 async await 예제 실습

>[diff check](https://github.com/wjddk0909/vue-news/commit/8d9fd89a99dcb30b8a86595f38fcbaa4deb9c884)

## 11.5 async await 에러 처리 방법과 공통화 함수 작성 방법

- try / catch 문으로 에러 처리

>[diff check](https://github.com/wjddk0909/vue-news/commit/ebb2dccbdc4c56a96ce2c6a5fe335fd1a1be4c33)