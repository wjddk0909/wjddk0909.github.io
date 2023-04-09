--- 
title: "스코프" 
excerpt: "스코프 목적/설정, Global 오브젝트 특징, Global 스코프, 스코프 바인딩, 정적/동적 바인딩, 바인딩 시점"
categories: 
    - js-advanced
tags: 
    - scope
toc: true
--- 
## 3.1 스코프 목적, 스코프 설정

스코프의 목적  
- 범위를 제한하여 식별자를 해결
- 스코프 영역에서 식별자 해결

식별자 해결  
- 변수이름, 함수이름 찾는것
- 이름을 찾게 되면 값을 구할 수 있음
- 크게는 이름을 설정하는 것도 식별자 해결

스코프 설정  
1. 엔진이 function book(){}을 만나면
2. function 오브젝트를 생성하고
3. 스코프를 설정
  - 생성한 function 오브젝트의 `[[Scope]]`에 스코프를 설정
  - function 오브젝트를 만드는 시점에 스코프를 결정하는 것을 `정적스코프`라고 함
  - 함수를 호출할때 스코프를 결정하는 것을 `동적스코프`라고 함
  - 정적스코프가 효율성이 좋음
4. 정적스코프가 JS의 스코프 설정 메커니즘

```javascript
function book() {
  var point = 123;
  funtion get() {
    console.log(point);
  };
  get();
};
boo();
```

5. 마지막 줄에서 book() 함수를 호출
6. 엔진 컨트롤이 book 함수 안으로 이동
7. function get(){}을 만나게 되며 function 오브젝트를 생성
8. 스코프를 설정
  - function 오브젝트의 `[[Scope]]`에 스코프를 설정 > 이때 스코프 결정
9. get() 함수 호출

## 3.2 Global 오브젝트, 글로벌 오브젝트 특징

`var value = 100;`  
100을 value 변수에 할당하는 것은 value로 검색하여 값을 사용하기 위한 것  
변수를 싸고 있는 오브젝트가 없으면 글로벌 오브젝트에 설정된다.  

```javascript
var value = 100;
function book() {
  var point = 200;
  return value;
}
```

- JS소스 파일 전체에서 글로벌 오브젝트는 하나만 있음
- new 연산자로 인스턴스 생성 불가
- `<scirpt>`에 작성된 모든 코드

## 3.3 Global 스코프

- 글로벌 오브젝트가 글로벌 스코프
- 오브젝트는 개발자 관점으로 오브젝트에 함수와 변수를 작성
- 스코프는 식별자 해결을 위한 것으로 엔진 관점
- 글로벌 스코프는 최상위 스코프 > 함수에서 보면 최종 스코프

```javascript
var value = 100;
function book() {
  return value;
}
book();
```
- function boo(){코드}에서 book함수가 속한 오브젝트가 없으므로 book함수가 글로벌 오브젝트에 설정 > 글로벌 함수
- var value = 100;
- value 변수가 글로벌 오브젝트에 설정 > 글로벌 변수
- 글로벌 오브젝트에 설정된다는 것은 오브젝트 관점
- 글로벌 오브젝트는 개발자 관점에서 함수와 변수로 접근
- 글로벌 스코프는 식별자 해결을 위해서 엔진 관점에서 접근
- 스코프와 식별자 해결 관점은 Scope가 글로벌 스코프라는 것
- book() 함수를 호출하려면 "오브젝트.book()" 형태로 작성해야 하는데 오브젝트를 작성하지 않고 함수만 작성
- 오브젝트를 작성하지 않으면 글로벌 오브젝트를 "오브젝트"로 간주하여 글로벌 오브젝트의 book() 함수를 호출
- 즉, 글로벌 스코프에서 book을 찾아 호출

## 3.4 스코프 바인딩, 정적/동적 바인딩, 바인딩 시점의 중요성

바인딩  
- 구조적으로 결속된 상태로 만드는 것
- 대상: 프로퍼팅 이름(프로퍼티란? 변수 이름과 값, 함수 이름과 값)
- 바인딩 목적 > 스코프 설정, 식별자 해결
- 바인딩 시점 구분
  - 정적 바인딩(Lexical, Static Binding)
  - 동적 바인딩(Dynamic Binding)

정적바인딩  
- 정적(렉시컬) 바인딩
- 초기화 단계에서 바인딩
- 함수 선언문 이름을 바인딩
- 표현식(변수, 함수) 이름을 바인딩
- JS는 대부분 정적 바인딩

동적바인딩  
- 동적(다이나믹) 바인딩
- 실행할 때 바인딩
- eval() 함수, with 문

바인딩 시점의 중요성  
- 바인딩 할 때 스코프가 결정됨
- function 오브젝트 생성 시점에 스코프 결정
- 스코프를 function 오브젝트의 `[[Scope]]`에 설정
- 스코프가 변경되지 않음
- 함수 안의 모든 함수의 스코프가 같음
```javascript
function book() {
  var point = 100;
  function add() {point += 200;};
  function get() {return point;};
}
```

스코프 바인딩  
```javascript
function book() {
  var point = 100;
  function add(param) {
    point += param;
  }
  var get = function() {
    retunr point;
  }
  add(200);
  console.log(get());
}
book(); // 300
```

1. 마지막 줄에서 book() 함수 호출
  - 초기화 단계에서 함수와 변수 이름을 `선언적 환경 레코드에 바인딩`
2. function add(param){...}
  - function 오브젝트 생성
  - add 함수가 속한 스코프(영역)를 add 오브젝트의 `[[Scope]]`에 설정
  - add 이름을 레코드에 바인딩
3. var point = 100;
  - point 이름을 레코드에 바인딩
4. var get = function(){...}
  - get 이름을 레코드에 바인딩
5. 바인딩으로 함수와 변수의 식별자가 해결됨

`코드실행`

6. var point = 100;
  - point 변수에 100 할당
7. var get = function(){...}
  - function 오브젝트 생성, get에 할당
  - get 함수가 속한 스코프(영역)를 get 오브젝트의 `[[Scope]]`에 설정

`add() 함수 호출` 

8. add(200) 함수 호출
9. point += param;
  - 먼저 레코드에서 point 이름을 찾음
  - point가 없으므로 다시 검색
  - add 오브젝트의 `[[Scope]]`를 스코프로 사용
  - book 오브젝트가 스코프이며 point가 있으므로 값을 더함

`get() 함수 호출`

10. get() 함수를 호출
11. return point;
  - 레코드에 point가 없으므로 다시 검색
  - get 오브젝트의 `[[Scope]]`를 스코프로 사용
  - book 오브젝트가 스코프
  - point가 있으므로 값을 반환한다.

동적 바인딩  
- 코드를 실행 할때마다 바인딩
- with문(use strict 모드에서 에러 발생), eval() 함수(보안에 문제 있음) > 사용하지 않는것이 좋다.



