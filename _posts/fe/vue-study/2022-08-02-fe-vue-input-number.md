--- 
title: "[vue]input - number, tel 등 타입에서 숫자만 입력하기 + 숫자 입력 최대값 설정" 
excerpt: "input"
categories: 
    - vue-study
tags: 
    - input
    - number
toc: false
--- 
## props로 부모에서 자식한테 data 넘기기

- 부모(fixed.vue)

```html
<text-filed
    v-model="EXECUTION_QTY"
    :type="numberType"
    placeholder="처리물량을 입력해주세요."
    title="처리물량"
    only-number
    required
    @numVal="numVal"
/>
```

