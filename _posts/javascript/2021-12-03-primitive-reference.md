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

이때 변수 a의 값이 바뀌면, a에 할당된 10이라는 데이터가 바뀌는게 아니고 공간을 새로 확보해서 새 데이터를 할당하고 a변수가 가리키는 주소값을 바꾼다.  
그래서 불변성을 띈다고 한다. 변경을 새로 만드는 동작을 통해서 이뤄지고 한번 만들어진 값은 가비지컬렉팅을 당하지 않는 이상 영원히 변하지 않는다.  

`a = 15;`

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
      <td>변수명:a <br>값: <font style="color:red;">@2001</font></td>
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
      <td><font style="color:red;">2001</font></td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>10</td>
      <td>15</td>
    </tr>
  </table>
</div>

변수 복사  
새로운 변수 b를 선언하고 b에 a를 할당하면 변수 b의 공간을 확보하고(선언) b의 값이 가리키는 주소값은 a 값이 가리키는 주소값을 공유받는다(할당)  
이떄 b와 a는 일치한다.  

`var b = a;`

<div>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>변수영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>1000</td>
      <td>1001</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:a <br>값: @2001</td>
      <td>변수명:b <br>값: @2001</td>
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
      <td>2001</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>10</td>
      <td>15</td>
    </tr>
  </table>
</div>

b에 새로운 값을 할당하면 b는 새로운 주소값이 할당되고 a에는 변화 없다.  

`b = 20;` 

<div>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>변수영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>1000</td>
      <td>1001</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:a <br>값: @2001</td>
      <td>변수명:b <br>값: <font style="color:red;">@2002</font></td>
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
      <td>2001</td>
      <td><font style="color:red;">2002</font></td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>10</td>
      <td>15</td>
      <td>20</td>
    </tr>
  </table>
</div>

### Reference Type(참조타입)

```javascript
var obj = {
  a: 10,
  b: 'abc'
}
```

참조타입이 원시타입과 다른점은 참조과정을 한번 더 거친다.  
우선 변수 obj에 매칭할 주소값(200)을 확보하고, 객체는 데이터를 한번에 다 담을 수 없으니까 해당 주소값에 여러공간을 확보한다. 

<div>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>변수영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>100</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:obj <br>값: @200</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>데이터 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>200</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>@300~</td>
    </tr>
  </table>
</div>

그리고 확보해둔 공간에 각각 객체의 데이터들을 원시타입처럼 선언, 할당한다.  

<div>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>변수영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>100</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:obj <br>값: @200</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>데이터 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>200</td>
      <td>201</td>
      <td>202</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>@300~301</td>
      <td>1</td>
      <td>'abc'</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>객체의 변수 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>300</td>
      <td>301</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:a <br>값: @201</td>
      <td>변수명:b <br>값: @202</td>
    </tr>
  </table>
</div>

객체 내부의 데이터를 변경해도 객체는 주소값은 바뀌지 않고 객체 내부의 데이터의 주소값만 변경된다. 

`obj.a = 2;`

<div>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>변수영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>100</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:obj <br>값: @200</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>데이터 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>200</td>
      <td>201</td>
      <td>202</td>
      <td><font style="color:red">203</font></td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>@300~301</td>
      <td>1</td>
      <td>'abc'</td>
      <td>2</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>객체의 변수 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>300</td>
      <td>301</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:a <br>값: <font style="color:red">@203</font></td>
      <td>변수명:b <br>값: @202</td>
    </tr>
  </table>
</div>

변수복사  
새로운 객체 obj2를 만들어서 obj를 할당하면 같은 주소값을 공유하게 된다.  

`var obj2 = obj;`

<div>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>변수영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>100</td>
      <td>101</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:obj <br>값: @200</td>
      <td><font style="color:red">변수명:obj2</font> <br>값: @200</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>데이터 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>200</td>
      <td>201</td>
      <td>202</td>
      <td>203</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>@300~301</td>
      <td>1</td>
      <td>'abc'</td>
      <td>2</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>객체의 변수 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>300</td>
      <td>301</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:a <br>값: @203</td>
      <td>변수명:b <br>값: @202</td>
    </tr>
  </table>
</div>

이렇게 주소값을 공유하고 있기 때문에 obj2의 내부 데이터를 변경하면 obj의 데이터도 영향을 받는다.  

`obj2.a = 3;`

<div>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>변수영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>100</td>
      <td>101</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:obj <br>값: @200</td>
      <td>변수명:obj2 <br>값: @200</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>데이터 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>200</td>
      <td>201</td>
      <td>202</td>
      <td>203</td>
      <td><font style="color:red">204</font></td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>@300~301</td>
      <td>1</td>
      <td>'abc'</td>
      <td>2</td>
      <td>3</td>
    </tr>
  </table>
  <table style="margin-left: auto; margin-right: auto; min-width: 180px; text-align: center; width: auto;">
  <caption>객체의 변수 영역</caption>
    <colgroup>
      <col width="40%">
    </colgroup>
    <tr>
      <td>주소</td>
      <td>300</td>
      <td>301</td>
    </tr>
    <tr>
      <td>데이터</td>
      <td>변수명:a <br>값: <font style="color:red">@204</font></td>
      <td>변수명:b <br>값: @202</td>
    </tr>
  </table>
</div>

```javascript
console.log(obj.a) // 3;
console.log(obj2.a) // 3;
console.log(obj === obj2) // true;
```

- 할당 연산자 `=` 로 복사했을 때, 기본형 데이터는 깊은 복사가 되고 참조형 데이터는 얕은 복사가 된다.
- 기본형 데이터를 복사했을 때, 주소값이 바뀌므로 원본은 영향을 받지 않는다.
- 참조형 데이터는 내부 데이터를 바꿔도 같은 객체를 가리키고 있기 때문에(주소값이 같으므로) 원본이 영향을 받게 된다.
- 위와 같은 복사는 객체의 불변성을 지키지 못한다. 불변성을 지키기 위해서는 spread operator, concat 등을 통해 깊은 복사가 필요하다.

[참조](https://velog.io/@zzin0/Primitive-Type-VS-Reference-Type)
[참조](https://velog.io/@yujuck/JavaScript-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%83%80%EC%9E%85-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%95%A0%EB%8B%B9%EC%9D%98-%EB%8F%99%EC%9E%91%EC%9B%90%EB%A6%AC)