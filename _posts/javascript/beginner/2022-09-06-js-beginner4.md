--- 
title: "[JavaScript: Beginner] 4 - 함수(Function)" 
excerpt: "함수 구성 요소, 호출, return"
categories: 
    - js-beginner
tags: 
    - javascript
    - function
    - argument
    - parameter
toc: true
--- 
## 4.1 함수 구성 요소, 함수 이름 규칙과 관례

function
- 특정 기능을 처리하는 자바스크립트 코드 묶음

```javascript
function book() {
    var title = "js 책";

}
var point = function(one, two){
    var total = one + two;
    var bonus = total + 100;
}
```

파라미터
- 소괄호 안에 작성한것을 파라미터라고 함
- 매개 변수, 인자, 아규먼트로도 부름
- 파라미터 작성은 선택

함수이름 관례
- 동사로 시작
- 두번째 단어부터 명사 사용
- 명사의 첫 문자를 대문자로(CamelCase)
- 동사+명사 형태로 동적인 모습

## 4.2 함수 호출, return 문

- 함수는 호출되어야 실행
- 호출 받는 함수
    - 함수가 호출 되었을때 실행된느 함수
    - 함수라고 하면 호출받는 함수를 지칭
- 파라미터
    - 호출한 함수에서 넘겨준 값을 받음
    - (one, two) 처럼 소괄호() 안에 파라미터 이름 작성

함수호출
- setValue()형태로 호출
    - 함수 이름과 소괄호()를 작성
- 파라미터
    - 호출된 한수에 넘겨줄 값 작성
    - setValue(10, 20)처럼 소괄호() 안에 작성
    - JS에서 지원하는 타입 작성
    - 콤마(,)로 구분하여 다수 작성 가능

함수를 선언하고 -> 함수를 호출 -> 파라미터 넘겨주고 -> 파라미터값 설정하고 -> 함수코드 실행  

가독성을 위해서 선언을 먼저 작성 하고 아래에 실행문을 작성  

return
- 표현식의 평가 결과 반환
- return 또는 표현식을 작성하지 않으면 undefined 반환
- return 과 표현식을 한 줄에 작성

```javascript
function getPoint(){
    return 10 * 30;
};
var result = getPoint();
console.log(result);
// 실행순서
/** 
 * 1. getPoint() 함수 호출
 * 2. return의 오른쪽 표현식(10 * 30)dmf vudrk
 * 3. 평가 결과 300을 반환
 * 4. 300을 갖고 getPoint()로 돌아간다.
 * 5. 400을 result 변수에 할당
 * 실행결과 -> 300
 * **/
```

```javascript
function getPoint() {
    return
    10 * 30
}
var result = getPoint();
console.log(result);
/** 
 * 1. return 끝에 세미콜론을 자동으로 첨부
 * 2. return 문에서 return하므로 10 * 30을 수행하지 않음
 * 실행결과 -> undefined
 * **/
```

## 4.3 주석 작성의 궁극적인 목적

- 코드의 목적, 결곽 미치는 영향을 작성
- 다른 사람이 알 수 있도록 자세하게 작성
