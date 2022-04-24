--- 
title: "8 - HTTP 통신 라이브러리 axios" 
excerpt: "axios"
categories: 
    - vue-lv1
tags: 
    - vue
    - axios
toc: true
--- 

## 8.1 HTTP 라이브러리와 Ajax 그리고 Vue Resource

axios는 vue에서 권고하는 HTTP통신 라이브러리 입니다.  

Ajax는 비동기 적인 웹애플리케이션의 제작을 위한 기술입니다.  
과거에는 서버에 데이터를 요청하면 서버에서 페이지까지 그려서 사용자의 브라우저로 보냈기 때문에 페이지가 깜박거리고 다시 로딩되는 현상이 있었습니다.  

하지만 요즘엔 서버에서 데이터만 보내주고 화면에 그리는건 브라우저에서 하기 때문에 데이터가 바뀐 부분만 화면이 바뀌게 되어서 사용자 경험이 훨씬 좋아졌습니다.  

> 원래 vue.js에서 확인할 수 있는 공식 라이브러리로 vue-resource가 있었는데 vue.js를 만든 Evan You가 이제 더이상 공식 라이브러리로 관리 하지 않겠다고 했습니다.  
실제로 구현 하다 보면 샘플들이 있을텐데 이 샘플들이 vue-resource로 되어있는 것들이 많을것입니다.  
그 샘플들을 오래 됐을 확률이 크기 때문에 그런 부분들을 인지하고 주의해서 구현하는 것이 좋습니다. 

axios에 대해 살펴 보겠습니다.

## 8.2 axios 소개 및 오픈 소스를 사용하기 전에 알아야 할 것들

뷰에서 권고하는 HTTP통신 라이브러리는 `Axios`입니다. Promise기반의 HTTP통신 라이브러리이며 상대적으로 다른 HTTP통신 라이브러리들에 비해 문서화가 잘되어 있고 API가 다양합니다.

axios github을 검색하여 들어가봅시다.  

오픈소스를 사용할때는 제일 먼저 봐야하는것이 Star수를 확인해야 합니다. 그만큼 많은 사람들이 이걸 확인하고 좋아요를 눌렀다는 의미입니다.  
대중적인 인지도를 파악하고나면 두번째로 commits기록과 contriutors 숫자를 확인하는것도 중요합니다.  
몇명의 사람들이 이 라이브러리를 수정하고 개선하기 위해 동참하고 있는지, 얼마나 많이 업데이트 되어 왔는지를 확인 할 수 있습니다.  
마지막으로 각 폴더와 파일이름 옆에 커밋 이력을 보시면 이 라이브러리가 언제 수정되었는지 커밋 이력들을 통해서 이 라이브러리가 활성화 되어있는지 확인하시면 됩니다.  

![axios](/assets/images/vue/vue-lv1/beginner8_1.png)  

axio의 특징을 볼텐데 Promise based HTTP client for the browser and node.js라고 쓰여 있습니다.  
프로미스란 자바스크립트의 비동기 처리 패턴을 의미합니다.  

### 자바스크립트의 비동기 처리 패턴
- callback
- promise
- promise + generator
- async  & await

[자바스크립트 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)  
[자바스크립트 promise 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)  
[자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)  


이 화면을 내려보시면 실제로 axios가 어떤 브라우저에서 호환이 되는지, 예제, 각각의 api에 대한 설명등이 자세하게 되어있습니다.  
이런 부분들 때문에 axios를 사용하는 것이 편합니다.  

## 8.3 axios 실습 및 this 설명

axios를 샘플로 돌려보고 어떤식으로 네트워크요청에 대해서 확인하고 데이터를 뿌리는지 살펴보겠습니다.  


```html
<div id="app">
    <button v-on:click="getData">get user</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    new Vue({
        el: '#app',
        methods: {
            getData: function() {
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    })
</script>
```

axios는 CDN으로 연결하였습니다.(github 페이지에서 하단에 installing에 cdn 확인 가능)  
여기서 제일 중요한것은 버튼을 클릭했을때 getData라는 메서드를 호출하는 것입니다. 메서드의 axios.get에서 참고하는 url로 이동해보면 사용자정보가 담긴 배열을 볼 수 있습니다.  

