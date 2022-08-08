--- 
title: "Stylelint: browserslist: caniuse-lite is outdated. Please run 에러" 
excerpt: "웹스톰 사용중 stylelint error?"
categories: 
    - tips
tags: 
    - webstorm
    - stylelint
    - error
--- 
## stylelint error 인가?

웹스톰 사용중 `Stylelint: browserslist: caniuse-lite is outdated. Please run` 어떤 파일 상단에 이런 에러문구가 나타남  

세부정보를 눌러보면  

```javascript
Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslistbrowserslist#browsers-data-updating
```

이런 정보가 나온다.  

서치를 해보니 브라우저리스트를 업데이트 하라는거 같음 -> `npx browserslist@latest --update-db`  

일단은 문제가 에러문구는 뜨지만 컴파일시 딱히 문제가 있지는 않으므로 업데이트를 하지는 않았음, 추후에 컴파일시 문제가 생기면 업데이트 예정.(22.08.08 - QRScanner.vue)
