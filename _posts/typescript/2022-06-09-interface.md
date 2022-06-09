--- 
title: "[TypeScript] interface 사용" 
excerpt: "interface"
categories: 
    - typescript
tags: 
    - interface
--- 
## TypeScript interface 사용하기

TypeScript에서 Object 타입을 선언할 때 interface와 type을 사용  
TypeScript는 객체를 선언하고 그냥 접근할 수 없다.  

```typescript
let user:object = {
    name: "ellin",
    age: 20
} // 객체 선언
console.log(user.name) // Error
```

이때 interface를 선언해서 접근해야 한다.  

### 사용법

```typescript
/**
 * interface 인터페이스 이름 {
 * key: type;
 * key: type;
 * }
 * **/
interface User {
    name: string;
    age: number;
}
const user: User = {
    name: "ellin",
    age: 20,
}
console.log(user.name) // ellin
```

```typescript
// store notice.ts
const state: NoticeStateType = {
    ...
    selected_fn_000039: null,
    ...
}

// store noticeType.ts
export interface NoticeStateType {
    ...
    selected_fn_000039: string | null;
    ...
}
```

### optional, readonly, index 사용법

```typescript
enum Gender {
    Man,
    Woman
}

interface User {
    name: string;
    age: number;
    gender?: Gender; // 있어도 되고 없어도 되는 옵셔널-물음표
    readonly birth: number; //읽기 전용
    [key:number]: string; // 여러 속성 정보를 받을 때 사용 (key:number, value:string)
}

//gender 포함
const user1:User = {
    name: "ellin1",
    age: 20,
    gender: Gender.Man,
    birth:20020101,
}

//gedner 제외
const user2:User = {
    name: "ellin2",
    age: 21,
    birth:20020101
}

//index 사용
const user3:UserInfo = {
    name: "ellin3",
    age: 22,
    birth:19891225,
    1: "1반",
    2: "2번"
}
```

- gender 속성은 optional(?) 형태라서 사용하지 않으면 선언을 피할 수 있다.
- birth 속성은 읽기 전용으로 선언했기 때문에 값을 수정하려고 하면 Compile Error 발생
- `[key:number]` 속성은 index방식으로 여러개를 한 번에 사용할 수 있고, 사용하지 않으면 선언을 피할 수 있다.