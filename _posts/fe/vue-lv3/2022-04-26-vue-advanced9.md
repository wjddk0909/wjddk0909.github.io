--- 
title: "9 - Mixin과 하이 오더 컴포넌트" 
excerpt: "Vue news"
categories: 
    - vue-lv3
tags: 
    - vue
    - mixin
    - hoc
toc: true
--- 

## 9.1 컴포넌트 재활용 방법 및 재활용할 포인트 소개

- dispatch를 분기처리 하기 위해 ListItem에 있던 dispatch를 각각의 view파일로 옮김

>[diff check](https://github.com/wjddk0909/vue-news/commit/e605bd1e36873caf64ba40af860edd802a96f8d8)

## 9.2 이벤트 버스를 이용한 스피너 컴포넌트 구현

- export 스타일에 따라서 import하는 방법이 달라진다.

```javascript
// default의 경우는 아무 이름이나 정의해서 사용할 수 있다.
// bus.js
export default new Vue();
// App.vue
import bus from './bus.js' // bus나 bus1 이나 아무거나 가능

// bus.js
export const bus = new Vue();
// App.vue
import { bus } from './bus.js' // 먼저 정의해준 변수명을 {}안에 넣어서 사용
```

>[diff check](https://github.com/wjddk0909/vue-news/commit/c644bff38ffe7391be6e49d3c2429ed3f5882615)

## 9.3 스피너 실행 및 종료 시점 알아보기

- actions.js에서 response를 return 하면 NewsView에서 dispatch에 .then으로 프로미스 체이닝이 가능

>[diff check](https://github.com/wjddk0909/vue-news/commit/c139797550d73804d916ed64d4f2b5000d21910d)

## 9.4 하이 오더 컴포넌트(HOC) 소개 및 구현

컴포넌트의 로직을 재사용하기 위한 기술 하이 오더 컴포넌트 
- CreateListView.js가 하이오더컴포넌트
- 기존에 있었던 컴포넌트의 위에 하나의 컴포넌트가 더 생성됨

>[diff check](https://github.com/wjddk0909/vue-news/commit/a58c83719b1b8befd5ef9f213e964e3135aa219f)

## 9.5 하이 오더 컴포넌트에서 사용할 ListView 컴포넌트 구현

>[diff check](https://github.com/wjddk0909/vue-news/commit/ddc1c29c3b0bbae9caf83abcc0df58a143e9f839)

## 9.6 하이 오더 컴포넌트가 적용된 앱 구조 설명 및 흐름 정리

- router/index.js에서 `component: createListView('NewsView'),`으로 pagename을 넘기고
- CreateListView에서 name으로 받고 재사용하는 로직들을 created()에 넣어줌
- spinner를 켜고 끄는 로직까지 같이 넣어줌

>[diff check](https://github.com/wjddk0909/vue-news/commit/2af588dd119046a7cf25ab8fb3c253cd95318408)

## 9.7 Mixin의 개요와 활용처 그리고 HOC와의 차이점

Mixins
- 여러 컴포넌트간에 공통으로 사용하고 있는 로직 기능들을 재사용하는 방법
- 믹스인안에 정의할 수 있는 재사용 로직은 `data, methods, created` 등과 같은 컴포넌트 옵션
- hoc는 중간에 컴포넌트가 하나 더 생기므로 레벨이 깊어져서 통신에 불편함이 생김

```javascript
var HelloMixins = {
    // 컴포넌트 옵션 (data, methods, created 등)\
};

new Vue({
    mixins: [HelloMixins]
})
```
위와 같이 믹스인을 주입할 컴포넌트에 `mixins` 속성을 선언하고 `[]` 배열안에 주입할 믹스인들을 추가

예시
```javascript
var DialogMixin = {
    data() {
        return {
            dialog: false
        }
    },
    methods: {
        showDialog() {
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
        }
    }
}
```
`DialogMixin`에 다이얼로그의 표시 상태를 나타내는 `dialog`데이터와 다이얼로그를 열거나 닫는 메서드 `showDialog()`, `closeDialog()` 정의

재사용
```html
<!-- LoginForm.vue -->
<script>
    import { DialogMixin } from './mixins.js';

    export default {
        mixins: [ DialogMixin ],
        methods: {
            submitForm() {
                axios.post('login', {
                    id: this.id,
                    pw: this.pw
                })
                .then(() => this.closeDialog())
                .catch((error) => new Error(error));
            }
        }
    }
</script>
```

## 9.8 Mixin 적용 후 HOC 구조와 비교 

- hoc는 AskView와 ListItem 사이에 ListView 컴포넌트가 생성되어 레벨이 더 깊어짐
- mixins는 새로 생성되는 컴포넌트가 없음

>[diff check](https://github.com/wjddk0909/vue-news/commit/0bfe7e56eb6c5acc7258b0534f07ecaa41e3f639)

## 9.9 Mixin 실습 및 컴포넌트 재활용 방법에 대한 리뷰
