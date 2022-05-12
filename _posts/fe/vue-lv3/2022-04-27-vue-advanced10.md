--- 
title: "10 - 데이터 호출과 UX" 
excerpt: "Vue news"
categories: 
    - vue-lv3
tags: 
    - vue
toc: true
--- 

## 10.1 UX를 고려한 데이터 호출 시점

데이터 호출 시점
1. 컴포넌트 라이프 사이클 훅
    - created : 인스턴스(컴포넌트)가 생성되자 마자 호출되는 로직들, 화면에 내용들이 붙은 상태는 아님

2. 라우터 네비게이션 가드
    - 라우터로 특정 url에 접근할때 그 전에 동작들을 정의하는 속성(함수)

네비게이션가드가 라이프사이클훅 보다 먼저 호출 됨  
컴포넌트가 생성되고 나서 데이터를 호출 할건지 라우팅 상태에서 호출할건지에 따라 선택

[created 라이프 사이클 훅 API 문서](https://vuejs.org/api/#created)  
[네비게이션 가드 블로그](https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/)  
[네비게이션 가드 뷰 라우터 공식 문서](uide/advanced/navigation-guards.html)

## 10.2 라이프 사이클 훅을 이용한 데이터 호출 방법의 문제와 비동기 처리 코드 수정

actions.js
- FETCH_LIST에서 fetchList api 호출에 return 해줘야함
- return을 해줘야 fetchList에 대한 결과가 프로미스로 체이닝 돼서 FETCH_LIST가 ListMixin에서 .then이 될 수 있게 함

>[diff check](https://github.com/wjddk0909/vue-news/commit/c63b150611f9b11ae138b15379a4ab607e4c5370)

## 10.3 라우터 네비게이션을 이용한 데이터 호출 방법

beforeEnter
```javascript
beforeEnter: (to, from, next) => {
    console.log('to', to);
    console.log('from', from);
    console.log('next', next);
    next();
}
```
- to : 이동할 URL의 라우팅 정보
- from : 현재위치의 URL 라우팅 정보
- next : function, next();를 호출 해줘야지 이동할 URL로 이동할 수 있음

>[diff check](https://github.com/wjddk0909/vue-news/commit/4b55dc15e00750fd255de63654429df7f9977d40)

## 10.4 라우터 네비게이션 가드 실습 및 스피너 종료 시점 변경

- 데이터를 불러오고 나서도 로딩스피너가 바로 꺼지지 않음
- `LinstMixin.js`에서 데이터 호출 로직을 `router/index.js`로 옮기기
- 그리고 `bus.$emit('end:spinner');`를 뷰페이지의 `mounted()`에 넣어줘서 마운트 되면 꺼지도록 수정

>[diff check](https://github.com/wjddk0909/vue-news/commit/b2e68117af805ba069554820edafe768c89abb75)

- 각 뷰페이지에 mounted에서 end:spinner가 중복되므로 이것을 다시 재활용 가능
- `LinstMixin.js`을 다시 이용해서 데이터 호출 로직은 지우고 그안에 mounted()를 넣어서 재활용

>[diff check](https://github.com/wjddk0909/vue-news/commit/8c8fb45ca96ff38af31815fb089ea74931b111b7)