--- 
title: "맥북 키보드에서 원화 표시 기호(₩) 대신 백쿼트(`) 표시되게 하기" 
excerpt: "맥북 팁"
categories: 
    - tips
tags: 
    - mac
    - keyboard
--- 
## 맥북 키보드 설정 팁

![key](/assets/images/tip/keybinding.png)  

맥북에서 한글 입력상태에서 백쿼트를 사용하려면 `option + ₩(백쿼트)` 키를 눌러야한다.  
매번 이렇게 입력하려니 불편해서 설정해 두는 방법을 찾아보았다.  

## 맥북에서 터미널 창을 열어준다.

```bash
// Library에 KeyBindings 폴더 생성
cd ~/Library
mkdir KeyBindings

// KeyBindings로 들어가서 DefaultkeyBinding.dict 파일 생성
cd KeyBindings
touch DefaultkeyBinding.dict

// Vim(Text Editor)로 파일 열고 i(입력) 전환
vi DefaultkeyBinding
i

// 아래의 { ~ }코드를 복사해서
{
    "₩" = ("insertText:", "`");
}

// esc + :wq
:wq
```

이렇게 입력하고 재부팅해주면 한글 입력상태에서 백쿼트 사용이 된다.  

*** 원래의 상태로 돌아가려면
`rm DefaultkeyBinding.dict`