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

빌트인 오브젝트 구조
- 오브젝트 이름이 필요(Object, String, Number...)
- 오브젝트.prototype
    - 인스턴스 생성 가능 여부 기준:  Math오브젝트는 prototype이 없어서 인스턴스를 만들 수 없다.
    - 프로퍼티를 연결하는 오브젝트
    - 즉, prototype이 있어야 인스턴스를 생성할 수 있고 여기에 프로퍼티를 연결 할 수 있다.
- 오브젝트.prototype.constructor
    - 오브젝트의 생성자: constructor가 실질적으로 인스턴스를 생성, 그래서 prototype이 없으면 constructor가 없기때문에 인스턴스를 생성 할 수 없음
- 오브젝트.prototype.method
    - 메소드 이름과 함수 작성
- 오브젝트 구조

```javascript
var obj = Object;
/**
 * 1. obj에 Object 빌트인 오브젝트가 할당
 * 2. obj를 펼쳐보면
 * assign: ƒ assign() 처럼 표시된 것이 함수
 * length: 1, name: "Object" 처럼 표시된 것이 프로퍼티
 * 3. 더 밑에 보면 prototype이 있다.
 * 전개해보면, proto가 있는데 그 안에 constructor: ƒ Object() 생성자 함수가 있다.
 * 그래서 이것으로 인스턴스를 만들 수 있다.
*/
```

## 8.5 함수와 메소드 연결, 함수, 메소드 호출

함수와 메소드 연결
- 함수: 오브젝트에 연결, Object.create()
- 메소드: 오브젝트의 prototype에 연결, Object.prototype.toString()

- `함수 호출 방법`
    - Object.create();
- `메소드 호출 방법`
    - Ojbect.prototype.toString();
    - 또는 인스턴스를 생성하여 호출

```javascript
console.log(Object.create); // function create() { [nateve code] }
console.log(Object.prototype.create); // undefined
/**
 * 1. Object에 create가 존재하므로 함수 출력
 * 2. Object.prototype에 create가 존재하지 않으므로 undefined 출력 
*/

console.log(Object.prototype.toString); // function toString() { [nateve code] }
var obj = {};
console.log(obj.toString); // function toString() { [nateve code] }
/**
 * 1. Object.prototype에 toString이 존재하므로 함수 출력
 * 2. 인스턴스를 사용히여 메소드를 호출할 때는 prototype을 작성하지 않는다.
 * 3. prototype에 연결된 메소드로 인스턴스를 생성하기 때문
*/
```

- 함수와 메소드를 구분해야 하는 이유
    - JS 코드 작성 방법이 다르기 때문
    - 함수는 파라미터에 값을 작성하고, 메소드는 앞에 작성한 값을 기준으로 실행
    - `sum(a, b)`는 함수, `a.toString()`은 메소드

```javascript
console.log(String.fromCharCode(49, 65)); // 1A
/**
 * 1. String오브젝트에서 다뤘던 함수
 * 2. 49, 65 처럼 여러개를 작성하는데 함수 앞에 작성하려면 배열로 작성해야함
 * 3. 그러면 자바스크립트는 함수앞에 작성한 데이터 타입에 따라서 빌트인 오브젝트로 인스턴스를 만들고 거기에 있는 메소드를 호출
 * 4. 그렇다면 String이 아닌 배열이 오게 된다면 배열에는 fromCharCode가 없어서 에러 발생
 * 5. 파라미터로 다수를 넣기 위해서 함수 호출 -> 함수 앞에는 빌트인 String오브젝트를 작성해서 fromCharCode 메소드 호출
*/
```

## 8.6 프로퍼티 처리 메소드

hasOwnProperty()
- 인스턴스에 파라미터 존재하면 true 반환, 존재하지 않으면 false 반환
- 자신이 만든 것이 아니라 상속받은 프로퍼티면 false 반환

```javascript
var obj = {value: 123};
var own = obj.hasOwnProperty("value");
console.log(own); // true
/**
 * 1. obj 인스턴스에 value 프로퍼티 존재
 * 2. obj를 만들면서 직접 작성했으므로 true 반환
*/

var obj = {value: undefined};
var own = obj.hasOwnProperty("value");
console.log(own); // true
/**
 * 1. undefined는 false로 인식되지만
 * 2. 값을 체크하지 않고 property 이름 존재 여부만 체크하므로 true 반환
*/

var obj = {};
var own = obj.hasOwnProperty('hasOwnProperty");
console.log(own); // false
/**
 * 1. hasOwnProperty()는 자신이 만든 것이 아니라 빌트인 Object 오브젝트에 있는 것
 * 2. {}를 실행하면 빌트인 Object 오브젝트의 property에 연결된 메소드를 사용
 * 3. Object 인스턴스를 만드므로 자신이 만든 것이 아님
*/
```