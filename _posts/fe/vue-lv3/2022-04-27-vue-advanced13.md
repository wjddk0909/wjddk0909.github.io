--- 
title: "13 - 컴포넌크 디자인 패턴" 
excerpt: "Vue component"
categories: 
    - vue-lv3
tags: 
    - vue
    - component
    - design pattern
toc: true
--- 

## 13.1 Component Design Patterns

컴포넌트 디자인 패턴  
- Common : 기본적인 컴포넌트 등록과 컴포넌트 통신
- Slot : 마크업 확장이 가능한 컴포넌트
- Controlled : 결합력이 높은 컴포넌트
- Renderless : 데이터 처리 컴포넌트

## 13.2 Common Approach

- 컨테이너 컴포넌트 개념으로 appHeader와 appContent에 데이터를 내려주는 app.vue가 컨테이너 컴포넌트가 됨
- 내려준 데이터를 가지고 표현으로 하고 조작을 하면 이벤트로 올리는 기본적인 컴포넌트 설계방식

>[diff check](https://github.com/wjddk0909/vue-design-pattern/commit/d44e12c8a303d7f641e12cf58bce836d918560f2)

## 13.3 Component with Slots - Slot vs Props

- <item>아이템1</item> 컴포넌트 <item></item>안에 텍스트가 들어가 있는 형태
- Item.vue에서 slot을 지우고 'item1'이라고 텍스트를 고정시켜 놓으면 화면에는 item1이 다섯개 찍힘(상위 App.vue에서 정의해준 내용이 소용없게됨)
>[diff check](https://github.com/wjddk0909/vue-design-pattern/commit/24c77a8971b3273dc4dc0ee1a3e837c72703269a)

- 기존의 props 방식
>[diff check](https://github.com/wjddk0909/vue-design-pattern/commit/5a40536d813b1a15e87593e4b502a2242a03faad)\

## 13.4 Component with Slots 구현 방법과 활용처

- slot을 사용하면서 App.vue에서 데이터에 배열로 값을 넣고 그 데이터를 v-for로 뿌려주면 하위 Item.vue 컴포넌트는 데이터 의존성이 없어진다 -> 데이터는 App.vue에서 가지고 있기 때문에 하위에서는 단지 표현만 해줌
>[diff check](https://github.com/wjddk0909/vue-design-pattern/commit/3d9d44a07a8d92b21c2b3b8ebbc44260b982b0ed)

- slot을 사용하면 정의하는 곳에서 다시 돔구조와 스타일 정의등이 가능하다
>[diff check](https://github.com/wjddk0909/vue-design-pattern/commit/49b5ce4c16b9a8a99442ac99ae8c4d767151f186)

## 13.4 Controlled Component - Input 박스를 다룰 때 생기는 문제점

- checked: false로 정의하고 이것을 props로 App.vue에서 CheckBox.vue에 내려주고 체크박스에서 v-model로 연결
- 화면에서 체크박스를 클릭하면 오류가 뜸 -> 오류메세지의미 : prop을 하위에서 바꾸지 마라는 의미
- 컴포넌트의 n방향 통신을 방지하기 위해 위에서 내리고 아래에서 이벤트를 올리는데 여기서는 하위에서 checked: false로 내려온것을 클릭할때 true로 바꾸게 되면서 뜨는 오류이다.
>[diff check](https://github.com/wjddk0909/vue-design-pattern/commit/ef851c670633e06e421339e04bd8abba8a4ba962)