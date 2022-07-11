--- 
title: "[TypeScript-part1] 타입스크립트 시작하기" 
excerpt: "typescript 시작하기"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 3.1 타입스크립트 프로젝트 시작하는 방법(라이브러리 설치와 TSC)

타입스크립트로 코드를 작성했을때, 브라우저에서 이 ts코드를 아직은 바로 인식할 수 없다.  
따라서 이 ts 파일을 브라우저가 인식할 수 있는 자바스크립트 파일로 변환을 해줘야하는데 이것을 컴파일(compile)이라고 한다.  

현재 ts파일을 만든 폴더에서 터미널을 열어준 후에 node -v이 설치가 되어있는지 확인을 하고(v10 이상인지)  
`npm install typescript -g` 로 라이브러리를 설치한다.  -> yarn add로 설치하면 안되는듯?

`tsc index.ts` 명령어로 index.ts를 컴파일 시켜준다.  

- [npm 무료강의](https://www.inflearn.com/course/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%9B%B9%ED%8C%A9/unit/37370?tab=curriculum)
- [NPM 소개 문서](https://joshua1988.github.io/webpack-guide/build/node-npm.html#npm)
- [npm i typescript -g 명령어 의미](https://joshua1988.github.io/webpack-guide/build/npm-module-install.html#npm-%EC%84%A4%EC%B9%98-%EB%AA%85%EB%A0%B9%EC%96%B4)

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/7f7ab5d62b0c40bf2f6a8df95e8b237b8715c662)

## 3.2 타입스크립트 설정파일

타입스크립트 설정파일  
타입스크립트를 변환하기 위해서 TSC를 사용했는데, 웹팩이나 그런트. 걸프 등과 같은 웹 테스크 매니저를 통해 자동화를 하는 것이 편하다.  
그래서 타입스크립트를 사용할 때 웹팩을 알고있는것이 좋다.  

tsconfig.json으로 설정파일을 만들어서 정의  

tsconfig.json로 파일을 생성하면 되는데 웹스톰에서 파일 생성시 자동으로 폼이 만들어져서 생성된다.  
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": true
  },
  "exclude": [
    "node_modules"
  ]
}
```

'target'은 타입스크립트파일을 어떤 버전의 자바스크립트로 바꿔줄지 정하는 부분 es5로 셋팅해놓으면 es5 버전 자바스크립트로 컴파일(변환) 신버전을 원하면 es2016, esnext 이런 것도 입력 가능  

'module'은 자바스크립트 파일간 import 문법을 구현할 때 어떤 문법을 쓸지 정하는 곳 commonjs는 require 문법, es2015, esnext는 import 문법을 사용  
그래서 어느정도 IE 호환성을 원하면 es5, commonjs를 사용해야 한다.   
근데 정말 신버전 자바스크립트만 표현가능한 그런 문법들이 있는데(예를 들어 BigInt() 이런 함수와 bigint 타입)  
그런 것들은 esnext 등으로 버전을 올려줘야 사용가능  

tsconfig에 들어갈 기타 항목들
```json
{
 "compilerOptions": {

  "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
  "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "outDir": "./", //js파일 아웃풋 경로바꾸기
  "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, //컴파일시 주석제거 

  "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  "noImplicitAny": true, //any타입 금지 여부
  "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
  "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
  "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
  "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
  "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

  "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
  "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
  "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
 }
}
```

- [tsconfig 파일 설정 옵션 참고](https://codingapple.com/unit/typescript-tsconfig-json/)

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/3750e167117e25c273048bb1f1b04424b6c2bdda)

## 3.3 타입스크립트 플레이그라운드 사이트 소개

- [플레이그라운드 사이트](https://www.typescriptlang.org/play)
- [바벨사이트](https://babeljs.io/)

플레이그라운드는 타입스크립트를 자바스크립트로 변환해서 보여주는 사이트 입니다.  
바벨은 자바스크립트의 최신문법을 최대한 많은 브라우저가 호환할 수 있도록 변환해주는 도구입니다.  

바벨 > Try it out > TARGETS 안에 내용 지우고
```javascript
// 왼쪽에 입력하면
const sum = (a, b) => a + b; 

// 오른쪽에 변환
"use strict";

var sum = function sum(a, b) {
  return a + b;
};
```

플레이그라운드에서 클래스에 타입을 정의하고 이것을 es5로 변환해보면
```javascript
// 왼쪽에 타입스크립트를 입력
class Student {
    name: string;

    constructor(name: string) {
        tihs.name = name;
    }
}

// es5로 설정해서 오른쪽에 변환
"use strict"
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    return Student;
}());
```

