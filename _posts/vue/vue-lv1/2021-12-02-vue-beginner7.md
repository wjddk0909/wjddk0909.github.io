--- 
title: "7 - 라우터" 
excerpt: "vue 라우터"
categories: 
    - vue-lv1
tags: 
    - vue
    - router
toc: true
--- 

## 7.1 뷰 라우터 소개와 설치

뷰 라우터는 뷰 라이브러리를 이용하여 싱글 페이지 애플리케이션을 구현할 때 사용하는 라이브러리입니다.  

[라우터 공식 문서 링크](https://v3.router.vuejs.org/installation.html)

위 링크로 접속하여 Installation에서 상단의 CDN주소를 복사해 줍니다.  

- https://unpkg.com/vue-router/dist/vue-router.js

파일을 만들어 보며 실습해 봅시다.  
뷰 라이브러리와 router.js CDN 주소를 넣어주고 기본 골격을 만들어 봅시다.  

```html
<div id="app"></div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"></script>

<script>
    new VueRouter({

    });

    new Vue({
        el: '#app',
    });
</script>
```

## 7.2 뷰 라우터 인스턴스 연결 및 초기 상태 안내

뷰 라우터를 인스턴스에 동작 시켜 보겠습니다.  
VueRouter를 router라는 변수에 넣어주고 Vue인스턴스에 연결해 주고 브라우저에서 뷰 개발자 도구로 확인해 보면 Root에 $router가 잡히는 것을 볼 수 있습니다.  

```html
<div id="app"></div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"></script>

<script>
    var router = new VueRouter({

    });

    new Vue({
        el: '#app',
        router: router,
    });
</script>
```

## 7.3 routes 속성 설명 및 실습 안내

세팅한 코드로 라우터에 대한 정보를 추가 해 보겠습니다.  
첫번째로 routes라는 속성입니다.  
이 속성에는 페이지 라우팅 정보가 들어갑니다. (어떤 url로 이동했을때 어떤 페이지가 뿌려질지에 대한 정보가 배열로 담깁니다.)  
이 배열에 페이지 라우팅 정보를 담아보겠습니다.  

```html
<div id="app"></div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"></script>

<script>
    var LoginComponent = {
        template: '<div>login</div>'
    }
    var MainComponent = {
        template: '<div>main</div>'
    }
    var router = new VueRouter({
        routes: [
            {
                // url 이름
                path: '/login',
                // 해당 url에서 표시될 컴포넌트
                component: LoginComponent
            },
            {
                path: '/main',
                component: MainComponent
            }
        ]
    });

    new Vue({
        el: '#app',
        router: router,
    });
</script>
```

## 7.4 라우터가 표시되는 영역 및 router-view 태그 설명

페이지 url이 변경 됐을때 그 url에 따라서 뿌려지는 영역을 router-view라는 태그로 정의할 수 있습니다. 뷰 인스턴스에 라우터 인스턴스를 연결해야 사용할 수 있습니다.  
router-view를 연결하고 url에 /login을 입력해 보면 login이라는 내용이 화면에 보여집니다.  
login이라는 url로 이동했을때 해당하는 컴포넌트를 router-view라는 태그에 보여준 것 입니다.

```html
<div id="app">
    <router-view></router-view>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"></script>

<script>
    var LoginComponent = {
        template: '<div>login</div>'
    }
    var MainComponent = {
        template: '<div>main</div>'
    }
    var router = new VueRouter({
        routes: [
            {
                // url 이름
                path: '/login',
                // 해당 url에서 표시될 컴포넌트
                component: LoginComponent
            },
            {
                path: '/main',
                component: MainComponent
            }
        ]
    });

    new Vue({
        el: '#app',
        router: router,
    });
</script>
```

## 7.5 링크를 이용한 페이지 이동 및 router-link 태그 설명

화면 이동을 url로 할 수 있지만, 사용자 입장에서는 화면에 제공된 링크를 통해 이동합니다.  
이럴때 사용하는 것이 router-link입니다.  

```html
<div id="app">
    <div>
        <router-link to="/login">Login</router-link>
        <router-link to="/main">Main</router-link>        
    </div>
    <router-view></router-view>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"></script>

<script>
    var LoginComponent = {
        template: '<div>login</div>'
    }
    var MainComponent = {
        template: '<div>main</div>'
    }
    var router = new VueRouter({
        // 페이지의 라우팅 정보
        routes: [
            {
                // 페이지의 url 이름
                path: '/login',
                // 해당 url에서 표시될 컴포넌트
                component: LoginComponent
            },
            {
                path: '/main',
                component: MainComponent
            }
        ]
    });

    new Vue({
        el: '#app',
        router: router
    });
</script>
```

## 7.6 라우터 정리 및 학습 방향 안내

라우터는 페이지를 이동할때 사용하는 라이브러리입니다.  

### CDN 방식 
```html
<script src="https://unpkg.com/vue-router@3.5.3/dist/vue-router.js"></script>
```
### NPM 방식
```sh
npm install vue-router
``` 

### 뷰 라우터 등록
뷰 라우터를 설치하고 나면 라우터 인스턴스를 생성하고, 인스턴스에 라우터 인스턴스를 등록합니다.  
```js
// 라우터 인스턴스 생성
var router = new VueRouter({
    // 라우터 옵션
})

// 인스턴스에 라우터 인스턴스 등록
new Vue ({
    router: router
})
```

### 라우터 옵션
routes : 페이지의 정보들이 들어가는 속성 / component는 무조건 하나이기 때문에 s가 붙지 않음
(덧붙여서 인스턴스나 컴포넌트는 여러개가 들어가기때문에 component에 s가 붙음)

뷰 라우터로 특정 URL에 접근할 때 접근을 막는 방법(ex.로그인 전에는 접근 불가하게..)  
- [네비게이션 가드 참고 링크](https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/)