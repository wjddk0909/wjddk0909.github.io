--- 
title: "3 - Todo App - 애플리케이션 구조 개선하기" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
toc: true
--- 

## 3.1 현재 앱 구조의 문제점 진단 및 개선된 앱 구조 소개

- localStorage.clear(); 
    - localStorage 지우는 api 
- 이렇게 작성하면(삭제 뿐만 아니라 todoInput쪽 할일 추가 부분도) localStorage에서는 지워지지만(추가되지만 브라우저는 새로고침해야 반영) TodoList컴포넌트와 분리되어 있기 때문에 list에는 영향이 없다. 
- 그래서 하위 컴포넌트(todoFooter, todoInput)에서는 event로 상위(App)에 보내고 상위에서는 해당 내용을 props로 내려줍니다.

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/9a6666c8c627624742ceec8d5ffdd80cbf96e1d0)

## 3.2 [리팩토링] 할 일 목록 표시 기능

App.vue
- 하위로 props 내리기 
    - v-bind:내려보낼 프롭스 속성 이름="현재위치의 컴포넌트 데이터 속성"   

TodoList.vue
- props: ['propsdata'],
- App.vue에서 v-bind:propsdata="todoItems"로 내려준 프롭스 속성 이름 propsdata

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/e1d3fc5b6021b75ce65ec88033fcef38f7d80a7d)

## 3.3 [리팩토링] 할 일 추가 기능

App.vue
- 하위에서 올린 이벤트버스 받기
    - v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메소드 명"
- 하위 TodoInput에서 추가 버튼 addTodo메소드가 실행되면 $emit으로 App.vue로 addTodoItem을 올려 주고 인자로 this.newTodoItem을 보낸다. 그러면 App.vue에서는 addTodoItem에 연결된 현재 컴포넌트의 메소드 addOneItem을 실행한다.
- TodoInput에서 newTodoItem을 인자로 받아왔으니 여기에도 todoItem으로 인자를 넣어줌

TodoInput.vue
- this.$emit('이벤트이름', 인자1, 인자2 ...)
- addTodo가 실행되면 addTodoItem을 발생시켜서 상위 컴포넌트로 올려준다.

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/41383f70c027d94d7dbde1613469e45d851df016)

## 3.4 [리팩토링] 할 일 삭제 기능

App.vue  
- localStorage.removeItem(todoItem.item);
    - removeItem(todoItem); 으로 삭제하면 객체를 지우는거라서 localStorage에서 삭제가 안됨 todoItem.item으로 삭제해줘야 함


TodoList.vue
- removeItem을 실행해서 todoItem, index 인자를 보낸다.

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/2bd12ec09b63bb6fbd1df4b5bc46ccd8e77df921)

## 3.5 [리팩토링] 할 일 완료 기능

App.vue
- localStorage.removeItem(todoItem.item);
    - removeItem(todoItem); 으로 삭제하면 객체를 지우는거라서 localStorage에서 삭제가 안됨 todoItem.item으로 삭제해줘야 함
- 기존 complete toggle시키는 부분 문제점
- todoItem.completed = !todoItem.completed;
    - todoItems라는 배열을 todoList에 propsdata가 props로 내려가서 props로 받아서 그걸로 접근하는 형태인데, 여기서 이벤트버스로 todoItem을 넘겨줬음. 즉, props에서 접근된 데이터를 다시 위로 올림, 다시 올려서 바꾸는 것은 좋지 않은 패턴(안티패턴), 이것보다는 App.vue라는 파일이 컨테이너의 성격을 가지고 있기 때문에 todoItems에 접근해서 조작하는 것이 좋음
    - this.todoItems[index].completed = !this.todoItems[index].completed;

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/fd11c82161c4847d71f747a0930cd1a86a07d839)

## 3.6 [리팩토링] 할 일 모두 삭제 기능

App.vue
- v-on:clearAll="clearAllItems"
- this.todoItems = [] -> 빈배열로 만들어서 브라우저에서도 삭제되도록

>[diff check](https://github.com/wjddk0909/vue-lv2/commit/bed7e97fb8c99b864ad5a8fe2ea8e5b99f53f81e)