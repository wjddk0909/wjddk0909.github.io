--- 
title: "9 - 템플릿 문법 : 기본" 
excerpt: "템플릿 문법"
categories: 
    - vue-lv1
tags: 
    - vue
    - template syntax
toc: true
--- 

## 9.1 템플릿 문법 소개 

뷰의 템플릿 문법이란 뷰로 화면을 조작하는 방법을 의미합니다. 데이터 바인딩과 디렉티브로 나뉩니다.  
  
### 데이터 바인딩

데이터 바인딩은 뷰 인스턴스에서 정의한 속성들을 화면에 표시하는 방법.  
가장 기본적인 방법으로 콧수염 괄호 `Mustache Tag` 입니다.  

```html
<div>{{ message }}</div>
```

```javascript
new Vue({
    data: {
        message: 'Hello Vue.js'
    }
})
```

div태그에 콧수염 괄호를 이용해 뷰 인스턴스의 `message` 속성을 연결했습니다. 코드를 실행하면 화면에 Hello Vue.js가 출력 됩니다.  

### 디렉티브

뷰로 화면의 요소를 더 쉽게 조작하기 위한 문법입니다.  
화면의 조작에서 자주 사용되는 방식들을 모아 디렉티브 형태로 제공하고있습니다. 예를 들어 아래와 같이 특정 속성 값에 때라 화면의 영역을 표시하거나 표시하지 않을 수 있습니다.

```html
<div>
    Hello <span v-if="show">Vue.js</span>
</div>
```

```javascript
new Vue({
    data: {
        show: false
    }
})
```

위의 코드는 show가 false이기 때문에 Vus.js가 보이지 않습니다.

## 9.2 데이터 바인딩과 computed 속성

데이터 바인딩에 대해 알아보겠습니다.  

html파일을 만들고 기본 코드를 작성하고 인스턴스를 생성하여 el: '#app'으로 연결해 줍니다.  

```html
<div id="app">
    {{ str }}
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            str: 'hi'
        }
    })
</script>
```

브라우저에서 확인해 봅시다. 

![데이터바인딩](/assets/images/vue/vue-lv1/beginner9_1.png)  

hi가 찍히는것을 볼 수 있고 data의 str값을 바꾸면 화면에도 바로 반영 되는 것을 확인 할 수 있습니다.

![데이터바인딩](/assets/images/vue/vue-lv1/beginner9_2.png)  

이 값이 연결 되는 구간이 데이터 바인딩이라고 보면 됩니다.  

이번에는 num을 넣어서 만들어 보겠습니다.  
p태그에 num을 넣고 두번째로 doubleNum을 넣습니다.  
num을 정의하고 그 값에 두배를 곱해서 doubleNum을 만들수도 있지만 데이터의 값에 따라서 바뀌는 값을 정의할때 `computed`를 이용할 수 있습니다.  
`computed`에 doubleNum을 정의하고 this.num(data에 선언했던 num) * 2 를 return합니다.  
화면상에 나타나는 doubleNum은 computed속성이고 num이 바뀌었을때 같이 바뀌게 됩니다.  

```html
<div id="app">
    <p>{{ num }}</p>
    <p>{{ doubleNum }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            num: 10
        },
        computed: {
            doubleNum: function() {
                return this.num * 2;
            }
        }
    })
</script>
```

화면에서 확인해보면 num에 10, doubleNum에 20이 들어가 있습니다.

![데이터바인딩](/assets/images/vue/vue-lv1/beginner9_3.png) 

이상태에서 num의 값을 바꾸면 doubleNum의 값도 같이 계산되어서 바뀝니다.  

![데이터바인딩](/assets/images/vue/vue-lv1/beginner9_4.png) 

## 9.3 뷰 디렉티브와 v-bind

뷰 디렉티브에 대해서 보겠습니다. 뷰 디렉티브는 v-가 붙는 특수한 속성들을 말합니다.  
첫번째 p태그에 아이디를 id="abc1234"로 부여하고 데이터로 관리하고 싶을때 인스턴스에 uuid: 'abc1234'로 정의하고 v-bind로 태그에 연결 할 수 있습니다.

```html
<div id="app">
    <p v-bind:id="uuid" v-bind:class="name">{{ num }}</p>
    <p>{{ doubleNum }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            num: 10,
            uuid: 'abc1234',
            name: 'text-blue'
        },
        computed: {
            doubleNum: function() {
                return this.num * 2;
            }
        }
    })
</script>
```

![디렉티브](/assets/images/vue/vue-lv1/beginner9_5.png) 
![디렉티브](/assets/images/vue/vue-lv1/beginner9_6.png) 

Root에 uuid가 정의 되어있고 p태그에 id가 부여된것을 볼 수 있습니다.  

## 9.4 클래스 바인딩, v-if, v-show


동일한 방법으로 class도 연결할 수 있습니다.

또 유용한 디렉티브들을 확인해 보겠습니다.  
v-if를 이용해 로그인 여부에 따라 보이는 태그를 만들어 봅시다.  

처음에는 loading이 true라서 Loading...태그가 보이고 loading의 체크박스를 해제해서 false로 만들면 v-else의 태그가 보이게 됩니다.  

