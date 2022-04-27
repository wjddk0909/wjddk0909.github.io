--- 
title: "code splitting" 
excerpt: "코드 스플리팅"
categories: 
    - fe-study
tags: 
    - splitting
toc: false
--- 
## Code Splitting

웹사이트를 만들었는데 첫 로드에 시간이 걸린다면 왜 그럴까?  
이유는 햔 페이지만 로드하면 되는 첫 시작 페이지에서 필요하지 않은 여러 페이지(프레임워크를 사용하는 경우 import한 컴포넌트 파일)을 로딩하기 때문  

`webpack`은 이러한 문제점에 대한 해결팩으로 `코드 스플리팅`을 제공한다.  

코드 스플리팅은 웹 사이트를 더 빠르게 운영하는데 도움이 되는 주제이다.  
페이지에 필요한 컴포넌트만 로드되고, 원한다면 다른 컴포넌트도 함께 로드할 수 있다. 많은 컴포넌트를 작성하고 여러 경로를 설정(라우팅)해 줘야 하는 대형 프로젝트에서 코드 스플리팅을 사용하면 로드 시간을 단축할 수 있다.  

경로 설정에 코드 스플리팅 기능을 적용할 것이기 때문에 라우터가 필요하다.  

코드를 분할 하는 방법은 세가지가 있다. 
- Entry Points : `entry` 설정을 사용하여 코드를 수동으로 분할
- Prevent Duplication : `Entry dependencies` 또는 `SplitChunksPlugin`을 사용하여 중복 청크를 제거하고 청크를 분할
- Dynamic Imports : 모듈 내에서 인라인 함수 호출을 통해 코드 분할

Dynamic Imports 방법(작성중...)

샘플 코드 만들기  

npm install --save-dev @babel/plugin-syntax-dynamic-import