![axios](/assets/images/vue/vue-lv1/beginner8_2.png)  

`jsonplaceholder`라는 것은 `REST API` 라는 자바스크립트로 api를 요청할때 테스트해볼 수 있는 사이트입니다.  
url로 이동했을때 확인 할 수 있는 데이터는 테스트하면서 기능 구현을 해볼 수 있는 샘플이라고 보면 됩니다.  

10개의 유저정보를 받아와서 버튼을 눌렀을때 성공하면 `then`으로 진입하고 실패하면 `catch`로 진입합니다.  

브라우저 콘솔창에서 확인해보도록 하겠습니다.  
get user 버튼을 클릭하면 데이터를 받아옵니다. 서버로 요청이 가고 돌아온 응답입니다.  
이중에 가장 필요한 부분은 `data`라는 속성에 들어있는 사용자 정보입니다.  

![axios](/assets/images/vue/vue-lv1/beginner8_3.png)  

따라서 data만 콘솔창에 찍어보겠습니다.  

```html
<div id="app">
    <button v-on:click="getData">get user</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    new Vue({
        el: '#app',
        methods: {
            getData: function() {
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    })
</script>
```

다시 버튼을 클릭해보면 data가 배열로 넘어옵니다.  

![axios](/assets/images/vue/vue-lv1/beginner8_4.png)  

받아온 `data`를 div에 뿌려보겠습니다.  
그러려면 `data`라는 속성을 선언하고 `users`라는 속성에 빈배열을 넣어줍니다.  
그리고 `this.users = response.data;`를 통해서 받아온 data를 users속성에 넣어줍니다.  
여기서 확인할것은 this.users가 과연 data안의 users를 말하는가입니다.  
페이지로 돌아가서 확인해봅시다.  

```html
<div id="app">
    <button v-on:click="getData">get user</button>
    <div>

    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            users: []
        },
        methods: {
            getData: function() {
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    console.log(response.data);
                    this.users = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    })
</script>
```

![axios](/assets/images/vue/vue-lv1/beginner8_5.png)  

Root컴포넌트에 users데이터가 빈배열로 들어가있고 버튼을 누르면 콘솔창에 10개의 사용자 정보가 찍히지만 users는 계속 빈배열입니다.  

this.users의 this는 axios.get()을 호출하기 전의 this와 다릅니다.  

```javascript
    getData: function() {
        this //1번 this
        axios.get(url)
            .then(function(response) {
                this.users = response.data; //2번 this
            })
    }
```

즉, `getData()` 에서 바로 호출된 1번 `this`와 `axios.get()`이 호출된 후 `then` 메서드에 의해 비동기적으로 실행된 `this`는 서로 다른것을 가리킵니다.  

`getData()`의 1번 `this`는 `new Vue()`로 생성된 인스턴스 Root컴포넌트를 바라보고, `axios.get()`으로 호출된 `callback function`안에서의 2번 this는 비동기적으로 실행되면서 실행컨텍스트가 바뀌어 this가 가리키는 대상도 바뀝니다.  

click이벤트로 호출되는 함수도 콜백함수(비동기적으로 실행)이지만 이때는 클릭한 대상(해당 컴포넌트)을 실행컨텍스트의 this에 담아가는 반면, axios.get()처럼 비동기적으로 데이터를 받아온후 콜백함수로 실행되는 function은 해당 function을 실행시킨 주체를 따로 담을게 없어서 window(전역객체)를 실행컨텍스트의 this에 담습니다.  

```html
<div id="app">
    <button v-on:click="getData">get user</button>
    <div>

    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            users: []
        },
        methods: {
            getData: function() {
                console.log(this); //1번 this
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    console.log(response.data);
                    console.log(this) // 2번 this
                    this.users = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    })
</script>
```

1번 this와 2번 this를 구분해서 콘솔로 찍어서 확인해봅시다.  

![axios](/assets/images/vue/vue-lv1/beginner8_6.png)  

