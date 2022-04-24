--- 
title: "7 - ES6 for Vue.js - Enhanced Object Literals" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
toc: true
--- 

## 7.1 속성 메서드의 축약 특징 설명

향상된 객체 리터럴
- 객체의 속성을 메서드로 사용할 때 `function` 예약어를 생략 가능

```javascript
var dictionary = {
    words: 100,
    // ES5
    lookup: function() {
        console.log("find words");
    },
    // ES6
    lookup() {
        console.log("finde words");
    }
}
```

## 7.2 [리팩토링] 속성 메서드의 축약 특징 리팩토링

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/28a66b22d7aaf3a1a95ad3c8dff0abd23f47a790)

## 7.3 속성명의 축약 특징 설명

- 객체의 속성명과 값 명이 동일할 떄 아래와 같이 축약 가능

```javascript
var figures = 10;
var dictionary = {
    // figures: figures,
    figures
}
```

## 7.4 [리팩토링] 속성명의 축약 특징 리팩토링

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/d6802d1dc37fe0ffad9cecb0d7f2583b102fd58d)