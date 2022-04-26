--- 
title: "1 - 소개 및 설계" 
excerpt: "Todo App"
categories: 
    - vue-lv3
tags: 
    - vue
toc: true
--- 

## 1.1 소개 및 설계

해커뉴스 사이트 제작  
[해커뉴스 공식사이트](https://news.ycombinator.com/)

API를 호출해서 화면에 표시하고 링크 연결하거나 정보등 페이지로 넘어가게 제작
[해커뉴스 API 문서](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)

## 1.2 애플리케이션 라우터 설계

사이트 설계 : 기획서를 토대로 컴포넌트 기반으로 설계를 해야함
news, ask, jobs 라는 리스트를 표시하는 페이지 3개를 라우터로 설계  
각 페이지에서 리스트를 클릭했을때 넘어가는 뷰 페이지와 사용자 정보를 보여주는 페이지까지 총 다섯개

## 1.3 비공개 리포지토리 소개 및 뷰 cli 설명

`vue create 프로젝트폴더이름`

## 1.4 Vue CLI 2.x vs Vue CLI 3.x

[vue CLI 사이트](https://cli.vuejs.org/)
[webpack-simple 템플릿 깃헙 주소](https://github.com/vuejs-templates/webpack-simple)

명령어
- 2.x : vue init '프로젝트 템플릿 이름' '파일위치' `vue init webpack-simple new-project`
- 3.x : vue create '프로젝트 이름' `vue create new-project`

웹팩 설정 파일
- 2.x : 노출 O
- 3.x : 노출 X
웹팩이 복잡하기 때문에 그 설정 파일을 사용자들에게 노출시키지않고 라이브러리 내부에서 알아서 처리하겠다 라는 것.  
2점대에서 웹팩에 대한 이해도가 높으면 어떤걸 설정해야될 때, `webpack.config.js`에 바로 옵션들을 추가하는식으로 했지만,  
3점대 이상에서는 웹팩 설정을 추가해야될 때, 별도의 내용들을 추가해야됨.
그 내용들을 vue cli 사이트 가서 `webpack`을 검색해보면 추가 설정 관련 설명이 나옴
```javascript
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}
```
위와 같이 `configureWebpack`이라는 설정들을 추가해서 `plugins`라던지 기타 설정들을 추가할 수 있다.

프로젝트 구성
- 2.x : 깃헙의 템플릿 다운로드 
    - [vuejs-templates](https://github.com/vuejs-templates/)
    - [vuejs-templates/webpack-simple](https://github.com/vuejs-templates/webpack-simple)
템플릿 다운로드를 통해 정해진 템플릿을 사용한다.  

- 3.x : 플러그인 기반으로 기능 추가
vue plugin이라는 강력한 기능을 사용  
이 기능을 이용해서 원하는 기능들 (라우터, Vuex ...) 플러그인 형식으로 추가할 수 있도록 뷰에서 제공.

ES6 이해도
- 2.x : 필요 X
- 3.x : 필요 O

