--- 
title: "2 - Todo App - 프로젝트 구현" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
toc: true
--- 

## 2.1 컴포넌트 생성 및 등록하기

컴포넌트를 설계에 맞게 생성하겠습니다.  

components 폴더 안에 TodoHeader.vue, TodoInput.vue, TodoList.vue, TodoFooter.vue 파일을 만들고 자동완성으로 기본태그 입력하고 각 파일 template의 div태그 안에 구분해줄 단어들을 아래 예시처럼 입력해서 저장합니다.  

```html
<template>
    <div>
        Header
    </div>
</template>
...
<template>
    <div>
        Input
    </div>
</template>
```

App.vue 파일을 열고 필요없는 내용을 다 지워서 정리해줍니다.  
그리고 생성한 컴포넌트들을 import로 가져와서 연결하고 template에 넣어줍니다.  

```vue
<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  }
}
</script>
```

![todo](/assets/images/vue/vue-lv2/intermediate2_1.png)  

## 2.2 파비콘, 아이콘, 폰트, 반응형 태그 설정하기

모바일 웹에서도 잘 보이도록 반응형 태그를 추가하고 아이콘이나 파비콘을 추가하겠습니다.  

크롬창에서 meta viewport를 검색해서 복사해서 public 폴더안에 index.html meta태그 영역에 붙여넣습니다. 
다음으로 파비콘도 추가합니다. 크롬에서 `favicon generator` 사이트에서 원하는 이미지로 파비콘을 생성하면 링크도 같이 생성 되니 그걸 복붙하면 됩니다.  
(cli로 생성시 자동으로 들어가있어서 따로 추가 할 필요 없는듯)

마지막으로 awesome아이콘을 추가합니다.  

폰트어썸 업데이트하면서 부터인지 vue에서 사용하려면 메일로 무료키트 사용 링크를 받아야한다.  
fontawsome.com/start로 접속 > 이메일 입력 > 확인, 설정 버튼 클릭 > 폰트어썸 로그인 후 무료키트 링크 카피해서 index.html 헤드에 추가

![todo](/assets/images/vue/vue-lv2/intermediate2_2.png)  

구글 폰트도 미리 설정하겠습니다.  

크롬에서 google font를 검색해서 접속한 후 ubuntu를 검색합니다.  
원하는 weight를 선택해서 생성된 링크를 index.html에 추가합니다.  

![todo](/assets/images/vue/vue-lv2/intermediate2_3.png)  

```html
 <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <title>To do App</title>
  </head>
```

## 2.3 TodoHeader 컴포넌트 구현

header는 header태그 안에 h1태그를 이용해서 정체성을 나타내겠습니다.  

```vue
<template>
    <header>
        <h1>To Do it!</h1>
    </header>
</template>

<script>
export default {
};
</script>

<style scoped>
h1 {
    color: #2f3b52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>
```

App.vue에도 스타일을 넣어줍니다.  

```css
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
```

## 2.4 TodoInput 컴포넌트의 할 일 저장 기능 구현

두번째 컴포넌트를 작성하겠습니다.  

인풋박스를 만들어서 텍스트를 입력하면 그 값을 로컬스토리지에 저장합니다.  
우선 인풋박스를 만들어 줍시다. 여기에 입력된 값을 스크립트에서 인식하려면 v-model이라는 디렉티브를 사용합니다.  
v-model의 역할을 인풋에 입력된 텍스트 값을 동적으로 바로 뷰 인스턴스 안에 매핑을 합니다.  
v-mode을 사용하는 방법은 data에 newTodoItem이라고 이름 지어주고 v-model에 연결해줍니다.  

```vue
<template>
    <div>
        <input type="text" v-model="newTodoItem">
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: ""
        }
    }
};
</script>
```

