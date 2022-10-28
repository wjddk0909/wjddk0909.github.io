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

### v-model 사용하기

v-model은 `:value`와 `@input`의 축약 문법이다.  
#### 부모컴포넌트

- `:value`를 사용해서 변수를 바인딩해주고
- 이벤트함수를 사용해서 자식 컴포넌트에서 값 변경을 감지한다. (대신 자식 컴포넌트에서 `this.$emit('input', 변경할 값)` 으로 값이 변경 되었음을 알려줘야 함)  

```html
<!-- 예시 -->
<!-- App.vue -->
<template>
  <div>
    <div>parent-compo {{number}}</div>
    <child-compo :value="number" @input="onChangeNumber" />
  </div>
</template>

<script>
import ChildCompo from "@/components/ChildCompo";

export default {
  data () {
    return {
      number: 0
    }
  },
  methods: {
    onChangeNumber (val) {
      this.number = val;
    }
  },
  components: {
    ChildCompo
  }
}
</script>
<!-- 예시 -->

<!-- 프로젝트 예시 -->
<!-- 여기서 사용한 commentRegist를 자식컴포넌트에서도 사용하고 싶어서 props로 내려줌 -->
<v-textarea
  v-model="commentRegist"
  outlined
  hide-details
  no-resize
  height="108"
  placeholder="댓글을 입력해주세요."
  :value="commentRegistParam.P_CNTS_NTC"
  @input="onChange"
></v-textarea>

<notice-view-parent-comment
  :value="commentRegist"
  :is-content="isContent"
  @input="onChange"
>

<script>
  export default defineComponent({
    setup() {
      const isContent = ref<boolean>(false);
      const commentRegist = ref<string | null>(null);

      // 일단 @input="onChange"(댓글 박스 입력이 있으면)isContent 'true'로 만들기
      // 댓글 박스 입력 지워지면 isContent 'false'로 만들기
      const onChange = val => {
        isContent.value = val !== '';
        console.log('isContent', isContent.value);
      };
    }
  })
</script>
<!-- 프로젝트 예시 -->
```

### 자식 컴포넌트

- 자식 컴포넌트에서는 `this.$emit('input', 변경할 값)` 으로 값이 변경 되었음을 부모 컴포넌트에게 알려야한다.
- 이때, `input`은 부모 컴포넌트에서 `@input`으로 선언한 키워드(`@`뒤에 오는 키워드-임의지정)

```html
<!-- 예시 -->
<!-- ChildCompo.vue -->
<template>
  <div>
    <div>child-compo {{value}}</div>
    <button @click="onClickButton">Add 1</button>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  data () {
    return {
      pvalue: this.value
    }
  },
  methods: {
    onClickButton() {
      this.$emit('input', this.pvalue++)
    }
  }
}
</script>
<!-- 예시 -->
<!-- 프로젝트 예시 -->
<v-textarea
  :value="commentRegist"
  outlined
  hide-details
  no-resize
  height="108"
  placeholder="답글을 입력해주세요."
  @change="changeCommentRegistParam"
  @input="onChange"
></v-textarea>
<script>
  export default defineComponent({
    setup() {
      props: {
        commentRegist: {
          type: String,
        },
        isContent: {
          type: Boolean,
        },
      },


      const onChange = val => {
        context.emit('input', val);
      };
    }
  })
</script>
<!-- 예시 -->
```

- [v-model 설명 참고 페이지](https://velog.io/@okyungjin/Vue-%EB%B6%80%EB%AA%A8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EC%9E%90%EC%8B%9D-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%94%EC%9D%B8%EB%94%A9-v-model-value-input)
