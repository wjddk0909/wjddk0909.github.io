--- 
title: "11 - Vuex - 헬퍼 함수" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
    - vuex
    - store
    - helper
toc: true
--- 

## 11.1 헬퍼 함수 및 ES6 Spread 연산자 소개

각 속성들을 더 쉽게 사용하는 방법 - Helper

store에 있는 아래 4가지 속성들을 간편하게 코딩하는 방법
- state -> mapState
- getters -> mapGetters
- mutations -> mapMutations
- actions -> mapActions

헬퍼의 사용법
- 헬퍼를 사용하고자 하는 vue 파일에서 해당 헬퍼를 로딩

```javascript
// App.vue
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed() { ...mapState(['num']), ...mapGetters(['countedNum']) },
    methods: { ...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn']) }
}
```

## 11.2 mapState, mapGetters 소개 및 ES6 Spread 연산자 쓰는 이유

mapState
- Vuex에 선언한 state 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

```javascript
// App.vue
import { mapState } from 'vuex'

computed() {
    ...mapState(['num'])
    // num() { return this.$store.state.num; }
}

// store.js
state: {
    num: 10
}
```
```html
{% raw %}<!-- <p>{{ this.$store.state.num }}</p> -->
<p>{{ this.num }}</p>{% endraw %}
```

mapGetters
- Vuex에 선언한 getters 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

```javascript
// App.vue
import { mapGetters } from 'vuex'

computed() { 
    ...mapGetters(['reverseMessgae']) 
}

// store.js
getters: {
    reversMessage(state) {
        return state.msg.split('').reverse().join('');
    }
}
```
```html
{% raw %}<!-- <p>{{ this.$store.getters.reversMessage }}</p> -->
<p>{{ this.reversMessage }}</p>{% endraw %}
```

## 11.3 [리팩토링] getters와 mapGetters 적용하기

store.js
- getters에 `storedTodoItems`변수 지정하고 state의 todoItmes에 접근

TodoList.vue
- computed에 todoItmes() 메서드에 `this.$store.getters.storedTodoItems;` 리턴 시켜주기

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/b306678eb054ec395e200caedf70324b720a7636)

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/1d049794f72638cdf7d682668120b16394eaa573)

## 11.4 mapMutations, mapActions 소개 및 헬퍼의 유연한 문법

mapMutations
- Vuex에 선언한 mutations 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

```javascript
// App.vue
import { mapMutations } from 'vuex'

methods: {
    ...mapMutations(['clickBtn']),
    authLogin() {},
    displayTable() {}
}

// store.js
mutations: {
    clickBtn(state) {
        alert(state.msg);
    }
}
```
```html
<button @click="clickBtn">popup message</button>
```

mapActions
- Vuex에 선언한 actions 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

```javascript
// App.vue
import { mapActions } from 'vuex'

methods: {
    ...mapActions(['delayClickBtn']),
}

// store.js
actions: {
    delayClickBtn(context) {
        setTimeout(() => context.commit('clickBtn'), 2000);
    }
}
```
```html
<button @click="delayClickBtn">delay popup message</button>
```

헬퍼의 유연한 문법
- Vuex에 선언한 속성을 그대로 컴포넌트에 연결하는 문법
```javascript
// 배열 리터럴
...mapMutations([
    'clickBtn', // 'clickBtn': clickBtn
    'addNumber' // addNumber(인자)
])
```
- Vuex에 선언한 속성을 컴포넌트의 특정 메서드에다가 연결하는 문법
```javascript
...mapMutations({
    popupMsg: 'clickBtn' // 컴포넌트 메서드 명: Store의 뮤테이션 명
})
```

## 11.5 [리팩토링 & 퀴즈] mapMutations 적용 및 퀴즈

- 헬퍼 함수들은 인자를 선언하지 않아도 함수를 호출하는 시점에 인자를 넘기면 그대로 가져온다.

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/7dae61fdccda7ab92d149e33facdad54e4e3dd68)

## 11.6 [리팩토링 & 퀴즈] mapMutations 퀴즈 풀이

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/67784bbc9618685935ff2da326c65ffd7b042338)

## 11.7 헬퍼 함수가 주는 간편함

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/930c25c6e7529f517740a12a9f00915411ec0b6b)