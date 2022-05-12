--- 
title: "vue router - path variable" 
excerpt: "path variable"
categories: 
    - vue-study
tags: 
    - path variable
    - router
toc: false
--- 
## vue에서 router 이동을 코드로 어떻게 구현하는가

- `router.push({})`로 구현

## 공지사항 상세보기에서 수정하기 페이지로 이동할때

- 라우터 설정시에 `path: 'edit/:NO_NTC/:isEdit',`로 설정해주고(path variable)
- url이 `notice/edit/0HlVn6NilcOOyBqKFordeg==/true` 이런식으로 이동, 그 값을 이용해서 새로고침시에 api를 재호출 시킴  
- :NO_NTC, :isEdit는 `NoticeView.vue`에서 아래와 같이 넘겨줌
```javascript
const moveNoticeUpdate = async val => {
    const res = await encrypt(NO_NTC.value as string);
    await router.push({
        name: 'NoticeEdit',
        params: {
            NO_NTC: res,
            editData: val,
            isEdit: 'true',
            NM_SITE: selectSiteParam.value.name,
            CD_SITE: selectSiteParam.value.code,
        },
    });
};
```

## 새로고침시에 api 재호출은?

```javascript
const createInit = async () => {
    // 리스트에서 진입시 현장명/현장코드 들고오기
    if (route.params.editData) { // 처음 수정하기 페이지로 들어왔을때는 route.params.editData값을 가지고 있어서 여기가 실행됨
        selectSite.value = { ...selectSite.value, ...route.params };
        isEdit.value = !!selectSite.value.isEdit;
    } else { // 새로고침하면 params값이 날라가서 여기가 실행됨
        const { NO_NTC = '', isEdit: edit = '' } = route.params; // route.params에 비구조화할당으로 NO_NTC와 isEdit에 path variable로 넘어온 값을 넣어줌(isEdit: edit는 isEdit를 edit로 변환 / 그리고  = ''은 값이 없으면 빈문자열을 넣어주라는 default값)
        if (edit) { // isEdit가 true면 여기가 실행 
            const res = await decrypt(NO_NTC);
            await API_FN_000032({
                P_NO_NTC: res,
            });

            if (gettersFN_000032.value) {
                selectSite.value = {
                    ...selectSite.value,
                    editData: {
                        ...gettersFN_000032.value[0],
                    },
                };
            }

            isEdit.value = !!edit;
        } else {
            selectSite.value = {
                ...selectSite.value,
                NM_SITE: route.params.NM_SITE,
                CD_SITE: route.params.CD_SITE,
            };
        }
    }

    await initApi();
};

createInit();
```




