--- 
title: "[TypeScript-part1] 첫 번째 프로젝트 - 할 일 관리 애플리케이션" 
excerpt: "typescript 할 일 관리"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 5.1 첫 번째 실습 프로젝트 소개, 환경 구성, 코드 분석

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/84f846d996ceb396f57c9a83b88bd1fa1fe3cacd)

## 5.2 프로젝트 구성 파일 소개(NPM, ESLint, TS)

tsconfig.json  
`compilerOptions`: 타입스크립트에서 자바스크립트로 변환할때 적용되는 옵션  
그중에 `"noImplicitAny": false`를 true로 바꾸면 에러가 뜨기 시작한다.  
이 에러들은 제거하지 않으면 자바스크립트로 컴파일시 컴파일이 되지 않는다.  
이런 에러난 부분에 대해서 꼭 타이핑(typing: 타입이 정의되지 않은 코드에 타입을 입혀주는 행위)을 해줘야 함  

