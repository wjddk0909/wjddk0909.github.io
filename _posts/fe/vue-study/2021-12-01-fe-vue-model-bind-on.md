--- 
title: "vue v-on/v-bind/v-model 차이" 
excerpt: "v-on/v-bind/v-model"
categories: 
    - vue-study
tags: 
    - v-on
    - v-bind
    - v-model
toc: false
--- 
### v-on
해당 HTML 요소의 이벤트를 뷰 인스턴스의 로직과 연결할 때 사용

### v-bind
뷰 인스턴스의 데이터 속성을 해당 HTML 요소에 연결할 때 사용

### v-model
v-bind와 v-on의 조합

1. input 태그에는 `value/input`
2. checkbox 태그에는 `checked/change`
3. select 태그에는 `value/change`

### v-model 속성
사용자의 입력을 받는 UI 요소들에 v-model이라는 속성을 사용하면 입력 값이 자동으로 뷰 데이터 속성에 연결된다.  

```html
<input v-model="inputText">
```
```javascript
new Vue({
  data: {
    inputText: ''
  }
})
```

* v-model의 한계  
한국어, 중국어, 일본어 입력시 한 글자에 대한 입력이 끝나야지 data 속성값과 input 박스의 텍스트가 동기화 된다.  
한국어 입력을 다룰 때, v-bind:value와 v-on:input을 직접 연결해서 사용하는 것을 권고 [Vue.js공식문서](https://kr.vuejs.org/v2/guide/forms.html)

위 코드를 v-bind:value와 v-on:input을 직접 연결해서 작성하면

```html
<input v-bind:value="inputText" v-on:input="updateInput">
```
```javascript
new Vue({
  data: {
    inputText: ''
  },
  methods: {
    updateInput: function(event) {
      var updatedText = event.target.value;
      this.inputText = updatedText;
    }
  }
})
```

매번 v-on과 v-bind를 이용해서 이벤트와 값을 조합해 처리하는것이 귀찮게 느껴지면 input 컴포넌트를 분리해서 부모 컴포넌트에서는 v-model로 처리하는 방법이 있다.  

```html
<!-- BaseInput.vue - 싱글 파일 컴포넌트 구조-->
<template>
  <input v-bind:value="value" v-on:input="updateInput">
</template>
```
```javascript
<script>
export default {
  props: ['value'],
  methods: {
    updateInput: function(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>
```

- `BaseInput` 컴포넌트의 상위 컴포넌트에서 `props`로 받은 `value`를 인풋 태그에 값으로 연결
- 인풋 태그에서 값이 입력되면 인풋 태그에서 `input` 이벤트가 발생하고 `updateInput` 메서드 실행
- `updateInput` 메서드에서 인풋 태그에 입력되 값을 상위 컴포넌트에 `input` 이벤트로 올리기

```html
<!-- App.vue - 싱글 파일 컴포넌트 구조 -->
<template>
  <div>
    <base-input v-model="inputText"></base-input>
  </div>
</template>
```
```javascript
<script>
import BaseInput from './BaseInput.vue';

export default {
  components: {
    'base-input': BaseInput
  },
  data: function() {
    return {
      inputText: ''
    }
  }
}
</script>
```