이렇게 연결하고 화면에서 어떻게 반영되는지 보면, TodoInput컴포넌트 data쪽에 newTodoItem이 생기고 인풋박스에 텍스트를 입력하면 newTodoItem의 내용도 바뀌는 것을 볼 수 있습니다.
![todo](/assets/images/vue/vue-lv2/intermediate2_4.png)  

이어서 v-model에 있는 값을 들고와야합니다.  
아래에 버튼을 만들고 v-on:click으로 클릭했을때 동작할 메소드명을 넣어주고 script에 메소드를 정의해줍니다.

```vue
<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">add</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function() {
            console.log(this.newTodoItem)
        }
    }
};
</script>
```

여기서 this는 TodoInput컴포넌트를 가리키고 그 안의 newTodoItem을 가져옵니다.  
화면에서 인풋에 텍스트를 입력하고 add버튼을 눌러보면, 콘솔창에 입력값을 가져와서 출력하는 것을 볼 수 있습니다.  

![todo](/assets/images/vue/vue-lv2/intermediate2_5.png)  

여기서 한가지 기능을 추가해서 버튼을 클릭하면 인풋박스를 비우도록 해봅시다.  

```javascript
addTodo: function() {
    console.log(this.newTodoItem);
    this.newTodoItem = '';
}
```

- addTodo메소드 저장하는 로직 추가
- localStorage.setItem('key', 'value')로 추가  
>[diff check](https://github.com/wjddk0909/vue-lv2/commit/aca3e46cf1484af60d07be41f7eaeb97b76089e2)

## 2.5 TodoInput 컴포넌트 코드 정리 및 UI스타일링

- this.clearInput(); // 같은 인스턴스안에 있는 메소드라서 this로 접근 가능  
>[diff check](https://github.com/wjddk0909/vue-lv2/commit/f84b65206413e99147969d25b76fb061836c6561)

## 2.6 TodoInput 컴포넌트의 할 일 목록 표시 기능 구현

- created(인스턴스가 생성되자마자 호출되는 라이프사이클 훅), mounted, update, destroy  
- for문으로 localStorage를 가져옴
>[diff check](https://github.com/wjddk0909/vue-lv2/commit/457d1676c14629f5b08221f43edcc3a78de864e3)

## 2.7 TodoList 컴포넌트 할 일 삭제 기능 구현

- localStorage.removeItem(todoItem); // key랑 value를 똑같이 넣어놔서 todoItem으로 지우면 됨
- this.todoItems.splice(index, 1); // localStorage를 지우고 배열도 지워줘야 브라우저에 반영됨 splice -> index번째에서 1개 지움
>[diff check](https://github.com/wjddk0909/vue-lv2/commit/dddb312835111669738ab2cfb1d8e278b0dd3d43)

## 2.8 TodoList 컴포넌트의 할 일 완료 기능 구현

- var obj = {completed: false, item: this.newTodoItem}; // item : text값, completed : boolean값을 넣어서 객체에 저장
- obj를 stringify 않고 넣으면 할일을 추가했을때 localStorage에서 확인하면 key에는 잘 들어가는데 value에 [object Object]로 들어가서 객체 안에 어떤값이 들어있는지 확인 불가능
- stringify : 객체를 string으로 변환해서 넣기때문에 객체 안에 어떤값이 있는지 확인 가능
- v-bind:class="{checkBtnCompleted: todoItem.completed}" -> v-bind로 엮어서 class값을 동적으로 바꿔줌
- todoList에 뿌릴떄는 TodoInput에서 stringify로 변환해서 넣은 값을 다시 객체로 변환(JSON.parse)해서 가져옴
>[diff check](https://github.com/wjddk0909/vue-lv2/commit/df9fa8994244e37a91c3af86ed4b3b64d3d5da04)

## 2.9 TodoFooter 컴포넌트 구현

- localStorage.clear(); // localStorage 지우는 api
>[diff check](https://github.com/wjddk0909/vue-lv2/commit/5aa431ec1e47681053aee04050d9031896f71b74)