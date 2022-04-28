--- 
title: "vue에서 scss 사용하기" 
excerpt: "scss"
categories: 
    - fe-study
tags: 
    - scss
toc: false
--- 
## vue에서 scss 사용 기본 설정

scss 패키지 설치  
node-sass와 sass-loader 설치  

`npm install --save-dev node-sass sass-loader`

사용법  
간단한 설치만으로도 vue-loader에서 기본으로 설정되어있는 webpack 설정 때문에 패키지 설치 후 컴포넌트 내에서 lang속성을 지정해주면 자동으로 Loader를 사용 할 수 있음  

```html
// 컴포넌트 내에 lang속성으로 scss 명시
// 스타일 내부 scss 파일 import하는 방법
// 경로에서 @의 경우 /src와 같은 의미
<style lang="scss">
    @import "@/asstes/scss/파일명";
</style>
```

전역 스타일 및 변수 설정
변수를 담아둔 scss 파일을 매번 컴포넌트에서 불러와 사용하는 것은 효율적이지 않음  
따라서 자주 사용하는 변수나 reset스타일, mixin같은 경우 전역 스타일을 설정해서 사용 가능  

설정방법  
vue.config.js 파일 생성해서 webpack 설정을 추가  

```javascript
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/assets/scss/abstracts/abstracts.scss";
                `
            }
        }
    }
}
```

```html
//예시
$TEXT_DEFAULT: #333;

//다른컴포넌트
<style lang="scss">
    p {
        color: $TEXT_DEFAULT
    }
</style>
```
