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

![vuex](/assets/images/vue/vue-study/vuex1_1.png)  

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

메소드 유형 접근 방법  
함수를 반환하여  getters 에 전달인자로 전달가능  
저장소의 배열을 검색할때 특히 유용, 메서드를 통해 접근하는 getter는 호출 할 때마다 실행되며 결과가 캐시되지 않는다는 것을 유의하기  
```javascript
getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}
```

4. map Helper

헬퍼 함수에는 `mapState()`,  `mapGetters()`,  `mapMutations()`, `mapActions()` 가 있다.

```javascript
// 독립 실행 형 빌드에서 헬퍼가 Vuex.mapState로 노출됩니다.
import { mapState } from 'vuex'

export default {
  // ...
  computed: mapState({
    // 화살표 함수는 코드를 매우 간결하게 만들어 줍니다!
    count: state => state.count,

    // 문자열 값 'count'를 전달하는 것은 `state => state.count`와 같습니다.
    countAlias: 'count',

    // `this`를 사용하여 로컬 상태에 액세스하려면 일반적인 함수를 사용해야합니다
    countPlusLocalState (state) {
      return state.count + this.localCount
    },
    
    // 매핑 된 계산된 속성의 이름이 상태 하위 트리 이름과 같을 때 문자열 배열을 ```mapState```에 전달
    'count'
  })
}
```
```javascript
// 저장소 getter를 로컬 computed속성에 매핑합니다.
getter를 다른이름으로 매핑하려면 객체를 사용하면 됩니다.
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    // getter를 객체 전개 연산자(Object Spread Operator)로 계산하여 추가합니다.
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}

```

5. mutations

```javascript
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 상태 변이 
      state.count++
    }
  }
})
```

`commit()`  
`store.commit()`에 추가 전달인자를 사용해서 mutations를 호출(동기적 async여야 함)
[참고페이지](https://tofusand-dev.tistory.com/7)
```javascript
store.commit('increment', 10)
```

6. actions

Actions는 Mutation과 유사  
상태를 변화시키는 대신 Actions에서 Mutations에 대한 commit()(Mutation내부의 메서드를 실행)을 하는것과,  
작업에 임의의 비동기 작업이 포함될 수 있다는 점이 다름

```javascript
const store = new Vuex.Store({
  ...
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```

`dispatch()`  
`store.commit()`은 동기적이지만 `store.dispatch()`는 비동기작업도 가능

```javascript
...
actions: {
    // 객체와 함께 디스패치
    store.dispatch({
      type: 'incrementAsync',
      amount: 10
    })
    
    // 내부에 또다른 액션을 만들 수 있음
    store.dispatch('actionA').then(() => {
        commit('someOtherMutation')
    })
    
    // async/await 사용 가능
    async actionB({commit){
        commit('gotData', await getData())
    },
    async actionC({ dispatch, commit }) {
        await dispatch('actionA')   // actionA가 끝나기를 기다립니다.
        commit('gotOtherData', await getOtherData())
    }
}
```