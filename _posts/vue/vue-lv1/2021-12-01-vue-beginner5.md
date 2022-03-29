--- 
title: "5 - 컴포넌트 통신 방법) 기본" 
excerpt: "vue 컴포넌트 통신 방법) 기본"
categories: 
    - vue-lv1
tags: 
    - vue
    - component
toc: true
--- 

## 5.1 컴포넌트 통신

뷰에서 컴포넌트를 등록했을때 관계가 생깁니다.  
예를 들어서 아래 그림과 같이 컴포넌트를 나눴을때를 봅시다.

![컴포넌트](/assets/images/vue/vue-lv1/beginner5_1.png)  

화면에서 연회색으로 되어있는 3개의 부분으로 나눴을때 그안에 진회색으로 컴포넌트를 나눌때마다 그 컴포넌트가 하위(자식)컴포넌트로 위치합니다.

이 관계의 중요한 점은, 규칙이 생긴다는 것입니다.  
컴포넌트는 각각 고유한 데이터 유효 범위를 갖습니다. 따라서 컴포넌트 간에 데이터를 주고 받기 위해선 아래와 같은 규칙을 따라야 합니다.

![컴포넌트2](/assets/images/vue/vue-lv1/beginner5_2.png)  

- 상위에서 하위로는 데이터를 내려줌, `프롭스 속성`
- 하위에서 상위로는 이벤트를 올려줌, `이벤트 발생`

## 5.2 컴포넌트 통신 규칙이 필요한 이유

예를 들어서 헤더, 컨텐트, 푸터 컴포넌트를 등록하고  
그리고 그 컴포넌트 밑에 각각 컴포넌트를 하나씩 등록했다고 합시다.

![컴포넌트3](/assets/images/vue/vue-lv1/beginner5_3.png)  

여기에서 만약 헤더에서 로그인폼으로 데이터를 전달하고, 그 정보를 다시 푸터로 보냅니다.  
그리고 푸터에서 다시 네비게이션바로 데이터를 보낸 상황을 가정합니다.  
이런식으로 특정 컴포넌트의 변화에 따라서 나머지 컴포넌트가 유기적으로 데이터를 주고받았을때 데이터의 방향을 예측하기가 어려워집니다.  
데이터가 바뀌었을떄 그로 인한 버그를 추적하기가 어려운게 n방향 통신의 문제점입니다.

컴포넌트 통신방식을 살펴봅시다.  

![컴포넌트4](/assets/images/vue/vue-lv1/beginner5_4.png)  

컴포넌트 통신방식은 데이터가 아래로만 내려갑니다.  
데이터의 흐름을 추적할 수 있습니다. 데이터는 항상 내려오고 이벤트는 올라갑니다.

## 5.3 props 속성

app-header컴포넌트를 만들고 data에 메세지를 정의해주면 Root컴포넌트에 message가 생성됩니다.  
이 데이터를 aa-header로 내리려면 props를 사용하면 됩니다.  
v-bind:프롭스 속성 이름 = "상위 컴포넌트의 데이터 이름"으로 넣어줍니다.  
app-header의 기준으로 상위컴포넌트는 root가 되고 그 데이터 이름은 message입니다.  
프롭스 속성 이름은 appHeader라는 변수 안에 정의 해주고 그것을 사용하면 됩니다.

```html
<div id="app">
    <!-- <app-header v-bind:프롭스속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="message"></app-header>
    <app-content v-bind:propsdata="num"></app-content>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var appHeader = {
        template: '<h1>header</h1>',
        props: ['propsdata']         
    }
    new Vue({
        el: '#app',
        components: {
            'app-header': appHeader,
        },
        data: {
            message: 'hi',
        }
    })
</script>
```

뷰 개발자 도구로 확인해 보면 app-header에 propsdata로 들어가 있는 걸 볼 수 있습니다.

![컴포넌트5](/assets/images/vue/vue-lv1/beginner5_5.png)  

## 5.4 props 속성의 특징

props코드를 등록하면 root컴포넌트(상위컴포넌트)의 message값이 바뀌면 그대로 app-header에도 내려가 반영이 됩니다.  
데이터바인딩을 이용하여 상위 컴포넌트의 데이터값이 바뀌면 하위 컴포넌트의 프롭스 속성이 반영되면서 화면에 나타나도록 할 수 있습니다.

