--- 
title: "vue intersection observer로 infinite scroll 구현하기" 
excerpt: "infinite scroll"
categories: 
    - vue-study
tags: 
    - vuex
    - intersection observer
    - infinite scroll
toc: false
--- 
## intersection observer

[참고페이지1](https://codesandbox.io/s/kxm8wlnn85?file=/src/InfiniteScroll.vue:137-146)
[참고페이지1](https://velog.io/@kbpark9898/Vue-intersection-observer%EB%A1%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%ED%83%90%EC%A7%80%ED%95%98%EA%B8%B0)

- 사용자가 감시하고자 하는 페이지의 요소가 특정 요소(브라우저의 viewport)와 교차되는 정도를 관찰하고, 설정해둔 비율 이상의 교차가 일어났을 떄 실행되어야 하는 콜백 함수를 등록

```javascript
// mdn 예제 코드
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
```
- root 옵션은 null로 지정해두면 기본적으로 브라우저 viewport를 이용
- rootMargin은 css margin과 비슷한 속성이며, root 속성의 여백을 의미
- threshold는 intersection observer가 observe하는 target이 root옵션에서 지정한 요소(혹은 브라우저 viewport)와 얼마나 교차했을 때 콜백함수를 트리거 하는지 결정하는 옵션(0~1 1은 100%)

```javascript
//triggerObserver.vue

<template>
  <div ref="triggerDiv">_</div>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      option: {
        root: null,
        threshold: 1,
      },
    };
  },
  methods: {
    handleIntersect: function (target) {
      if (target.isIntersecting) this.$emit(`triggerFadeIn`);
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersect(entries[0]);
    }, this.option);
    this.observer.observe(this.$refs.triggerDiv);
  },
};
</script>

<style scoped>
div {
  opacity: 0;
}
</style>
```

- triggerObserver라는 컴포넌트를 만들고 다른 컴포넌트에서 재활용
- intersection observer가 observe할 의미 없는 요소를 하나 생성하기 -> `<div ref="triggerDiv">_</div>`
- observe할 요소는 null로 지정하여 브라우저 viewport를 이용
- threshold는 1로 지정하여 해당 div 태그가 브라우저에 전부 표시되었을 때 trigger를 발동
- 이 컴포넌트는 observe만을 위해 존재하므로 애니메이션 발생과 관련한 구체적인 코드는 작성하지 않고, 해당 구현을 부모 컴포넌트에 위임 -> this.$emit(`triggerFadeIn`); 부모 컴포넌트로 이벤트 emit
  - `handleIntersect` 메소드 -> 특정 target이 옵션에 지정된 대로 root 요소와 교차되었을 때 수행하는 행동 정의
- observe할 target를 넘겨주는게 중요
  - `observe(this.$refs.triggerDiv)`형태로 넘김 -> Vue의 ref를 이용
  - 그냥 `document.querySelector`를 이용해서 target을 골라서 넘겨줬다면, 재사용을 위해 만들어진 컴포넌트임에도 불구하고 재사용할때마다 선택된 dom요소만 등록되기 때문에 컴포넌트 재사용이 불가능하다.

```javascript
// 부모 컴포넌트
<template>
  <transition v-on:enter="enter">
    <div v-if="show" ref="dreamWrapper" class="dreamWrapper">
      <h2>MY DREAM</h2>
      <section>
        ... (중략) ...
        <DreamObserver v-on:triggerFadeIn="fadeIn"></DreamObserver>
        ... (중략) ...
      </section>
    </div>
  </transition>
</template>

<script>
import TriggerObserver from "./observers/TriggerObserver.vue";
export default {
  name: "MyDream",
  components: {
    DreamObserver: TriggerObserver,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    enter: function (el) {
      el.style.opacity = 0;
    },
    fadeIn: function () {
      this.$refs.dreamWrapper.style = "transition: opacity 1s";
    },
  },
  mounted() {
    this.show = true;
  },
};
</script>
```

예제 코드 보러가기
[github infinite scroll](https://github.com/wjddk0909/vue-intersection-observer)