--- 
title: "[TypeScript-part1] 타입 모듈화" 
excerpt: "typescript 타입 모듈화"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 17.1 타입스크립트의 모듈 시스템

타입스크립트에서 가리키는 모듈이라는 개념은 ES6+ Modules 개념과 유사하다.  
모듈은 전역 변수와 구분되는 자체 유효범위를 가지며 `export`, `import`와 같은 키워드를 사용하지 않으면 다른 파일에서 접근 할 수 없다.  

```javascript
// app.ts
import {Todo} from "./types";

let item: Todo = {
    title: '할일 1',
    checked: false,
}

// types.ts
export interface Todo {
    title: string;
    checked: boolean,
}
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/3361f8ab1fdc7181b78aabcd88767d4202fa7d61)

## 17.2 자바스크립트의 모듈 시스템

- [ES6 Modules](https://joshua1988.github.io/vue-camp/es6+/modules.html)
- [자바스크립트 모듈화 역사](https://d2.naver.com/helloworld/12864)

`import`와 `export`는 자바스크립트의 코드를 모듈화 할 수 있는 기능이다.  
여기서 모듈화란 쉽게 말해서 다른 파일에 있는 자바스크립트의 기능을 특정 파일에서 사용할 수 있는 것을 말한다.  
예전엔 `AMD(Asynchronous Module Definition)`도 있었고 요즘도 많이 사용하는 `CommonJS`도 있다.  

### 17.2.1 모듈화의 필요성

기본적으로 자바스크립트의 유효 범위는 전역으로 시작  
따라서 아래와 같이 HTML 페이지를 로딩하면 원하는 결과가 나오지 않는다.  

```html
<body>
    <!-- 여기서 말하는 모듈은 각 파일이라고 생각하면 된다.-->
    <!-- 하지만 각 파일마다 변수 영역이 나뉘는 것이 아니라서 서로 다른 파일이지만 변수명이 같을 경우 변수값이 덮어씌워지거나 기타 예기치 못한 오류가 나올 수 있다. -->
    <script src="a.js"></script>
    <script src="b.js"></script>
    <script>
        getTotal(); // 200
    </script>
</body>
```

```javascript
// a.js
let total = 100;
function getTotal() {
    return total;
}
```

```javascript
// b.js
let total = 200;
```

다른 프로그래밍 언어 배경을 가진 분들이라면 파일마다 변수의 유효범위가 다를 것이라고 생각할 것이다.  
하지만 자바스크립트는 기본적으로 변수의 유효범위가 전역으로 잡히기 때문에 네임스페이스 모듈화 패턴이나 Require.js와 같은 모듈화 라이브러리를 이용하여 모듈화 기능을 구현해 왔다.  

이제는 프로그래밍 패턴이나 별도의 모듈화 라이브러리를 사용하지 않고도 자바스크립트 언어 자체에서 모듈화를 지원한다.  

### 17.2.2 import & export 기본 문법

모듈화 기능을 사용하기 위한 기본적인 import, export 문법  

- export 문법  

> `export 변수, 함수`

다른 파일에서 가져다 쓸 변수나 함수의 앞에 `export`라는 키워드를 붙인다.  
익스포트된 파일은 임포트로 불러와 사용한다.  

- import 문법

> `import { 불러올 변수 또는 함수 이름 } from '파일 경로';`

익스포트된 변수나 함수를 `{}` 에 선언한 뒤 해당 파일이 있는 경로를 적어준다.  

### 17.2.3 import & export 기본 예제

```javascript
// math.js
export let pi = 3.14;
```

```javascript
// app.js
import { pi } from './math.js';

console.log(pi); // 3.14
```

변수가 아니라 함수를 내보내는 예제

```javascript
// math.js
export let pi = 3.14;
export function sum(a, b) {
    return a + b;
}
```

```javascript
// app.js
import { sum } from './math.js';

sum(10, 20) // 30
```

### 17.2.4 import & export 브라우저 지원 범위

ES6의 기본적인 문법들이 최신 브라우저에서 지원되는데 반해 import, export는 아직 보조 도구가 있어야만 사용할 수 있다.  

가급적 실무 코드에서 사용할 때는 `웹팩(webpack)`과 같은 모듈 번들러를 이용하여 구현하는 것을 추천  

## 17.3 전화번호부 애플리케이션에 모듈화 실습

1. types.ts파일 만들기
2. 타입정의한 코드 옮기기
3. 다른파일로 옮겼으니까 export를 이용해서 꺼내서 사용할 수 있도록 만들기
4. export한 내용을 import로 원래 파일로 들고오기

```javascript
// types.ts
interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio',
}

export { PhoneType, Contact };
```

```javascript
// index.ts
import { Contact, PhoneType } from './types';
//...
//...
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/8ec0d6c3e823be468b0d258df325f79ab986d5b7)




