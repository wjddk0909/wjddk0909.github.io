--- 
title: "10 - 템플릿 문법 : 실전" 
excerpt: "템플릿 문법"
categories: 
    - vue-lv1
tags: 
    - vue
    - template syntax
toc: true
--- 

## 10.1 watch 속성

인스턴스를 생성하고 num속성을 추가합니다.  
이 num을 button을 클릭했을때 1씩 증가 시켜보겠습니다.  

메서드에 `addNum`을 정의하고 버튼에 `v-on:click`으로 연결해줍니다.  

```html
<div id="app">
    {{ num }}
    <button v-on:click="addNum">increase</button>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            num: 10,
        },
        methods: {
            addNum: function() {
                this.num = this.num + 1;
            }
        }
    })
</script>
```

화면에서 버튼을 누르면 누를때마다 숫자가 증가합니다.  
여기에 추가로 증가할때마다 콘솔을 찍어보겠습니다.  
그러면 data의 변화에 따라서 특정 로직을 실행하는 watch를 이용해보겠습니다.  
메서드에 logText를 추가해주고 이것을 watch에 num이 변화했을때 logText를 실행하도록 연결해줍니다.  


```html
<div id="app">
    {{ num }}
    <button v-on:click="addNum">increase</button>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            num: 10,
        },
        watch: {
            num: function() {
                this.logText();   
            }
        },
        methods: {
            addNum: function() {
                this.num = this.num + 1;
            },
            logText: function() {
                console.log('changed');
            }
        }
    })
</script>
```

화면에서 확인해보면 버튼을 누를때마다 콘솔창이 찍힙니다.

![watch](/assets/images/vue/vue-lv1/beginner10_1.png) 

## 10.2 watch 속성 vs computed 속성

```html
<div id="app">
    {{ num }}
</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            num: 10
        },
        computed: {
            doubleNum: function() {
                return this.num * 2;
            }
        },
        watch: {
            num: function(newValue) {
                this.fetchUserByNumber(newValue);
            }
        },
        methods: {
            fetchUserByNumber: function(num) {
                console.log(num);
            }
        }
    })
</script>
```

1. data의 num에 10이라는 값이 할당되어 있습니다.
2. computed에는 `doubleNum`이라는 함수가 정의되어 있고, 이 함수는 data의 num이라는 속성에 두배의 값을 return합니다.  자연스럽게 vue 내부적으로 계속 계산을 하는 속성이라고 생각하면 됩니다.  기본적으로 data의 의존성(위 doubleNum로직이 실행될 때, 기준이 되는 값이 data의 num값)을 가지고 이 값이 변할 때 마다 computed의 doubleNum이 실행되고 계산됩니다.  
3. watch는 computed와 굉장히 비슷한 느낌인데 watch의 경우도 data의 num이 바뀌었을 때 특정 로직을 실행하기 때문에 computed와 차이가 없어 보입니다. 

### computed
computed같은 경우는 단순한 값에 대한 계산, 특히 `validation vue라이브러리`가 있는데 그 내부적으로 구현되어 있는 것들이 computed 속성으로 되어있습니다.  
단순한 텍스트 입력을 받아서 거기에 대한 값을 계산하는 것은 computed를 많이 사용합니다.  

### watch
watch같은 경우는 실제로 무거운 로직들, 매번 실행되기엔 부담스러운 로직입니다.  
예를 들어서 data의 num값이 수정되었을 때 `this.fetchUserByNumber()`가 실행되도록 했는데 브라우저에서 num 값을 증가 시키면 콘솔창에 11이 찍힙니다.

![watch](/assets/images/vue/vue-lv1/beginner10_2.png) 

이 부분이 watch에 설정한 함수입니다.  

watch의 함수들은 기본적으로 두가지 인자를 받습니다.
- 첫번째 newValue : 갱신된 값
- 두번째 oldValue : 이전값

![watch](/assets/images/vue/vue-lv1/beginner10_3.png) 

watch는 계속 값의 변화를 추적하고 있기 때문에 이전값과 갱신된 값을 인자로 받습니다.  

그래서 새로 갱신된 값을 `fetchUserByNumber`의 인자로 넘기고 이 함수에서 인자값을 받아서 콘솔에 찍은겁니다.  

### 공식문서 결론

![watch](/assets/images/vue/vue-lv1/beginner10_4.png) 

공식문서에서도 웬만하면 computed를 사용하고 watch보다는 computed가 대부분의 케이스에 적합하다고 되어있습니다.  
실제로 서비스를 구현할때도 computed로 충분히 가능한데 watch를 사용하면 코드가 지저분해지고 computed가 이미 캐싱이나 이런 내부적인 튜닝이 많이 되어있기때문에 computed를 통해서 값들을 계산하는 것을 추천드립니다.

## 10.3 computed 속성을 이용한 클래스 코드 작성 방법

computed를 이용한 직관적인 코드 작성과 클래스 바인딩에 대해 알아보겠습니다.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .warning {
            color: red;
        }
    </style>
</head>
<body>
    <div id="app">
        <p v-bind:class="errorTextColor">Hello</p>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                // cname: 'blue-text',
                isError: false
            },
            computed: {
                errorTextColor: function() {
                    return this.isError ? 'warning' : null
                }
            }
        })
    </script>
</body>
</html>
```

이렇게 코드를 작성하면 템플릿상에서 `{ warning: isError }`를 넣을 필요 없이 인스턴스안에 깔끔하게 정리 할 수 있습니다.  



