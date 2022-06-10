--- 
title: "파일 업로드 컴포넌트 속성 props로 내려서 관리하기 - accept" 
excerpt: "props"
categories: 
    - vue-study
tags: 
    - props
    - accept
    - file
toc: false
--- 
## accept 속성 props로 관리

```html
<!-- WorksReceipt.vue -->
<custom-single-file-upload
    label="직인첨부"
    file-content-position="bottom"
    :value="sealFile"
    class="seal-upload mt-2"
    :disabled="pageAuth === 'afterReplyRead'"
    accept="image/*"
    @input="upload"
/>

<!-- CustomSingleFileUpload.vue -->
<input
    id="mySingleFile"
    type="file"
    :accept="accept"
    :disabled="disabled"
    @change="upload"
/>

<script>
    props: {
		disabled: {
			type: Boolean,
			default: false,
		},
		fileContentPosition: {
			type: String as PropType<FileContentPosition>,
			default: FileContentPosition.Top,
		},
		label: {
			type: String,
			default: '파일등록',
		},
		value: {
			default: null,
		},
		accept: {
			type: String,
			default: '*',
		},
	},
</script>
```

부모 컴포넌트에 `:props이름='전달할 데이터'`, 자식 컴포넌트에 `:속성='props이름'` 으로 넣어주기  
- 부모 컴포넌트에서 `image/*`를 뷰 인스턴스에서 데이터 속성으로 넣었으면 `:accept(v-bind)`로 연결 해줘야함
- 자식 컴포넌트에서도 accept를 `props값`을 가져와서 연결해야 하므로 `v-bind`로 연결

