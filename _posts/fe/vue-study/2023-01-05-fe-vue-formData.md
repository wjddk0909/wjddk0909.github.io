--- 
title: "[vue]formData 사용하기" 
excerpt: "formData"
categories: 
    - vue-study
tags: 
    - formData
toc: false
--- 
## FormData

FormData는 폼을 쉽게 보내도록 도와주는 객체  
FormData 객체는 HTML 폼 데이터를 나타낸다.

## formData method
- formData.append(name, value): name과 value를 가진 폼 필드 추가
- formData.append(name, blob, fileName): input type="file" 형태의 필드를 추가, 세번째 인수 fileName은(필드 이름이 아님) 사용자가 해당 이름을 가진 파일을 폼에 추가한 것처럼 설정
- formData.delete(name): name에 해당하는 필드를 삭제
- formData.get(name): name에 해당하는 필드의 값을 가져옴
- formData.has(name): name에 해당하는 필드가 있으면 true, 없으면 false 반환

폼은 이름(name)이 같은 필드를 여러 개 허용, append 메서드를 여러번 호출해서 추가해도 문제 없다.  
set은 name이 같은 필드를 제거하고 새로운 필드 하나를 추가 -> 하나의 name이 단 한개만 있도록 보장  

```javascript
const a = new FormData();
a.append('file', '1');
a.getAll('file') // ['1']
a.set('file', '2');
a.getAll('file') // ['2']
a.append('file', '1');
a.getAll('file') // ['2', '1']
a.set('file', '2')
a.getAll('file') // ['2']
```

[참고 url](https://ko.javascript.info/formdata)

