--- 
title: "상단 박스 height 유동적일때 하단 박스 oveflow scroll 시키기(feat. flex)" 
excerpt: "flex-direction: column"
categories: 
    - css
tags: 
    - css
    - flex
    - overflow
    - scroll
--- 
## 상단 컨텐츠의 높이값이 유동적으로 바뀌고 하단 박스만 overflow scroll 하는 법

스크롤시 상단 컨텐츠는 고정, 하단 컨텐츠만 overflow-y: auto 시켜야 하는 레이아웃 구현하기  

레이아웃 상세
상단 컨텐츠 : 상단 컨텐츠는 내용에 따라서 `height`값 유동적  
하단 컨텐츠 : 리스트를 보여주며 디바이스에서 상단 컨텐츠 `height`를 뺀 만큼 보이고 `overflow` 되는 부분은 `scroll` 

코드 보기

{% include codeHeader.html %}
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .topBox {
        flex: 0;
        background: rgb(174, 101, 177);
        color: #fff;
        padding: 1.2rem

    }
    .bottomBox {
        position: relative;
        flex: 1;
    }
    .scrollBox {
        position: absolute;
        left: 0; top: 0; right: 0; bottom: 0;
        overflow-y: auto;
    }
    li {
        list-style: none;
        width: 100%;
        height: 150px;
        border-bottom: 1px solid #ddd;
        align-items: center;
        justify-content: center;
        display: flex;
    }
  </style>
</head>
<body>
    <div class="container">
        <div class="topBox">헤더 자리</div>
            <div class="bottomBox">
                <div class="scrollBox">
                    <ul>
                        <li><span>리스트1</span></li>
                        <li><span>리스트2</span></li>
                        <li><span>리스트3</span></li>
                        <li><span>리스트4</span></li>
                        <li><span>리스트5</span></li>
                        <li><span>리스트6</span></li>
                        <li><span>리스트7</span></li>
                        <li><span>리스트8</span></li>
                        <li><span>리스트9</span></li>
                        <li><span>리스트10</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

1. topBox와 bottomBox를 전체 container박스로 묶는다.
2. bottomBox안에 리스트 박스를 넣는다.
3. 스타일 적용
    - 전체 박스에 display: flex; flex-direction: column; min-height: 100vh;
    - topBox에 flex: 0;
    - bottomBox에 position: relative; flex: 1;
    - 리스트 박스에 position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow-y: auto;

적용 예시)  
![overflow scroll](/assets/images/html_css/flex_box01.gif)  
 
- [참고 링크](https://dirask.com/posts/CSS-scrolling-for-flexbox-with-overflowing-content-j8VrdD)  



