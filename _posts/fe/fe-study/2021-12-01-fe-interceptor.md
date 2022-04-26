--- 
title: "Interceptor/Debounce/throttle" 
excerpt: "인터셉터"
categories: 
    - fe-study
tags: 
    - interceptor
toc: false
--- 
## Interceptor/Debounce/throttle

인터셉터는 사용자의 요청을 가로채는 역할(서버에 권한이 있는지 확인하는등)
사용자의 요청이 컨트롤러에 가기 전에 가로채고, 서버의 응답이 사용자에게 가기 전에 가로챈다.

Debounce, throttle
자주 사용 되는 이벤트나 함수 들의 실행되는 빈도를 줄여서, 성능 상의 유리함을 가져오기 위한 개념이다.

debounce(입력주기가 끝나면 출력) : scroll, resize event 이런 이벤트가 끝났을때 한번만 실행되게 하고싶을때
throttle : 일정시간동안 한번만 실행

code)
```html
<input id="search" type="search" name="search" value="" />
```
```javascript
var debounce = null;
var throttle = null;
function keyUpFn(el) {
  // normal
  console.log('normal', el.target.value, new Date().getTime());
  // debounce
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    console.log(
      'debounce',
      el.target.value, new Date().getTime());
  }, 500);
  // throttle
  if(!throttle) {
    setTimeout(() => {
      console.log('throttle', throttle, new Date().getTime());
      throttle = null;
    }, 500);
  }
  throttle = el.target.value;
}
document.getElementById("search").addEventListener('keyup', keyUpFn);
// normal h         1583658583270
// normal he        1583658583582
// normal hel       1583658583878
// normal hell      1583658584182
// throttle hell    1583658584271
// 입력이 끝남
// normal hello     1583658584534
// debounce hello   1583658585036
// throttle hello   1583658585536
```

1. Input Search Element 에 Keyup Event Listener 를 등록한다.
2. normal 에서는, 키보드입력 발생하면, 그 즉시 value 를 출력한다.
3. throttle 에서는 키보드입력 발생하면, 500ms 후에, 가장 최신 value 를 출력하고, 초기화 하여, 키보드 입력이 끝날때까지 반복한다.
4. debounce 에서는 키보드 입력이 발생하면, 500ms 동안 기다리다, 그 안에 키보드 입력이 발생하면, 시간을 초기화 하고 다시 기다리다, 가장 최신 value 를 출력한다.

Throttle  
여러번 발생하는 이벤트를 일정 시간 동안, 한번만 실행 되도록 만드는 개념이다.  
위 예제에서 500ms 동안 이벤트 실행을 막고, 한번만 실행 때문에, 잦은 이벤트 발생을 막아 성능상의 유리함을 가져 올 수 있다.  
Debounce 와 다른점은 이벤트 발생 시간 이후에 일정 시간 동안 만을 기다리고, 이벤트를 실행 후 재차 기다린 다는 점이다.

Debounce  
가장 마지막 이벤트 만을 실행 되도록 만드는 개념이다.  
입력이 끝날때, 가장 마지막 이벤트만을 실행하여, 성능성 유리함을 가져올 수 있다.  
Throttle 와 다른점은, 마지막 이벤트에서 일정 시간동안 이벤트가 발생한다면, 또 일정 시간을 기다린다는 점이다.  

Throttle 와 Debounce 차이점  
Throttle 와 Debounce 의 차이점은 이벤트를 언제 발생 시킬지의 시점 차이이다.  
Debounce 는 입력이 끝날때까지 무한적으로 기다리지만, Throttle 는 입력이 시작되면, 일정 주기로 계속 실행한다.  
Debounce 의 시간을 짧게 가져간다면, Throttle 와 비슷한 효과가 날 수 있지만, 그럼에도 시점에서 차이가 날 수 있다.  

대표적인 예로 자동완성 만들 경우,  
일정 주기로 자동으로 완성되는 리스트를 보여주는 것에는  
사용자 측면에서 Throttle (검색 되는 경험) 가 유리할 수 있지만,  
성능상에서는 Debounce (1번만 호출) 가 훨씬 유리할 수 있다.



