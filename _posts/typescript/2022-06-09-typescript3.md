--- 
title: "[TypeScript] #3 인터페이스" 
excerpt: "타입스크립트"
categories: 
    - typescript
tags: 
    - typescript
    - interface
--- 
## 오브젝트 인터페이스

```javascript
let user:object;

user = {
    name: 'abc',
    age: 20
}

console.log(user.name)
```

타입스크립트에서 객체를 만들고 오브젝트 타입으로 정의한 후 콘솔로 찍어보면 에러가 발생한다.  
오브젝트에는 특정 속성 값에 대한 정보가 없기 때문이다. `name`에 커서를 올려보면 오브젝트에는 name이 없다고 뜬다.  

```javascript
interface User {
    name: string;
    age: number;
}

let user: User = {
    name: 'abc',
    age: 20
}

console.log(user.age)
```

이제 `console.log(user.)`까지만 찍어도 어떤 프로퍼티들이 있는지 힌트가 뜬다.  

```javascript
interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
}

let user: User = {
    name: 'abc',
    age: 20,
    birthYear: 2000,
}

user.age = 10;
user.gender = "male"
console.log(user.age)
```
여기에서 `user.age = 10;`으로 변경은 문제가 없지만 `user.gender = "male"`은 에러가 발생한다.  
interface안에 있어도 되고 없어도 되는 옵셔닝 속성으로 넣어주면 된다.  



