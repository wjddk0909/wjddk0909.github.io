var store = [{
        "title": "github.io 블로그 시작하기",
        "excerpt":"jekyll 블로그 시작   무료 Jekyll theme 중 가장 많이 사용되고 있는 “minimal-mistakes”를 사용해서 만들기   디자인도 깔끔하고 제작자가 꾸준히 업데이트를 하고있으며, 많이 사용되고 있는 만큼 참고할 자료도 많을 것으로 보인다.   이글의 제목은 github.io 블로그 시작하기 이고, 오늘은 2021-12-03이다. 앞으로 공부하면서 계속해서 정리해서 올려봐야겠다.   ","categories": ["blog"],
        "tags": ["Jekyll","theme","blog"],
        "url": "/blog/firstpost/",
        "teaser": null
      },{
        "title": "마크다운 문법",
        "excerpt":"마크다운 문법에 대하여   제목을 쓸 때는 #을 이용     #h1  ##h2  ###h3  ####h4  #####h5  ######h6    강조는 각각 &lt;em&gt;, &lt;strong&gt;, &lt;del&gt; 사용   html 태그표현  예)     ```html     &lt;div&gt;   &lt;p&gt;Hello, JEKYLL!&lt;/p&gt;  &lt;/div&gt;    ```    결과)          &lt;div&gt;  &lt;p&gt;Hello, JEKYLL!&lt;/p&gt; &lt;/div&gt;   별표시  예)  \\*별표이지, 강조가 아닙니다\\*   결과) *별표이지, 강조가 아닙니다*       변수 입력은 `$var = “JEKYLL”;` 이렇게 합니다.    변수 입력은 $var = \"JEKYLL\"; 이렇게 합니다.     자바스크립트          function syntaxHighlight(code, lang) {    var foo = 'hi';    var bar = 1234; }    링크  [GOOGLE](https://google.com) [NAVER](https://naver.com \"title을 입력해주세요\")  문서안에서 [참조링크]를 그대로 사용 할 수 있습니다. [네이버][naver link] [GitHub][github]  [naver link]: https://naver.com [github]: https://github.com [참조링크]: https://google.com \"google로 이동합니다\"  문서 내 꺽쇠 괄호(&lt; &gt;)안의 URL은 자동으로 링크를 사용합니다. 구글 홈페이지: https://google.com 네이버 홈페이지: &lt;https://naver.com&gt;  GOOGLE  NAVER   문서안에서 참조링크를 그대로 사용 할 수 있습니다.  네이버  GitHub   문서 내 꺽쇠 괄호(&lt; &gt;)안의 URL은 자동으로 링크를 사용합니다.   네이버 홈페이지: https://naver.com     이미지  링크와 비슷한데 앞에 !가 붙습니다.  ![logo](/assets/images/logo2.png \"logo 이미지\") 이미지에 링크 추가 [![naver_logo](/assets/images/naver_logo.png)](https://naver.com \"naver로 이동\")    이미지에 링크 추가       코드 강조  숫자 1번키 옆에 `로 감싸주세요.  `code`를 강조 할 수 있습니다.  code를 강조 할 수 있습니다.    인용문  인용문(blockQuote) &gt; 남의 말이나 글에서 직접 또는 간접으로 따온 문장  &gt; 인용문 작성 &gt;&gt; 중첩된 인용문도 만들 수 있다. &gt;&gt;&gt; 중첩1 &gt;&gt;&gt; 중첩2 &gt;&gt;&gt; 중첩3  인용문(blockQuote)     남의 말이나 글에서 직접 또는 간접으로 따온 문장       인용문 작성         중첩된 인용문도 만들 수 있다.             중첩1  중첩2  중첩3            ","categories": ["blog"],
        "tags": ["blog","Post","Markdown"],
        "url": "/blog/md/",
        "teaser": null
      },{
        "title": "GitHub 글 쓰기",
        "excerpt":"GitHub 블로그 글 등록하기   첫 글을 등록해보자.   지킬은 정해진 포맷에 맞춰 글을 등록해야 하는데, _posts폴더에 md확장자로 등록한다.   처음에는 _posts폴더가 없으므로 만들어야 한다. _posts폴더를 생성한후 파일명의 형식은 year-month-day-제목.md 로 파일을 생성한다.   ---  title: \"github.io 블로그 시작하기\"  excerpt: \"GitHub Blog 서비스인 github.io 블로그 시작하기로 했다.\"  last_modified_at: 2021-12-03 categories:      - Blog  tags:      - Jekyll     - theme      - Blog  ---  ## jekyll 블로그 시작   테마는 가장 많이 사용되고 있는 \"minimal-mistakes\"를 사용  디자인도 깔끔하고 제작자가 꾸준히 업데이트를 하고있으며,  많이 사용되고 있는 만큼 참고할 자료도 많을 것으로 보인다.  이글의 제목은 GitHub 글 쓰기 이고, 오늘은 2021-12-03이다. 앞으로 공부하면서 계속해서 정리해서 올려봐야겠다.   이런 형식으로 올리면   이렇게 등록이 된 것을 확인 할 수 있다.   ","categories": ["blog"],
        "tags": ["blog","post"],
        "url": "/blog/post/",
        "teaser": null
      },{
        "title": "인스턴스",
        "excerpt":"인스턴스란?   인스턴스는 클래스나 프로토타입을 사용해 만든다. 즉, 프로퍼티와 메소드를 상속 받는다.   원래의 객체가 가지고 있던 것을 동일하게 사용하면서, 거기에 확장시켜 추가된 개별속성을 가질 수 있다.   예를 들어, “모자”라는 객체의 인스턴스로 “모자1”을 생성했을때 “모자1”은 “파란 모자”가 될 수 있다.       cap = function(color){         this.color = color;     };     let cap1 = new cap(blue);     let cap2 = new cap(black);   ✅ 추가 설명 떡볶이 레시피를 가지고 떡볶이를 먹으려면 “떡볶이”를 만들어야 한다.  어제 “떡볶이”를 만들고, 오늘 또 “떡볶이”를 만들었다고 가정 했을때 만들어진 “떡볶이”는 [인스턴스]가 된다. 여기서 두개의 떡볶이는 같은 레시피를 보고 만들었지만 동일한 대상은 아니다.   ","categories": ["javascript"],
        "tags": ["javascript","instance","primitive"],
        "url": "/javascript/instance/",
        "teaser": null
      },{
        "title": "DOM",
        "excerpt":"DOM 소개   javascript를 공부하면서 DOM을 빼놓고 이야기 할 수 없다.   DOM이란 무엇인가? 그전에 BOM에 대해서 알아보자.      BOM이란 무엇인가?    브라우저를 바탕으로 웹서비스가 실행이 되는데, 이와 관련된 객체들의 집합을 브라우저객체모델(Browser Object Model)이라고 한다.      웹브라우저와 관련된 객체의 집합   window객체가 최상위 객체   웹브라우저가 제공하는 기능      DOM의 정의(MDN참조)    DOM은 Document Object Model의 약자이다.     HTML, XML 문서의 프로그래밍 인터페이스   문서의 구조화된 표현을 제공하고, 프로그래밍 언어가 DOM구조에 접근할 수 있는 방법을 제공해서 문서구조, 스타일, 내용등을 변경할 수 있게 한다.   웹페이지를 스크립트 또는 프로그래밍 언어들에서 사용되도록 연결해준다.   DOM이 무엇인가…     내가 html에 쓴 파일이 DOM은 아니다. 그러나 브라우저에 의해서 파싱이 된다면 DOM이 된다.   view source에서 보이는것도 DOM이 아니다.   dev Tools(개발자 도구)에서 보여주는 것이 DOM이다.   DOM은 웹페이지의 객체 지향 표현이고, 자바스크립트와 같은 스크립트 언어로 DOM을 수정할수 있다.   ","categories": ["javascript"],
        "tags": ["javascript","DOM"],
        "url": "/javascript/dom/",
        "teaser": null
      },{
        "title": "call/apply/bind 함수의 차이점",
        "excerpt":"call/apply/bind 함수의 차이점은?   예제를 보고 확인해보자.      예)        const obj = {name:'maru'};     const live = function(city){         console.log(`Hi my name is ${this.name}, I live in ${city}`);     };     live('korea'); // Hi my name is , I live in korea     live.call(obj, 'korea'); // Hi my name is maru, I live in korea     live.apply(obj, ['korea']); // Hi my name is maru, I live in korea   call과 apply는 함수를 호출하는 함수  첫번째 인자인 “obj”로 this를 변경하고 함수를 실행한다.  (apply는 파라미터를 배열로 넣어야 한다.)      예)        const obj = {name:'maru'};     const live = function(city){         console.log(`Hi my name is ${this.name}, I live in ${city}`);     };     const bound = live.bind(obj)     bound('korea'); // Hi my name is maru, I live in korea   bind함수는 함수를 실행하지 않는다.   ","categories": ["javascript"],
        "tags": ["javascript","function","call","apply","bind"],
        "url": "/javascript/call-apply-bind/",
        "teaser": null
      },{
        "title": "api",
        "excerpt":"api에 대해 알아보자   “API(Application Progtamming Interface, 응용프로그램 프로그래밍 인터페이스)는 응용 프로그램에서 사용할 수 있도록, 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다.” -위키백과   api는 프로그램이 서로 상호작용하는 것을 도와주는 매개체라고 볼 수 있다.  프로그램이 주문하도록 명령을 정리하고, 그 명령을 받아서 응용프로그램과 상호작용하여 요청된 명령에 대한 값을 전달한다.      서버와 데이터베이스의 출입구 역할을 한다.   애플리케이션과 기기가 원활하게 통신하도록 한다.   모든 접속을 표준화 한다.   개발자들이 어플리케이션 코드 작성을 표준화 해서 빠르고 간단히 프로세스 처리가 가능하다.  또한 개발자들간의 협업도 용이해진다.   즉, api는 어떠한 응용프로그램에서 데이터를 주고받기 위한 방법이다.  특정 사이트에서 데이터를 공유할때 어떤 방식으로 요청해야 하는지, 어떤 데이터를 제공 받을수 있는지에 대한 규격들을 말한다.   ","categories": ["javascript"],
        "tags": ["javascript","api"],
        "url": "/javascript/api/",
        "teaser": null
      },{
        "title": "호이스팅(Hoisting)",
        "excerpt":"hoisting에 대해 알아보자      자바스크립트에서 호이스팅(Hoisting)이란, 인터프리터가 변수와 함수의 공간을 선언전에 미리 할당 하는 것을 의미한다.    실행컨텍스트의 처리 순서를 살펴보면,     선언 단계(Declaration phase) : 변수, 함수선언문 설정   초기화 단계(Initialization phase) : 변수 이름 바인딩 (값은 undefined로 초기화)   할당 단계(Assignment phase)   위 순서로 처리가 된다.   이때, let변수는 호이스팅 되지 않는다.(사실상 호이스팅은 되지만 안되는것과 비슷하다.) var 변수는 선언단계와 초기화단계가 동시에 진행되어 변수이름을 바인딩하면서 값이 undefined로 초기화되는 반면,  let 변수는 선언단계와 초기화단계가 따로 진행된다.  그래서 실행컨텍스트에 변수가 등록이 되었지만 메모리가 할당이 되어있지 않기 때문에 ReferenceError가 발생한다.   여기서 TDZ가 무엇인지 알고 가자.  TDZ란 “temporal dead zone” 일시적인 사각지대 라고 직역할 수 있다.  TDZ는 스코프의 시작지점 부터 초기화 단계 직전까지의 구간이다.   즉, let변수는 TDZ구간에 의해 메모리가 할당이 되지 않기 때문에 참조에러(ReferenceError)가 발생한다.      예)        console.log(`스포츠: ${sports}`); // 스포츠: undefined     var sports = '축구';      console.log(`스포츠: ${sports}`); // ReferenceError: sports is not defined     let sports = '축구';  ","categories": ["javascript"],
        "tags": ["javascript","hoisting"],
        "url": "/javascript/hoisting/",
        "teaser": null
      },{
        "title": "REST",
        "excerpt":"REST에 대해 알아보자   REST에 대해 알아보기전에 api에 대해 다시 한번 확인해보자.  api에 대한 포스팅이 따로 있지만 여기에서는 비유를 통해 간단히 설명한다.   좋아하는 드라마의 본방사수를 위해서 집에 서둘러 들어와 티비를 켜고 원하는 채널을 틀어야 하는 상황일때 이러한 과정이 필요하다.  티비 리모컨의 전원 버튼을 눌러 티비를 켜고 채널 버튼을 눌러 원하는 채널로 돌려야 한다.  나 &gt; 리모컨 &gt; 티비 이러한 순서로 볼 수 있다.   즉 API는 리모컨 처럼 애플리케이션과 운영체게 사이의 ‘상호작용’을 돕는다.   웹 API의 역할      권한을 가진 사람만 서버와 데이터베이스안의 리소스에 접근이 가능하게 해준다.   모든 요청(request)와 응답(response)를 표준화 해준다.   REST의 구성요소      자원(Resource) : HTTP UIR 를 통한 자원 명시   자원에 대한 행위(Verb) : HTTP Method(post, get put, delete)   자원에 대한 행위의 내용(Representations) : HTTP Message Pay Load   REST API   REST API란 REST의 원리를 따르는 API를 의미한다. 리소스(HTTP URI)로 어떠한 행위(HTTP Method + Pay Load)를 하겠다는 것을 구조적으로 표현하는 방법이다.   REST API의 설계 가이드를 살펴보자.      URI는 명사, 소문자를 사용한다.   마지막에 슬래시를 포함하지 않는다.   언더바 대신 하이픈을 사용한다.   URI에 파일확장자는 포함하지 않는다.   RESTful 이란?   RESTful이란 REST API의 설계 가이드를 올바르게 지킨 시스템을 RESTful 하다고 말할 수 있다. RESTful하게 만들면 그자체로 API의 목적이 무엇인지 명확하게 알 수 있다.  ","categories": ["javascript"],
        "tags": ["javascript","api","REST","RESTful"],
        "url": "/javascript/rest/",
        "teaser": null
      },{
        "title": "Vue에서 Fontawesome 사용하기",
        "excerpt":"Vue에서 Fontawesome 사용하기   폰트어썸 업데이트하면서 부터인지 vue에서 사용하려면 메일로 무료키트 사용 링크를 받아야한다.  fontawsome.com/start로 접속 &gt; 이메일 입력 &gt; 확인, 설정 버튼 클릭 &gt; 폰트어썸 로그인 후 무료키트 링크 카피해서 index.html 헤드에 추가  ","categories": ["vue","vue-lv2"],
        "tags": ["vue","fontawesome"],
        "url": "/vue/vue-lv2/fontawesome/",
        "teaser": null
      },{
        "title": "git branch",
        "excerpt":"git branch 생성하고 사용하는 방법      git init : git 저장소 생성(초기화)   git remote add origin {link} : link에 생성한 레포지토리 url복사해서 넣기   git branch : 깃 브랜치 확인   git branch -v : 마지막 커밋메세지 확인   git branch ‘브랜치명’ : 브랜치 생성   git checkout ‘브랜치명’ : 선택한 브랜치로 이동   git branch -d ‘브랜치명’ : 브랜치 삭제하기   git merge ‘합칠 브랜치명’ : 현재위치한 브랜치에 합칠 브랜치에서 작업한 내용 가져와서 병합   git add . : 변경한 파일을 저장   git commit -m “커밋메세지” : 커밋메세지 입력   git push origin ‘브랜치명’ : 원격저장소 브랜치에 push 하기  ","categories": ["git"],
        "tags": ["git","branch"],
        "url": "/git/gitbranch/",
        "teaser": null
      },{
        "title": "vuex",
        "excerpt":"vuex 소개      복잡한 애플리케이션의 컴포넌트들을 효율적으로 관리하는 vuex 라이브러리   React의 Flux패턴에서 기인함   vue.js 중고급 개발자로 성장하기 위한 필수 관문   Flux란?      MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴            action : 화면에서 발생하는 이벤트 또는 사용자의 입력       dispatcher : 데이터를 변경하는 방법, 메서드       model : 화면에 표시할 데이터       view : 사용자에게 비춰지는 화면           MVC패턴과 Flux패턴 비교              view : 보고있는 화면       model : 데이터       controller : model과 view 제어                    Flux패턴은 action에서 view까지 단방향으로 일어남 반면 MVC패턴은 model과 view가 서로 데이터를 주고받아서 양방향으로 일어남                            MVC패턴의 문제점              기능 추가 및 변경에 따라 생기는 문제점을 예측할 수 없음.       앱이 복잡해지면서 생기는 업데이트 루프           Flux패턴의 단방향 흐름              데이터의 흐름이 여러 갈래로 나뉘지 않고 단방향으로만 처리           vuex가 왜 필요할까?   복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트간에 데이터 전달이 어려워진다.      vuex로 해결할 수 있는 문제            MVC 패턴에서 발생하는 구조적 오류       컴포넌트 간 데이터 전달 명시       여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제           이벤트 버스로 해결?  어디서 이벤트를 보냈는지 혹은 어디서 이벤트를 받았는지 알기 어려움  // Login.vue eventBus.$emit('fetch', loginInfo);  // List.vue eventBus.$on('display', data =&gt; this.displayOnScreen(data));  // Chart.vue eventBus.$emit('refreshData', chartData);  컴포넌트 간 데이터 전달이 명시적이지 않음   vuex 컨셉     State : 컴포넌트 간에 공유하는 데이터 data()   View : 데이터를 표시하는 화면 template   Mutations: state값을 변경하는 이벤트 로직, 메서드 methods   Action : 사용자의 입력에 따라 데이터를 변경하는 (비동기 처리 로직을 선언) aysnc methods   흐름 설명 : 화면(view)에서 버튼을 클릭 하면 버튼이 action을 발생시킴 &gt; action이 발동하면 데이터(state)를 변경   vuex 구조  컴포넌트 -&gt; 비동기 로직 -&gt; 동기 로직 -&gt; 상태   action : 비동기 로직  mutations : 동기 로직   자바스크립트 비동기 처리와 콜백함수 참고 링크  ","categories": ["vue","vue-lv2"],
        "tags": ["vuex","store"],
        "url": "/vue/vue-lv2/vuex/",
        "teaser": null
      }]
