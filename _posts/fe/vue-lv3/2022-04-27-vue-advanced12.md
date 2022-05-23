--- 
title: "12 - 외부 라이브러리 모듈화 방법(차트)" 
excerpt: "Vue news"
categories: 
    - vue-lv3
tags: 
    - vue
    - chart
toc: true
--- 

## 12.1 라이브러리 모듈화의 이유와 배경

[Chart.js](https://www.chartjs.org/docs/latest/)
[State of JS 2018](https://2018.stateofjs.com/front-end-frameworks/overview/)

1. 외부 라이브러리 모듈화
- 이유 : Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함
- 종류
    1. 차트
    2. 데이트피커
    3. 테이블
    4. 스피너

## 12.2 차트 라이브러리 설치 및 차트 그리기

- chart.js라이브러리 설치 `yarn add chart.js@2`
- chart.js 공식사이트에서 예제 코드 복사해서 붙여넣기

>[diff check](https://github.com/wjddk0909/vue-chart/commit/f519e97f0f1b5d8ba43f0037dc0bf00a3a3749cd)

## 12.3 BarChart 컴포넌트화 작업

- 차트 -> 컴포넌트화 : 차트에 해당하는 코드들을 컴포넌트에 만들기
- 컴포넌트의 플러그인화
- 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합

>[diff check](https://github.com/wjddk0909/vue-chart/commit/3c445f959ca7a499906e6f9cd172005831351145)

## 12.4 LineChart 제작 및 차트 충돌 문제 해결

[line chart](https://www.chartjs.org/docs/latest/getting-started/)

>[diff check](https://github.com/wjddk0909/vue-chart/commit/bc92bf4dd663572e1b9ee8cb6ae893cb6c8a3a37)