```html
<div id="app">
    <p v-bind:id="uuid" v-bind:class="name">{{ num }}</p>
    <p>{{ doubleNum }}</p>
    <div v-if="loading">
        Loading...
    </div>
    <div v-else>
        test user has been logged in
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            num: 10,
            uuid: 'abc1234',
            name: 'text-blue',
            loading: true,
        },
        computed: {
            doubleNum: function() {
                return this.num * 2;
            }
        }
    })
</script>
```

![디렉티브](/assets/images/vue/vue-lv1/beginner9_7.png) 
![디렉티브](/assets/images/vue/vue-lv1/beginner9_8.png) 

다음으로 v-show를 보겠습니다.  

```html
<div id="app">
    <p v-bind:id="uuid" v-bind:class="name">{{ num }}</p>
    <p>{{ doubleNum }}</p>
    <div v-if="loading">
        Loading...
    </div>
    <div v-else>
        test user has been logged in
    </div>
    <div v-show="loading">
        Loading...
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            num: 10,
            uuid: 'abc1234',
            name: 'text-blue',
            loading: true,
        },
        computed: {
            doubleNum: function() {
                return this.num * 2;
            }
        }
    })
</script>
```


if와 show둘다 loading이 true인 상태에서는 보여집니다.

![디렉티브](/assets/images/vue/vue-lv1/beginner9_9.png) 

체크를 풀어서 false가 되면 보이지 않는데 여기서 요소검사를 해보면,

![디렉티브](/assets/images/vue/vue-lv1/beginner9_10.png)

v-if는 v-if속성이 선언된 div태그를 `DOM`에서 제거해버리고 v-show는 `css`적으로 `display:none`으로 육안상 보이지않게만 합니다. 

## 9.5 모르는 문법이 나왔을 때 공식 문서를 보고 해결하는 방법

인풋 박스를 만들고 입력된 값을 p태그에 출력해봅시다.  

먼저 인풋 박스를 만들고 그 밑에 p태그를 만듭니다. 일반적으로 document.querySelector로 input에 접근했었습니다.  
그러나 이번에는 Vue에서 제공하는 방법을 이용해 보겠습니다.  
인풋에 입력하는 내용을 아래 p태그에 써주고 싶지만 그 기능을 모르는 상황일때는 Vue.js 공식문서에서 찾아볼 수 있습니다.  

![디렉티브](/assets/images/vue/vue-lv1/beginner9_11.png)

여기서 form input binding으로 가봅시다.  
v-model이라는 것을 알려줍니다. 조금 더 내려보면 예시 코드가 있습니다.  

![디렉티브](/assets/images/vue/vue-lv1/beginner9_12.png)

input에 v-model로 message를 넣었고 콧수염괄호로 message를 뿌리는 걸로 봐서는 data라는 것을 추측할 수 있습니다.
v-model에 message라는 것을 정의 할 수 있게 data에 message 속성을 빈문자열로 추가하고 input에 v-model로 message를 연결해 줍니다.

그리고 이것을 화면에 바로 보일 수 있도록 p태그에 콧수염 괄호로 넣어줍니다.

```html
<div id="app">
    <p v-bind:id="uuid" v-bind:class="name">{{ num }}</p>
    <p>{{ doubleNum }}</p>
    <div v-if="loading">
        Loading...
    </div>
    <div v-else>
        test user has been logged in
    </div>
    <div v-show="loading">
        Loading...
    </div>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            num: 10,
            uuid: 'abc1234',
            name: 'text-blue',
            loading: true,
            message: '',
        },
        computed: {
            doubleNum: function() {
                return this.num * 2;
            }
        }
    })
</script>
```

## 9.6 methods 속성과 v-on 디렉티브를 이용한 키보드, 마우스 이벤트 처리 방법

메서드와 메서드를 이용한 이벤트 핸들링에 대해 알아보겠습니다.  

버튼을 만들고 버튼을 클릭했을때 이벤트를 처리하는것을 보겠습니다.  
v-on:click="메서드이름" 버튼을 클릭하면 메서드이름이 실행됩니다.  

```html
<div id="app">
    <button v-on:click="logText">click me</button>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        methods: {
            logText: function() {
                console.log('clicked');
            }
        }
    })
</script>
```

화면에서 확인하고 버튼을 클릭하면 콘솔창에 clicked가 찍힙니다.  

![디렉티브](/assets/images/vue/vue-lv1/beginner9_13.png)

여기에서 추가로 인풋을 넣고 인풋에서 키보드 입력으로 이벤트를 실행해보겠습니다.  
`v-on:keyup="메서드이름"` keyup은 키보드가 눌렸다가 올라오면 메서드가 실행됩니다.  
`v-on:keyup.enter="메서드이름"` 으로 엔터를 눌렀을때 메서드를 실행 시킬 수 있습니다.  

```html
<div id="app">
    <button v-on:click="logText">click me</button>
    <input type="text" v-on:keyup.enter="logText">
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        methods: {
            logText: function() {
                console.log('clicked');
            }
        }
    })
</script>
```
