--- 
title: "[vue]파일 경로 - 이미지 스프라이트 사용하면서.." 
excerpt: "파일 경로"
categories: 
    - vue-study
tags: 
    - file
    - path
toc: false
--- 
## 이미지 스프라이트 사용시 파일 경로 설정할때 절대 경로 설정 하기

절대 경로  
@: src(루트)부터 시작

상대 경로
../: 상위 폴더로 하나 올라가기
./: 현재 같은 폴더

### 개인정보처리방침 서비스에 이미지 스프라이트 절대경로

- policy 서비스 절대경로 설정시  
`@/assets/images/sprites/sprite-${basename}.png`  

- 프로젝트 절대경로 설정시
`~@/assets/images/sprites/sprite-${basename}.png`  
위와 같이 물결하나 추가해줘야 했음.. 

[참고 stack overflow](https://stackoverflow.com/questions/51621458/for-handling-assets-in-vue-js-not-working)

[webpack 정적 자산 처리 stack overflow](https://stackoverflow.com/questions/51531821/vue-cli-include-image-from-assets-folder-in-static-file#answer-52097176)

[vue.js 정적자산처리](https://vuejs-templates.github.io/webpack/static.html)

