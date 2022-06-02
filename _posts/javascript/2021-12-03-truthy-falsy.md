--- 
title: "Truthy & Falsy" 
excerpt: "참 같은 값, 거짓 같은 값"
categories: 
    - javascript
tags: 
    - truthy
    - falsy
--- 
## Truty & Falsy

자바스크립트에는 `truthy`와 `falsy`가 있다.  
if문같이 boolean값으로 판단할때 실제로 true/false값은 아니지만 true/false 값으로 사용되는 값들을 말한다.  

- Falsy : `false, 0, -0, 0n, "", null, undefined, NaN`
- Truthy : `true, {}, [], 1, "0", "false", new Date(), -12, 12n, 3.14, Infinity, -Infinity` ... falsy가 아닌 다른 모든 값

NaN은 어떤 값과도 동일하지 않고 자기 자신과도 동일하지 않다.
```javascript
NaN = null // false
NaN = undefined //false
NaN = NaN // false
```