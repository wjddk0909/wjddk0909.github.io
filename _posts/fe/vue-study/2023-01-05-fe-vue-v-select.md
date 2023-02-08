--- 
title: "[vue]vuetify v-select open/hide event" 
excerpt: "vuetify v-select 열고 닫기 이벤트"
categories: 
    - vue-study
tags: 
    - vuetify
	- v-select
toc: false
--- 
## v-select event

```html
<div id="app">
  <v-app id="inspire">
    <v-container fluid grid-list-xl>
      <v-select ref='selectComp'
                v-model="model"
                :items="items"
                box
                label="Box style"
      ></v-select>
    </v-container>
  </v-app>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      model: void 0
  }),
  mounted () {
      this.$watch(
         () => {
           return this.$refs.selectComp.isMenuActive
         },
         (val) => {
            console.log(val)
         }
      )
   }
})
```