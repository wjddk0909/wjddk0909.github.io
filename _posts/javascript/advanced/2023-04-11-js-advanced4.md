--- 
title: "Execution Context 실행 콘텍스트" 
excerpt: "실행콘텍스트, 렉시컬 환경 컴포넌트, 환경레코드, this 바인딩 컴포넌트, 파라미터 매핑"
categories: 
    - js-advanced
tags: 
    - context
toc: true
--- 
## 4.1 실행 콘텍스트, 실행 콘텍스트 상태 컴포넌트

Execution Context  
- 함수가 실행되는 영역, 묶음
- 함수 코드를 실행하고 실행 결과를 저장

```javascript
function music(title) {
  var musicTitle = title;
};
music('음악');
```

- music('음악')으로 함수를 호출하면 엔진은 실행콘텍스트를 생성
- 실행 콘텍스트 안으로 이동
- 실행 콘텍스트 실행 단계: 준비 단계, 초지화 단계, 코드 실행 단계

- 실행 콘텍스트 생성 시점: 실행 가능한 코드를 만났을 때
- 실행 가능한 코드 유형: 함수 코드, 글로벌 코드, eval 코드
- 코드 유형을 분리한 이유
  - 실행 콘텍스트에서 처리방법과 실행 환경이 다르기 때문
  - 함수 코드: 렉시컬 환경(정적 환경)
  - 글로벌 코드: 글로벌 환경
  - eval 코드: 동적 환경

실행 콘텍스트 상태 컴포넌트  
- 상태 컴포넌트 유형
  - 렉시컬 환경 컴포넌트(LEC): Lexical Environment Component
  - 변수 환경 컴포넌트(VEC): Variable Environment Component
  - this 바인딩 컴포넌트(TBC): This Binding Component

## 4.2 렉시컬 환경 컴포넌트, 렉시컬 환경 컴포넌트 구성/설정, 외부 렉시컬 환경 참조, 변수 환경 컴포넌트

## 4.3 실행 콘텍스트 실행 과정

## 4.4 환경 레코드, 환경 레코드 구성, 글로벌 환경

## 4.5 this 바인딩 컴포넌트

## 4.6 호출 스택(call stack)

## 4.7 파라미터 매핑, 함수 호출, 파라미터 값 매핑, 파라미터 이름에 값 매핑 방법

## 4.8 파라미터 값 할당 기준


