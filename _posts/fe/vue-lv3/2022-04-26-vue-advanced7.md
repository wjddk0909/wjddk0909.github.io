--- 
title: "7 - 리스트 아이템 컴포넌트 공통화" 
excerpt: "Vue news"
categories: 
    - vue-lv3
tags: 
    - vue
    - 공통화
toc: true
--- 

## 7.1 컴포넌트 공통화 리팩토링

- 각 view페이지 스타일링

>[diff check](https://github.com/wjddk0909/vue-news/commit/e889a7c6810e06fdee1f7a455cf05c01a41c13c5)

## 7.2 공통 컴포넌트 ListItem 제작 및 실습 안내

- components폴더에 ListItem.vue파일 생성 : 각각의 페이지 컴포넌트가 들고있는 데이터 패치와 스타일링등을 다 들고옴
- NewsView.vue에 ListItem.vue import해서 컴포넌트로 넣어줌

>[diff check](https://github.com/wjddk0909/vue-news/commit/998719e87d71186f1059ae6b391e714f202d703a)

## 7.3 공통 컴포넌트 구현(1) - 페이지별 데이터 분기

- 라우터에 있는 정보들로 분기처리 가능
- router/index.js에 각 라우트 속성에 name값 정의
- ListItem.vue에서 각 라우트 name으로 들어올때 actions의 비동기처리 실행

>[diff check](https://github.com/wjddk0909/vue-news/commit/da772aa9b27e420163229272518d9b2b8ca86297)

## 7.4 공통 컴포넌트 구현(2) - computed 속성

- computed 사용해서 각 페이지 api 뿌리기

>[diff check](https://github.com/wjddk0909/vue-news/commit/5f8d20a13ceea72f3e6cd31eda7ce6c88194e6f0)

# 7.5 공통 컴포넌트 구현(3) - template 속성과 v-if 디렉티브 활용

- `<template v-if=""></template>` 가상의 태그를 넣고 태그가 vue 내부적으로 분기처리를 해서 v-if안에 해당되는 조건이 있으면 뿌려줌
- 태그 안에 바로 v-if, v-else 사용 가능

>[diff check](https://github.com/wjddk0909/vue-news/commit/c96efb9243421ea7d663f605399b0d2b0e2124b2)