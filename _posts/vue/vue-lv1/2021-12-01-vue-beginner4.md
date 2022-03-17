--- 
title: "4 - vue 컴포넌트" 
excerpt: "vue 컴포넌트"
categories: 
    - vue-lv1
tags: 
toc: true
--- 
## 4.1 컴포넌트 소개

vue.js의 컴포넌트에 대해서 알아보겠습니다.
컴포넌트는 화면의 영역을 구분하여 개발할 수 있는 뷰의 기능입니다. 컴포넌트 기반으로 화면을 개발하게 되면 코드의 재사용성이 올라가고 빠르게 화면을 만들 수 있습니다.  
컴포넌트는 영역을 구분했을 때 컴포넌트간에 관계가 생깁니다.

## 4.2 컴포넌트 등록 및 실습

인스턴스를 생성하면 개발자 도구에서 Root컴포넌트로 인식합니다.  

컴포넌트를 등록하는 가장 간단한 방법은 전역 컴포넌트로 등록하는 방법입니다.
전역 컴포넌트를 등록하고 인스턴스의 영역에 컴포넌트 태그를 넣어주면 됩니다. 
(실제 서비스를 할때는 전역컴포넌트를 등록하는 일은 거의 없을것입니다.)
```html
<div id="app">
    <app-header></app-header>x
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    // Vue.component('컴포넌트 이름', 컴포넌트 내용);
    // 전역 컴포넌트
    Vue.component('app-header', {
        template: '<h1>Header</h1>'
    });

    new Vue({
        el: '#app'
    });
</script>
```

## 4.3 지역 컴포넌트 등록

```html
<div id="app">
    <app-header></app-header>
    <app-footer></app-footer>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    // Vue.component('컴포넌트 이름', 컴포넌트 내용);
    // 전역 컴포넌트
    Vue.component('app-header', {
        template: '<h1>Header</h1>'
    });

    new Vue({
        el: '#app',
        components: {
            // '컴포넌트 이름': 컴포넌트 내용
            'app-footer': {
                template: '<footer>footer</footer>'
            }
        }
    });
</script>
```

![컴포넌트](/assets/images/vue/vue-lv1/beginner4_1.png)  

## 4.4 전역 컴포넌트와 지역 컴포넌트의 차이점

지역컴포넌트는 하단에 어떤게 등록되어있는지 알 수 있습니다.  
서비스를 구분할 때는 지역컴포넌트를 이용해서 아래에 등록해 나갑니다.

전역은 플러그인이나 라이브러리 형태로 전역으로 사용하는 컴포넌트만 전역으로 등록합니다.

## 4.5 컴포넌트와 인스턴스와의 관계

새로운 인스턴스를 생성하고 div#app2를 만들어서 인스턴스를 연결하고 전역컴포넌트와 #app에 만들었던 지역컴포넌트 태그를 넣어줍니다.

```html
<div id="app">
    <app-header></app-header>
    <app-footer></app-footer>
</div>
<div id="app2">
    <app-header></app-header>
    <app-footer></app-footer>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    // Vue.component('컴포넌트 이름', 컴포넌트 내용);
    // 전역 컴포넌트
    Vue.component('app-header', {
        template: '<h1>Header</h1>'
    });

    new Vue({
        el: '#app',
        components: {
            // '컴포넌트 이름': 컴포넌트 내용
            'app-footer': {
                template: '<footer>footer</footer>'
            }
        }
    });

    new Vue({
        el: '#app2'
    })
</script>
```

화면에서 확인 하면 app-footer컴포넌트는 #app2에 등록한 지역컴포넌트가 아니기 때문에 보이지 않습니다.
지역컴포넌트는 인스턴스를 생성할 때마다 생성해 줘야 합니다.  
![컴포넌트](/assets/images/vue/vue-lv1/beginner4_2.png)  



