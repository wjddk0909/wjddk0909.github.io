--- 
title: "12 - 싱글 파일 컴포넌트" 
excerpt: "싱글 파일 컴포넌트"
categories: 
    - vue-lv1
tags: 
    - vue
    - component
toc: true
--- 

## 12.1 싱글 파일 컴포넌트에 배운 내용 적용하여 개발 시작하기

cli로 생성한 프로젝트에서 어떤식으로 개발을 시작해야 하는지 살펴보겠습니다.  

파일을 정리해보겠습니다.  
우선 HelloWorld.vue를 삭제합니다.

`App.vue`도 전체를 지우고 저장한 후에 `vue`를 입력해서 자동완성을 합니다.  
`template`에서 `div`태그를 만들어줍니다.  여기서 주의할 점은 가장 상위 태그는 하나여야한다는 것입니다.  

```vue
<template>
    <div>
    
    </div>
    <div>
    
    </div>
</template>
```

이런식으로 최상단에 태그가 여러개가 나열되면 에러가 뜹니다.

```vue
<template>
    <div>
        <div>
        
        </div>
        <div>
        
        </div>
    </div>
</template>
```

이렇게 최상단에는 하나의 태그로 묶어주고 그 안에서 여러개의 태그를 넣어야 합니다.
template안에 Root는 한개 요소여야합니다.

div안에 app이라고 입력하고 화면을 확인해봅시다.

![vue](/assets/images/vue/vue-lv1/beginner12_1.png) 

화면에서 app이 뜨는것을 볼 수 있고 vue의 Root에 컴포넌트가 뜹니다.  

이번에는 app대신 hi라는 텍스트를 vue data에서 정의를 하고 데이터 바인딩으로 엮어보겠습니다.  

![vue](/assets/images/vue/vue-lv1/beginner12_2.png) 

script부분에 `data:{}`를 입력하면 빨간줄이 가는것이 보입니다.  
여태까지는 `new Vue({})`안에 data를 선언해서 했는데 cli를 통해서 .vue파일에서는 여러개의 컴포넌트에서 동일한 값을 참조하면 안됩니다.  

```javascript
export default {
    data: function() {
        return {
            str: 'hi'
        }
    }
}
```

이렇게 함수를 연결하고 `return`을 새객체를 반환해주는 형식으로 사용해야합니다.  


## 12.2 싱글 파일 컴포넌트 체계에서 컴포넌트 등록하기

App.vue파일에서 별도의 컴포넌트를 등록해서 그 컴포넌트로 하위 컴포넌트의 `props`와 `event`를 주고받아보겠습니다.  
src 폴더밑에 components안에 AppHeader.vue를 생성합니다.  

AppHeader.vue에 코드를 작성합니다.  

```vue
<template>
    <header>
        <h1>Header</h1>
    </header>
</template>

<script>
export default {
    
};
</script>

<style lang="scss" scoped>

</style>
```

그리고 App.vue로 돌아와서 컴포넌트를 등록해봅시다.  
`script` 안에 `import`를 이용해서 불러옵니다.  

컴포넌트를 등록할때는 `components`로 등록합니다.  
등록한 컴포넌트는 `template`안에서 불러옵니다.  

```vue
<template>
  <div>
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
// new Vue({
//   data: {
//     str: 'hi'
//   }
// })

export default {
  data: function() {
    return {
      str: 'hi'
    };
  },
  components: {
    'app-header': AppHeader
  }
};
</script>

<style lang="scss" scoped>

</style>
```

## 12.2 싱글 파일 컴포넌트에서 props 속성 사용하는 방법