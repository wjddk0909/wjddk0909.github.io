--- 
title: "14 - 서비스 배포 환경 구성" 
excerpt: "배포 환경"
categories: 
    - vue-lv3
tags: 
    - vue
    - deploy
toc: true
--- 

## 14.1 서비스 배포를 위한 명령어 소개 및 실습

배포명령어 `npm run build`  `yarn build`

CLI로 생성한 프로젝트를 서비스에 배포하려면 제일 먼저 위 명령어를 실행.  
실행하고 나면 호스팅 할 수 있는 형태(dist폴더)의 HTML, CSS, Javascript, 이미지 등의 파일 생성.  
이렇게 생성된 자원을 빌드된 자원이라고 부름

## 14.2 Netlify를 이용한 배포 실습

[Netlify 공식 사이트 주소](https://www.netlify.com/)

- github으로 signup
- deploy site

## 14.3 base 디렉토리 설정 및 배포 완료

- deploy failed가 나오면 deploy setting으로 돌아가서
- base directory를 설정해줘야 한다.
- 폴더 경로에 맞게 수정해주기

## 14.4 SPA 호스팅시에 서버에 추가해줘야 하는 설정 안내

[Vue CLI 배포 설명 페이지](https://cli.vuejs.org/guide/deployment.html#netlify)

## 14.5 env 환경 변수 파일을 이용한 옵션 변경 방법

- 코드를 서버에 배포할때 특정 옵션들을 담아 놓는 파일
- 브라우저에 어떤 값을 노출 하고 싶지 않은 코드를 넣음
- .env 로 파일 생성
- 변수=값 형식으로 작성

.env  
APP_TITLE=HELLO

App.vue
created() {  
  console.log(process.env.APP_TITLE)  
}  

이렇게 넣고 실행해보면 콘솔창에 undefined가 뜬다.  

.env  
VUE_APP_TITLE=HELLO

App.vue
created() {  
  console.log(process.env.VUE_APP_TITLE)  
}  

VUE_를 붙이면 접근 가능해진다.
