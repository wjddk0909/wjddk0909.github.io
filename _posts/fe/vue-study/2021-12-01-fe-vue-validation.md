--- 
title: "vuex helper 함수" 
excerpt: "vuex helper"
categories: 
    - vue-study
tags: 
    - vuex
    - helper
    - namespace
toc: false
--- 
## vuex 기본구조

validation-observer : 전체 범위

validation-provider : 개별

현장명이 하나일때는 필수값 검사를 안해도 됨 -> 값이 바로 들어오기때문에  
현장명이 여러개 일때를 validation-provider로 묶어줌  
** 검사해야 될 컴포넌트가 v-model식으로 작동해야함

 -> utils > validate.ts에서 required 필수값 내제되어 있음 이 함수를 꺼내와서 메세지를 전달 할 수 있다.  
 -> main.ts에 임포트 해서 전역으로 사용하도록 함


렌더링원리 공부하기

for문에서 key값을 쓰는 이유?
key값이 없으면...

spa가 랜더링이 빠른이유는? 가상돔에서 처리하기때문에  
가상돔을 사용하면 빠른이유는? 메모리단계에서 기억하고 계산하기 때문에 빠르다.