각각 vue 컴포넌트와 window를 가져오는 것을 볼 수 있습니다.  

이에 대한 해결책으로 변수에 this를 먼저 담고, 그 변수를 전달하는 것입니다.  

```html
<div id="app">
    <button v-on:click="getData">get user</button>
    <div>

    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            users: []
        },
        methods: {
            getData: function() {
                // vue 인스턴스를 가리키는 this
                var vm = this;
                
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    console.log(response.data);
                    vm = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    })
</script>
```

화살표함수를 사용하면 변수를 따로 지정하는 대신에 바로 this로 연결 할 수 있습니다.  

받아온 사용자 정보를 div에 뿌려보도록 하겠습니다.

```html
<div id="app">
    <button v-on:click="getData">get user</button>
    <div>
        {{ users }}
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            users: []
        },
        methods: {
            getData: function() {
                // vue 인스턴스를 가리키는 this
                var vm = this;
                
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    console.log(response.data);
                    vm = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        }
    })
</script>
```

## 8.4 웹 서비스에서의 클라이언트와 서버와의 HTTP 통신 구조

![axios](/assets/images/vue/vue-lv1/beginner8_7.png)  

브라우저와 서버의 관계를 살펴보겠습니다.  
브라우저에서 HTTP(클라이언트와 서버간의 데이터를 주고받기위한 규칙) 요청을 서버로 보냅니다.  
axios.get('url')로 요청을 보냈습니다. 그러면 서버에서는 브라우저로 사용자 데이터를 보냅니다.  
이렇게 요청을 보내고 받는것이 HTTP라고 보면 됩니다.  

브라우저에서 서버가 어떤식으로 HTTP를 주고받는지 보겠습니다.  
브라우저가 서버에 요청을 보냅니다. 그랬을때 서버의 로직을 통해서 DB의 값을 꺼내옵니다.  
그 결과물이 서버에서 브라우저로 응답으로 돌아갑니다.

![axios](/assets/images/vue/vue-lv1/beginner8_8.png)  

## 8.5 크롬 개발자 도구 네트워크 패널 보는 방법

크롬 개발자 도구에서 네트워크 패널이 있습니다.    
All, XHR, JS, CSS ... 등이 있는데 XHR을 통해 비동기 통신에 대해 볼 수 있습니다.  
여기에서 get user 버튼을 누르면 HTTP Request가 서버로 날라갑니다.  

![axios](/assets/images/vue/vue-lv1/beginner8_9.png)  

users를 클릭하면 어떤요청이 서버로 갔고 어떤 응답이 왔는지에 대한 정보들이 뜹니다.  
이 패널을 자세히 보면 버그를 잡는데 수월합니다.  

![axios](/assets/images/vue/vue-lv1/beginner8_10.png)  

첫번째로 Headers엔 `General`, `Response Header`, `Request Header`가 있습니다.  
`HTTP Header`를 의미하는데 여기에는 특정 요청에 대한 정보나 응답에 대한 정보가 담겨있습니다.  

General을 보면 Request URL과 Request Method를 보실 수 있습니다. url로 get 요청을 보냈다는 것을 알 수 있습니다.  
그리고 status 200을 보면 정상적으로 응답을 받았다는 것을 알 수 있습니다.

![axios](/assets/images/vue/vue-lv1/beginner8_11.png)  

Response Headers는 서버에서 어떤 응답을 줬는지에 대한 정보를 담고있습니다.

캐싱이나 etag 등 여러가지 정보들을 담고있습니다.

![axios](/assets/images/vue/vue-lv1/beginner8_12.png)  

Request Headers는 브라우저 정보들부터 시작해서 현재 브라우저가 받아줄 수 있는 format이나(Accept) 부가적인 정보들이 들어있고, User Agent는 현재 브라우저에 대한 정보입니다.

axios.get()의 get은 정보를 달라는 요청이기 때문에 Response에는 항상 그 정보가 담겨있습니다.  
Preview로 보면 어떤식으로 정보가 담겨 오는지 보기 편합니다.  

![axios](/assets/images/vue/vue-lv1/beginner8_13.png)  

