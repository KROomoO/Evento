# 📣 Evento
<br/>

## 📋 목차
1. [시연 영상](#-시연-영상)
2. [프로젝트 소개](#-어떤-서비스인가요)
3. [기술 스택 및 버전](#-상세-기술스택-및-버전)
4. [주요 기능](#-프로젝트-주요기능)

## 📺 시연 영상

#### 아래의 사진을 클릭하여 시연 영상을 통해 Evento의 주요기능과 UI를 확인해 보세요!
[![Evneto](https://github.com/user-attachments/assets/0b2e0603-b9a8-4ec9-b648-8aa1f083ab27)](https://youtu.be/54uM2fqwv3s)
</br>

## ✅ 어떤 서비스인가요?
### 📌 서울시 통합 이벤트 조회 웹 애플리케이션
서울시에서 열리는 행사, 공연, 축제 정보를 쉽게 조회할 수 있는 웹 애플리케이션입니다.

서울 열린데이터 광장에서 제공하는 서울시 문화행사 정보 데이터를 사용하여</br>각 자치구별, 월별, 유/무료 조건에 따른 이벤트 정보를 조회할 수 있습니다.

부가적으로 위/경도를 기반으로 Naver Maps를 통해 이벤트 위치 정보 제공, 소셜 로그인을 통한 북마크 기능을 제공합니다.

## ✅ 왜 만들었나요?
### 📌 데이트 장소를 고민하는 사람들에게 편의성 제공

개발자로서 실제로 사람들이 유용하게 이용할 수 있는 웹 프로젝트를 개발하고 싶었습니다.

  1. 데이트 장소를 선정하기 위해 이벤트를 한 눈에 볼 수 있다면 얼마나 편할까요?</br>주변 지인들이 연애 기간이 오래됨에 따라 데이트 장소를 선정하는데 어려움을 겪는 걸 지켜봤습니다.</br>이를 위해 관련 서비스를 알아보던 중 [문화포털-한눈에 보는 문화정보](https://www.culture.go.kr/oneeye/oneEyeList.do) 서비스를 통해 행사 정보를 확인할 수 있다는 것을 알게되었습니다.
  2. 상세 검색을 통해 이벤트를 조회할 수 있었지만, 지인들의 거주지가 서울시로 한정되어 있던 상황에서 거주지별 조건 검색이 되지 않는 부분이 아쉬움으로 느껴졌습니다.</br>이를 위해 자체적으로 프로젝트를 개발하기로 결심하였고, 행사 관련 정보를 얻기 위해 데이터를 찾던 중 [서울 열린데이터 광장 - 서울시 문화행사 정보](https://data.seoul.go.kr/dataList/OA-15486/S/1/datasetView.do) API를 알게되었습니다.

웹 개발자로서 사람들이 유용한 정보를 쉽게 접근할 수 있도록, Evento 서비스를 만들게 되었습니다.

## 🛠️ 기술 스택

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
<br/>

### 상세 기술스택 및 버전
| 구분     | 기술스택             | 상세내용                | 버전     |
|----------|---------------------|-------------------------|----------|
| 공통     | 형상관리             | Git                     | 2.44.0   |
| FrontEnd | JavaScript(ES6)     | -                       | -        |
|          | React               | react                   | 18.2.0   |
|          | React               | react-dom               | 18.2.0   |
|          | React               | react-router-dom        | 6.16.0   |
|          | React               | react-naver-maps        | 0.1.2    |
|          | Redux               | reduxjs/toolkit         | 1.9.5    |
|          | Axios               | axios                   | 1.4.0    |
|          | Mui                 | mui                     | 5.12.2   |
|          | Webpack             | module bundler          | 5.92.1   |
|          | IDE                 | Visual Studio Code      | 1.87.2   |
| BackEnd  | Node.js             | node.js                 | 20.13.1  |
|          | NPM                 | npm                     | 10.5.2   |
|          | JWT                 | jsonwebtoken            | 9.0.2    |
|          | Google              | google-auth-library     | 9.1.0    |
|          | Google              | googleapis              | 127.0.0  |
|          | MyBatis             | mybatis-mapper          | 0.6.8    |
|          | MySQL               | mysql                   | 2.18.1   |
| DB       | MySQL               | MySQL                   | 8.0.32   |
| Server   | AWS EC2             | Ubuntu                  | 24.04 LTS|
|          |                     | Nginx                   | 0.8.5    |
|          |                     | pm2                     | -        |
| API      | Social              | Google OAuth2           | -        |
|          | Social              | Naver OAuth             | -        |
|          | Social              | Kakao OAuth             | -        |
|          | Map                 | Naver Map API           | -        |

## 🖥️ 프로젝트 주요기능

### 메인페이지
![MAIN](https://github.com/user-attachments/assets/14e020d8-ef64-4a19-bb47-d39561fd142c)

#### 서비스의 핵심 기능을 한눈에 볼 수 있습니다.
- <b>서울시 문화행사 정보</b>: 서울시에서 진행되는 문화행사 정보를 이미지와 함께 확인할 수 있습니다.
- <b>조건별 상세 검색</b>: 각 카테고리별 조건에 따른 문화행사 정보를 리스트를 통해 확인할 수 있습니다.
<br/>

### 상세페이지
![DETAIL](https://github.com/user-attachments/assets/d3693738-ca13-47ee-b14f-e887397a1b55)

#### 문화행사 정보를 상세하게 조회할 수 있습니다.
- <b>문화행사 정보 상세조회</b>: 서울 열린데이터광장에서 제공하는 데이터를 토대로 선택한 문화행사에 대한 상세 정보를 조회할 수 있습니다.
- <b>위치 확인</b>: 위/경도 데이터를 기반으로 Naver Maps API를 통해 지도를 기반으로 한 행사장 위치를 확인할 수 있습니다.
- <b>행사 정보 저장</b>: 로그인을 통해 원하는 행사 정보를 저장할 수 있습니다.
<br/>

### 로그인
![Login](https://github.com/user-attachments/assets/43336a98-8037-4aa5-9a8a-2329374363db)

#### 소셜 계정을 통해 회원가입 및 로그인할 수 있습니다.
- <b>소셜 로그인</b>: 소셜 계정(Google, Naver, Kakao)를 이용하여 회원가입 및 로그인 할 수 있습니다.
</br>

### 마이페이지
![SCRAP](https://github.com/user-attachments/assets/cfd8977d-324a-461f-8b03-e9f2e511b720)

#### 저장한 문화행사 목록을 조회할 수 있습니다.
- <b>저장한 문화행사 정보 조회</b>: 로그인을 통해 저장한 문화행사 정보를 목록형식으로 조회할 수 있습니다.
<br/>
