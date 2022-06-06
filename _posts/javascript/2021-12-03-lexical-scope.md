--- 
title: "Lexical Scope" 
excerpt: "렉시컬 스코프 이해하기"
categories: 
    - javascript
tags: 
    - lexical scope
--- 
## 렉시컬 스코프란?

함수를 어디서 호출하는지가 아니라 어디에(어디서) `선언하였는지에 따라 결정되는 것`을 말한다.  

즉, 함수를 어디서 선언하였는지에 따라 상위 스코프를 결정한다는 뜻이며, 가장 중요한 점은 함수의 선언에 따라 결정되는 점이다.  

다른 말로 `정적 스코프(Static scope)`라고 한다.  

예시 코드를 보고 어떻게 동작하는지 확인해보자  

```javascript
var a = 1; // global

function first() {
  var a = 10;
  second();
}

function second() {
  console.log(a);
}

first();
second();
```

결과는 10, 1이 출력될 거라고 생각하기 쉽지만 실제 결과는 1, 1 이 두번 출력된다.  

이유는?  
자바스크립트에서 코드를 작성할때, 이미 실행 단계에서 코드들의 스코프를 결정한다.  
- global 범위에 있는 변수 `a`
- first() 함수 안에 있는 변수 `a`
- second() 함수 안에 있는 변수 `a`

second()의 상위 스코프가 무엇인지에 따라 결정된다.  
자바스크립트는 렉시컬 스코프(Lexical Scope)를 따르므로 함수를 선언한 시점에 이미 상위 스코프가 결정된다.  
즉, 이말은 함수를 어디서 호출하였는지는 스코프 결정에 아무런 의미를 주지 않는다는 말이다.  
그렇기 때문에 second() 함수가 `first() 함수 안에서 호출` 된 것과 상관없이 second()함수는 `global 범위에 선언`되어 있으므로 global 범위에 있는 변수 a의 값이 두번 출력된 것이다.
