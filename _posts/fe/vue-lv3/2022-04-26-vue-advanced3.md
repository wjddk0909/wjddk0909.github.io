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

