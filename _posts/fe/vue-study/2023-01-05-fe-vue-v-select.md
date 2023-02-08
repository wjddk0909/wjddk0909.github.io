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

vuetify로 v-select 사용시 select 박스 열고 닫을때 이벤트 발생시키는 방법

팝업안에 v-select박스 있고 select 박스가 열려있을때 팝업 스크롤시 select박스가 따라서 스크롤됨  
-> v-select박스 열려있을때 팝업 overflow-y: hidden해주기

- 코드 적용
```html
<!-- 부모 modal.vue -->
<template>
  <modal
	class="workreport-modal"
	:class="{ 'no-scroll': isOpenSelect }"
  >
    <selectBox @isOpen="isOpen"/>
  </modal>
</template>

<script>
	export default {
		data() {
			return {
				isOpenSelect: false,
			}
		},
		methods: {
			isOpen(newVal) {
			this.isOpenSelect = newVal;
			console.log('isOpenSelect', this.isOpenSelect);
		},
		}
	}
</script>

<!-- 자식 selectBox.vue -->
<template>
  <v-select
	ref="selectComp"
  >
    <selectBox @isOpen="isOpen"/>
  </v-select>
</template>

<script>
	export default {
		mounted() {
			this.$watch(
				() => {
					return this.$refs.selectComp.isMenuActive;
				},
				val => {
					console.log(val);
					this.$emit('isOpen', val);
				},
			);
		},
	}
</script>
```

- 참고 코드
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