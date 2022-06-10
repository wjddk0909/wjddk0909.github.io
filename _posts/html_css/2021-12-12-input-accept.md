--- 
title: "input file 첨부시 확장자 제한하기" 
excerpt: "accept"
categories: 
    - html
tags: 
    - html
    - input
    - file
    - accept
--- 
## input file 확장자 제한

input의 `accept`속성을 통해서 확장자 제한이 가능, 여러개의 확장자를 원할 경우 `,`로 연결  

자주 사용하는 확장자

- Excel Files(.xls)
`<input type="file" accept="application/vnd.ms-excel" />`

- Excel Files (.xlsx)
`<input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />`

- Text Files (.txt)
`<input type="file" accept="text/plain" />`

- Image Files (.png/.jpg/etc)
`<input type="file" accept="image/*" />`

- HTML Files (.htm,.html)
`<input type="file" accept="text/html" />`

- Video Files (.avi, .mpg, .mpeg, .mp4)
`<input type="file" accept="video/*" />`

- Audio Files (.mp3, .wav, etc)
`<input type="file" accept="audio/*" />`

- PDF Files
`<input type="file" accept=".pdf" />`


