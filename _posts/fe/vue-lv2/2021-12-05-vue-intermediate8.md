--- 
title: "8 - ES6 for Vue.js - Modules" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
toc: true
--- 

## 8.1 Modules

자바스크립트 모듈화 방법
- 자바스크립트 모듈 로더 라이브러리(AMD, Commons JS)기능을 js 언어 자체에서 지원
- 호출되기 전까지는 코드 실행과 동작을 하지 않는 특징이 있음

```javascript
// libs/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;

// main.js
import { sum } from 'libs/math.js';
sum(1, 2);
```

자바스크립트는 모듈화 방법이 없었기 때문에 모듈 로더 라이브러리를 사용함

모듈 : 특정기능을 수행하는 한 단위, 묶음
모듈화 이유 : 재사용성이 뛰어난 기능을 묶어서 다시 가져다 쓰기 위해서  

Vue.js에서 가장 많이 보이는 `export default`

```javascript
// util.js
export default function(x) {
    return console.log(x);
}

// main.js
import util from 'util.js';
console.log(util); // function (x) { return console.log(x); }
util('hi');

// app.js
import log from 'util.js';
console.log(log);
log('hi');
```