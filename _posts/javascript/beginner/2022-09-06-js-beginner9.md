--- 
title: "[JavaScript: Beginner] 9 - Object 오브젝트(ES3기준)" 
excerpt: "오브젝트, 프로퍼티, Object 인스턴스, 빌트인 오브젝트, 함수와 메소드 연결"
categories: 
    - js-beginner
tags: 
    - Object
    - instance
    - property
toc: true
--- 
## 9.1 자바스크립트 오브젝트 구분, 네이티브/호스트 오브젝트, 오브젝트와 인스턴스

오브젝트
- 빌트인오브젝트
    - 사전에 만들어 놓은 오브젝트
    - 빌트인 Number 오브젝트, 빌트인 String 오브젝트
- 네이티브 오브젝트
    - JS 스펙에서 정의한 오브젝트
    - 빌트인 오브젝트 포함
    - JS 코드를 실행할 때 만드는 오브젝트 -> Argument 오브젝트
- 호스트 오브젝트
    - 빌트인, 네이티브 오브젝트를 제외한 오브젝트
    - window, DOM 오브젝트
    - JS는 호스트 환경에서 브라우저의 모든 요소 기술을 연결하고 융합하며 이를 제어

```javascript
var node = document.querySeletor("div");
console.log(node.nodeName); // DIV
/**
 * 1. querySelector()는 DOM 함수
 * 2. DOM에서 제공하는 오브젝트를 호스트(Host) 오브젝트라고 부름
 * 3. 마치 JS 함수처럼 DOM 함수 사용
*/
```

오브젝트와 인스턴스
- 강좌에서 오브젝트는 new 연산자를 사용하지 않고 빌트인 오브젝트로 만든 오브젝트를 지칭
- `var abc = new Object();`
- `var obj = {};`
- new 연산자를 사용한 abc는 인스턴스
- 사용하지 않은 obj는 오브젝트

