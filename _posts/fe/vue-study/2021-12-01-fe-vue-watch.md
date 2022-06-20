--- 
title: "watch를 이용한 데이터 상태 감시" 
excerpt: "watch"
categories: 
    - vue-study
tags: 
    - watch
toc: false
--- 
## watch를 이용해서 데이터의 상태를 감시한다.

```javascript
    watch: {
    '감시대상 데이터': function (새로운값, 이전값){
        // 감시 대상 데이터가 변했을 때, 처리 로직
    }
}
```

watch에는 옵션을 부여할 수 있다. 옵션을 사용할 경우 handler 예약어를 사용한다.  

```javascript
    watch: {
    '감시대상 데이터':
    {
        handler: function (새로운값, 이전값) {
            // 감시 대상 데이터가 변했을 때, 처리 로직
        },
        deep: true, // 네스트된 객체도 감시할지 여부, data 형식은 boolean
        immediate: true, // 처음 값을 읽어 들이는 시점에도 호출할지 여부, data형식은 boolean
    }
}
```

deep속성은 감시 대상 데이터가 하위 속성을 가지고 있는 객체인 경우, 그 하위 속성이 변경까지 감시한다. immediate속성은 컴포넌트가 호출되었을 때 그 컴포넌트의 watch 대상 데이터를 바로 읽을지 여부를 결정하는 것이다.  
false이면 대상 데이터가 변경이 일어났을 때, watch에서 지정한 로직이 수행된다.  

```html
<template>
<div>
  <input type="text" v-model="food1" />
  <input type="text" v-model="food2" />
</div>
</template>

<script>
export default {
  data() {
    return {
      food1: 'pizza',
      food2: 'pasta',
    }
  },
  watch: {
    food1: {
      handler: function (newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      deep: true,
      immediate: true,
    },
    food2(val) {
      console.log('food2', val)
    },
  },
}
```

감시 대상 데이터인 food1과 food2를 살펴보면, food1의 경우엔 immediate가 true로 설정되어 있다.  
food1은 이 컴포넌트를 읽어 들이는 시점에 console이 실행된다. -> 바로 pizza undefined가 콘솔에 찍힘  
food2는 handler가 없기때문에 food2의 console은 실행되지 않는다. watch의 immediate 옵션은 디폴트로 false로 지정되어 있기 때문이다.  



