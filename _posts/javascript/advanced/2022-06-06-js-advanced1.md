--- 
title: "Function 오브젝트" 
excerpt: "function 형태, 오브젝트 생성, 저장, 생각의 전환"
categories: 
    - js-advanced
tags: 
    - function
    - object
toc: true
--- 
## 1.1 function 형태, function 오브젝트 생성, 오브젝트 저장, 생각의 전환

function 형태  
- 빌트인 Function 오브젝트 Function.prototype.call() -> 빌트인 Function 오브젝트의 prototype에 메소드가 연결되어 있는 형태
- function 오브젝트
  - function book(){...} -> function 키워드를 사용해서 함수 선언
  - var book = function() {...} -> function 키워드를 사용해서 function 오브젝트를 만들어서 변수에 할당
  - 인스턴스이지만, new 연산자로 생성한 인스턴스와 구분하기 위해 function 오브젝트로 표기
  - new 연산자?
    - new 라는 의미는 영역(block)을 지정하여 함수 내부의 정의된 내용을 실행하여 주는 의미라 볼 수 있다.
    - new 연산자를 사용하지 않으면 변수에 인스턴스를 생성하지 않는다.
    - 쉽게 접근해서 new 연산자를 사용해야만 함수 내부의 내용을 변수에 대입 할 수 있다.
    - [new 연산자와 this](/javascript/new-this/)

- function 인스턴스
  - new Book()처럼 new연산자를 사용하여 Book.prototype에 연결된 메소드로 생성

function 오브젝트 생성  
- var book = function() {...};
- 엔진이 function 키워드를 만나면 빌트인 Function 오브젝트의 prototype에 연결된 메소드로 function 오브젝트 생성
- 생성한 오브젝트를 book 변수에 할당
- book() 형태로 호출
  - function 오브젝트이므로 호출 가능

오브젝트 저장  
- 함수를 호출하려면 생성한 function 오브젝트를 저장해야한다.
- function 오브젝트 저장형태
  - {name: value} 형태로 저장
  - {book: 생성한 function 오브젝트} 형태
- 함수를 호출하려면
  1. 저장된 오브젝트에서 함수 이름(book)으로 검색
  2. value 값을 구하고
  3. value가 function 오브젝트면 호출

함수가 호출되면 엔진은 함수의 변수와 함수를 {name: value} 형태로 실행 환경을 설정하고 함수 코드를 실행한다.  
{name: value} 형태로 생각을 전환해야 JS의 아키텍처와 메커니즘을 쉽게 이해할 수 있다.  
function(){...} 코드를 보면 함수의 변수와 함수가 {name: value} 형태로 연상되어야 한다. 

## 1.2 function 오브젝트 생성 과정, function 오브젝트 구조

function 오브젝트 생성 과정

1. function sports(){...} 형태에서 function 키워드를 만나면
2. 오브젝트를 생성하고 저장
  - {sports: {...}}
  - sports는 function 오브젝트 이름
  - 오브젝트 {...}에 프로퍼티가 없는 상태 -> 이제부터 빈 오브젝트에 프로퍼티를 채운다. 

ㄴsports 오브젝트 형태  

```javascript
var sports = function(){};
/*
1. 생성한 오브젝트가 sports에 할당된다. -> 오브젝트를 생성하는 시점에는 빈 오브젝트
2. Local의 sports를 펼치면
arguments: (...)
caller: (...)
length: 0
name: "sports"
prototype: {
  construnctor: ƒ ()
  __propto__: Object // 빌트인 오브젝트에 관련된 메소드들이 설정되어있음(6개)
}
__proto__: ƒ () // apply, bind, call 빌트인 function 오브젝트의 prototype에 연결되어 있는 메소드들이 설정됨
*/
```

3. sports 오브젝트에 `prototype 오브젝트` 첨부
4. prototype에 `constructor` 프로퍼티 첨부
  - prototype.contructor가 sports 오브젝트 참조
5. prototype에 `__proto__` 오브젝트 첨부

