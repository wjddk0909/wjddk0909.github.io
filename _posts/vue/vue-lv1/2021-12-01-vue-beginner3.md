--- 
title: "3 - vue 인스턴스" 
excerpt: "vue 인스턴스"
categories: 
    - vue-lv1
tags: 
toc: true
--- 
## 3.1 인스턴스 소개

뷰에서 첫번째로 알아야 할 개념은 인스턴스 입니다.
인스턴스는 뷰로 개발 할때 필수로 생성해야 할 단위입니다.

인스턴스를 생성하고 나면 변수안에 인스턴스의 내용을 담을 수 있습니다.

```html
<div id="app"></div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            message: 'hi'
        }
    });
</script>
```

vm이라는 변수에 new Vue라고 인스턴스를 생성합니다.  
el: '#app" > app이라는 아이디를 가진 태그를 찾아서 인스턴스를 붙이겠다 라는 의미입니다.  
이렇게 붙이는 순간 vue의 기능과 속성들이 유효해 집니다.  

## 3.2 인스턴스와 생성자 함수

생성자 함수를 만들고 name과 job을 인자로 받아서 정보들을 인스턴스로 찍어낼 수 있습니다.  
함수를 선언하면 객체가 생성됩니다.  

![생성자함수](/assets/images/vue/vue-lv1/beginner3_1.png)  

뷰를 왜 생성자 함수로 찍어내는지 보겠습니다.

Vue라는 생성자 함수를 이용해서 기능을 편하게 쓰게 하고 싶을때, logText()라는 함수를 미리 정의 해놓습니다.  
그럴때 vm으로 new Vue()를 생성할 때마다 logText()함수가 들어가 있습니다.
그래서 매번 함수를 정의하는게 아니라 함수를 가져다 사용할 수 있습니다.

![생성자함수](/assets/images/vue/vue-lv1/beginner3_2.png)  

## 3.3 인스턴스 옵션 속성

```javascript
new Vue({
    el:,
    template:,
    data:,
    methods:,
    created:,
    watch:,
});
```

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        message: 'hi'
    },
    methods: {
        
    },
    created: function() {

    }
});
```

