--- 
title: "Node.js와 NPM" 
excerpt: "Modul Bundler Webpack"
categories: 
    - webpack
tags: 
    - node.js
    - npm
toc: true
--- 
## 개발 환경 구성

- Chrome
- Git
- Visual Studio Code
- Node.js(v12.x 이상)


단축키  
명령어 입력 : command + shift + p

[수업교안사이트](https://joshua1988.github.io/webpack-guide/)

## 1.1 npm 초기화 명령어 - init

- npm init 으로 package.json을 생성
- 또는 npm init -y 로 자동 생성

## 1.2 npm 설치 명령어 - install

- npm install jquery 로 설치하면 node_modules폴더 생성되고 그 안에 라이브러리가 설치됨
- packge.json에도 jquery의 버전도 명시 되어 있음

## npm을 사용하는 이유와 장점

- 라이브러리간에 의존성이 있는 경우에 라이브러리 관리가 필요하다.
- npm을 사용하면 라이브러리의 목록과 각각의 버전까지 확인 가능
- cdn을 쓰는 경우를 생각하면 브라우저에서 검색해서 하나씩 들고 와야하지만 npm은 `npm install jquery-ui` 같이 명령어로 설치가 가능하다.
