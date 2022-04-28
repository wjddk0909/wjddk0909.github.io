--- 
title: "3 - 라우터 기본" 
excerpt: "Todo App"
categories: 
    - vue-lv3
tags: 
    - vue
    - router
toc: true
--- 

## 3.1 라우터 설치 및 라우터 구현

`yarn add vue-router@3.2.0`로 설치하기(vue2는 vue-router3 버전사용, vue3는 vue-router4 버전사용)

package.json의 dependencies에 추가됨(배포할때도 포함 되어야 하는 라이브러리들)  

라우터 설정을 main.js에 할 수도 있지만, main.js는 기본적으로 애플리케이션의 설정들(플러그인, 라이브러리, 구조들을 파악)의 청사진으로 보면 됨  
그래서 라우터는 따로 폴더를 빼줌  

## 3.2 router-view를 이용한 라우팅 컴포넌트 표시

App.vue에 `<router-view></router-view>`로 라우터 컴포넌트 보여줌  

>[diff check](https://github.com/wjddk0909/vue-news/commit/7e9afa13197fa14cfbffc011aa9efd13429f1053)

## 3.3 redirect 속성과 router-link

첫 화면에서 빈화면이 나오는데 redirect속성으로 원하는 라우터로 연결 가능  
라우터 이동 링크 버튼도 추가  

컴포넌트 등록할때는 스크립트단에서는 단어마다 첫글자 대문자로 연결  
컴포넌트를 태그에서 등록할때는 단어사이에 하이픈으로 연결

>[diff check](https://github.com/wjddk0909/vue-news/commit/d0de793092e5dae58d78f1027b9885d3b5ca22a6)