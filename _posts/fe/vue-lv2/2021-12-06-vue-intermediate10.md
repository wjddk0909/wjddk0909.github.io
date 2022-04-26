--- 
title: "10 - Vuex - 주요 기술 요소" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
    - vuex
    - store
toc: true
--- 

## 10.1 Vuex 설치 및 등록

Vuex 설치하기
[vuejs 공식 문서](https://vuex.vuejs.org/installation.html#direct-download-cdn)

NPM
```sh
// npm install vuex@next --save // 공식문서에 써있는 걸로 설치하면 Vue3를 기준으로 설치 되므로 코어 라이브러리는 버전을 명시해줘야함
npm i vuex@3.4.0
```

Yarn
```sh
// yarn add vuex@next --save
yarn add vuex@3.4.0 // yarn을 사용하면 yarn으로 설치해야 함
```

components 폴더랑 같은 레벨에 stor 폴더 만들기  

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/5bc72b82f63929c142affcd6997be802284b70d6)

## 10.2 state와 getters 소개

Vuexa 기술 요소
- state : 여러 컴포넌트에 공유되는 데이터 `data`
- getters : 연산된 state 값을 접근하는 속성 `computed`
- mutations : state 값을 변경하는 이벤트 로직, 메서드 `methods`
- actions : 비동기 처리 로직을 선언하는 메서드 `async methods`

State란?
- 여러 컴포넌트 간에 공유할 데이터 - `상태`

```javascript
// vue
data: {
    message: 'Hello Vue.js'
}

// vuex
state: {
    message: 'Hello vue.js
}
```
```html
{% raw %}
<!-- Vue -->
<p>{{ message }}</p>
{% endraw %}
{% raw %}
<!-- Vuex -->
<p>{{ this.$store.state.message }}</p>
{% endraw %}
```

getters란?
- state 값을 접근하는 속성이자 `computed()` 처럼 미리 연산된 값을 접근하는 속성

```javascript
// store.js
state: {
    num: 10
},
getters: {
    getNumber(state) {
        return state.num;
    },
    doubleNumber(state) {
        return state.num * 2;
    }
}
```
```html
{% raw %}
<p>{{ this.$store.getters.getNumber }}</p>
<p>{{ this.$store.getters.doubleNumber }}</p>
{% endraw %}
```

## 10.3 [리팩토링] state 속성 적용

store.js
- `const storage` 변수를 설정하고 `fetch()` 함수에 기존 App.vue에서 `created`로 가져오던 `localStorage`에 담긴 배열을 뿌려주는 로직을 옮기기  
- `state`에서 `todoItems: storage.fetch()`로 todoItems에 storage변수의 fetch() 함수 연결

TodoList.vue
`v-for="(todoItem, index) in propsdata"` propsdata에서 반복문을 돌리던 것을 `v-for="(todoItem, index) in this.$store.state.todoItems`로 수정

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/91e220b6598930eedb86ccb238517108b1c43578)

## 10.4 mutations와 commit() 형식 소개

mutations란?
- state의 값을 변경할 수 있는 유일한 방법이자 메서드
- 뮤테이션은 `commit()` 으로 동작시킨다.

```javascript
// store.js
state: { num: 10 },
mutations: {
    printNumbers(state) {
        return state.num
    },
    sumNumbers(state, anotherNum) {
        return state.num + anotherNum;
    }
}
```
```javascript
this.$store.commit('printNumbers');
this.$store.commit('sumNumbers', 20);
```

mutations의 commit() 형식
- state를 변경하기 위해 mutations를 동작시킬 때 인자(payload)를 전달할 수 있음

```javascript
// store.js
state: { storeNum: 10 },
mutations: {
    modifyState(state, payload) {
        console.log(payload.str)
        return state.storeNum += payload.num;
    }
}
```
```javascript
this.$store.commit('modifyState' {
    str: 'passed from payload',
    num: 20
});
```

두번째 인자로 값을 넘길 수 있음, 여러개를 보낼때는 객체형태로 보내면 된다.  

## 10.5 [리팩토링&퀴즈] mutations 적용 및 퀴즈 안내

Store.js
- App.vue의 `methods`에 있던 addOneItem을 store.js의 `mutations`로 옮기기
- addOneItem의 첫번째 인자로 state에 접근하기 위해서 `state` 넣기
- TodoInput.vue에서 입력된 값을 this.newTodoItem에 넣어서 보내는데 이것을 받기 위해서 두번째 인자에 `todoItem` 넣기

