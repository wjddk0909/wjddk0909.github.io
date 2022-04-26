--- 
title: "6 - ES6 for Vue.js - 화살표 함수" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
toc: true
--- 

## 6.1 화살표 함수 소개 및 설명

- 함수를 정의할 때 `function`이라는 키워드를 사용하지 않고 `=>` 로 대체
- 흔히 사용하는 콜백 함수의 문법을 간결화

```javascript
// ES5 함수 정의 방식
var sum = function(a, b) {
    return a + b;
};


// ES6 함수 정의 방식
var sum = (a, b) => {
    return a + b;
}

sum(10, 20);

// ES5
var arr = ["a", "b", "c"];
arr.forEach(function(value) {
    console.log(value); // a, b, c
});

// ES6
var arr = ["a", "b", "c"];
arr.forEach(value => console,log(value)); // a, b, c
```

[Babel 온라인 에디터 링크](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.9&externalPlugins=&assumptions=%7B%7D)