--- 
title: "[JavaScript: Beginner] 9 - Object 오브젝트(ES3기준)" 
excerpt: "오브젝트, 프로퍼티, Object 인스턴스, 빌트인 오브젝트, 함수와 메소드 연결"
categories: 
    - js-beginner
tags: 
    - Object
    - instance
    - property
toc: true
--- 
## 9.1 자바스크립트 오브젝트 구분, 네이티브/호스트 오브젝트, 오브젝트와 인스턴스

오브젝트
- 빌트인오브젝트
    - 사전에 만들어 놓은 오브젝트
    - 빌트인 Number 오브젝트, 빌트인 String 오브젝트
- 네이티브 오브젝트
    - JS 스펙에서 정의한 오브젝트
    - 빌트인 오브젝트 포함
    - JS 코드를 실행할 때 만드는 오브젝트 -> Argument 오브젝트
- 호스트 오브젝트
    - 빌트인, 네이티브 오브젝트를 제외한 오브젝트
    - window, DOM 오브젝트
    - JS는 호스트 환경에서 브라우저의 모든 요소 기술을 연결하고 융합하며 이를 제어

```javascript
var node = document.querySeletor("div");
console.log(node.nodeName); // DIV
/**
 * 1. querySelector()는 DOM 함수
 * 2. DOM에서 제공하는 오브젝트를 호스트(Host) 오브젝트라고 부름
 * 3. 마치 JS 함수처럼 DOM 함수 사용
*/
```

오브젝트와 인스턴스
- 강좌에서 오브젝트는 new 연산자를 사용하지 않고 빌트인 오브젝트로 만든 오브젝트를 지칭
- `var abc = new Object();`
- `var obj = {};`
- new 연산자를 사용한 abc는 인스턴스
- 사용하지 않은 obj는 오브젝트

## 9.2 프로퍼티 리스트

- new Object(): 파라미터 데이터 타입의 인스턴스 생성
- Object: Object 인스턴스 생성

## 9.3 Object 인스턴스 생성, 프리미티브 값 구하기

new Object()
- 인스턴스를 생성하여 반환
- 파라미터의 데이터 타입에 따라 생성할 인스턴스 결정

```javascript
var newNum = new Number(123);
console.log(typeof newNum); // object
console.log(newNum + 100); // 223
// new Number(123)으로 생성한 인스턴스 타입은 object이며 프리미티브 값은 123

var newObj = new Object(123);
console.log(typeof newObj); // object
console.log(newObj + 100); // 223
/**
 * 1. new Object(123)으로 생성한 인스턴스의 타입도 object이고 프리미티브 값은 123
 * 2. 2개 인스턴스 모두 100을 더할 수 있으며 값이 더해진다는 것은 Number타입이라는 것
 * 3. new Object()는 파라미터 값 타입이 Number 타입이면 Number 인스턴스를 생성하고 String 타입이면 String 인스턴스를 생성
*/
```

- 파라미터 값이 undefined, null 이면 빈 Object 인스턴스 반환

```javascript
var newObj = new Object();
console.log(newObj); // {}
// new Object() 처럼 파라미터를 작성하지 않으면 undefined를 작성한 것과 같으며 값을 갖지 않은 Object 인스턴스 생성
```

Object()
- Object 인스턴스 생성
- 파라미터는 {name: value} 형태

```javascript
var obj = Object({name: 'js책'});
console.log(obj); // {name: 'js책'}

var emptyObj = Object();
console.log(emptyObj); // {}
// 파라미터를 작성하지 않으면 new Object()와 같음
```

Object 생성 방법
- var abc = {};는 var abc = Object()와 같음
- 즉, var abc = {}를 실행하면 Object 인스턴스가 생성됨
- {} 표기를 `오브젝트 리터럴` 이라고 부름

```javascript
var obj = Object({name: 'value'});
console.log(obj); // {name: 'value'}
console.log(obj instanceof Object); // true
// true가 출력된 것은 Object로 생성한 인스턴스를 뜻함

var obj = {name: 'value'};
console.log(obj); // {name: 'value'}
console.log(obj instanceof Object); // true
/**
 * 1. true가 출력된 것은 Object로 생성한 인스턴스를 뜻함
 * 2. Object()와 Object 리터럴{} 모두 Object 인스턴스를 생성
 * 3. 그래서 Object()를 사용하지 않고 간단하게 {}를 사용
*/
```

valueOf()
- data 위치에 작성한 Object 인스턴스의 프리미티브 값 반환

```javascript
var obj = {key: 'value'};
console.log(obj.valueOf()); // {key: 'value'}
// obj에 프리미티브 값으로 설정된 값으로 반환
```

## 8.4 빌트인 오브젝트 구조, prototype

