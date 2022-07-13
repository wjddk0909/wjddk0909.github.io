--- 
title: "[vue] ESLint 적용시 multi-word-component-names 해결방법" 
excerpt: "ESLint"
categories: 
    - vue-study
tags: 
    - ESLint
toc: false
--- 
## ESLint란?

ESLint는 ES + Lint의 합성어로 ES는 표준 자바스크립트 (ECMA Javascript)를 말하고, Lint는 에러가 있는 코드에 표시를 달아놓는 것을 말한다.
 
그래서 ESLint를 사용하면 위 처럼 컴포넌트의 이름이 합성어가 아닐 경우 에러가 발생  

## 해결방법

설정파일에 옵션을 추가하면 되는데,  
vue cli로 default로 프로젝트를 생성하면 package.json안에 ESLint 설정옵션이 생성된다.  
이것을 따로 빼서 파일을 별도로 생성해 주는게 나중에 옵션을 추가해 줄 경우 코드가 길어지는 것을 방지해 줄 수 있다.  

> 루트에 `.eslintrc.js` 파일 생성

```javascript
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'vue/multi-word-component-names': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
			},
		],
	},
};
```

생성한 파일안에 복붙해주기 `'vue/multi-word-component-names': 'off',` 이부분이 multi name 꺼주는 부분이다.  
이렇게 하면 에러는 보여주지 않는데, 로컬에서 서버를 돌렸을때 에러를 뱉어낸다.  

`vue.config.js`파일에 `lintOnSave:false`를 추가해 준다.  

이렇게 해주면 에러는 사라지지만 웬만하면 두단어이상 조합으로 파일과 네임을 생성하는게 좋다.  
vue에서 권장하는 사항이므로 지켜주는게 좋을듯!

- [.eslintrc.js 참고 페이지](https://islet4you.tistory.com/entry/ESLint-%EC%A0%81%EC%9A%A9%EC%8B%9C-multi-word-component-names-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95)
