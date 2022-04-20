--- 
title: "git commit 메세지 수정" 
excerpt: "commit 오타 수정"
categories: 
    - git
tags: 
    - commit
--- 
## 마지막 commit 메세지 수정하기

>git commit --amend -m "바꿀 메세지"  
>or  
>git commit --amend  
>까지 입력후 vi 에서 i(수정모드)로 변경하고 수정 후 esc 누르고 :wq로 저장

## 이전 commit 메세지 수정하기

`rebase` 명령어를 사용  
`rebase` 명령어는 branch의 base를 다시 설정하여 master브랜치와 merge commit생성을 방지하여 깔끔한 커밋을 남길 수 있도록 도와주는 명령어

>git rebase -i HEAD~3

rebase에서 -i 옵션을 주면 rebase명령을  대화형으로 수행하여 여러 커밋들의 순서를 바꾸거나 커밋 히스토리를 변경 또는 삭제할 때 사용  
HEAD~3 은 최근 커밋 메시지중 3개만 불러온다는 뜻

입혁하면 최근 커밋 메시지 3개를 불러오는데  

>pick 커밋번호 커밋메시지

형식으로 출력

이때 수정하고 싶은 commit 내역의 `pick`을 `reword`로 바꾸고 :wq로 저장 종료  
종료가 되면 선택한 commit 메시지에 대한 화면이 다시 터미널에 호출  
위와 동일하게 vi 에서 i(수정모드)로 변경하고 수정 후 esc 누르고 :wq로 저장

## 원격에 이미 Push 했을 때

commit이 이미 원격에 push 되었다면 커밋 메시지를 수정하고  

>git push origin master(혹은 브랜치명) -f

로 강제 덮어씌우기  

*** 개인 레포지토리나 개인 브랜치가 아닌 협업 마스터 브랜치에는 위험할 수 있음