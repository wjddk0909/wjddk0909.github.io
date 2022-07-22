--- 
title: "[TypeScript-part1] 제네릭" 
excerpt: "typescript Generics"
categories: 
    - typescript-part1
tags: 
    - typescript
    - generics
toc: true
--- 
## 11.1 제네릭 소개

제네릭은 C#, Java등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용 되는 특징이다.  
특히, 한가지 타입보다 여러가지 타입에서 동작하는 컴포넌트를 생성하는데 사용된다.  

제네릭이란, 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미한다.  

## 11.2 제네릭의 기본 문법

```javascript
function logText(text) {
    console.log(text);
    return text;
}

logText(10); // 숫자 10
logText('hi'); // 문자열 hi
logText(true); // 진위값 true
```

위 함수는 `text`라는 파라미터에 값을 넘겨받아 `return text;` 반환해준다.  
어떤 값이 들어가도 그대로 반환한다.  
여기에서 제네릭을 한번 살펴보자.  

```javascript
function logText<T>(text: T):T {
    console.log(text);
    return text;
}
```

위 함수는 제네릭 기본 문법이 적용된 형태  
이제 함수를 호툴할 때 아래와 같이 함수 안에서 사용할 타입을 넘겨 줄 수 있다.  

```javascript
logText<string>('hi');
logText<number>(10);
```

이렇게 넘겨주면 함수에 마우스 오버했을때 프리뷰에 `function logText<number>(text: number): number` 이런식으로 타입 정의가 된다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/4babbd1fdd215a05dc5a90db4d5ed74c57a08f30)

## 11.3 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점

처음에 타입을 정의 하지 않았을때 어떤 타입이 들어가도 에러가 나지 않았던 것은 기본적으로 타입이 `any`로 되어있기 때문이다.  

그런데 여기에서 같은 로직안에서 string에서 사용하는 메소드 `split`를 사용하거나 number에서 사용하는 `toString`을 사용한다거나 하려면 같은 형식이지만 각각 코드를 계속해서 따로 생성해야 한다. 

```javascript
function logText(text: string) {
    console.log(text);
    text.split('').reverse().join('');
    return text;
}

function logNumber(num: number) {
    console.log(num);
    return num;
}

logText('a');
logNumber(10);
```

이렇게 해도 사실 크게 문제는 없지만, 단순히 타입을 따로 받기 위해서 중복되는 코드를 계속 추가하는 것은 유지보수 측면에서 좋지 않다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/7b0f3913be42aef3c4cd9d07563c1a1e7cf90c0c)

## 11.4 기존 문법과 제네릭의 차이점 - 유니온 타입을 이용한 선언 방식의 문제점

```javascript
function logText(text: string | number) {
    console.log(text);
    return text;
}

logText('a');
logText(10);
```

위와 같이 여러가지 타입을 받을 수 있게 하는 것이 유니온 타입  
유니온 타입은 input에 대한 것은 해결하지만 반환값에 대한 문제는 해결하지 못한다는 단점이 있다.  

```javascript
const a = logText('a'); // 변수 a에 담긴 값을 추론할 때 string 또는 number로 추론한다.
a.split(''); // 그렇기 떄문에 string이 들어왔지만 split메소드를 사용하면 error가 발생한다. -> 정확하게 a의 타입이 string이라고 추론이 되어야만 split메소드를 사용할 수 있다.
// 왜냐하면 number타입에는 split메소드가 없으므로.
logText(10);
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/2af8c266b7d15d1f6c518dcf9b9687b95b294132)

## 11.5 제네릭의 장점과 타입 추론에서의 이점

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/0a245578d710c2260a52b6876407e99f68066899)

## 11.6 제네릭 실전 예제 살펴보기 - 예제 설명

```javascript
function createDropdownItem(item) { // item: 배열의 요소
  const option = document.createElement('option'); // option이라는 태그를 만들어서
  option.value = item.value.toString(); // value들의 값들을 해당 속성에 그대로 연결
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}
```

## 11.7 제네릭 실전 예제 살펴보기 - 코드에 타입 정의하기

`const emails는 타입이 { value: string; selected: boolean }[]`인 반면,  
`const numberOfProducts는 타입이 { value: number; selected: boolean }[]`이라서  
밑에서 함수 `function createDropdownItem(item: { value: string; selected: boolean })`으로 정의하면 변수 `numberOfProducts`를 정의 할 수 없기때문에 `value: number`로 바꾸면 아래 `emails.forEach`부분에서 에러가 난다.  

```javascript
const emails: { value: string; selected: boolean }[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: { value: number; selected: boolean }[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: { value: string; selected: boolean }) { // value: string; 여기를 number로 바꾸면 아래 emails.forEach 부분 변수 item안에 email에 error 발생
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email); // 위에서 value: number로 타입 지정하면 여기 추론 과정에서 error가 난다. emails의 value는 string이기 때문
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});
```

유니온 타입을 이용해서 수정해보자  

```javascript
interface Email {
  value: string;
  selected: boolean;
}

const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email); // error 없음
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product); // error 없음
})
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/600773f5ce8cb0e6f1344d12e56c286c6fc83360)

## 11.8 인터페이스에 제네릭을 선언하는 방법

```javascript
interface DropDown {
    value: string;
    selected: boolean;
}

const obj: DropDown = { value: 'abc'; selected: false };

interface DropDown<T> {
    value: T;
    selected: boolean;
}

const obj: DropDow<number> = { value: 10; selected: false };
```

## 11.9 제네릭 실전 예제 살펴보기 - 제네릭을 이용한 타입 정의

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/6a97bde5ce8f53123f3fc4752bf7c8f8c431e3ff)

함수 부분 유니온 코드도 제거한 버전

>[diff check](https://github.com/wjddk0909/typescript-part1/commit/1ab9e7c198552274b30ef65f3d2d0198c0094c8f)

## 11.10 제네릭의 타입 제한

```javascript
// 제네릭의 타입 제한
function logTextLength<T>(text: T): T {
  console.log(text.length); // error가 발생: T에 length가 없다는 에러가 발생한다. 왜냐면 아직 typescript는 text에 타입이 어떤건지 모르기 때문
  
  return text;
}
logTextLength('hi');
```

```javascript
// 제네릭의 타입 제한
function logTextLength1<T>(text: T[]): T[] {
  console.log(text.length); // 배열이 들어온다는 것을 알았기 때문에 에러 해결(배열에는 length 프로퍼티 존재)

  return text;
}
logTextLength1('hi'); // 여기서는 아직 에러 발생, 인자에 데이터형태는 배열이 들어와야하는데 string이 들어왔기 때문
```

```javascript
function logTextLength2<T>(text: T[]): T[] {
  console.log(text.length); // 배열이 들어온다는 것을 알았기 때문에 에러 해결(배열에는 length 프로퍼티 존재)
  return text;
}
logTextLength2(['hi']); // 배열로 전달하면 에러 해결, 제네릭의 타입 제한
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/67a386e62f4aa7a0788bfce748991ddaf5d36b14)

## 11.11 정의된 타입으로 타입을 제한하기

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/b6bdf22dedc0bddc4857745775e299ec04a7d052)

## 11.12 keyof로 제네릭의 타입 제한하기

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/ac43da5ed8f3b90e65f175fd0046940bfe9bf101)

