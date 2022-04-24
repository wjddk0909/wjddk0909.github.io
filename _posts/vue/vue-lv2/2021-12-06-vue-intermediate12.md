--- 
title: "12 - Vuex - 프로젝트 구조화 및 모듈화" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
    - vuex
    - store
    - module
toc: true
--- 

## 12.1 스토어 속성 모듈화 방법

프로젝트 구조화와 모듈화 방법1

아래와 같은 store 구조를 어떻게 모듈화 할 수 있을까?

```javascript
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
})
```

힌트! `Vuex.Store({})`의 속성을 모듈로 연결
모듈이라고 하면 각각의 속성의 내용들을 별도의 파일로 분리해서 파일들을 불러와서 담아주기

- ES6의 Import & Export를 이용하며 속성별로 모듈화

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from 'store/getters.js'
import * as mutations from 'store/mutations.js'
import * as actions from 'store/actions.js'

export const store = new Vuex.Store({
    state: {},
    getters: getters,
    mutations: mutations,
    actions: actions
})
```

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/6e8b61ae4187899ea00a6571efd5d03800de72c5)

## 12.2 스토어 모듈화 방법

프로젝트 구조화와 모듈화 방법2
- 앱이 비대해져서 1개의 store로는 관리가 힘들 때 `modules` 속성 사용

```javascript
// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import todo from 'models/todo.js'

export const store = new Vuex.Store({
    modules: {
        moduleA: todo, // 모듈 명칭 : 모듈 파일명
        todo // todo: todo
    }
});

// todo.js
const state = {}
const getters = {}
const mutations = {}
const actions = {}
```

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/695723a3749eebc8cf15c132ef862742653f8fc1)