```javascript
sports = {
  prototype: {
    constructor: sports
    __proto__: {}
  }
}
```
6. 빌트인 Object.prototype의 메소드로 Object 인스턴스를 생성하여 `prototype.__proto__`에 첨부
7. sports 오브젝트에 `__proto__` 오브젝트 첨부 -> `sports.__proto__` 구조가 된다.
8. 빌트인 Function.prototype의 메소드로 function 인스턴스를 생성해서 `sports.__proto__`에 첨부
9. sports 오브젝트 프로퍼티에 초기값 설정 - arguments, caller, length, name 프로퍼티

```javascript
sports = {
  arguments: {},
  caller: {},
  length: 0,
  name: "sports",
  prototype: {
    constructor: sports,
    __propto__: Object.prototype
  },
  __proto__: Function.prototype
}
```

- function 오브젝트에 prototype이 있으며 constuctor가 연결된다.
- __proto__가 연결되어 있으며 Object인스턴스가 연결된다.
- function 오브젝트에 __proto__가 있으며 Function 인스턴스가 연결된다.
- Array면 Array인스턴스가 연결되고 String이면 String 인스턴스가 연결된다.

## 1.3 함수 실행 환경 인식, 함수 실행 환경 저장, 내부 프로퍼티

함수 실행 환경 인식이 필요한 이유?  
- 함수가 호출되었을 때 실행될 환경을 알아야 실행 환경에 맞추어 실행할 수 있기 때문

실행 환경 설정 시점  
- 엔진이 function 키워드를 만나 function 오브젝트를 생성할 때

설정하는 것  
- 실행 영역(함수가 속한 스코프 - [렉시컬스코프](/javascript/lexical-scope/))
- 파라미터, 함수 코드 등

함수 실행 환경 저장  
- function 오브젝트를 생성하고 바로 실행하지 않으므로 함수가 호출 되었을때 사용할 수 있도록 환경을 저장

어디에?  
- 생성한 functio 오브젝트에 저장

인식한 환경을 function 오브젝트의 내부 프로퍼티에 설정 -> {name: value} 형태로

내부 프로퍼티란?  
- 엔진이 내부 처리에 사용하는 프로퍼티(외부에서 사용 불가)
- 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는 의사 프로퍼티(내부 엔진 설명용)
- 일부 내부 슬롯과 내부 메서드에 한해 간접적으로 접근할 수 있는 수단 제공
- `[[]]` 이중 대괄호로 감싼 형태. 예를 들어 모든 걕체는 `[[prototype]]`이라는 내부 프로퍼티(슬롯)을 가진다.

## 1.4 내부 프로퍼티 분류: 공통 내부 프로퍼티, 선택적 내부 프로퍼티

내부 프로퍼티 분류  
- 공통 프로퍼티
  - 모든 오브젝트에 공통으로 설정되는 프로퍼티
- 선택적 프로퍼티
  - 오브젝트에 따라 선택적으로 설정되는 프로퍼티
  - 해당되는 오브젝트에만 설정

자바스크립트 엔진은 프로퍼티를 생성할 때 `프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트`를 기본값으로 자동 정의한다.  
> 프로퍼티의 상태랑 프로퍼티의 값(value), 값의 갱신 가능 여부(writable), 열거 가능 여부(enumerable), 재정의 가능 여부(configurable)를 말한다. 

프로퍼티 어트리뷰트(상태)는 자바스크립트 엔진이 관리하는 내부상태 값인 내부 슬롯 `[[value]], [[writable]], [[enumerable]], [[configurable]]`이다. (내부 슬롯중 간접적으로 접근할 수 있는 일부)

따라서 프로퍼티 어트리뷰트에 직접 전근할 수 없지만 `Object.getOwnPropertyDescriptor`메서드를 사용하여 간접적으로 확인할 수 있다.

```javascript
const person = {
  name: 'ellin',
  age: 25
}

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'))
// {value: 'ellin', writable: true, enumerable: true, configurable: true}


// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptors(person))
/*
{
  age: { value: 25, writable: true, enumerable: true, configurable: true },
  name: { value: 'ellin', writable: true, enumerable: true, configurable: true }
}
*/
```

## 1.5 함수 정의 형태: 함수 정의, 함수 선언문, 함수 표현식

함수 정의
- 함수 코드가 실행될 수 있도록 JS 문법에 맞게 함수를 작성하는 것

함수 정의 형태
- 함수 선언문
- 함수 표현식
- new Function(param, body) -> param, body(함수코드)는 문자열로 작성

