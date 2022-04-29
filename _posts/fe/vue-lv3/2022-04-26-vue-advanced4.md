--- 
title: "4 - API 구현" 
excerpt: "Vue news"
categories: 
    - vue-lv3
tags: 
    - vue
    - api
    - axios
    - arrow function
    - 비동기처리
toc: true
--- 

## 4.1 axios를 이용한 api 호출

[해커뉴스 api](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

views 폴더에는 페이지 라우팅에 관련된 정보들만 들어가는게 좋다.  
설계가 바뀌거나 할때 유연하게 대처하려면 데이터를 불러온다던지 비즈니스 로직들은 별도의 컴포넌트로 등록하는게 좋다.  

우선 views안에 바로 넣고 나중에 수정할 예정

>[diff check](https://github.com/wjddk0909/vue-news/commit/1e9ad6983ef8359e0aed961f6bdd567be08ebb33)

## 4.2 axios의 api 함수 구조화 방법 및 실습 안내

라이브러리를 각각의 파일에서 불러와야하고, 공통된 로직들이 계속 파일마다 불러와야 하는데 공통화시켜서 사용  

