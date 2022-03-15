--- 
title: "github jekyll blog codeblock에 line number 추가하기" 
excerpt: "codeblock line number" 
categories: 
    - blog
tags: 
    - codeblock
    - custom
--- 
## 코드블럭에 line number 추가를 해봅시다.

마크다운에서 코드블럭을 삽입하려면 `역따옴표`를 세번 넣어서 사용합니다.  
코드블럭으로 코드를 삽입하고 좀 더 보기 쉽게 line number를 추가 하고 싶을때 어떻게 할까?

_config.yml 파일을 열고 kramdown을 검색합니다.

kramdown: 
    highlighter: rouge  
    syntax_highlighter_opts:  
        block:  
            line_numbers: true  

위 코드를 추가 합니다.

* _config.yml 파일은 수정후 자동 반영이 안되므로 서버를 내렸다가 다시 동작하여야 반영이 됩니다.

