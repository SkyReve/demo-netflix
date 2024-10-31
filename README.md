_This repository was started by forking [alkalisummer/react-netflix](https://github.com/alkalisummer/react-netflix)._

_SkyReve uses this repository as one of demos and has added the MIT license for this purpose._

_Additionally, some parts of the code were modified after forking for this purpose._

---

<div align="center">
<img width="300" alt="Intro" src="https://github.com/alkalisummer/react-netflix/assets/47405224/52b9394c-6eab-490a-bd1d-d12190c9e4b9"/><br>
React 기반의 Netflix 메인화면을 벤치마킹하여 만든 어플리케이션 입니다.<br/>
현재 상영중인 영화와 방영중인 TV 시리즈의 정보를 인지도 순위별로 제공합니다.<br/>
영화, TV 시리즈 검색 기능을 제공합니다.
</div>
</br>

## 배포 URL

- 📎 [https://alkalisummer.github.io/react-netflix](https://alkalisummer.github.io/react-netflix)

<br/>
<br/>

## 개발 기간

- 2023.05.30 ~ 2023.06.04
  <br/>
  <br/>

## 기술스택

- <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript"/> <img src="https://img.shields.io/badge/React-v18.2.0-61DAFB?logo=React"/>
- <img src="https://img.shields.io/badge/axios-v1.4.0-5A29E4?logo=Axios"/>
- <img src="https://img.shields.io/badge/styled--components-v6.0.0-DB7093?logo=styled-components"/>
- <img src="https://img.shields.io/badge/Github Pages-v5.0.0-222222?logo=Github Pages"/>

<br/>
<br/>

## 화면 구성

|                                                               메인페이지                                                               |                                                                             검색 페이지                                                                             |
| :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="500" alt="index" src="https://github.com/alkalisummer/react-netflix/assets/47405224/fd9e1c7e-3e95-494a-be7a-db70bc0f1738"> | <img width="500" alt="스크린샷 2023-11-11 00 03 10" src="https://github.com/alkalisummer/react-netflix/assets/47405224/74d1bd73-d4f4-4b04-973d-8a9951dd9f0e"> |

<br/>
<br/>

## 주요 기능

#### 1. TOP 10 TV 시리즈 순위 제공 및 카테고리별 배너탭 구현

<div align="center">
  
![ezgif com-gif-maker](https://github.com/alkalisummer/react-netflix/assets/47405224/d8de3093-433e-49a6-999f-9f8282d62a2e)

</div>
- The Movie Database API 에서 현재 방영중인 TV시리즈의 데이터 가져와서 인지도순으로 10위까지 표출하고 카테고리별 배너 탭이 표출됩니다.

<br/>
<br/>

#### 2. Youtube 모듈을 활용한 마우스 오버 이벤트

<div align="center">

![ezgif com-gif-maker (1)](https://github.com/alkalisummer/react-netflix/assets/47405224/52fc0c34-c9ec-4292-a463-1d2ccfda928f)

</div>

- Youtube 모듈을 활용하여 포스터에 마우스를 오버시 모달이 팝업되어 관련 youtube 영상을 표출합니다.

<br/>
<br/>

#### 3. 영화, TV 시리즈 검색기능

<div align="center">

![ezgif com-gif-maker (2)](https://github.com/alkalisummer/react-netflix/assets/47405224/c7b6ad8e-e0af-4e12-96fe-6ce52709935c)

</div>

- 검색어를 입력하면 TMDB API를 통해서 바로 검색 결과를 표출합니다.
- 무분별한 API의 호출을 막기 위해 0.5초 이내 다른 글자가 타이핑 되면 api를 호출하지 않도록 커스텀 훅을 사용하였습니다.

## 아키텍쳐

#### 디렉토리 구조

```
src
 ┣ api : TMDB API 폴더
 ┃ ┣ axios.js
 ┃ ┣ fetchMovie.js
 ┃ ┗ requests.js
 ┣ components
 ┃ ┣ MovieModal : 마우스 오버시 모달 표출
 ┃ ┃ ┣ MiniModal.css
 ┃ ┃ ┣ MiniModal.js
 ┃ ┃ ┣ MovieModal.css
 ┃ ┃ ┗ MovieModal.js
 ┃ ┣ Banner.css : 각 카테고리별 공통 배너
 ┃ ┣ Banner.js
 ┃ ┣ Footer.js
 ┃ ┣ Nav.css
 ┃ ┣ Nav.js
 ┃ ┣ Row.css
 ┃ ┗ Row.js
 ┣ hooks
 ┃ ┣ useDebounce.js
 ┃ ┗ useOnClickOutside.js
 ┣ pages
 ┃ ┣ MainPage : 메인 화면
 ┃ ┃ ┗ index.js
 ┃ ┣ SearchPage : 검색 화면
 ┃ ┃ ┣ SearchPage.css
 ┃ ┗ ┗ index.js
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js

```
