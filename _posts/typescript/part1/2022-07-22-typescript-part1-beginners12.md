--- 
title: "[TypeScript-part1] 두번째 프로젝트 - 전화번호부 애플리케이션" 
excerpt: "typescript 두번째 프로젝트"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 12.1 프로젝트 소개

```javascript
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

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts() {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts = [];

  constructor() {
    this.fetchData();
  }

  fetchData() {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name) {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address) {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber, phoneType: string) {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  displayListByName() {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress() {
    return this.contacts.map(contact => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
```

## 12.2 프로젝트 실습 방법 안내

1. tsconfig.json 파일에서 noImplicitAny 옵션값을 true로 설정, 
strict 옵션도 true로 설정하고, strictFunctionTypes": true도 추가.

위와 같이 true로 바꾸는 순간 타입을 지정하지 않은 것들에 대해 추론과정에서 에러로 간주한다.  
strict 또한 true라 훨씬 더 많은 error 가 발생한다는 것을 볼 수 있다.  
strictFunctionTypes": true 이것도 설정해서 더 많은 것들이 error 로 잡히는 것을 볼 수 있다.  

2. .eslintrc.js 파일에서 @typescript-eslint/no-explicit-any와 @typescript-eslint/explicit-function-return-type를 주석처리 하면 반환 타입이 없다는 에러들이 많이 잡힌다.  
이렇게 `lint`를 어떻게 설정하냐에 따라 고민할 부분이 많아진다.  

3. endOfLine: 'auto' : 코드의 개행부분에 에러가 잡히면 eslintrc에 넣어준다.  
```javascript
rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto'
      },
    ],
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/c9af028751fd556c17ff65b04b47a12475588878)

## 12.3 애플리케이션에 정의된 타입 설명 및 API 함수 타입 정의 힌트

함수 `function fetchContacts()`의 반환값을 보면 `new Promise`를 반환하기 때문에 `function fetchContacts(): Prommise`로 반환 타입을 지정해 주면 에러가 뜨고 프리뷰를 확인 해 보면 설명에 제네릭이 뜬다. 이유가 뭘까?  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/505b61fcafa91719c3cfa1f41ce690ea6e570f0f)

## 12.4 Promise를 이용한 API 함수 타입 정의

![타입정의](/assets/images/ts/part1-12_01.jpg)

함수의 반환값 카입을 정의하지 않았지만 반환값이 string[]타입일거라고 추론하고 있다.  
함수내부의 코드를 보고 `return items` 부분의 items가 string[] 타입이란 것을 알 수 있기 떄문이다.  

![타입정의](/assets/images/ts/part1-12_02.jpg)  

서버에서 데이터를 받아오는 상황이라 가정하고 Promise 비동기 상황으로 코드를 짜면, 위와같이 추론괒어을 거친 반환값 타입이 `Promise>unknown>`이다.  
그러니까 위 코드처럼 `new Promise`를 반환하게 되면 추론과정에서 Promise 인스턴스를 반환하는건 알지만 그 안에서 반환하는 게 무슨 타입인지 모른다는 것이다.  
즉, 타입스크립트가 Promise 인스턴스안에 들어오는 코드에 대해선 알 수가 없다는 것이다.  

![타입정의](/assets/images/ts/part1-12_03.jpg)  

Promise타입에 대해 보면 타입스크립트 내부적으로 어떤것들을 정의했는지 볼 수있다.  
`Promise<unknown>`프로미스를 통해서 반환받을 값의 타입까지 정확히 명시를 해야한다는 것이다.  
Promise가 기본적으로 제네릭을 통해 정의가 되고있기 떄문이다.  

```javascript
function fetchItems(): Promise<string[]> {
  const items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items);
  });
}

fetchItems();
```

실제 서비스에서는 위와 같은 목업 코드말고 axios와 같은 Promise 객체 기반 라이브러리를 통해 코드를 작성할 것이다.  
그럴때 위와 같은 타입을 정의해 주면 된다.  

```javascript
function fetchItems(): Promise<number[]> {
  const items: string[] = ['a', 'b', 'c'];
  return new Promise(function (resolve) {
    resolve(items); // error: 왼쪽 item은 number로 이루어진 배열이되어야하는데 현재 추론과정에선 string으로 이루어진 배열이므로 에러가 발생한다.
  });
}

fetchItems();
```

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/12a48d6375044900fd70d5fa9a20687af0e45458)

## 12.5 전화번호부 클래스 전언부 타입 정의

클래스를 보면 기본적으로 클래스안에 사용될 변수, 속성에 대해서 구체적으로 정의할 수 있다.  

contacts = []; -> contacts: Contact[] = [];

여기에 정의해주기 전에는 밑에 fetchData 안에 `this.contacts = response;`부분에 에러가 잡히던 부분이 정의해 주면서 에러가 사라진다.  

constructor는 기본적으로 따로 타입 선언 안해도 된다. 

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/31ed9427c3b1224dd218f157b8ff290faddc10d1)

## 12.6 전화번호부 검색 메서드의 타입 정의

`return this.contacts.filter(contact => contact.name === name);`  
filter기 때문에 리턴값은 배열을 반환한다.  

폰넘버는 이넘으로 정의해볼 수 있다.  

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/3ea58c187c48776775462e5dc51a505ce485307e)

## 12.7 이넘을 이용한 타입 정의


> [diff check](https://github.com/wjddk0909/typescript-part1/commit/3b7c5a6c30744d4134223cfdd81c6adc842254c1)

## 12.8 주요 메서드(조회) 타입 정의 및 실습 마무리

map -> 기존 배열을 변환을 해서 새로운 배열을 만들어주는 함수라고 보면 된다.  

[MDN Array map90 API 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

> [diff check](https://github.com/wjddk0909/typescript-part1/commit/a3ab3d5955a31bb93c1d3e092252801a726e4f0f)




