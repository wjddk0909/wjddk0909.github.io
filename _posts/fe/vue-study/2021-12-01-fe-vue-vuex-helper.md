--- 
title: "vuex helper 함수" 
excerpt: "vuex helper"
categories: 
    - vue-study
tags: 
    - vuex
    - helper
    - namespace
toc: false
--- 
## vuex 기본구조

![vuex](/assets/images/vue-study/vuex1_1.png)  

## vuex 흐름

1. store 생성 : 통합 저장소

```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {},
  actions: {},
  mutations: {}
})
```

2. Vuex를 Vue 컴포넌트에 가져오기

```javascript
// 'Counter' 컴포넌트를 만듭니다
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}
```

3. getters

Vuex는 `getters`를 store 안에 정의하는것을 허락
`getters`는 저장소 `state`의 값을 기반으로 `state`의를 계산해야 할 때 사용
`computed` 속성처럼 getter의 결과는 종속성(dependencies)에 따라 캐쉬되고, 일부 종속성이 변경된 경우에만 다시 재계산

속성유형 접근 방법  
```javascript
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    // 첫 번째 전달 인자로 상태(state)를 받음
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // state와 다른 getter도 받을 수 있습니다.
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
})
```
