--- 
title: "[JavaScript: Beginner] 5 - 오브젝트(Object)" 
excerpt: "프로퍼티, for~in문"
categories: 
    - js-beginner
tags: 
    - object
    - property
    - forin
toc: true
--- 
## 5.1 프로퍼티(Property) 개요, 프로퍼티 추가/변경

Property
- {name: value}형태
- obj.abc = 123;
- obj 오브젝트에 프로퍼티 이름으로 abc가 없으면 abc:123가 추가되고 있으면 프로퍼티 값이 123으로 변경

## 5.2 프로퍼티 값 추출, for~in 문

프로퍼티 값 추출
- 오브젝트에서 프로퍼티 값 추출
    - var obj = {book: "책"}
    - var value = obj.book;
- obj 오브젝트에 프로퍼티이름
    - book이 있으면 프로퍼티 값 반환
    - book이 없으면 undefined 반환

```javascript
var obj = {book: "책"};
console.log(obj.book);
console.log(obj["sports"]);
/**
 * 1. obj.book
 * obj 오브젝트에 프로퍼티 이름으로 book이 있으므로 프로퍼티 값인 "책"이 반환
 * 2. obj["spors"]
 * obj 오브젝트에 프로퍼티 이름으로 sports가 없으므로 undefined가 반환
 * 실행결과 -> 책 / undefined
 * **/
```

for~in문
- 오브젝트에서 프로퍼티를 열거
- 형태: for (변수 in 오브젝트) 문장; / for (표현식 in 오브젝트) 문장;
- for (var item in sports) {코드}
    - 프로퍼티 이름이 item에 설정
    - `sports[item]`으로 프로퍼티 값을 구함

```javascript
var sports = {
    soccer: "축구",
    baseball: "야구"
};
for (var item in sports) {
    console.log(item);
    console.log(sports[item]);
}
/**
 * 실행결과
 * soccer
 * 축구
 * baseball
 * 야구
 * **/
```

