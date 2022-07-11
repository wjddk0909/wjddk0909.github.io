--- 
title: "[TypeScript-part1] 타입스크립트 기초 - 변수와 함수 타입 정의하기" 
excerpt: "typescript 기초"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 4.1 기본타입 - 문자열, 숫자, 배열

- [타입스크립트 변수 타입](https://joshua1988.github.io/ts/guide/basic-types.html)

- Boolean
- Number
- String
- Object
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/f9c7b10688ecc57c2ceb078dcd0e7f2a2ac87c6b)

## 4.2 기본 타입 - 튜플, 객체, 진위값

- 튜플 : 배열의 특정 인덱스의 타입을 정의 하는것 `const address: [string, number] = ['gangnam', 100];`
- 객체 : 대다수의 데이터형이 객체이기 때문에 object로 했을때 호환되는 변수가 많을것이다.
  - `person: object` 객체명에 object라고만 타입을 선언해도 에러가 나지 않는다.
  - 좀더 구체적으로 명시하고 싶다면 객체 안의 프로퍼티의 타입을 선언해 준다.
- 진위값 : boolean

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/b3089f7bbc8f254ca1eff138ace9def91ceee33e)