--- 
title: "call/apply/bind 함수의 차이점" 
excerpt: "call()/apply()/bind()"
categories: 
    - javascript
tags: 
    - function
    - call
    - apply
    - bind
--- 
## call/apply/bind 함수의 차이점은?

예제를 보고 확인해보자.

> 예)

```javascript
    const obj = {name:'maru'};
    const live = function(city){
        console.log(`Hi my name is ${this.name}, I live in ${city}`);
    };
    live('korea'); // Hi my name is , I live in korea
    live.call(obj, 'korea'); // Hi my name is maru, I live in korea
    live.apply(obj, ['korea']); // Hi my name is maru, I live in korea
```

call과 apply는 함수를 호출하는 함수  
첫번째 인자인 "obj"로 this를 변경하고 함수를 실행한다.  
(apply는 파라미터를 배열로 넣어야 한다.)

> 예)

```javascript
    const obj = {name:'maru'};
    const live = function(city){
        console.log(`Hi my name is ${this.name}, I live in ${city}`);
    };
    const bound = live.bind(obj)
    bound('korea'); // Hi my name is maru, I live in korea
```

bind함수는 함수를 실행하지 않는다.




