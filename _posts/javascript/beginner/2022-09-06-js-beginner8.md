--- 
title: "[JavaScript: Beginner] 8 - String 오브젝트" 
excerpt: "String 오브젝트, 문자열 변환, length, 화이트스페이스, __proto__, 문자열 연결, 추출, 대소문자 변환, Unicode관련 함수"
categories: 
    - js-beginner
tags: 
    - String
    - primitive
    - length
    - __proto__
toc: true
--- 
## 8.1 String 오브젝트 개요, 문자열 연결 방법, 프로퍼티 리스트

String 오브젝트
- 문자 처리를 위한 오브젝트

문자열 연결 방법
- 한 줄에서 연결

## 8.2 문자열로 변환, 프리미티브 값 구하기

String()
- 파라미터 값을 String 타입으로 변환하여 반환
    - 값을 작성하지 않으면 빈문자열 반환

```javascript
var value = String(123);
console.log(value); // 123
console.log(typeof value); // string
console.log(typeof ("" + 123)); // string
```

new String()
- String 인스턴스를 생성하여 반환
- 파라미터 값을 String 타입으로 변환

```javascript
var obj = new String(123);
console.log(typeof obj) // object
```

valueOf()
- String 인스턴스의 프리미티브 값 반환

```javascript
var obj = new String(123);
console.log(obj.valueOf()); // 123
```

## 8.3 length 프로퍼티, length 값 반환 논리

length 프로퍼티
- 문자 수 반환

```javascript
var value = "abc";
for (var k = 0; k < value.length; k++) {
    console.log(value[k])
}
// a
// b
// c
```

## 8.4 화이트 스페이스 삭제

trim()
- 문자열 앞뒤의 화이트 스페이스 삭제

```javascript
var value = "  abcd  ";
console.log(value.length); // 8
console.log(value.trim().length); // 4 
// .trim().length 메소드 체인
```

## 8.5 함수 호출 구조, __proto__ 구조

toString()
- data 위치의 값을 String 타입으로 변환

```javascript
var value = 123;
var result = value.toString();
console.log(typeof result);
/**
 * 1. 123을 String 타입으로 변환하므로 string이 출력된다.
 * 2. 그런데 이 코드가 적절하진 않다.
 * **/
```

- "123".toString();
- String 타입을 String 타입으로 변환? 의미가 있는가?
- toString() 함수가 필요한 이유?
    - __proto__:
        toString();
        __proto__
            toString();
```javascript
var obj = String; // 빌트인 String 오브젝트를 obj에 할당
var instance = new String("123");
/**
 * 1. obj를 전개해보면
 * 2. toString()이 없다.
 * 3. prototype안에 있다.
 * 4. instance를 전개해보면
 * 5. __proto__안에 toString()이 있다.
 * **/
```
- 그래서 대부분의 빌트인 오브젝트에 toString()과 valueOf()가 있다.

## 8.6 인덱스로 문자열 처리

charAt()
- 인덱스의 문자를 반환