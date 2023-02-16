--- 
title: "[vue]slot 사용하기" 
excerpt: "slot"
categories: 
    - vue-study
tags: 
    - slot
toc: false
--- 
## vue slot 사용법

slot 사용하기  

부모 컴포넌트 -> 자식 컴포넌트의 엘리먼트를 지정할때 사용  
부모에 따라서 자식 컴포넌트가 영향을 받기 때문에 컴포넌트 재사용에 좋다.  

### 기본 slot 사용

- 부모
```vue
<template>
	<CommonBottomPopupBox>
		<ReportWrite />
	</CommonBottomPopupBox>
</template>
```

- 자식
```vue
<template>
	<div>
		<!-- 부모에서 정의한 ReportWrite가 slot에 위치 -->
		<slot></slot>
	</div>>
</template>
```

### 이름있는 슬롯

- 부모
```vue
<template>
	<content-null-box :isList="isList">
		<p slot="title">결과</p>
		<p slot="text">내역이 없습니다.</p>
	</content-null-box>
</template>
```

- 자식
```vue
<template>
	<div v-if="isList">
		<div class="text-box">
			<slot name="title"><!-- 상위컴포넌트에서 정의할 영역 --></slot>
			<slot name="text"><!-- 상위컴포넌트에서 정의할 영역 --></slot>
		</div>
	</div>
</template>
```