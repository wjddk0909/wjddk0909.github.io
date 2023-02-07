--- 
title: "git upgrade 하기 (feat. mac)" 
excerpt: "homebrew로 git upgrade 하기"
categories: 
    - git
tags: 
    - homerewbrew
    - gitupgrade
--- 
## git upgrade

mac에서 homebrew로 git upgrade 하기

- git 버전 확인
> git --version
> git version 2.30.1

- hombrew를 이용해 git 최신 버전 설치
> brew install git

설치 후 git 버전을 확인해도 최신버전으로 변경되지 않음  

- 해결책 -> git에 대한 link 재정의
> brew link --overwrite git

- 터미널 종료하고 새터미널에서 git version 확인

그래도 안되면 brew 업데이트
> brew update
> brew upgrade