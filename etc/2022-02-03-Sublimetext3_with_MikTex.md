---
title: "SublimeText3 with MikTex "
tags:
  - Blog
  - MathJax
  - Jekyll
  - LaTeX
use_math: true
Shell:      console, shell
sitemap :
  changefreq : daily
  priority : 1.0
---


# sublimetext_latex_-

## Sublime Text install
https://www.sublimetext.com/3
Windows 64bit 선택(OS에 맞는 버전 선택 )
![image](https://user-images.githubusercontent.com/53217819/147725460-a333b986-149e-4ab1-9456-a3203663e15e.png)
다운로드 후 설치 진행 Next
![image](https://user-images.githubusercontent.com/53217819/147725515-926ef88c-8cdd-4079-8a76-eca5dc5f312d.png)
Install
![image](https://user-images.githubusercontent.com/53217819/147725531-f8e30749-6858-4094-8dfd-c6be65ae2c28.png)

## install Miktex
https://miktex.org/download
![image](https://user-images.githubusercontent.com/53217819/147725733-c6da59d9-3005-4c77-9006-3170f4aed9f9.png)

다운로드 후 실행하고 Next누르고 Install

## install SumatraPDF
https://www.sumatrapdfreader.org/download-free-pdf-viewer

![image](https://user-images.githubusercontent.com/53217819/147725768-515c8d5e-da8e-491c-afca-79103503f2e7.png)

![image](https://user-images.githubusercontent.com/53217819/147726018-c5db3033-81db-41f3-bee4-9f62066aeaaa.png)

![image](https://user-images.githubusercontent.com/53217819/147726030-37d85879-dfec-453c-92f9-264bc04f7a6d.png)
옵션에서 설치폴더 변경 C드라이브의 Program Files로 

![image](https://user-images.githubusercontent.com/53217819/147726056-ae44bcec-c7de-4035-894c-9d1f12f0d3de.png)


시스템 환경변수 등록

시스템 속성에서 환경 변수 클릭

![image](https://user-images.githubusercontent.com/53217819/147725904-555701b4-3c86-482e-845c-baefc1336c71.png)

000에 대한 사용자 변수 탭에서 Path누르고 편집 클릭

![image](https://user-images.githubusercontent.com/53217819/147725919-488e81ea-f72b-4a46-abba-03fb01487aa4.png)

찾아보기를 누르고 SumatraPDF가 설치된 폴더를 찾아서 입력(C:\Program Files\SumatraPDF)

![image](https://user-images.githubusercontent.com/53217819/147726108-a16a0870-694d-4bc3-abed-ff018a3ea6d6.png)



## install Package Control 
Sublime Text 3 를 켜고 Ctrl+Shift+P 를누르면 창이 열린다.
![image](https://user-images.githubusercontent.com/53217819/147725659-3f32d171-32b1-4c99-b8a9-dd54a94bce22.png)

install control package를 입력하고 설치 진행

![image](https://user-images.githubusercontent.com/53217819/147725798-a5d4b044-7bf0-4991-9acf-8a197481ca04.png)
![image](https://user-images.githubusercontent.com/53217819/147725812-8ee112a8-e184-432e-b864-0204b6f476e1.png)
![image](https://user-images.githubusercontent.com/53217819/147725874-8e8a6600-d467-485a-b403-186985c1dcf6.png)
![image](https://user-images.githubusercontent.com/53217819/147725876-47c2cdee-1479-407c-9e6d-526e8a6648e5.png)

다음과 같이 나오면 성공
![image](https://user-images.githubusercontent.com/53217819/147725882-ded14faa-0ae3-462a-8881-38c9f5fa909f.png)

## 사용법
Ctrl+B를 누르면 빌드 자동으로 파일이 나옴
![image](https://user-images.githubusercontent.com/53217819/147726201-cff16b80-05bd-4de7-b51d-01ef1ba1622e.png)







## ERROR

### nanummjmd4 에러 발생 시 일단 재부팅 해보고 아래 진행

시작->MikTex Console 실행

![image](https://user-images.githubusercontent.com/53217819/152146968-44c43b3e-cae2-46d9-be56-ef02f7798d05.png)

Switch to MikTex administrator mode 선택
재시작 후에 Updates 클릭

![image](https://user-images.githubusercontent.com/53217819/152147075-a595a644-b08f-420f-9c08-b91544c91f5a.png)

Check for updates 클릭 Update now 클릭 
SublimeText3 다시 실행-> 빌드 진행

이래도 안된다면 재부팅 후 다시진행




## 참고 사이트
https://pinkwink.kr/853
