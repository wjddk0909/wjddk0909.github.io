--- 
title: "9 - Vuex - 소개" 
excerpt: "Todo App"
categories: 
    - vue-lv2
tags: 
    - vue
    - vuex
    - store
toc: true
--- 

## 9.1 Vuex 소개

Vuex - 상태 관리 라이브러리

- 복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 Vuex라이브러리 소개
- Vuex 라이브러리의 등장 배경인 `Flux 패턴` 소개
- Vuex 라입러리의 주요 속성인 `state`, `getters`, `mutations`, `actions` 학습
- Vuex를 더 쉽게 코딩할 수 있는 방법인 `Helper` 기능 소개
- Vuex로 프로젝트를 구조화하는 방법과 모듈 구조화 방법 소개

React에서는 `Flux 패턴`으로 복잡한 앱에서 야기되는 관리 문제점을 해결 하고 있어서 Vuex에 도입했다.  

## 9.2 Flux와 MVC 패턴 소개 및 Flux 등장 배경

Vuex란?  
- 복잡하고 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
- React의 Flux패턴에서 기인

Flux란?  
- MVC패턴의 복잡한 데이터 흐름 문제(페이스북같이 복잡한 컴포넌트에서 하나의 데이터가 바뀌었을때 다른 컴포넌트에서 추적하기가 어려움)를 해결하는 개발 패턴

Action -> Dispatcher -> Model -> View  
Action에서 View까지 항상 한방향으로 흐름(unidirectional data flow)

1. action : 화면에서 발생하는 이벤트 또는 사용자의 입력
2. dispatcher : 데이터를 표시하는 방법, 메서드(모델(data)을 바꾸기 위한 역할)
3. model : 화면에 표시할 데이터
4. view : 사용자에게 비춰지는 화면(action을 호출해서 계속해서 단방향으로 이동)

사용자가 화면에서 클릭같은 조작(action)을 하면 메서드가 발생해서 데이터를 변경(dispatcher) 하면 store(model)가 변경이 되고 그것이 화면(view)에 반영이 되고 다시 화면에서 action을 호출함

프롭스가 내려갈것이고 하위에서 올릴때는 이벤트로 올린다 등의 예측이 가능함

+MVC패턴 : Controller -> Model <-> View (양방향)  
ㄴ view : 화면 / Model : 데이터 / Controller : view와 model을 제어

## 9.3 Vuex가 필요한 이유, Vuex 컨셉, Vuex 구조

- 복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트 간에 데이터 전달이 어려워진다.
- 하위에서 루트로 보낼때 이밴트버스로 해결할 수 있지만 어디서 이벤트를 보냈는지 알기 어려움(컴포넌트 간 데이터 전달이 명시적이지 않음)

Vuex로 해결할 수 있는 문제  
- MVC패턴에서 발생하는 구조적 오류
- 컴포넌트 간 데이터 전달 명시
- 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제

Vuex 컨셉  
- State : 컴포넌트 간에 공유하는 데이터 `data()` - 데이터프로퍼티라고 보면 됨
- View : 데이터를 표시하는 화면 `template` - template속성
- Action : 사용자의 입력에 따라 데이터를 변경하는 `methods` - 메서드

화면(`template`)에서 버튼을 클릭하면 버튼은 v-on:click="addTodo"를 발생시키는데 이게 `action`, action이 data를 변경하는데 이 data가 `state`

Vuex 구조  
컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태  

컴포넌트에서 비동기로직(actions)에서 처리하고(setTimeout, apiCall등) 데이터는 바꾸지 않고 데이터를 바꿀 수 있는 mutations를 콜하고 mutations(동기 로직)만 state를 바꿈  
