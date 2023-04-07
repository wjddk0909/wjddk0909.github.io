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

## 3.3 Global 스코프

## 3.4 스코프 바인딩, 정적/동적 바인딩, 바인딩 시점의 중요성




