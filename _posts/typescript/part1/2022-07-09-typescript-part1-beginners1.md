--- 
title: "[TypeScript-part1] 강의 오리엔테이션" 
excerpt: "typescript에 대해서"
categories: 
    - typescript-part1
tags: 
    - typescript
toc: true
--- 
## 타입스크립트 오리엔테이션

자바스크립트로 제작된 COVID-19 세계 현황판을 타입스크립트로 변환해보면서 타입스크립트의 개념과 기초를 배워보는 강좌  

- 구현되어 있는 자바스크립트를 타입스크립트로 변환하기 위해 필요한 개념들을 설명하고 실습
- 그 후에 실제 프로젝트에 적용해보는 순서로 진행

강의 대상  
- 자바스크립트 문법을 알고 있는 웹 개발자
- 자바스크립트로 좀 더 단단한 웹 애플리케이션을 만들고 싶은 웹 개발자(버그가 좀 더 없었으면 좋겠다)
- 타입스크립트로 되어 있는 프로젝트에서 퍼블리싱을 해야 하는 퍼블리셔

## 개발환경 안내

- [강의 레포지토리 주소](https://github.com/joshua1988/learn-typescript)  

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
- [Git](https://git-scm.com/downloads)
💡 참고 사항 : 수업에서는 VSCode를 기준으로 설명/ 별도로 선호하는 IDE가 있다면 그걸 써도 무방 😄

VSCode 플러그인 목록

- 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 문법 검사 : ESLint, [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 기타 : [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings) 등

## 수업 소스 레포지토리 클론 및 VS Code로 폴더 열기

상단 강의 레포지토리 주소 url로 이동해서 터미널이나 VS Code(또는 사용하는 프로그램)에서 git 명령어로 git clone을 받는다.  

`git clone 클론받을 url`  

## 타입스크립트 강의 교안

[타입스크립트 핸드북](https://joshua1988.github.io/ts/)

