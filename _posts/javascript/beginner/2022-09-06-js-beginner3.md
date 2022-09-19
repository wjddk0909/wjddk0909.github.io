--- 
title: "[JavaScript: Beginner] 3 - 문장(Statement)" 
excerpt: "if, while, do-while, for, break, continue, switch, try-catch, throw"
categories: 
    - js-beginner
tags: 
    - javascript
    - while
    - for
    - try
toc: true
--- 
## 3.1 debugger

- debugger 위치에서 실행 멈춤
    - 브라우저의 개발자 도구 창이 열려 있을 때만 멈춤
    - 열려 있지 않으면 멈추지 않음

```javascript
var sports = '스포츠';
debugger;
console.log(sports);
// debugger에서 실행이 멈춤 -> 다음라인으로 이동 시키면 console.log 찍음
```

## 3.2 while, do-while

while

- 형태: while (표현식) 문장
- 표현식의 평가 결과가 false가 될 때까지 문장을 반복하여 실행
- 반복이 종료되는 조건 필요

```javascript
var k = 1;
while (k < 3) {
    console.log(k);
    k++;
};
// 1
// 2
```

do-while

- 형태: do 문장 while (표현식)
- 처리 방법은 while 문과 같음
- 단, do 문을 먼저 실행

```javascript
var k = 0;
do {
    console.log("do:", k);
    k++;
} while (k < 3) {
    console.log("while:", k);
}
// do:0
// do:1
// do:2
// while:3

// 1. 먼저 do문을 실행
// 2. while문의 표현식을 평가
// 3. 평가 결과가 true면 do문의 블록을 다시 실행
// 4. 평가결과가 false면 while문의 블록 실행
```

## 3.3 for()

- 형태: for(초기값opt; 비교opt; 증감opt) 문장
- 2번째의 비교 표현식의 평가 결과가 true인 동안 문장을 반복 실행

```javascript
for(var k=0; k<2; k++>){
    console.log(k);
}
// 0
// 1

// 1. var k = 0;
// 2. k < 2; 비교표현식 평가
// 3. 평가 결과가 true면 for() 블록의 코드를 실행
// 4. 처음 반복은 k가 0이므로 true가 되어 블록의 console.log(k) 실행
// 5. k++ k변수값을 1 증가시킨다.
// 6. 다시 2번부터 5번까지 실행, k가 2가 되면 2번에서 false가 되며 for()문을 종료
```

1~50까지 반복하면서 홀수번째 값과 짝수번째 값을 누적하고 반복한 값을 누적한다.  
- 누적한 홀수번째 값을 출력
- 누적한 짝수번쨰 값을 출력
- 누적한 전체 값을 출력

```javascript
let num1 = 0;
let num2 = 0;
for(let num = 0; num <= 50; num++) {
    if(num%2===1){
        num1+=num
        console.log('현재 홀수의 합:'+num1+'\n');
    } else {
        num2+=num
        console.log('현재 짝수의 합:'+num2+'\n');
    }
}
console.log('총 홀수의 합:' + num1);
console.log('총 짝수의 합:' + num2);
console.log('총 합:' + (num1 + num2));
```

## 3.4 switch

- 형태: switch (표현식) {
    case 표현식: 문장 리스트 opt
    default: 문장 리스트 opt
};
- switch 표현식의 평가 값과 일치하는 case 문 수행
- break 사용
- 일치하는 case가 없으면 default 수행
- OR(||) 형태

```javascript
var exp = 1;
switch(exp){
    case 1:
        console.log(100);
    case 2:
        console.log(200);
};
// 100
// 200

// 1. switch(exp)에서 exp를 평가하여 값을 구하고 구한 값에 일치하는 case문을 수행
// 2. exp값이 1이므로 case 1:을 수행
// ** 주의**
// 3. case 1 아래의 모든 문장을 수행하므로 200이 출력된다.
// 4. 이를 방지하려면 break를 작성해야 한다.

var exp = 7, value;
switch(exp){
    case 1:
        value = 100;
    default:
        value = 700;
    case 2:
        value = 200;
};
console.log(value);
// 200

// 1. switch(exp)의 값이 7이므로 일치하는 case가 없으니 default: 코드를 실행
// 2. case 2: 도 실행(break문이 없으므로)

// OR(||) 형태
var exp = 3;
switch(exp) {
    case 2:
    case 3:
        console.log(100);
};
// 100
```

## 3.5 try-catch, throw

try-catch  
- try 문에서 예외 발생을 인식
- 예외가 발생하면 catch 블록 실행
- finally 블록은 예외 발생과 관게없이 실행

```javascript
var value;
try {
    value = ball;
} catch(error) {
    console.log('catch 실행');
} finally {
    console.log('finally 실행');
} // catch 실행 / finally 실행

// 1. try블록에서 ball을 value에 할당할 때 ball 변수가 없으므로 에러 발생
// 2. 에러가 발생하면 catch(error) 블록 실행, 파라미터 error에 JS의 Error 오브젝트 설정
// 3. error는 식별자로 임의의 이름 사용 가능
// 4. 에러가 발생할 가능성이 있으면 반드시 try-catch를 사용해야 한다.
```

서버에서 데이터를 가져올때는 반드시 try-catch문을 사용해야 한다.  

throw  

- 명시적으로 예외를 발생시킴
- 예외가 발생하면 catch 실행




