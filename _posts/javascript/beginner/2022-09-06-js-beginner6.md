--- 
title: "[JavaScript: Beginner] 6 - 빌트인(Built-in)" 
excerpt: "빌트인, 빌트인 오브젝트"
categories: 
    - js-beginner
tags: 
    - builtin
toc: true
--- 
## 6.1 빌트인 개요, 빌트인 분류

Built-in이란?
- 값 타입, 연산자, 오브젝트(Object)를 사전에 만들어 놓은것
- JS 코드를 처리하는 영역에
- 사전 처리를 하지 않고 즉시 사용
- 자바스크립트의 기본구조: key:value

## 6.2 빌트인 오브젝트 유형, 빌트인 오브젝트 형태

- Number 오브젝트
    - 123과 같은 숫자, 상수, 지수
- String 오브젝트
    - "abc"와 같은 문자열, 분리, 연결
- Boolean 오브젝트
    - true, false
- Object 오브젝트
    - {key: value} 형태
- Array 오브젝트
    - `[1,2,"A","가나다"]` 형태
- Functio 오브젝트
    - function abc() {} 형태
- Math 오브젝트
    - abs()-절대값, round()-반올림 등의 수학 계산
- Date 오브젝트
    - 연월일, 시분초
- JSON 오브젝트
    - `[{"name":"value"}]` 형태
    - 서버와 데이터 송수신에 사용
- RegExp 오브젝트
    - ^, &와 같은 정규 표현식
- 글로벌Global 오브젝트
    - 소스 파일 전체에서 하나만 존재
    - 모든 코드에서 공유, 접근 가능
    - 전역 객체라고도 하며, 뉘앙스에 차이 있음
