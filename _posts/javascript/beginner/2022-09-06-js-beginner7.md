--- 
title: "[JavaScript: Beginner] 7 - Number 오브젝트" 
excerpt: "Number 오브젝트, 인스턴스 생성, 프리미티브 값, string 타입으로 변환, 지수 표기, 구정 소숫점 표기"
categories: 
    - js-beginner
tags: 
    - Number
    - primitive
toc: true
--- 
## 7.1 Number 오브젝트 개요, 프로퍼티 리스트

Number 오브젝트
- 숫자(123) 처리를 위한 오브젝트
- 즉, Number 오브젝트에 숫자처리를 위한 함수와 프로퍼티가 포함되어 있으며 함수를 호출하여 숫자 처리

## 7.2 Number 타입으로 변환, Number 상수

Number()  
- 파라미터: 변환할 값
- 반환: 변환한 값

- 파라미터 값을 Number 타입으로 변환
- 파라미터 값이 String 타입이라도 값이 숫자이면 변환 가능
- 숫자로 변환할 수 있으면 변환
- 파라미터 값을 작성하지 않으면 0을 반환

```javascript
console.log(Number("123") + 500);
console.log(Number("ABC"));
/**
 * 1. "123"이 String 타입이지만 값이 숫자이므로 숫자로 변환
 * 2. Number 타입이 되므로 500을 더하면 값이 연결되지 않고 더해집니다.
 * 3. Number 타입으로 변환할 수 없으면 NaN 반환
 * 실행결과
 * 623
 * NaN
 * **/

console.log(Number(0x14));
console.log(Nuber(true));
console.log(Nuber(null));
console.log(Nuber(undefined));
/**
 * 1. 16진수를 10진수로 변환
 * 2. true는 1로, false는 0으로 변환
 * 3. null은 0으로 변환
 * 4. undefined는 NaN로 변환
 * 실행결과
 * 20
 * 1
 * 0
 * NaN
 * **/
```

## 7.3 인스턴스 생성 방법/목적,new 연산자

new 연산자  
- 오브젝트로 인스턴스를 생성하여 반환
    - 원본을 복사하는 개념
    - new 연산자를 사용하여 인스턴스 생성
    - 코딩 관례로 첫 문자를 대문자로 작성

```javascript
var obj = new Number();
console.log(typeof obj);
/**
 * 1. 빌트인 Number 오브젝트로 인스턴스를 생성하여 반환
 * 2. 생성한 인스턴스 타입은 object
 * 실행결과
 * object
 * **/
```

- 인스턴스 생성 목적
    - 인스턴스마다 값을 갖기 위한 것
    - 원본을 복사해서 각각 나눠줌 -

```javascript
var oneObj = new Number("123");
console.log(oneObj.valueOf());
var twoObj = new Number("456");
console.log(twoObj.valueOf());
/**
 * 실행결과
 * 123
 * 456
 * **/
```

## 7.4 Number 인스턴스 생성, 인스턴스 형태

new Number()
- 빌트인 Number 오브젝트로 새로운 Number 인스턴스를 생성
- 인스턴스를 만드는 기준은 프로토타입에 있는 함수를 복사해서 연결해줌

```javascript
var numberObject = Number;
var obj = new Number("123");
/**
 * 1. 새로 생성한 Number 인스턴스가 obj에 할당
 * 2. obj를 펼쳐보면
 * 1) __protp__
 * 2) [[PrimitiveValue]]: 123 이 있다.
 * -> 나머지 다른 것은 들어오지 않음
 * -> 원본의 prototype에 있는 함수들이 들어옴
 * -> 즉, 프로토타입이라는 오브젝트를 기준으로해서 거기에 연결된것만 인스턴스에 할당해준다.
 * -> 나머지는 가려서 복사해주니까 나머지는 원본에 와서 봐라.
 * -> 그런데 복사해줄때 다른것과 혼동될 수 있으니 '__proto__'라는 이름의 오브젝트에 넣어서 줌
 * **/
```

## 7.5 프리미티브 값, 프리미티브 타입, 프리미티브 값 구하기

Primitive Value
- 언어에 있어 가장 낮은 단계의 값
- var book = "책"; -> 책은 더이상 분해, 전개 불가

프리미티브 타입
- Number, String, Boolean: 인스턴스 생성 가능
- Null, Undefined: 인스턴스 생성 불가
- Object는 프리미티브 값을 제공하지 않음

valueOf()
- Number 인스턴스의 프리미티브 값 반환 


