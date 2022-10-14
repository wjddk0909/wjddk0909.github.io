--- 
title: "[JavaScript: Beginner] 8 - String 오브젝트" 
excerpt: "String 오브젝트, 문자열 변환, length, 화이트스페이스, __proto__, 문자열 연결, 추출, 대소문자 변환, Unicode관련 함수"
categories: 
    - js-beginner
tags: 
    - String
    - primitive
    - length
    - __proto__
toc: true
--- 
## 8.1 String 오브젝트 개요, 문자열 연결 방법, 프로퍼티 리스트

String 오브젝트
- 문자 처리를 위한 오브젝트

문자열 연결 방법
- 한 줄에서 연결

## 8.2 문자열로 변환, 프리미티브 값 구하기

String()
- 파라미터 값을 String 타입으로 변환하여 반환
    - 값을 작성하지 않으면 빈문자열 반환

```javascript
var value = String(123);
console.log(value); // 123
console.log(typeof value); // string
console.log(typeof ("" + 123)); // string
```

new String()
- String 인스턴스를 생성하여 반환
- 파라미터 값을 String 타입으로 변환

```javascript
var obj = new String(123);
console.log(typeof obj) // object
```

valueOf()
- String 인스턴스의 프리미티브 값 반환

```javascript
var obj = new String(123);
console.log(obj.valueOf()); // 123
```

## 8.3 length 프로퍼티, length 값 반환 논리

length 프로퍼티
- 문자 수 반환

```javascript
var value = "abc";
for (var k = 0; k < value.length; k++) {
    console.log(value[k])
}
// a
// b
// c
```

## 8.4 화이트 스페이스 삭제

trim()
- 문자열 앞뒤의 화이트 스페이스 삭제

```javascript
var value = "  abcd  ";
console.log(value.length); // 8
console.log(value.trim().length); // 4 
// .trim().length 메소드 체인
```

## 8.5 함수 호출 구조, __proto__ 구조

toString()
- data 위치의 값을 String 타입으로 변환

```javascript
var value = 123;
var result = value.toString();
console.log(typeof result);
/**
 * 1. 123을 String 타입으로 변환하므로 string이 출력된다.
 * 2. 그런데 이 코드가 적절하진 않다.
 * **/
```

- "123".toString();
- String 타입을 String 타입으로 변환? 의미가 있는가?
- toString() 함수가 필요한 이유?
    - __proto__:
        toString();
        __proto__
            toString();
```javascript
var obj = String; // 빌트인 String 오브젝트를 obj에 할당
var instance = new String("123");
/**
 * 1. obj를 전개해보면
 * 2. toString()이 없다.
 * 3. prototype안에 있다.
 * 4. instance를 전개해보면
 * 5. __proto__안에 toString()이 있다.
 * **/
```
- 그래서 대부분의 빌트인 오브젝트에 toString()과 valueOf()가 있다.

## 8.6 인덱스로 문자열 처리

charAt()
- 인덱스의 문자를 반환
- 문자열 길이보다 인덱스가 크면 빈 문자열 반환
- 일반적으로 존재하지 않으면 undefined 반환

```javascript
var value = "sports";
console.log(value.cartAt(1)); // p
console.log(value[1]) // p

var value1 = "sports";
conosle.log(value.cahrtAt(12)); // ""

var value2 = "sports";
console.log(value[12]); // undefined
/**
 * 1. value[12]에서 12번째 인덱스가 없으니 undefined 반환
 * 2. chartAt(12)에서 빈 문자열을 반환하는 것과는 차이가 있음
 * 3. 개념적으로 undefined 반환이 더 적절
 * - undefined는 시맨틱적으로 인덱스 번째가 없다는 위앙스가 강함
 * **/
```

indexOf()
- data위치의 문자열에서 파라미터의 문자와 같은 첫번째 인덱스를 반환
- 검색 기준
    - 왼쪼겡서 오른쪽으로 검색
    - 두번째 파라미터를 작성하면 두번째에 작성한 인덱스부터 검색
    - 같은 문자가 없으면 -1 반환

```javascript
var value = "123123";
console.log(value.indexOf(2)); // 1
console.log(value.indexOf(23)); // 1
/**
 * 1. "123123"에서 2가 두개지만 처음 인덱스를 반환하므로 1을 반환
 * 2. 값을 구하게 되면 더이상 값을 구하지 않음
 * 3, indexOf(23)에서 23이 존재하며 2가 검색된 인덱스를 반환
 * **/

var value1 = "123123";
conosle.log(value.indexOf(2, 3)); // 4
/**
 * 1. indexOf(2, 3)에서 두번째 파라미터 3은 3번 인덱스부터 2를 검색하라는 뜻
 * 2. 3번 인덱스부터 2를 검색해서 4 반환
 * **/

var value2 = "123123";
console.log(value.indexOf(15)); // -1

var value3 = "123123";
console.log(value.indexOf(2, -1)); // 1
console.log(value.indexOf(2, 9)); // -1
console.log(value.indexOf(2, "A")); // 1
/**
 * 1. 두번째 파라미터 값이 0보다 작으면 처음부터 검색
 * 2. 두번째 파라미터 값이 length보다 크면 -1 반환
 * 3. 두번째 파라미터가 NaN이면 처음부터 검색
 * **/
```

