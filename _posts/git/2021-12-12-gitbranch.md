--- 
title: "git branch" 
excerpt: "branch 생성하고 사용하기"
categories: 
    - git
tags: 
    - branch
--- 
## git branch 생성하고 사용하는 방법

- git init : git 저장소 생성(초기화)
- git remote add origin {link} : link에 생성한 레포지토리 url복사해서 넣기
- git branch : 깃 브랜치 확인
- git branch -v : 마지막 커밋메세지 확인
- git branch '브랜치명' : 브랜치 생성
- git checkout '브랜치명' : 선택한 브랜치로 이동
- git branch -d '브랜치명' : 브랜치 삭제하기
- git merge '합칠 브랜치명' : 현재위치한 브랜치에 합칠 브랜치에서 작업한 내용 가져와서 병합
- git add . : 변경한 파일을 저장
- git commit -m "커밋메세지" : 커밋메세지 입력
- git push origin '브랜치명' : 원격저장소 브랜치에 push 하기 

- git clone -b '브랜치명' --single-branch '저장소url' : 특정 브랜치만 clone 하기
- git remote remove origin : 기존 리포지토리 remote 제거
- git config --unset user.name : git config --list 삭제