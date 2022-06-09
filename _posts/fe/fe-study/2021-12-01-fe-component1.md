--- 
title: "module import export 방식의 방법과 차이점" 
excerpt: "import export"
categories: 
    - fe-study
tags: 
    - framework
    - component
    - import
    - export
toc: false
--- 
## component를 커스텀해야 하는 이유

vue를 사용해서 작업할때 vuetify나 element-ui를 사용하면 편하지만, 직접 커스텀해서 만들줄 알아야 한다.  
그래야 구조도 빠르게 파악할 수 있고 특히 element-ui 같은 경우 tree shaking이 불가능하기 때문에 안쓰는게 좋다.

### tree shaking

트리쉐이킹이란 사용하지 않는 코드를 제거하는 방식이다.  
es6에서는 모듈을 가져올때 `export`로 내보내고 `import`로 가져오는데 정적 방식과, 동적 방식 두가지가 있다.  

- 정적  
기본적으로 개체 하나만 선언되어 있는 모듈(하나만 내보내기 함)로 한번에 묶어서 내보내고 가져올때는 아무 이름으로 사용해도 괜찮다.  
해당 모듈에는 개체가 하나만 있다는 사실을 명확히 나타낼 수 있다.  

```javascript
// 📁 cube.js
export default function cube(x) {
  return x * x * x;
}
// main.js
import cube1 from './cube.js';

console.log(cube1(3));
```

- 동적  
여러 값을 내보낼때 유용, 가져올때는 내보낸 이름과 동일한 이름을 사용해야 한다.  
가져올때는 필요한 개체만 가져와서 사용할 수 있으므로 불필요한 코드를 가져오지 않아서 리소스 절약이 가능하다.  

```javascript
// say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
}
function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // 함수 두개를 내보냄

// 📁 main.js
// 1. 객체 형태로 한번에 가져오기
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!

// 2. 각각 적어주기 - say.js에서는 여러개를 내보냈지만 main.js에서는 sayHi하나만 필요할 경우에는 한개만 적어주면 됨
import {sayHi} from './say.js';

sayHi('John'); // Hello, John!
```