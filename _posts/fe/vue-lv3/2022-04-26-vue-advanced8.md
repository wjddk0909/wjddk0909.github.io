--- 
title: "8 - 사용자 프로필 컴포넌트 공통화" 
excerpt: "Vue news"
categories: 
    - vue-lv3
tags: 
    - vue
    - 공통화
toc: true
--- 

## 8.1 사용자 프로필 컴포넌트 소개 및 등록

- 사용자 정보 공통 컴포넌트

>[diff check](https://github.com/wjddk0909/vue-news/commit/14deeeb5aea1f060678ff92447969656daec4c08)

## 8.2 사용자 컴포넌트 데이터 흐름 처리 1

- UserView에서 UserProfile로 데이터 넘기기
- vuex사용해서 UserProfile에서 바로 접근

>[diff check](https://github.com/wjddk0909/vue-news/commit/1407cba586231ba50ce7d5c08d4e54a5b93ef2cb)

## 8.3 사용자 컴포넌트 데이터 흐름 처리 2

- UserView.vue에서 UserProfile.vue로 `:info="userInfo"`로 데이터를 넘기고
- UserProfile.vue에서 `props: { info: Object }`로 데이터 받기

>[diff check](https://github.com/wjddk0909/vue-news/commit/97795a2c137c7faac6513465516d5cf2122eb93a)

## 8.4 2가지 데이터 처리 흐름 비교

1. UserProfile에서 computed로 접근  
UserView -> actions에서 api 호출해서 받아오기 -> mutations 호출 -> state변경 -> UserProfile에서 computed로 접근해서 데이터 넘김

2. UserView에서 props로 전달  
UserView -> actions에서 api 호출해서 받아오기 -> mutations 호출 -> state변경 -> UserView에서 props로 UserProfile로 내려줌

## 8.5 slot을 이용한 사용자 프로필 컴포넌트 구현

- slot: 하위컴포넌트에서 미완성으로 넣어둔 부분을 상위에서 하위컴포넌트를 등록할때 그부분을 채워줌

>[diff check](https://github.com/wjddk0909/vue-news/commit/aa25c1db22d662283737d105c1b3a0dbf119e5b8)

## 8.6 코드 정리

>[diff check](https://github.com/wjddk0909/vue-news/commit/03720f08f4ec3c15d1a334a959538f07db14971c)