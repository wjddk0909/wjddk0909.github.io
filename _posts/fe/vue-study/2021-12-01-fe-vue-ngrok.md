--- 
title: "ngrok로 외부에서 접속 가능한 로컬 네트워크 환경 구성하기" 
excerpt: "ngrok"
categories: 
    - vue-study
tags: 
    - ngrok
toc: false
--- 
## ngrok 사용하기

1. https://dashboard.ngrok.com/login
  - 여기서 세팅
  - 다운로드
  - 압축파일 풀기(자동으로 풀림) -> 안풀리면 `unzip /path/to/ngrok.zip`
  - 터미널 파일 있는 경로로 이동

2. `./ngrok` 명령어 실행해서 정상적으로 작동하는지 확인

3. `./ngrok config add-authtoken [내토큰번호]` authtoken 등록

4. `./ngrok http https://localhost:[로컬에 실행한 포트번호]` 외부에서 접속 가능한 URL 생성 (ngrok 사이트에서는 `ngrok http 포트번호`로 명령어를 안내하지만 그렇게 하면 에러가 나는거 같음)

## invalid host header 에러
- `ngrok http 8080 -host-header="localhost:8080"`
- `ngrok http --host-header=rewrite 8080`
 
vue에서 기본세팅으로 내부 로컬접속은 허용하지만 외부접속을 허용하지 않아서 생기는 문제  
ㄴ 위 둘중에 아래꺼 입력시 접근 가능했음

## homebrew로 설치해서 간단하게 사용하기

- ngrok 설치하기  
> brew install ngrok

- ngrok 사용하여 터널링(로컬 서버 포트에 맞게)
> ngrok http 8080