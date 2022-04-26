--- 
title: "1 - Todo App - 프로젝트 소개 및 구성" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
toc: true
--- 

## 개발환경 설정 및 깃헙 리포지토리 클론

- vscode 설치
![todo](/assets/images/vue/vue-lv2/intermediate1_1.png)  
- 플러그인 설치
`vetur`, `'tslint`(문법오류나 api쫓아가기 유용함)
- [node.js](https://nodejs.org/en/)  
- [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [git](https://git-scm.com/downloads)

## 1.1 뷰 CLI로 프로젝트 생성하기

```bash
npm i -g @vue/cli
# or
yarn global add @vue/cli
```
cli를 설치하고 `vue create 프로젝트이름` 명령어를 사용한다.  
vue2를 선택하고 세팅하도록 하겠다.  

![todo](/assets/images/vue/vue-lv2/intermediate1_2.png)  

프로젝트가 생성되고 나면 생성한 폴더 안으로 `cd 폴더명`으로 이동해서 `npm run serve or yarn serve`로 로컬서버로 실행해서 브라우저에서 확인할 수 있습니다.  

`App.vue` 파일을 살펴보면 `HelloWorld`라는 컴포넌트를 `import`를 통해서 가져오는 것을 볼 수 있습니다.

## 1.2 프로젝트 소 및 컴포넌트 설계 방법

Todo App을 만들어 볼 계획입니다.  

구성은 Root 밑에 4개의 컴포넌트로 구성 되어있습니다.  

- TodoHeader : 앱의 타이틀이 들어간 컴포넌트
- TodoInput : 할 일을 입력하는 입력창이 있는 컴포넌트
- TodoList : 입력한 내용을 리스트로 뿌려주고 각 리스트를 삭제하고, 체크 기능이 들어간 컴포넌트
- TodoFooter : 전체 리스트를 다 없애주는 버튼이 들어가있는 컴포넌트

간단한 예제이지만 event올리기, props 내리기 같은 데이터 통신에 대해 다루고 있기 때문에 공부하기 좋은 예제입니다.  

