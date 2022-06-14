--- 
title: "NPM(Node Package Manager)" 
excerpt: "Modul Bundler Webpack"
categories: 
    - webpack
tags: 
    - node.js
    - npm
toc: true
--- 
## 2.1 NPM 지역 설치 명령어와 제거 명령어 - uninstall

npm 지역 설치  

npm install gulp로 설치하면 package.json에 gulp가 설치되어있는것을 확인할 수 있다.  
삭제는 npm uninstall gulp로 삭제하면 된다.  

## 2.2 NPM 전역 설치 명령어 - install --global

`npm install gulp --global`로 설치하면 node_modules 폴더 안에 설치되지 않고 시스템내에 설치되어 `gulp` 명령어 인식 가능

## 2.3 전역으로 설치된 라이브러리 경로 확인

[npm 전역 라이브러리 설치 경로](https://joshua1988.github.io/webpack-guide/build/npm-module-install.html#npm-%EC%A0%84%EC%97%AD-%EC%84%A4%EC%B9%98-%EA%B2%BD%EB%A1%9C)

### npm 전역 설치 경로
> window  
> %USERPROFILE%\AppData\Roaming\npm\node_modules

> mac  
> /usr/local/lib/node_modules


## 2.4 지역 설치와 전역(--global) 설치 비교 정리

npm 지역 설치  
`package.json`파일을 생성하고 해당 프로젝트에서 사용할 자바스크립트 라이브러리를 설치  

npm 전역설치  
npm 전역설치는 위와 같이 프로젝트에서 사용할 라이브러리를 불러올 때 사용하는 것이 아니라 시스템 레벨에서 사용할 자바스크립트 라이브러리를 설치할 때 사용  