--- 
title: "LocalStorage 데이터 저장은 string" 
excerpt: "로컬스토리지 사용"
categories: 
    - javascript
tags: 
    - localstorage
--- 
## LocalStorage에 데이터 저장해서 사용하기

개요
- 공지사항 상세보기 페이지에서 수정하기로 넘어 갈때 기존에는 라우터에 params에 데이터(현장코드, 분류, 내용 등등) 넣어서 넘김
- 수정하기 페이지에서 받을때도 `this.$route.params.isEdit`로 받아서 객체 안의 데이터를 화면에 뿌려줌
- 문제는 `params` 정보는 상세보기 페이지에서 넘겨주는 정보라서 수정하기 페이지에서 새로고침시 정보가 초기화 돼서 수정하기 화면의 데이터가 초기화 됨

해결 방법
- 상세보기 페이지에서 데이터를 `LocalStorage`에 `setItem`으로 저장
- 수정하기 페이지에서 `getItem`으로 받아오기

주의할 점
- `LocalStorage`에 `Object`값과 `Boolean`값 저장
- 데이터 타입 로그를 찍어보면 둘다 `string`으로 나옴
- `string`으로 넣고 `getItem`으로 가져올때 원본 타입으로 가져오기

1. Object

```javascript
// 로컬스토리지에 저장해야 하는 파일(NoticeView.vue)
localStorage.setItem('editData', JSON.stringify(this.gettersFN_000032[0])); 
// 객체 > 스트링으로 변환해서 저장


// 로컬스토리지에서 가져와야 하는 파일(NoticeWrite.vue)
this.selectSite.editData = JSON.parse(localStorage.getItem('editData') as string); 
// 다시 스트링 > 객체로 변환해서 가져오기
// as string: 에러메시지 'null 또는 string 타입 인자는 string 타입의 파라미터에 할당 될 수 없다. null타입은 string타입에 할당될 수 없다.'가 떠서 string으로 선언
```

2. Boolean

```javascript
// 로컬스토리지에 저장해야 하는 파일(NoticeView.vue)
data() {
    isEdit: true;
}
localStorage.setItem('isEdit', this.isEdit); // 로컬스토리지를 거치면 타입이 string이 됨

// 로컬스토리지에서 가져와야 하는 파일(NoticeWrite.vue)
this.getIsEdit = localStorage.getItem('isEdit') === 'true'; // 값을 Boolean형태로 반환하도록
```

## +추가) 공지사항 새로고침 이슈

### 신규등록

NoticeList.vue
- localStorage.removeItem > isEdit(수정하기인지 확인하는 boolean값), editData(공지사항 수정하기 데이터) 삭제
- const obj에 NM_SITE, CD_SITE 속성 추가
- 로컬스토리지에 저장 `localStorage.setItem('params', JSON.stringify(obj));`
- 등록하기 페이지 들어오면 `this.selectSite = JSON.parse(localStorage.getItem('params') as string);`로 로컬스토리지 가져와서 selectSite에 객체 넣어줌
- selectSite의 각 속성 가져와서 화면에 뿌려줌 `{{ selectSite.NM_SITE }}`

### 수정등록

NoticeView.vue
- created 됐을때 `localStorage.setItem('editData', JSON.stringify(this.gettersFN_000032[0]));`로 로컬스토리지 저장
- data에 `isEdit: true` 정의
- `moveNoticeUpdate` 수정하기 클릭하면 `localStorage.setItem('isEdit', this.isEdit);`로 로컬스토리지에 isEdit: true 저장
NoticeWrite.vue
- data에 `getIsEdit: false` 정의
- `this.getIsEdit = localStorage.getItem('isEdit') === 'true';` 로컬스토리지에서 boolean값 가져오기(true)
- if (this.getIsEdit)일때 `this.isEdit = true;` isEdit가 false로 넘어와서 true로 바꿔주기
- `this.selectSite.editData = JSON.parse(localStorage.getItem('editData') as string);` 로컬스토리지에서 editData에 넣어둔 공지사항 데이터 가져오기
- selectSite.editData의 각 속성 가져와서 화면에 뿌려줌 `{{ selectSite.editData.NM_SITE }}`