TodoInput.vue
- 기존에 $emit으로 넘기던 이벤트를 `this.$store.commit('addOneItem', this.newTodoItem);`로 store의 mutations 동작시킴

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/0a647a9889964d27a75c6ac23bc42305b2df9719)

## 10.6 [리팩토링&퀴즈] mutations 퀴즈 풀이 및 할 일 지우기 기능 구현

- removeOneItem은 두번째 인자를 여러개를 받아야해서 객체 형태로 보내기
- TodoList.vue에 `const obj = {todoItem, index}`로 변수에 객체로 넣어주고 store.js에서 두번째 인자로 payload를 넣어주고 안에서 `payload.todoItem` 으로 접근
- 매번 객체를 변수에 담아주기가 번거로우니 바로 commit()의 두번째 인자에 `this.$store.commit('removeOneItem', {todoItem, index});` 객체를 넣어줌

## 10.7 [리팩토링] mutations로 할 일 추가, 완료, 모두 삭제 구현

- App.vue 필요없는 부분 정리

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/fb5fcfa49dc1a75a48b9bfdeb7de8da2157c801c)

## 10.8 왜 mutations로 상태를 변경해야 하는가?

- 여러 개의 컴포넌트에서 아래와 같이 state 값을 변경하는 경우 `어느 컴포넌트에서 해당 state를 변경했는지 추적하기 어렵다.`

```javascript
methods: {
    increaseCounter() { this.$store.state.counter++;}
}
```

- 특정 시점에 어떤 컴포넌트가 state를 접근하여 변경한 건지 확인하기 어렵기 때문
- 따라서, 뷰의 반응성을 거스르지 않게 명시적으로 상태 변화를 수행. 반응성, 디버깅, 테스팅 혜택
- state는 여러개의 컴포넌트에서 공유하고 있기 때문에 특정 컴포넌트에서 변경했을때 추적을 해야한다. 10개의 컴포넌트에서 변경한다고 했을때 어느시점에 어느 컴포넌트에서 변경했는지 알기가 어려움, mutations를 거쳐야 뷰 개발자 도구에서 추적이 가능하다.(어떻게...?) 

## 10.9 actions 소개 및 예제

actions란? 
- 비동기 처리 로직을 선언하는 메서드, 비동기 로직을 담당하는 mutations
- 데이터 요청, Promise, ES6 async와 같은 비동기 처리는 모두 actions에 선언

>[Promise 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
>[자바스크립트 비동기 처리 이해하기](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)

```javascript
// store.js
state: {
    num: 10
},
mutations: {
    doubleNumber(state) {
        state.num * 2;
    }
},
actions: {
    delayDoubleNumber(context) { // context로 store의 메서드와 속성 접근
        context.commit('doubleNumber');
    }
}
```
```javascript
// App.vue
this.$store.dispatch('delayDoubleNumber');
```

actions 비동기 코드 예제1

```javascript
// store.js
mutations: {
    addCounter(state) {
        state.counter++
    },
},
actions: {
    delayedAddCounter(context) {
        setTimeout(() => context.commit('addCounter'), 2000);
    }
}
```
```javascript
// App.vue
methods: {
    incrementCounter() {
        this.$store.dispatch('delayedAddCounter');
    }
}
```

- mutations는 commit이라는 api로 호출하고 actions는 dispatch라는 api로 호출

actions 비동기 코드 예제2

```javascript
// store.js
mutations: {
    setData(state, fetchedData) {
        state.product = fetchedData
    },
},
actions: {
    fetchProductData(context) {
        return axios.get('https://domain.com/products/1')
                    .then(response => context.commit('setData', response));
    }
}
```
```javascript
// App,vue
methods: {
    getProduct() {
        this.$store.dispatch('fetchProductData');
    }
}
```

- getProduct()메서드를 실행하면 actions의 fetchProductData를 실행
- axios가 get이라는 http 요청을 서버에 보낸다.
- 받아오면 then이라는 Promise 콜백으로 응답을 받아서 응답을 setData() mutations를 실행해서 응답을 인자로 넘긴다.
- mutations에서 state의 product에 접근해 서버에서 받아온 응답값(response)을 fetchedData에 넣어준다. 

## 10.10 왜 actions에 비동기 로직을 선언해야 하는가?

- 언제 어느 컴포넌트에서 해당 state를 호출하고, 변경했는지 확인하기가 어려움
    - 여러개의 컴포넌트에서 mutations로 시간차를 두고 state를 변경하면 값의 변화를 추적하기 어렵기 때문에 mutations 속성에는 동기 처리 로직만 넣어야 한다. 
