--- 
title: "웹팩 시작하기" 
excerpt: "Modul Bundler Webpack"
categories: 
    - webpack
tags: 
    - webpack
toc: true
--- 
## 3.1 웹팩 소개

웹팩이란 최신 프론트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러 이다. 모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Jacascript, images등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미한다.  

### 모듈이란?
모듈이란 프로그래밍 관점에서 특정 기능을 갖는 작은 코드단위를 말한다.  

### 모듈 번들링이란?
웹 애플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합 및 압축 해주는 동작

## 3.2 웹팩 시작하기 튜토리얼 파트 1 - 웹팩 적용 전

[참고 페이지](https://joshua1988.github.io/webpack-guide/getting-started.html#%EC%9B%B9%ED%8C%A9-%EB%A7%9B%EB%B3%B4%EA%B8%B0-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC)

`npm init -y`  
npm을 이용해서 프로젝트를 관리하기 위한 초기화 설정  

`npm i webpack webpack-cli -D`  
devDependencies에 webpack과 webpack-cli설치

`npm install lodash`  
lodash : 자바스크립트 유틸리티 라이브러리  

## 3.3 웹팩 시작하기 튜토리얼 파트 2 - 웹팩 적용 후

1. index.js  
`import _ from "lodash";` 추가

2. index.html  
cdn으로 들고오던 lodash스크립트는 주석처리하고 body안의 스크립트는 `<script src="./dist/main.js"></script>`로 변경

3. package.json  
웹팩 빌드 명령어를 실행하기 위해 `package.json` 파일에 내용 추가  
>"scripts": {  
>  "build": "webpack --mode=none"  
>}

## 3.4 웹팩 시작하기 튜토리얼 파트 3 - mode 적용
