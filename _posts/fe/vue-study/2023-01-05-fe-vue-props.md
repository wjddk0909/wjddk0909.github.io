--- 
title: "[vue]props 값 자식 컴포넌트에서 변경하고 부모에 알리기" 
excerpt: "props 값 변경"
categories: 
    - vue-study
tags: 
    - props
	- computed
	- emit
toc: false
--- 
## 부모에게 받은 props값 자식 컴포넌트에서 변경하고 값 부모 컴포넌트에 알리기

- 인풋 텍스트필드에 숫자만 입력하고 숫자 최대값을 제한하기

필드에서 직접 데이터 수정을 하면 수정된 데이터는 자식 컴포넌트에서만 변경된 값을 적용한다.  
부모 컴포넌트로 수정된 데이터를 넘기려면 `$emit()`을 사용해야 한다.

### 부모 컴포넌트에 $emit() 받을 준비
```javascript
<div class="box_select">
	<text-filed
		v-model="statementParams.CONTRACT_QTY"
		placeholder="물량을 입력해주세요."
		title="물량"
		only-number
		required
		@numVal="numVal"
	/>
</div>

// 스크립트 쪽 numVal 함수
const numVal = inputVal => {
	statementParams.value.CONTRACT_QTY = inputVal;
};
```

`@numVal="numVal"`  
자식 컴포넌트로부터 numVal이라는 요청이 오면 처리는 numVal(method)로 한다. 라는 뜻  

### 자식 컴포넌트에서 $emit() 사용할 준비
```javascript
<v-text-field
	v-model="inputValue"
	v-ripple
	outlined
	plain
	hide-details
	:placeholder="placeholder"
	width="100%"
	:disabled="readonly"
	:class="{ readonly: readonly }"
	:oninput="onlyNumber ? oninput : ''"
	@keyup="limitNumber"
>
</v-text-field>

// 스크립트
props: {
	value: {
		type: [String, Number],
		default: '',
	}
},
computed: {
	inputValue: {
		get() {
			return this.value;
		},
		set(newVal) {
			this.$emit('input', newVal);
		},
	}
},
data() {
	return {
		// 숫자만 입력
		oninput: "javascript: this.value = this.value.replace(/[^0-9.]/g, '' );",
	};
},
methods: {
	limitNumber() {
		if (this.inputValue > 100000000) {
			EventBus.$emit('alert:error', '물량은 최대 1억까지 입력 가능합니다.');
			this.value = this.inputValue.substring(0, this.inputValue.length - 1);
			// 입력된 값을 인자로 $emit을 이용해 부모 numVal 함수로 넘긴다.
			this.$emit('numVal', this.inputValue);
		}
	},
},

```


[참고 링크](https://lifere.tistory.com/entry/Vuejs-Vue-CLI-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Props-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A0%95%ED%95%98%EC%97%AC-%EB%B6%80%EB%AA%A8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EB%8F%84-%EC%95%8C%EB%A6%AC%EA%B8%B0-emit)