```html
<div id="app">
    <!-- <app-header v-bind:프롭스속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="message"></app-header>
    <app-content v-bind:propsdata="num"></app-content>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var appHeader = {
        template: '<h1>{{ propsdata }}</h1>',
        props: ['propsdata']         
    }
    var appContent = {
        template: '<div>{{ propsdata }}</div>',
        props: ['propsdata']
    }
    new Vue({
        el: '#app',
        components: {
            'app-header': appHeader,
            'app-content': appContent
        },
        data: {
            message: 'hi',
            num: 10
        }
    })
</script>
```

## 5.5 event emit

아래에서 위로 통신하는 법은 이벤트를 올립니다.  
이벤트에 대해서 실습해 봅시다.

뷰 인스턴스를 하나 생성하고 app-header컴포넌트를 등록하고 템플릿으로 버튼을 하나 만들어 줍니다.  
버튼을 클릭했을때 이벤트를 실행하는 방법은 v-on:click으로 할 수 있습니다.  

이 버튼을 클릭했을때 root로 이벤트를 보낼겁니다.  

```html
<div id="app">
    <app-header></app-header>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var appHeader = {
        template: '<button v-on:click="passEvent">Click me</button>',
        methods: {
            passEvent: function() {
                this.$emit('pass');
            }
        }
    }
    var vm = new Vue({
        el: '#app',
        components: {
            'app-header': appHeader,
        },
    })
</script>
```

이 상태에서 뷰 개발자 도구로 확인하면 버튼 클릭시 pass 이벤트가 발생합니다.  

## 5.6 event emit으로 콘솔 출력하기

\$emit은 뷰에서 제공하는 api(기능)인데 이것을 이용해서 pass라는 이벤트를 발생 시켰습니다.  
이것을 위에서 받을 수 있게 컴포넌트 태그에서 조작을 해 보겠습니다.  
프롭스 등록과 비슷하게 태그에서 올라온 이벤트를 잡아줘야 합니다.  
하위에서 발생한 이벤트 이름은 pass이고 상위 컴포넌트 메서드 이름은 logText로 지정해줍니다.  
pass라는 이벤트가 아래에서 올라왔을 때 그게 컴포넌트 태그에서 받아서 logText라는 메서드를 실행합니다.

++ 추가로 content 넣어보기  
똑같이 컴포넌트를 추가해주고, addNumber 이벤트를 추가해봅시다.  
add버튼을 클릭했을때 this.$emit으로 이벤트를 올려서 위에 있는 data의 num값을 1씩 증가 시켜보겠습니다.  
increase라는 하위 컴포넌트에서 발생한 이벤트 이름을 받아서 상위 컴포넌트의 메서드 increaseNumber를 실행시킵니다.  

```html
<div id="app">
    <p>{{ num }}</p>
    <!-- <app-header v-on:하위컴포넌트에서 발생한 이벤트 이름="상위 컴포넌트 메서드 이름"></app-header> -->
    <app-header v-on:pass="logText"></app-header>
    <app-Content v-on:increase="increaNumber"></app-Content>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var appHeader = {
        template: '<button v-on:click="passEvent">Click me</button>',
        methods: {
            passEvent: function() {
                this.$emit('pass');
            }
        }
    }
    var appContent = {
        template: '<button v-on:click="addNumber">add</button>',
        methods: {
            addNumber: function() {
                this.$emit('increase')
            }
        }
    }
    var vm = new Vue({
        el: '#app',
        components: {
            'app-header': appHeader,
            'app-content': appContent
        },
        methods: {
            logText: function() {
                console.log('hi');
            },
            increaNumber: function() {
                this.num = this.num + 1
            }
        },
        data: {
            num: 10
        }
    })
</script>
```

## 5.7 뷰 인스턴스에서의 this

obj라는 객체를 생성하고 this를 찍으면 obj를 바라봅니다.  

```javascript
var obj = {
    num: 10,
    getNumber: function() {
        console.log(this.num);
    }
}
```
따라서 실습해봤던 코드에서 console.log(vm)을 찍으면 뷰에서 생성한 내용들이 담깁니다.  
이것을 펼쳐서 보면 data안에 정의했던 num: 10이 바깥레벨로 나와서 바로 보입니다.  
따라서 this.num은 data의 num속성을 가리킵니다.

<hr>

[this 관련글 1](https://www.w3schools.com/js/js_this.asp)  
[this 관련글 2](https://betterprogramming.pub/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)
