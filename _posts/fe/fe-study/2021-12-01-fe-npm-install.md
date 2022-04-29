--- 
title: "npm install / --save / --save-dev 차이" 
excerpt: "npm install yarn add"
categories: 
    - fe-study
tags: 
    - npm
    - yarn
    - install
toc: false
--- 
## 그냥 install(add)
`npm install / yarn add`
단순히 `./node_modeuls`폴더에 패키지 설치

## --save / -P
`npm install --save / yarn add --save`
`--save`키워드를 통해 우선 `./node_modules`폴더에 패키지 설치  
`./package.josn`의 `dependencies` 옵션에 해당 패키지 추가되어 다음 `install`시 해당 패키지가 자동으로 설치됨

## --save-dev / -D
`npm install --save-dev / yarn add --save-dev`
`./package.json`의 `devDependencies`옵션에 해당 패키지 추가