lastIndexOf()
- data 위치의 문자열에서 파라미터의 문자와 같은 인덱스를 반환
- 단, 뒤에서 앞으로 검색
- 검색기준
    - 두번쨰 파라미터를 작성하면 작성한 인덱스부터 검색
    - 같은 문자가 없으면 -1 반환

```javascript
var value = "123123";
console.log(value.lastIndexOf(2)); // 4

var value1 = "123123";
console.log(value.lastIndexOf(1, 4)); // 3
console.log(value.lastIndexOf(2, -1)); // -1
/**
 * 1. 앞에서부터 4번째 인덱스부터 뒤에서 1을 검색
 * 2. 두번째 파라미터가 0보다 작으면 -1 반환
 * **/
```

## 8.7 문자열 연결, 대소문자 변환

concat()
- data 위치의 값에 파라미터 값을 작성 순서로 연결하여 문자열로 반환
- String 인스턴스를 작성하면 프리미티브 값을 연결

```javascript
var result = "sports".concat("축구", 11);
console.log(result); // sports축구11

var obj = new String(123);
console.log(obj.concat("ABC")); // 123ABC
```

toLowercase();  
toUppercase();

## 8.8 문자열 추출

substring()
- 파라미터의 시작 인덱스부터 끝 인덱스 직전까지 반환
- 두번째 파라미터를 작성하지 않으면 반환 대상의 끝까지 반환
- 다양한 추출 조건 작성

```javascript
var value = "01234567";
console.log(value.substring(2, 5)); // 234
/**
 * 1. 2번 인덱스부터 5번 인덱스 직전 4번 인덱스까지 반환
*/

var value1 = "01234567";
console.log(value1.substring(5)); // 567
console.log(value1.substring()); // 01234567
/**
 * 1. 첫번째 파라미터만 작성하면 첫번째 인덱스부터 끝까지 반환
 * 2. 파라미터를 작성하지 않으면 전체 반환
*/

var value2 = "01234567";
console.log(value2.substring(5, 20)); // 567
/**
 * 1. 두번째 파라미터값이 length보다 크면 전체 문자열 length를 사용
 * 2. 따라서 시작 인덱스부터 끝까지 반환
*/

var value3 = "01234567";
console.log(value3.substring(-7, 2)); // 01
console.log(value3.substring(5, 1)); // 1234
console.log(value3.substring(5, "A")); // 01234
/**
 * 1. 파라미터값이 음수이면 0으로 간주 -> 0부터 1번 인덱스까지 반환
 * 2. 첫번째 파라미터 값이 두번쨰보다 크면 파라미터 값을 바꿔서 처리 -> 1, 5
 * 3. NaN는 0으로 간주 -> 0, 5
*/
```

substr()
- 파라미터의 시작 인덱스부터 지정한 문자 수를 반환
- 첫번째 파라미터 값이 음수이면 length에서 파라미터 값을 더해 시작 인덱스로 사용
- 두번째 파라미터를 작성하지 않으면 양수 무한대로 간주

```javascript
var value = "01234567";
console.log(value.substr(0, 3)); // 012
// 0번 인덱스부터 문자 3개 반환

console.log(value.substr(-3, 3)); // 567
// length 7에서 -3을 더해서 5를 시작인덱스로 사용

console.log(value.substr(4)); // 4567
console.log(value.substr()); // 01234567
/**
 * 1. 두번째 파라미터를 작성하지 않으면 양수 무한대, 즉 최댓값이므로 첫번째 파라미터 인덱스부터 전체 반환
 * 2. 첫번째 파라미터를 작성하지 않으면 0으로 간주하므로 전체 반환
*/
```

slice()
- 파라미터의 시작 인덱스부터 끝 인덱스 직전까지 반환
- 첫번째 파라미터 값을 작성하지 않거나 NaN이면 0으로 간주
- 두번째 파라미터 작성하지 않으면 length 사용
- 값이 음수이면 length에 더해서 사용

```javascript
var value = "01234567";
console.log(value.slice(1, 4)); // 123
console.log(value.slice(false, 4)) // 0123
/**
 * 1. 1번 인덱스부터 4번 인덱스 직전까지 반환
 * 2. false, undefined, null, 빈문자열은 0으로 간주 
*/ 

console.log("A"); // 01234567;
console.log(); // 01234567;
/**
 * 1. 첫번째 파라미터가 NaN이면 0으로 간주
 * 2. 파라미터를 모두 작성하지 않으면 전체 반환
*/
```

