--- 
title: "[JavaScript: Beginner] 1 - 기본문법" 
excerpt: "변수, 주석, 정수, 실수, 상수, 진수, 데이터타입"
categories: 
    - js-beginner
tags: 
    - javascript
    - type
toc: true
--- 
## 1.1 변수

- variable : 값을 저장하는 영역
- 변수에 저장된 값의 재사용

변수 선언 방법  
> var book = '책'  
> var book = '책', point = 123;  

## 1.2 상수, 진수

상수  
- 값을 변경할 수 없는 값
- 상수 변수: 상수가 설정된 변수
  - js는 변수의 값을 변경할 수 있으므로 상수 변수는 선언적 의미
- 코딩 관례로 영문 대문자 사용
- var ONE = 1;
- 상수로 사용한다는 시맨틱 선언

## 1.3 데이터 타입(Data Type)

- 숫자 타입: 123
- 문자 타입: 'sports'

typeof 연산자  
- 데이터(값) 타입 반환
- typeof value에 데이터를 작성

```javascript
var point = 123;
console.log(typeof point); // number

var book = '책';
console.log(typeof book); // string
```

키워드(Keywork)
- 특별한 기능을 가진 단어  

데이터 타입(자료형)  
- 데이터는 타입을 가짐
- js는 데이터를 기준으로 타입을 결정
- 타입을 먼저 선언하고 타입에 맞는 데이터를 할당하지 않음  

## 1.4 Number 타입, String 타입

Number타입  
- Number타입의 특수한 3개 값
  - NaN: Not-a-Number
  - Infinity 양수 무한대
  - -Infinity 음수 무한대

```javascript
var point = 1 * 'A';
console.log(point); // NaN
```

## 1.5 Undefined, Null 타입

Undefined(대문자)타입  
- 값: undifined(소문자)

변수의 디폴트 값  
- var point;
- 변수를 선언만 한 것으로 undefined가 초기값으로 설정
- 변수에 값을 할당하지 않은 것을 나타내는 시맨틱

변수에 undefined 할당 가능

Null(대문자)타입  
- 값: null(소문자)

null과 undefined 차이  
- undefined는 단지 변수만 선언
- null을 할당해야 값이 null이 됨
- 의도적으로 값을 할당한 것으로 코드를 수행한 것이 된다.

## 1.6 Boolean 타입, Object 타입

Object 형태  
- {name: value} 형태  

프로퍼티(Property)  
- name과 value 하나를 지칭 
- Object는 프로퍼티 집합  

