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

## 2.5 지역 설치 명령어 옵션 - --save-dev(-D)

npm 지역 설치 옵션 두가지  
- npm install vue --save-prod
- npm install vue --save-dev

위 명령어를 축약하면  
- npm i vue
- npm i vue -D

## 2.6 dependencies와 devDependencies의 차이점

dependencies 
- `npm i`로 설치
- 애플리케이션의 로직과 직접적인 연관이 있는 라이브러리

devDependencies
- `npm i vue -D`로 설치
- webpack, js-compression, sass등등 개발을 할때 도움을 주는 개발용 보조 라이브러리

## 2.7 개발용 라이브러리와 배포용 라이브러리 구분하기

개발용 라이브러리  
- devDependencies

배포용 라이브러리
- dependencies

npm 지역 설치를 할 떄는 해당 라이브러리가 배포용인지 개발용인지 구분해줘야 한다. 예를들어 `jquery`와 같이 화면 로직과ㅓ 직접적으로 관련된 라이브러리는 배포용으로 설치해야 한다.  
`npm i jquery`  
이렇게 설치된 배포용 라이브러리는 `npm run build`로 빌드를 하면 최종 애플리케이션 코드 안에 포함된다.  
그런데 만약 설치 옵션에 `-D`를 줬다면 해당 라이브러리는 빌드하고 배포할 때 애플리케이션 코드에서 빠지게 되기 때문에 최종 애플리케이션에 포함되어야 하는 라이브러리는 `-D`로 설치하면 안된다.  

배포할 때 빠져도 좋은 라이브러리의 예시  
- `webpack` : 빌드도구
- `eslint` : 코드 문법 검사 도구
- `imagemin` : 이미지 압축 도구