## 8.9 정규 표현식을 사용할 수 있는 함수

match()
- 매치 결과를 배열로 반환
    - 매치 대상에 정규 표현식의 패턴을 적용하여 매치하고 매치 결과를 반환
    - 문자열 작성 가능, 엔진이 정규 표현식으로 변환하여 매치
- 정규 표현식
    - 문자열을 패턴으로 매치
    - 패턴 형태: ^, $, *, + 등

```javascript
var value = "Sports";
console.log(value.match(/s/)); // [s]
console.log(value.match("spo")); // null
/**
 * 1. 매치는 정규 표현식 용어
 * 2. match(/s/)에서 /s/는 정규 표현식으로 소문자 s를 매치
 * 3. "Sports" 끝에 s가 있으므로 매치되며 매치된 문자를 배열로 반환
 * 4. match("spo") 에서 spo가 있으나 대문자 s이므로 null 반환
*/
```

replace()
- 매치 결과를 파라미터에 작성한 값으로 대체하여 반환
- 두번째 파라미터에 함수를 작성하면 먼저 함수를 실행하고 함수에서 반환한 값으로 대체

```javascript
var value = "abcabc";
console.log(value.replace("a", "바꿈")); // 바꿈bcabc
console.log(value.replace(/a/, "바꿈")); // 바꿈bcabc

function change() {
    return "함수";
}
console.log(value.replace(/a/, change())); // 함수bcabc
/**
 * 1. /a/는 처음 하나만 바꾸고 끝남
 * 2. 함수를 실행하고 반환된 값으로 바꿈
*/
```

search()
- 검색된 첫 번째 인덱스 반환
- 매치되지 않으면 -1 반환

```javascript
var value = "cbacba";
console.log(value.search(/a/)); // 2
console.log(value.search("K")); // -1
/**
 * 1. 매치된 첫번째 인덱스 반환
 * 2. K가 없으므로 매치되지 않음 -> 매치되지 않으면 -1 반환
 * indexOf와 다른점은 좀더 복합적인 조건을 넣을 수 있음
*/
```

split()
- 분리 대상을 분리자로 분리하여 배열로 반환
- 분리자를 작성하지 않은 경우
    - 빈문자열: 하나씩 분리
    - 작성하지 않으면: 전체를 하나의 배열로 반환
- 두번째 파라미터에 반환 수를 작성

```javascript
console.log("12_34_56".split("_")); // [12, 34, 56]
/**
 * 1. "_"를 분리자로 사용
 * 2. "12_34_56"을 "_"로 분리
*/

var value = "123";
console.log(value.split("")); // [1, 2, 3]
console.log(value.split()); // [123]
/**
 * 1. 분리자에 빈 문자열을 작성하면 문자를 하나씩 분리하여 반환
 * 2. 분리자를 작성하지 않으면 분리 대상 전체를 하나의 배열로 반환
*/

var value = "12_34_56_78";
console.log(value.split("_", 3)); // [12, 34, 56]

value = "123";
console.log(value.split("A")); // [123]
/**
 * 1. 두번째 파라미터에 숫자를 작성하면 앞에서부터 수만큼만 반환
 * 2. 분리자가 분리 대상에 없으면 분리 대상 전체를 하나의 배열로 반환
*/
```

## 8.10 Unicode 관련 함수

charCodeAt()
- 인덱스번째의 문자를 유니코드의 코드 포인트 값을 반환
- 인덱스가 문자열 길이보다 크면 NaN 반환

```javascript
var value = "1Aa가";
for(var k = 0; k < value.length; k++) {
    console.log(value.charCodeAt(k));
    // 49
    // 65
    // 97
    // 44032
};
console.log(value.cahrCodeAt(12)); // NaN
// 12번쨰가 없으면 NaN 반환
```

fromCharCode()
- 파라미터의 유니코드를 문자열로 변환하고 연결하여 반환
- 작성하지 않으면 빈 문자열 반환
- 작성방법
    - data 위치에 String 오브젝트 작성, 변환 대상 값을 작성하지 않음
    - String.fromCharCode()형태

```javascript
console.log(String.fromCharCode(49, 65, 97, 44032)); // 1Aa가
```

localeCompare()
- 값을 비교하여 위치를 나타내는 값으로 반환
- 위치값: 1(앞), 0(같음), -1(뒤)
- Unicode 사전 순으로 비교

```javascript
var value = "나";
console.log(value.localeCompare("가")); // 1
console.log(value.localeCompare("나")); // 0
console.log(value.localeCompare("다")); // -1
/**
 * 1. "가"가 "나"보다 앞에 있으므로 1 반환
 * 2. 비교 기준과 비교 대상이 같으므로 0
 * 3. "다"가 "나"보다 뒤에 있으므로 -1 반환
*/
```