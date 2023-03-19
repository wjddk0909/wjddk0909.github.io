--- 
title: "[MAC] 사용중인 포트 확인하고 종료하기" 
excerpt: "사용중인 포트 확인 및 종료"
categories: 
    - tips
tags: 
    - terminal
    - port
--- 
## mac에서 사용중인 특정 포트 확인하기

`sudo lsof -i:[포트번호]`

특정 포트를 어떤 서비스가 사용중인지 확인하는 명령어(sudo 권한으로 실행)  
lsof: list open files  

-i 옵션 없이 실행하면 모든 파일들에 대한 정보가 출력되므로 특정 포트 옵션을 추가  

## 프로세스 종료시키기

lsof 명령어로 확인한 프로세스의 PID를 확인하여  
`sudo kill -9 [PID]` 로 강제 종료 시키기  

`sudo lsof -i:[포트번호]`로 확인하면 조회되는 프로세스가 없음을 알 수 있다.  