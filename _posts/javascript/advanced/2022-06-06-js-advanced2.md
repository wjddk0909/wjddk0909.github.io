--- 
title: "Argument" 
excerpt: "Argument 처리 메커니즘"
categories: 
    - js-advanced
tags: 
    - argument
toc: true
--- 
## 2.1 Argument 처리 메커니즘, Argument 처리 구조, 엔진의 파라미터 처리

```javascript
function get() {
  /**
    2. 함수내에서 우선 argument 오브젝트를 생성
    3. 파라미터를 {key: value}형태로 저장
    4. 파라미터 수 만틈 0부터 인덱스 부여해서 key로 사용
    5. 파라미터로 받은 값을 value에 설정
  */
  return arguments; 
};
console.log(get("A", "B")); // 1. 함수를 호출하면
  /**
    -> 결과 {0: A, 1: B}
    이 형태를 Array-like라고 함
    key값이 0부터 1씩 증가
    length 프로퍼티가 있어야 함
  */
```

## 2.2 엔진의 파라미터 처리

```javascript
var get = function(one) {
  return one;
};
get(77, 100);
```



