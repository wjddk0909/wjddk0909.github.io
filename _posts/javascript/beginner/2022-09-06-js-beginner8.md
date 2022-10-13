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
- 문자열 길이보다 인덱스가 크면 빈 문자열 반환
- 일반적으로 존재하지 않으면 undefined 반환

```javascript
var value = "sports";
console.log(value.cartAt(1)); // p
console.log(value[1]) // p

var value1 = "sports";
conosle.log(value.cahrtAt(12)); // ""

var value2 = "sports";
console.log(value[12]); // undefined
/**
 * 1. value[12]에서 12번째 인덱스가 없으니 undefined 반환
 * 2. chartAt(12)에서 빈 문자열을 반환하는 것과는 차이가 있음
 * 3. 개념적으로 undefined 반환이 더 적절
 * - undefined는 시맨틱적으로 인덱스 번째가 없다는 위앙스가 강함
 * **/
```

indexOf()
- data위치의 문자열에서 파라미터의 문자와 같은 첫번째 인덱스를 반환
- 검색 기준
    - 왼쪼겡서 오른쪽으로 검색
    - 두번째 파라미터를 작성하면 두번째에 작성한 인덱스부터 검색
    - 같은 문자가 없으면 -1 반환

```javascript
var value = "123123";
console.log(value.indexOf(2)); // 1
console.log(value.indexOf(23)); // 1
/**
 * 1. "123123"에서 2가 두개지만 처음 인덱스를 반환하므로 1을 반환
 * 2. 값을 구하게 되면 더이상 값을 구하지 않음
 * 3, indexOf(23)에서 23이 존재하며 2가 검색된 인덱스를 반환
 * **/

var value1 = "123123";
conosle.log(value.indexOf(2, 3)); // 4
/**
 * 1. indexOf(2, 3)에서 두번째 파라미터 3은 3번 인덱스부터 2를 검색하라는 뜻
 * 2. 3번 인덱스부터 2를 검색해서 4 반환
 * **/

var value2 = "123123";
console.log(value.indexOf(15)); // -1

var value3 = "123123";
console.log(value.indexOf(2, -1)); // 1
console.log(value.indexOf(2, 9)); // -1
console.log(value.indexOf(2, "A")); // 1
/**
 * 1. 두번째 파라미터 값이 0보다 작으면 처음부터 검색
 * 2. 두번째 파라미터 값이 length보다 크면 -1 반환
 * 3. 두번째 파라미터가 NaN이면 처음부터 검색
 * **/
```

lastIndexOf()
- data 위치의 문자열에서 파라미터의 문자와 같은 인덱스를 반환
- 단, 뒤에서 앞으로 검색
- 검색기준
    - 두번쨰 파라미터를 작성하면 작성한 인덱스부터 검색
    - 같은 문자가 없으면 -1 반환

```javascript
var value = "123123";
console.log(value.lastIndexOf(2)); // 4

var value1 = "123123";
console.log(value.lastIndexOf(1, 4)); // 3
console.log(value.lastIndexOf(2, -1)); // -1
/**
 * 1. 앞에서부터 4번째 인덱스부터 뒤에서 1을 검색
 * 2. 두번째 파라미터가 0보다 작으면 -1 반환
 * **/
```