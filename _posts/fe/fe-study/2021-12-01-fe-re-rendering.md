--- 
title: "SPA Virtual DOM 작동 원리" 
excerpt: "re-rendering과 key값"
categories: 
    - fe-study
tags: 
    - SPA
    - Virtual DOM
    - re-rendering
toc: false
--- 
## Virtual DOM

DOM의 노드 요소들을 직접 조작하게 되면 JavaScript 프레임워크가 필요 이상으로 DOM을 업데이트한다.  
예를 들어 10개의 항목이 있다고 가정했을때, 첫번째 요소만 고치려고 하지만 전체 목록을 다시 작성한다. 이것은 필요한 것보다 열배는 많은 작업이다.  

Virtual DOM은 DOM을 추상화한 가상의 객체를 메모리에 만들어 놓는 것.  
Virtuadl DOM은 DOM과 유사한 역할을 담당한다.  
변경사항을 DOM에 직접 수정하는 것이 아니라 중간 단계로 Virtual DOM을 수정하고 그것을 통해서 DOM을 수정(가상돔에 변경내역을 모으고 실제돔과 비교해서 변경이 있는 부분만 실제돔에 재렌더링 함)  

### Virtual DOM이 작동하는 방식

- 각 `component`는 고유한 `key`값을 가지고 이 키값은 자동으로 부여되지만 임의로 지정도 가능하다.
- 컴포넌트의 상태가 변하면 가상돔트리를 업데이트 하고 실제돔트리는 변경하지 않는다.
- 업데이트가 되면 가상돔의 키값이 바뀌고, 실제돔과 비교해서 키값이 다른 부분만 실제돔에서 리렌더링 한다.(최소한의 조작)

위와 같은 방식으로 작동하는 걸로 이해함.. (틀린 부분이 있으면 추후 수정)

