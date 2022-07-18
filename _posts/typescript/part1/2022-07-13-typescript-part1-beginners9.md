--- 
title: "[TypeScript-part1] 이넘" 
excerpt: "typescript enum"
categories: 
    - typescript-part1
tags: 
    - typescript
    - enum
toc: true
--- 
## 9.1 이넘 소개

이넘(Enums)  
이넘은 특정 값들의 집합을 의미하는 자료형  
예를 들면 아래와 같은 목록이 이넘이 될 수 있다.  

```text
나이키
아디다스
뉴발란스
```

이넘은 다른 프로그래밍 언어를 다뤄본 사람들에게 친숙한 타입, 타입스크립트에서는 문자형 이넘과 숫자형 이넘을 지원한다.  

드롭다운과 같은 정해져있는 목록의 값들을 지정할 때 쓰면 좋다.  

## 9.2 숫자형 이넘

```javascript
enum Shoes {
    Nike,
    Adidas
}

const myShoes = Shoes.Nike;

console.log(myShoes); // 0 출력
```
위와 같이 각 enum에 값을 지정하지 않으면 기본적으로 숫자형 이넘으로 취급한다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/1bec6bacc86b765343313530f99a56701f2f5fb9)

## 9.3 문자형 이넘

이넘의 값을 지정했을때 특정 값을 할당하거나 초기화를 하지 않으면 기본적인 값들은 0부터 시작한다.  
이번에는 이넘에 문자열을 할당해 보자.  

그 결과를 확인하려면 TS Playground 사이트에서 코드를 넣고 `Run`을 클릭하면 콘솔창에서 확인 할 수 있다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/5408370b91e9b38c22a4e716035be40f2b147b99)

## 9.4 이넘 활용 사례

파라미터 타입을 enum으로하면 enum에서 제공하는 값만 파라미터로 넣을 수 있다.  
드롭다운 등의 목록이 필요한 곳에서 enum을 활용하면 예외처리할 부분이 줄어들고 좋다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/23239b375069a9f2bd92a2732be0a3eb5e89f3b5)