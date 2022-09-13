--- 
title: "[JavaScript: Beginner] 2 - 연산자(Operator)" 
excerpt: "연산자, 표현식"
categories: 
    - js-beginner
tags: 
    - javascript
    - operator
toc: true
--- 
## 2.1 연산자, 표현식

표현식(Expression) 형태  
- 1 + 2
- var total = 1 + 2;
- var value = total / (2 + 3);
- '표현식을 평가' 한다고 한다.
- 표현식을 평가하면 결과가 반환되며 이를 `평가결과` 라고 한다.

## 2.2 숫자로 변환
- 연산하기 전에 우선 숫자로 변환
- 변환된 값으로 연산
    - Undefined: NaN
    - Null: +0
    - Boolean: true:1, false:0
    - Number: 변환 전,후 같음
    - String: 값이 숫자이면 숫자로 연산 / 그러나 더하기는 연결한다.

```javascript
var value

console.log(10 + value) // NaN
console.log(10 + null) // 10
console.log(10 + true) // 11
console.log(10 + false) // 10

console.log(10 + '123') // 10123
console.log(123 - '23') // 100
```

## 2.3 관계연산자
- 부등호 >
- 양쪽이 Number타입일 때
    - 왼쪽이 오른쪽 보다 크면 true 반환 아니면 false 반환
- String 타입 비교
    - 한 쪽이 String 타입이면 false
    - 양쪽이 모두 String 타입이면 유니코드 사전 순서로 비교
    - 문자 하나씩 비교

## 2.4 논리 연산자
- 논리 OR 연산자
- 표현식의 평가 결과가 하나라도 true이면 true, 아니면 false
- 왼쪽 결과가 true이면 오른쪽은 비교하지 않음

```javascript
var value, zero = 0, two = 2;
console.log(value || zero || two) // 2
// 1. value 변수값이 undefinde이므로 false
// 2. zero 변수값이 0이므로 false
// 3. two 변수값이 2이므로 true가 되며 two 변수값을 반환
// 4. true가 아니라 true가 되는 변수값 반환

var value, zero = 0;
console.log(zero || value); // undefined
// 1. 마지막까지 비교했는데 모두가 false면 false가 아닌 마지막 변수값 반환

var one = 1;
console.log(one === 1 || two === 2); // true
// 1. 왼쪽의 결과가 true이므로 true가 반환
// 2. 왼쪽 비교 결과가 true면 오른쪽은 비교하지 않음
// 3. 오른쪽을 비교하면 two 변수가 없으므로 에러 발생
```

- 논리 AND 연산자
- 표현식의 평가 결과가 모두 true이면 true, 아니면 false
- 왼쪽 결과가 false이면 오른쪽은 비교하지 않음

```javascript
var one = 1, two = 2;
console.log(one && two); // 2
// 1. one 변수값이 1이므로 true, 오른쪽 비교
// 2. two 변수값이 2이므로 true, 모두가 true이므로 마지막 2를 반환

var one = 1, zero = 0;
console.log(one && zero && nine); // 0;
// 1. one 변수값이 1이므로 true, 오른쪽 비교
// 2. zero 변수값이 0이므로 false, 오른쪽 비교하지 않고 zero 변수값 0 반환
// 3. nine을 비교하면 nine변수가 없으므로 에러 발생
```

## 2.5 조건연산자, 연산자 우선순위
- exp ? exp-1 : exp-2
    - 삼항연산자라고도 함
- exp 위치의 표현식을 먼저 평가함
    - true면 exp-1의 결과 반환
    - false면 exp-2의 결과 반환

```javascript
console.log(1 === 1 ? "같음" : "다름"); // 같음
console.log(1 === '1' ? "같음" : "다름"); // 다름
```
