--- 
title: "6 - 컴포넌트 통신 방법) 응용" 
excerpt: "vue 컴포넌트 통신 방법) 응용"
categories: 
    - vue-lv1
tags: 
    - vue
    - component
toc: true
--- 

## 6.1 같은 컴포넌트 레벨 간의 통신 방법

같은 레벨의 컴포넌트 간의 통신 방법에 대해서 알아 보겠습니다.  
Root(인스턴스)에서 appHeader와 appContent라는 컴포넌트를 등록했을때 컨텐트에서 헤더로 10이라는 데이터를 전달해 보겠습니다.

![컴포넌트](/assets/images/vue/vue-lv1/beginner6_1.png)  

## 6.2 같은 컴포넌트 레벨 간의 통신 방법 구현

new Vue로 인스턴스를 생성하고 el로 #app에 붙이면 인스턴스가 div태그안에서 유효하게 됩니다.  
components라는 속성으로 appHeader와 appContent 컴포넌트를 만들어줍니다.  
구조도 처럼 컨텐트에서 헤더로 10을 넘기겠습니다.  
content에서 버튼을 넣고 이 버튼을 누르면 신호를 발생 시킬겁니다.  
그러면 methods를 정의하고 버튼을 클릭했을때 passNum이라는 이벤트를 발생시키고 함수를 이어줍니다.  
this.$emit으로 pass라는 이벤트와 10을 넘겨주고 화면에서 확인하면 뷰 개발자 도구 이벤트탭에서 pass 이벤트가 발생하면서 10이 넘어옵니다.  

```html
<div id="app">
    <app-header></app-header>
    <app-content></app-content>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var appHeader = {
        template: '<div>header</div>',
    }
    var appContent = {
        template: '<div>content<button v-on:click="passNum">pass</button></div>',
        methods: {
            passNum: function() {
                this.$emit('pass', 10)
            }
        }
    }
    new Vue({
        el: '#app',
        components: {
            'app-header': appHeader,
            'app-content': appContent
        },
    })
</script>
```

![컴포넌트](/assets/images/vue/vue-lv1/beginner6_2.png)  

content에서 바로 header로 이벤트를 보낼 수 없기 때문에 content에서 root로 `event`를 통해서 10을 보내고 root에서 header로 `props`로 10을 다시 내려야 합니다.  

![컴포넌트](/assets/images/vue/vue-lv1/beginner6_3.png) 

root에서 props를 내리려면 데이터를 선언하여야 합니다.  
content에서 passNum이라는 메서드가 실행되면서 this.$emit으로 pass이벤트가 올라왔는데 v-on으로 pass 이벤트를 받을 수 있습니다.  
하위 컴포넌트 이벤트를 v-on으로 받아서 상위 컴포넌트 인스턴스에 메서드로 추가한 deliverNum를 연결해 줍니다.
pass로 넘어오면서 인자 10도 같이 넘어옵니다. 이 인자 10은 받는 쪽에서 deliverNum(value)로 넣어줍니다.  
넘어온 value를 this.num = value로 넣어줄 수 있습니다.  
pass 버튼을 눌러서 이벤트가 발생하면 Root의 num이 10으로 바뀝니다.  
이렇게 넘어온 데이터를 appHeader로 전달해 주면 됩니다.  
v-bind로 props속성을 넣어줍니다.   
화면에서 content의 porpsdata가 0이었다 버튼을 클릭하면 10으로 바뀌는 것을 확인 할 수 있습니다.

```html
<div id="app">
        <app-header v-bind:propsdata="num"></app-header>
        <app-content v-on:pass="deliverNum"></app-content>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        var appHeader = {
            template: '<div>header</div>',
            props: ['propsdata']
        }
        var appContent = {
            template: '<div>content<button v-on:click="passNum">pass</button></div>',
            methods: {
                passNum: function() {
                    this.$emit('pass', 10)
                }
            }
        }
        new Vue({
            el: '#app',
            components: {
                'app-header': appHeader,
                'app-content': appContent
            },
            data: {
                num: 0
            },
            methods: {
                deliverNum: function(value) {
                    this.num = value;
                }
            }
        })
    </script>
```