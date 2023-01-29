--- 
title: "[TypeScript] api AxiosResponse 타입 정의" 
excerpt: "interface"
categories: 
    - typescript-study
tags: 
    - axios
    - response
--- 
## api 호출하고 axios response 타입 정의하기

- 기존 호출 타입 정의
```javascript
// api 호출 파일 api/getData/index.ts
import FN_RESPONSE_DEFAULT_TYPE from '@/api/defaultResponseType';
const getData = (
	params: GET_DATA_REQUEST_TYPE,
): Promise<
	AxiosResponse<
		FN_RESPONSE_DEFAULT_TYPE<GET_DATA_RESPONSE_TYPE>, // FN_RESPONSE_DEFAULT_TYPE<GET_DATA_RESPONSE_TYPE> 로 response 타입 정의
		GET_DATA_REQUEST_TYPE
	>
> => {
	const url = '/getData';
	return instance.post(url, params);
};

// response 타입 정의 api/defaultResponseType.ts
interface FN_RESPONSE_DEFAULT_TYPE<T> {
	status: string;
	message: string;
	result: T[]; // T배열
}

// api/getData/indexTypes.tx -> api의 response가 data안에 배열로 들어오는 형태인 상황
type GET_DATA_RESPONSE_TYPE = {
	data: Array<{
		aaa: string;
        bbb: string;
        ...
	}>;
};
// data안에 넣지 않고 들어오던 기존의 타입 정의
type GET_INFO_RESPONSE_TYPE = Array<{
	aaa: string;
    bbb: string;
    ...
}>;

// 스토어 actions에서 api 호출시 mutations 호출해서 getters에 저장 store/data.ts
API_GET_DATA({ commit }, params) {
    return getData(params)
        .then(response => {
            if (response.status === 200) {
                commit('SET_GET_DATA', response.data.result);
            }
        })
        .catch(error => Promise.reject(error));
}
```

## 스토어에서 api 호출 후 임의값으로 바꿔서 mutations commit해서 데이터 세팅하기

스토어에서 mutations로 getters에 담기 전에 임의값 `response.data.result.data[1].aaa = 'abc';` 로 값을 바꿔주고 싶음

기존에는 `api/defaultResponseType.ts`에 정의된대로 `result: T[];` T배열이 result의 value  
그런데 getData로 호출한 response는 data로 묶여서 반환되는 형태이다.  
기존 defaultResponseType에 정의된 형태로는 `response.data.result.data`에 접근이 불가  

- 데이터 타입정의 수정
```javascript
export interface FN_RESPONSE_DEFAULT2_TYPE<T> {
	status: string;
	message: string;
	result: { data: T }; // 객체안에 넣어줌, type GET_DATA_RESPONSE_TYPE에서 타입정의를 해주기 때문에 T만 있어도 됨
}

// 기존 data에 안넣은 형태로 변경
type GET_DATA_RESPONSE_TYPE = Array<{
    aaa: string;
    bbb: string;
    ...
}>;

// 스토어에서 getters에 넣기전에 임의값으로 변경
API_GET_DATA({ commit }, params) {
    return getData(params)
        .then(response => {
            if (response.status === 200) {
                response.data.result.data[1].aaa = 'abc'; // 값 변경
                commit('SET_GET_DATA', response.data.result);
            }
        })
        .catch(error => Promise.reject(error));
}
```

