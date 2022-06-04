--- 
title: "디바운싱과 쓰로틀링" 
excerpt: "이벤트 제어"
categories: 
    - javascript
tags: 
    - debounce
    - throttle
--- 
## 디바운싱 기법과 쓰로틀링 기법

디바운싱과 쓰로틀링 모두 웹에서 발생하는 이벤트르 제어하는 방법이다.  

스크롤 이벤트의 경우 스크롤 할 때마다 이벤트가 발생해서 스크롤하면 이벤트가 굉장히 많이 중첩된다.  
디바운싱과 쓰로틀링을 사용하여 그런 상황을 막을 수 있다.  

### 디바운싱(Debouncing)
> 연속으로 호출되는 함수들 중에서 마지막에 호출되는 함수(또는 제일 처음 함수)만 실행되도록 하는것  
> 어떤 이벤트가 호출되고 일정시간 안에 같은 이벤트가 다시 발생하면 그전 이벤트는 취소하고 새로 발생한 함수를 백그라운드에 올린다.  
> 연속성을 기준으로 효율화가 이루어짐

1. 이벤트가 발생하면 특정 시간 후에 로직이 실행되도록 `예약`을 걸어둔다.
2. 예약된 시간이 되기 전에 이벤트가 다시 발생하면 기존 `예약을 취소`하고 `새로운 예약`을 건다.

resize시 이벤트가 실행되어야 할때, resize는 브라우저의 크기를 바꾸는 중에 계속 발생하는데 그때마다 로직이 실행되면 성능상 문제가 생길 수 있다.  
그때 debounce 기법을 사용한다.  

```javascript
//Javascript
let timer;
window.addEventListener('resize', function(){
    clearTimeout(timer);
    timer = setTimeout(function() {
        console.log('resize event!');
    },2000)
});
```

이벤트가 발생할 때마다 이전에 설정한 내용을 지우고 다시 새로 timer를 설정한다.  
설정한 시간내에 이벤트가 다시 발생하지 않으면 이벤트 발생이 끝난 것으로 보고 코드가 실행된다.  

- ajax검색에서 디바운싱을 많이 사용한다.  
+ input에서 사용자가 작성하는 텍스트에 따라 연관검색어를 보여주는 기능이 있을때, 한개 한개 칠때마다 연관검색어가 보이기보다는 어느정도 유의미한 단어가 만들어져서 사용자가 타이핑을 멈춰서 연속성이 끊겼을때 1번 ajax요청을 하면 효율적이다.  

### 쓰로틀링 (Throttling)
> 이벤트에 의한 콜백을 일정시간 뒤에 호출  
> 무조건 일정시간마다 실행, 일정시간안에 발생한 같은 이벤트는 취소시킨다.  

1. 이벤트가 발생하면 특정 시간 후에 로직이 실행되도록 `예약`을 건다.
2. 예약된 시간이 되기전에 이벤트가 발생하면 새로운 예약을 걸지 않고 발생한 이벤트들을 `스킵`한다.

쓰로틀링은 주로 스크롤 이벤트에서 많이 사용  
스크롤 이벤트는 매우 짧은 시간에 여러번 일어난다. 일정 시간안에 일어난 스크롤 이벤트는 단 한번만 콜백함수를 호출 하도록 만들면 효율적이다.  

```javascript
var timerForThrottle;
window.addEventListener('scroll', function(e) {
  if (!timerForThrottle) {
    timerForThrottle = setTimeout(function() {
      console.log('scroll event');
      timerForThrottle = null;
    }, 2000);
  }
});
```