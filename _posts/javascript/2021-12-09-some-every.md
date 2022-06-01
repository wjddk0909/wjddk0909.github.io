--- 
title: "some vs every / foreach vs map 반복문 차이" 
excerpt: "반복문의 차이"
categories: 
    - javascript
tags: 
    - some
    - every
    - foreach
    - map
--- 
## 반복문의 차이점

- some : 하나라도 true면 true
- every : 모두 true여야 true

다른 메소드와의 차이는? 조건에 충족하면 반복을 멈춘다.  
즉, 최단시간에 최대 효과를 추구 (필요없는 반복을 하지 않음)

- foreach : 반환값이 없다. (순환만)
- map : 배열을 반환 (새배열 생성 가능)

+ filter는 map과 비슷한데, 대신 조건을 걸 수 있다. (조건에 부합하는 것만 배열로 반환)