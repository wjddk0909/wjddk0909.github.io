--- 
title: "데이터 타입 - primitive type / reference type" 
excerpt: "데이터 할당의 동작원리"
categories: 
    - javascript
tags: 
    - primitive type
    - reference type
--- 
## 데이터 타입

데이터 타입은 크게 `primitive type`과 `reference type`으로 나눌 수 있다.  

- Primitive Type(원시타입)은 불변성이다. `숫자, 문자열, boolean, null, undefined, Symbol`
- Reference Type(참조타입)은 ` Object(array, function, map, set, weakmap, weakset(ES6 추가))`

위 두가지 모두 `선언(dclaration)`과 `할당(assignment)`의 과정을 거치는데 차이점은 `할당과정`에 있다.  
- 선언 : 변수와 주소값을 매칭  
- 할당 : 변수의 주소값에 값을 할당

Primitive Type은 `값을 그대로 할당`하고, Reference Type은 `값이 저장된 주소(참조위치)를 할당`한다.  

### Primitive Type(원시타입)

```javascript
var a = 10
// 위 코드는 아래와 같은 과정으로 나눌 수 있다.
var a; // 선언
a = 10; // 할당
```

변수 a에 매칭할 주소(2000)을 확보하고 주소값에 실제값을 할당 한다.  
<div>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>변수영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>1000</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:a <br>값: @2000</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>데이터 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>2000</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>10</td>
    </tr>
  </table>
</div>

### Reference Type(참조타입)




[참조](https://velog.io/@zzin0/Primitive-Type-VS-Reference-Type)
[참조](https://velog.io/@yujuck/JavaScript-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%83%80%EC%9E%85-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%95%A0%EB%8B%B9%EC%9D%98-%EB%8F%99%EC%9E%91%EC%9B%90%EB%A6%AC)