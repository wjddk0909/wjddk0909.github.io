--- 
title: "[vue]storage - localStorage, sessionStorage 저장" 
excerpt: "storage 저장해서 새로고침시 vuex 유지하기"
categories: 
    - vue-study
tags: 
    - vuex
    - storage
    - localStorage
    - sessionStorage
toc: true
--- 
## storage에 저장해서 새로고침해도 vuex 유지하기

### vuex문제점  
새로고침을 하면 vuex의 store state가 모두 초기화 된다. vuex는 vue의 플러그인이기 때문  
새로고침을 하면 vue 인스턴스 소멸 후 다시 생성되는 vue의 라이프사이클을 생각하면 쉽게 이해가 된다.

### vuex-persistedstate란?
vuex store에 저장된 값을 웹 브라우저의 storage에 저장 및 업데이트를 해준다.  
새로고침이 되어도 없어지지 않기 때문에 storage에 있는 값을 state에 다시 동기화 해준다.

### 설치
`npm install --save vuex-persistedstate`

### 사용

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import notice from '@/store/modules/works/works';
import works from '@/store/modules/works/works';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	modules: {
		notice: {
			...notice,
		},
		works: {
			...works,
		},
	},
};

export default new Vuex.Store({
	...store,
	plugins: [
		createPersistedState({
			paths: ['works'],
		}),
	],
});
export default store
```

vuex-persistedstate의 경로를 등록하여 plugin에 명시해서 사용
모든 store의 값을 저장하면 성능이 떨어질 가능성이 크니 `모듈화 시켜서 저장할 store만 path에 등록`  

그러나 이렇게 저장하면 localStorage에 저장된다.
localStorage에 저장하면 브라우저를 닫았다 열어도 저장이 되어 있는데
내가 적용하고자 한 페이지는 로그인 기능이 들어있어서(로그아웃 기능은 없는 페이지) 새로고침시에만 유지되고 브라우저를 닫으면 날려야한다.
storage option에서 window.sessionStorage를 선택하여 sessionStorage에 저장하도록 설정하면 된다.

```javascript
export default new Vuex.Store({
	...store,
	plugins: [
		createPersistedState({
            storage: window.sessionStorage, // store를 session storage 에 유지
			paths: ['works'],
		}),
	],
});
```

[참고 링크: vuex state를 storage에 저장하기](https://dong-queue.tistory.com/72)

