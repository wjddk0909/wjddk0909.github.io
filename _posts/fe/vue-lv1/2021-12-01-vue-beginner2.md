--- 
title: "2 - vue.js 소개" 
excerpt: "vue.js 소개"
categories: 
    - vue-lv1
tags: 
    - vue
toc: true
--- 
## 2.1 vue는 무엇인가?

MVVM패턴의 뷰모델(ViewModel) 레이어에 해당하는 화면(View)단 라이브러리

View라고 되어 있는 것은 브라우저에서 사용자에게 비춰지는 화면을 의미한다.  
즉, 버튼이나 입력박스등이 해당한다.  

사용자가 키보드로 입력했을때 이벤트를 중간에 DOM Listener로 view에서 읽게 됩니다.
그런 이벤트를 잡아서 데이터를 바꾸거나 특정 로직에서 실행을 합니다.  

자바스크립트의 데이터가 변했을때 Data Bindings를 하게 됩니다.
그리고 Data Bindings를 이용해서 화면에 반영합니다.

![vue란](/assets/images/vue/vue-lv1/beginner2_1.png)

## 2.2 기존 웹 개발 방식(HTML, Javascript)

일반적으로 프레임워크를 쓰지 않고 웹을 개발하는 방법은 HTML, CSS, Javascript를 사용합니다.

``` html
<div id="app"></div>

<script>
    var div = document.querySelector('#app');
    var str = "Hello World";
    console.log(div);
    div.innerHTML = str;
</script>
```

이렇게 작성하고 브라우저에서 확인을 하면 브라우저에서 확인 할 수 있습니다.

![html1](/assets/images/vue/vue-lv1/beginner2_2.png)

html은 화면에 나타나는 태그나 돔의 정보를 넣는 것 이고 자바스크립트는 해당 태그나 돔의 내용을 조작하는 것을 알 수 있습니다.

여기에서 str의 값을 바꿀때는 바뀐 문자열의 내용을 다시 넣어줘야 합니다.

``` html
<div id="app"></div>

<script>
    var div = document.querySelector('#app');
    var str = "Hello World";
    console.log(div);
    div.innerHTML = str;

    str = "Hello World!!!";
    div.innerHTML = str;
</script>
```

## 2.3 Reactivity 구현

기존의 개발 방식에서 vue.js의 핵심 기능인 Reactivity를 이용해보겠습니다.

div정보만 받아놓은 상태에서 viewModel이라는 객체를 선언하고  
Object.defineProperty()라는 api를 사용해보겠습니다.

Object.defineProperty()가 하는 역할은 객체의 동작을 재정의 하는 api라고 보시면 됩니다.  
변수 a에 10을 할당하면 a에 접근 할 수 있습니다. 혹은 a를 20으로 바꿀 수 있습니다.
특정 변수, 객체의 속성 동작을 재정의 하는것이 Object.defineProperty() 입니다.

``` html
<div id="app"></div>

<script>
    var div = document.querySelector('#app');
    var viewModel = {};

    // Object.defineProperty(대상객체, 객체의 속성, {
         
    // });

    Object.defineProperty(viewModel, 'str', {
        // 속성의 접근했을 때의 동작을 정의
        get: function() {
            console.log('접근');
        },
        // 속성에 값을 할당했을 때의 동작을 정의
        set: function(newValue) {
            console.log('할당', newValue);
        }
    });
</script>
```

콘솔창에서 확인을 해봅시다.
![vue1](/assets/images/vue/vue-lv1/beginner2_3.png)

여기에서 str의 값이 바뀌면 바뀐 값을 화면에 뿌리도록 정의 할 수 있습니다.

``` html
<div id="app"></div>

<script>
    var div = document.querySelector('#app');
    var viewModel = {};

    Object.defineProperty(viewModel, 'str', {
        get: function() {
            console.log('접근');
        },
        set: function(newValue) {
            console.log('할당', newValue);
            div.innerHTML = newValue;
        }
    });
</script>
```

![vue2](/assets/images/vue/vue-lv1/beginner2_4.png)

값을 바꿀 때마다 화면이 바뀌는 것을 확인 할 수 있습니다.  
vue의 핵심은 데이터의 변화를 라이브러리에서 감지해서 알아서 화면을 자동으로 그려주는 Reactivity입니다.

## 2.4 Reactivity 코드 라이브러리화 하기

코드를 라이브러리화 해보겠습니다.  
init()이라는 함수안에 Object.defineProperty를 잘라서 넣습니다.  
render()함수를 만들어서 div에 텍스트 값을 바꾸는 부분을 옮기고 set에서 render()를 호출해서 새로운 값이 할당 됐을때 render()에 넘겨주도록 합니다.  
그리고 최종적으로 [즉시실행](https://developer.mozilla.org/ko/docs/Glossary/IIFE) 함수 안에 넣어줍니다.  
즉시실행 함수의 역할은 기본적으로 애플리케이션의 로직에 노출되지 않도록 또다른 유효범위(스코프)에 넣어주는 것입니다.

``` html
<div id="app"></div>

<script>
    var div = document.querySelector('#app');
    var viewModel = {};

    (function() {
        function init() {
            Object.defineProperty(viewModel, 'str', {
                get: function() {
                    console.log('접근');
                },
                set: function(newValue) {
                    console.log('할당', newValue);
                    render(newValue)
                }
            });
        }
        function render(value) {
            div.innerHTML = value;
        }
        init();
    })();
</script>
```

## 2.5 Hello Vue.js와 뷰 개발자 도구

간단하게 뷰로 Hello Vue.js를 화면에 찍어 보겠습니다.

```html
<div id="app">
    {{ message }}
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js'
        }
    })
</script>
```

코드를 브라우저에서 확인 해봅시다.

![vue3](/assets/images/vue/vue-lv1/beginner2_5.png)

크롬 개발자 모드에서 vue탭으로 이동후 data > message: "Hello Vue.js"의 내용을 바꾸면 화면에서 바로 반영이 됩니다.




