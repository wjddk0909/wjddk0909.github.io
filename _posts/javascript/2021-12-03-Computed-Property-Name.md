--- 
title: "Computed Property Name - 객체 key값에 변수 넣기" 
excerpt: "es6 변수 넣기"
categories: 
    - javascript
tags: 
    - es6
    - object
    - variable
--- 
## es6 템플릿 리터럴

es6에서 템플릿 리터럴을 사용하면 내부에 변수값을 사용할 수 있다.  

객체 안에서 key값에 변수를 넣는 법도 있다.  

### Computed Property Name

`[]`를 사용해 넣으면 된다.  

```javascript
let key = "name";
let info = {
    [key] : "ellin"
}

// info = { name: "ellin" }
```

변수 외에 함수도 가능  

```javascript
function func1(a, b) {
  return a + b;
}
function func2() {
  return 'hello';
}

let obj = {
  [`key${func1(5,8)}`] : 'result is 13',
  [func2()] : 'hi'
}

// obj = {
//    key13: 'result is 13', 
//    hello: 'hi'
//  }
}
```
