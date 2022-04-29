--- 
title: "2 - 프로젝트 셋업" 
excerpt: "Vue news"
categories: 
    - vue-lv3
tags: 
    - vue
toc: true
--- 

## 2.1 Vue CLI로 프로젝트 생성 및 ESLint 로그 확인

`vue create vue-news`로 프로젝트 생성

`Vue 2`선택후 완료 되면 폴더 경로 들어가서 서버 실행하기

## 2.2 ESLint 도구 소개와 사용해야 하는 이유?

ESLint : javascript 문법 검사기(보조도구)
javascript에서 ;(세미콜론)을 찍지 않더라도 자바스크립트 해석기에서는 마지막에 세미콜론을 넣어줌  
여기서 ESLint는 세미콜론을 찍게 유도함  
예를들어서  

```javascript
// 이런식이면 문제 없지만
if(a === 10){
  console.log('a는 10');
}

// 자바스크립트 해석기가 어디서 세미콜론을 찍어야 할지 모를때
if(a === 10) console.log('a는 10') b() c()
```

