--- 
title: "11 - 프로젝트 생성 도구 Vue CLI" 
excerpt: "Vue CLI"
categories: 
    - vue-lv1
tags: 
    - vue
    - cli
toc: true
--- 

## 11.1 최신 Vue CLI 소개

구글에서 vue cli를 검색하면 공식사이트로 들어갈 수 있습니다.  

[Vue CLI 공식 사이트 링크](https://cli.vuejs.org/)

CLI란 명령어를 통한 특정 액션을 실행하는 도구입니다.  

Get Started를 누르고
![cli](/assets/images/vue/vue-lv1/beginner11_1.png) 

Installation을 클릭하고 조금만 내리면 실행 명령어가 보입니다.
이 실행명령어를 이용해서 설치를 진행 할 것입니다.  
![cli](/assets/images/vue/vue-lv1/beginner11_2.png) 

그 전에 확인 해야 할 것이, 지금까지 vscode에서 live server를 통해서 코드를 브라우저에서 확인했는데 앞으로는 터미널을 이용하겠습니다.  

우선 vscode에서 터미널 창을 켜고
![cli](/assets/images/vue/vue-lv1/beginner11_3.png) 

![cli](/assets/images/vue/vue-lv1/beginner11_4.png) 
node -v 명령어로 노드버전을 확인합니다. 10.대 이상 LTS버전으로 설치해주세요.
두번째로 npm -v 로 npm 버전도 확인하세요. 6.대 버전 이상이면 됩니다.

Vue CLI 공식 사이트에서 확인한 `npm install -g @vue/cli` 명령어로 Vue CLI를 설치합니다.  
(강의에서는 3.x 버전을 설치 하였는데 현재는 5.x 버전) 

## 11.2 Vue CLI 도구 설치할 때 문제점 해결 방법

npm 명령어로 CLI를 설치 중에 에러가 발생하는 경우가 있을것입니다.
이 에러 케이스에 대해서 얘기해보면, 대부분 permision 에러가 뜰것입니다.  
이 에러는 npm install로 설치할때 라이브러리가 위치하는 폴더에 쓰기 권한이 없어서 그렇습니다.  
이럴때는 sudo를 앞에 붙여서 `sudo npm install -g @vue/cli`로 설치해주시면 됩니다.  

![cli](/assets/images/vue/vue-lv1/beginner11_5.png) 

mac과 window의 설치 루트는 위와 같습니다.  

## 11.3 CLI 2.x와 3.x의 차이점 / 프로젝트 생성 및 서버 실행

CLI의 버전 차이에 대해서 알아보겠습니다.  

프로젝트를 생성할때  
[Vue CLI 2.x]의 경우  
vue init '프로젝트 템플릿 유형' '프로젝트 폴더 위치'  
vue init webpack-simple '프로젝트 폴더 위치'  

[Vue CLI 3.x]의 경우  
vue create '프로젝트 폴더 위치'   

이런 명령어의 차이가 있습니다.  

프로젝트를 생성 해보겠습니다.  

`vue creat vue-cli`로 생성 해봅시다.

![cli](/assets/images/vue/vue-lv1/beginner11_6.png) 

여기에서 Vue 2를 선택해주세요.  

![cli](/assets/images/vue/vue-lv1/beginner11_7.png) 

use yarn / use npm 선택이 나오는데 편한 명령어를 선택하시면 됩니다.
생성이 완료 되면 `cd vue-cli`로 폴더 이동해서 `yarn serve` (또는 `npm run serve`)로 서버를 실행합니다.  

![cli](/assets/images/vue/vue-lv1/beginner11_8.png) 

실행하면 포트번호 8080으로 로컬서버로 접근 할 수 있게 됩니다.  

url로 이동해서 브라우저에서 화면을 확인해 보면 아래와 같은 화면을 확인 할 수 있습니다.  

![cli](/assets/images/vue/vue-lv1/beginner11_9.png) 

## 11.4 CLI로 생성한 프로젝트 폴더 구조 확인 및 main.js 파일 설명

`vue create`명령어로 생성된 vue-cli폴더를 들어가봅시다. 
`npm run serve` 또는 `yarn serve`는 package.json 파일의 serve에 정의된 명령어를 실행 합니다.  

### index.html
이때 실행되는 파일은 public 폴더의 index.html를 살펴봅시다.

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

이 파일 안에는 `app`이라는 id를 가진 태그가 있는데, 그 아래의 주석은 `빌드된 파일들이 자동으로 추가된다`라는 의미입니다.  

![cli](/assets/images/vue/vue-lv1/beginner11_10.png) 

src폴더 밑에 정의해 놓은 `main.js`, `App.vue`등 여러 파일들을 합쳐서 최소한의 파일로 변환해서 추가해 주는 것입니다.(이것을 webpack이 해줌)  


### main.js

main.js 파일을 살펴봅시다.  

```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

여기에서 `new Vue({...}).$mount('#app')`를 다시 써보면  
기존에 하던 인스턴스 생성 코드와 동일합니다.  

```javascript
new Vue({
}).$mount('#app')

new Vue({
	el: '#app',
})
```

여기에서 다시 작성 해보겠습니다.  
기존의 코드에서 render만 추가된 형태입니다.  

```javascript
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
    el: '#app',
    render: h=> h(App),
})
```

render의 역할은 App이라는 컴포넌트, 즉 위의 import한 파일을 불러와서 집어넣고 랜더링 했다고 이해하시면 될 것 같습니다.  

App이라는 컴포넌트를 살펴보겠습니다.  
`import App from './App.vue` 코드 대신에 아래와 같이 작성 해 봅시다.   

```javascript
import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

var App = {
    template: '<div>app</div>'
}

new Vue({
  render: h => h(App),
  components: { // components의 역할과 render 역할이 동일
      'app': App
  }
}).$mount('#app')
```

위 코드는 지금까지 기초 공부를 하면서 많이 봤던 코드입니다.  
변수 App을 정의하고 인스턴스에 `components`속성에 정의 했었습니다.  
`components`와 `render`의 역할이 동일합니다.  


