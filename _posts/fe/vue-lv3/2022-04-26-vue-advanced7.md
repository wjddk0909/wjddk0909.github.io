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