함수 선언문
- 엔진이 function 키워드를 만나면 function 오브젝트를 생성하고 함수 이름을 function 오브젝트 이름으로 사용

함수 표현식
- 식별자 위치의 함수이름은 생략 가능
- `var name = function abc(){}`에서 abc가 식별자

* 재귀함수
```javascript
var getBook = function instide(value) {
  if (value === 102) { // inside()가 무한으로 호출되지 않도록 빠져나가는 코드
    return value;
  };
  console.log(value);
  return inside(value + 1); // 2. getBook안에서 재귀함수로 본인 inside()를 호출
};
getBook(100); // 1. getBook을 호출
```

## 1.6 엔진 해석 방법: 엔진 해석 순서, 함수 코드 작성 형태, 엔진 처리 상태

- 자바스크립트는 스크립팅 언어, 스크립팅 언어는 위에서부터 한 줄씩 해석(환경 설정)하고 실행
- 그러나 자바스크립트는 중간에 있는 코드가 먼저 해석될 수 있다.
- 첫번째, 함수 선언문을 순서대로 해석 / 두번째,표현식을 순서대로 해석

## 1.7 함수 코드 해석 순서

1. 함수 선언문 해석
- function getBook(){};

2. 변수 초기화
- var title = undefined;
- var readBook = undefined;

3. 코드 실행
- var title = "JS책";
- var readBook = function(){};
- getBook();

### 함수 선언문 해석

```javascript
function book() {
  // debugger;
  var title = "JS책";
  function getBook() {
    return title;
  };
  var readBook = function() {
    getBook();
  };
  book();
}
```

1. 마지막 줄에서 book() 함수 호출
2. 엔진 제어가 book 함수의 첫 번째 줄로 이동
3. 함수 안에서 함수 선언문 찾음
  - 위에서 아래로 내려가며 하나씩 검색
4. function getBook(){}이 함수 선언문이므로 function 오브젝트 생성
5. 더 이상 함수 선언문이 없으면 다시 함수 첫번째 줄로 이동

- 변수 초기화
6. var title 변수에 undefined 할당 -> "JS책"은 할당하지 않는다.
7. function getBook(){}은 초기화를 이미 했으니 다시 하지 않는다.
8. var readBook = function(){};
  - readBook 변수에 undefined 할당
  - 함수 표현식은 변수를 선언만 함
9. 여기까지가 초기화 단계이고 다시 함수의 첫번째 줄로 이동

- 코드 실행
10. var title변수에 "JS책" 할당
11. function getBook(){return title}
  - 실행이 아닌 선언이므로 다음줄로 이동
12. var readBook = function(){};
  - function 오브젝트를 생성해서 readBook 변수에 할당
  - readBook이 function 오브젝트가 되므로 이제 readBook함수 호출 가능
13. getBoo() 함수 호출

## 1.8 호이스팅, 함수 앞에서 호출

함수 선언문은 초기화 단계에서 function 오브젝트를 생성하므로 어디에서도 함수 호출 가능하다. -> 호이스팅(Hoisting)  

```javascript
var result = book();
console.log(result); // 호이스팅
function book(){
    return "호이스팅";
};
console.log(book()); // 호이스팅
book = function() {
    return "함수 표현식"

};
console.log(book()); // 함수 표현식
```

### 함수 표현식과 함수 선언문 이행

```javascript
function test() {
  return "함수 선언문1";
};
console.log(test()); // 함수 선언문2
function test() {
  return "함수 선언문2";
};
```

```javascript
var test = function() {
  return "함수 표현식1";
};
console.log(test()); // 함수 표현식1
var test = function() {
  return "함수 표현식2";
};
```

```javascript
function test() {
  return "함수 선언문";
};
console.log(test()); // 함수 선언문
var test = function() {
  return "함수 표현식";
};
```

```javascript
var test = function() {
  return "함수 표현식";
};
console.log(test()); // 함수 표현식
function test() {
  return "함수 선언문";
};
```

## 1.9 오버로딩

오버로딩
- 함수 이름이 같더라도 파라미터 수 또는 값 타입이 다르면 각각 존재
- JS는 파라미터 수와 값 타입을 구분하지 않고 오버로딩을 지원하지 않는다.
- {name: value} 형태로 저장하기 때문 -> 이름(name)이 같으므로 값(value)이 대체된다.



