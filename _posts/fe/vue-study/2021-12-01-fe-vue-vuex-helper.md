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

## Module

여러개의 저장소를 모듈로 나눌 수 있다.
각 모듈은 자체 state, mutation, action, getter 및 모듈을 중첩하여 포함 할 수도 있다.

```javascript
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    // import 도 가능
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA'의 상태
store.state.b // -> moduleB'의 상태
```

## 네임스페이스

기본적으로 module 내의 actions, mutations, getter 는 전역 네임 스페이스 로 등록   
네임스페이스의 getter와 actions 는 지역화된 getters ,  dispatch , commit  을 받습니다. 즉, 동일한 모듈 안에서 접두어 없이 모듈 자산을 사용  
모듈이 독립적이거나 재사용되길 원할 경우 namespaced: true 를 설정  
만약 큰 프로젝트 작업시 네임스페이스를 사용하는것이 좋다.  

```javascript
const store = new Vuex.Store({
  modules: {
    ...
    namespaced: true
  }
})
```

네임스페이스 모듈 내부에서 자산 접근

전역 네임스페이스의 action을 dispatch하거나 mutation을 commit 하려면 dispatch ,  commit  에 3번째 인자로  { root : true }  를 전달

```javascript
modules: {
  foo: {
    namespaced: true,

    getters: {
      // `getters`는 해당 모듈의 지역화된 getters
      // getters의 4번째 인자를 통해서 rootGetters 사용 가능
      someGetter (state, getters, rootState, rootGetters) {
        getters.someOtherGetter // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter // -> 'someOtherGetter'
      },
      someOtherGetter: state => { ... }
    },

    actions: {
      // 디스패치와 커밋도 해당 모듈의 지역화된 것
      // 전역 디스패치/커밋을 위한 `root` 옵션 설정 가능
      someAction ({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter // -> 'foo/someGetter'
        rootGetters.someGetter // -> 'someGetter'

        dispatch('someOtherAction') // -> 'foo/someOtherAction'
        dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

        commit('someMutation') // -> 'foo/someMutation'
        commit('someMutation', null, { root: true }) // -> 'someMutation'
      },
      someOtherAction (ctx, payload) { ... }
    }
  }
}
```

네임스페이스 모듈에서 전역 액션을 등록하려면, root : true root : true  를 표시하고 handler handler  함수에 액션을 정의하면 됩니다.

```javascript
{
  actions: {
    someOtherAction ({dispatch}) {
      dispatch('someAction')
    }
  },
  modules: {
    foo: {
      namespaced: true,

      actions: {
        someAction: {
          root: true, // 👀
          handler (namespacedContext, payload) { ... } // -> 'someAction'
        }
      }
    }
  }
}
```

## Helper에서  namespaced가 설정된 module 바인딩

mapState   ,  mapGetters  ,   mapActions   그리고  mapMutations  헬퍼에서 네임스페이스 모듈을 컴포넌트에 바인딩 할 때 조금 장황하게 됩니다.

```javascript
computed: {
  // 방법 1
  ...mapState({
    a: state => state.some.nested.module.a,
    b: state => state.some.nested.module.b
  })
  
  // 단순화된 방법 2
  ...mapState('some/nested/module', {
  	a: state => state.a,
    b: state => state.b
  })
},
methods: {
  // 방법 1
  ...mapActions([
    'some/nested/module/foo', // -> this['some/nested/module/foo']()
    'some/nested/module/bar'  // -> this['some/nested/module/bar']()
  ])
  
  // 단순화된 방법 2
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
}
```

## 네임스페이스가 지정된 모듈에 접근

```javascript
this.$store.commit('namespace/MUTATION_NAME', payload)
this.$store.dispatch('namespace/actionDispatch')
this.$store.state.patch.stateLists
```

## createNameSpacedHelpers 를 사용하여 네임스페이스 헬퍼 생성하여 바인딩

```javascript
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

export default {
  computed: {
    // `some/nested/module`에서 찾음
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
  methods: {
    // `some/nested/module`에서 찾음
    ...mapActions([
      'foo',
      'bar'
    ])
  }
}
```

개발자가 개발한 특정 모듈을 위해서 만든 플러그인을 사용자가 Vuex 저장소에 등록할 때 예측할 수 없는 네임스페이스 오류를 주의해야 함. 플러그인 사용자가 특정 모듈을 네임스페이스 모듈 하위에 추가하면 해당 모듈도 동일한 네임스페이스로 등록됨. 이러한 상황을 피하기 위해서 플러그인 옵션을 통해 네임스페이스 값을 전달받을 수 있어야 함.

## 동적 모듈 등록

store.registerModule()  메소드로 저장소가 생성 된 후에 모듈을 등록

```javascript
store.registerModule('myModule', {
  // ...
})

// `nested/myModule` 중첩 모듈 등록
store.registerModule(['nested', 'myModule'], {
  // ...
})

// 모듈의 상태는 store.state.myModule 와 store.state.nested.myModule 로 노출 됩니다.
```

store.unregisterModule()  을 사용하여 동적으로 등록 된 모듈을 제거할 수도 있습니다. 이 방법으로는 정적 모듈(저장소 생성시 선언 됨)을 제거 할 수 없다.  

새 모듈을 등록할 때 이전 상태를 유지하고자 할 수 있다.
preserveState  옵션을 사용하면 그렇게 할 수 있다. `store.registerModule('a', module, { preserveState: true})`

## 모듈 재사용

때로는 한 모듈에서 여러 인스턴스를 생성해야 할 수도 있다.   
일반 객체를 사용하여 모듈의 상태를 선언하면 상태 객체가 참조에 의해 공유되고 변이 될 때 교차 저장소/모듈의 상태 오염을 일으킨다.  

이것은 Vue 컴포넌트 내부의 data와 동일한 문제. 해결책도 역시 동일. 함수를 사용하여 모듈 상태를 선언

```javascript
const MyReusableModule = {
  state: () => ({
    foo: 'bar'
  }),
  // 변이, 액션, getters...
}
```

