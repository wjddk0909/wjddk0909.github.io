--- 
title: "5 - 스토어 구현" 
excerpt: "Vue news"
categories: 
    - vue-lv3
tags: 
    - vue
    - store
    - vuex
toc: true
--- 

## 5.1 Vuex 설치 및 Vuex가 적용된 앱 구조 소개

- vuex를 적용해서 api에서 바로 불러오는게 아니고 vuex의 state에 api를 담아서 화면에 표시
- `yarn add vuex@3.4.0`로 vuex 라이브러리 설치

## 5.2 Vuex 모듈화 및 state 적용

- store폴더 생성후 그안에 작성  
- vuex는 플러그인 형태로 제공 되기 때문에 `Vue.use(Vuex);`로 사용
- vuex는 상태관리 라이브러리이다. 상태라는 것은 여러 컴포넌트간에 공유되는 데이터 속성
- NewsView가 users라는 데이터를 다른 컴포넌트에 아직 공유하고 있지 않은 상태인데 만약 다른 컴포넌트에서 users를 뿌려줘야 하는 상황이라면 공유해서 사용해야 한다.

>[diff check](https://github.com/wjddk0909/vue-news/commit/2051c3290d123a0ba6087c52152b824b42d17b83)

## 5.3 NewsView에 actions와 mutations 적용

- 비동기 호출은 전부 action에서 하고 받아온 데이터를 mutations를 통해서 state에 넣어주게 구분되어 있다.  
- actions에서 비동기 호출을 하고 첫번째 인자로 context를 주면 mutations에 접근 할 수 있다.
- context.commit('SET_NEWS', response.data)
- mutations에서는 첫번째 인자로 state를 넣어주고 두번째 인자에는 actions에서 넘겨준 response.data값이 들어간다.  
- 컴포넌트에서 actions에 접근은 dispatch로 한다. 

>[diff check](https://github.com/wjddk0909/vue-news/commit/f1d13f91ee4672a0a111094a3833f53b230626a0)

## 5.4 JobView에 스토어 적용

- Destructuring 사용해서 넣어보기
- [Dstructuring 설명](https://joshua1988.github.io/es6-online-book/destructuring.html)

>[diff check](https://github.com/wjddk0909/vue-news/commit/74c99efcdd9b849abe927365fbe26b523641d03f)

## 5.5 map 헬퍼 함수를 이용한 AskView 풀이

- mapState와 mapGetters는 computed 속성에서 사용
- this.$store.state.ask; 이렇게 가져오는것은 더 길어지면 파악하기 힘들기 때문에 헬퍼 함수를 사용하면 편함

>[diff check](https://github.com/wjddk0909/vue-news/commit/f629a7e9aba8a99e6930bfbc528954350b83d02c)

## 5.6 스토어 속성 모듈화

- 프로젝트가 커질 수록 store가 길어지니까 모듈화해서 나눠놓는게 좋다.

>[diff check](https://github.com/wjddk0909/vue-news/commit/6e92aae19f48ffb976010166bf7e4a2794471ec6)