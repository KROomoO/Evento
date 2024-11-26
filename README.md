# 📣 Evento
<br/>

## 목차
1. 서비스 소개
2. 기술 스택
3. 주요 기능
4. 시연 영상
5. 배운 점점
6. 프로젝트 기간
<br/>

## 💡 서비스 소개
이벤트 조회 웹 애플리케이션
>Evento는 서울시에서 제공하는 공공데이터를 기반으로 개발되었습니다.<br/>
>서울시에서 열리는 행사, 공연, 축제 정보를 쉽게 조회할 수 있는 플랫폼을 제공합니다.
- 자치구별, 월별, 유/무료 이벤트 조회
- 이벤트 상세정보
- 마이페이지: 스크랩 이벤트 조회
<br/>

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

- GoogleCloud
> - Google OAuth2
- Naver
> - Naver Map API
> - Naver OAuth
- Kakao
> - Kakao OAuth
<br/>

### 데이터베이스 정보 제공 출처
- [서울열린데이터광장](https://data.seoul.go.kr/dataList/OA-15486/S/1/datasetView.do)
<br/>

## 🖥️ 주요기능

### 로그인
- Google, Naver, KakaoTalk 각각의 소셜 계정을 이용하여 회원가입 및 로그인을 할 수 있습니다.
<br/>

![Login](https://github.com/user-attachments/assets/43336a98-8037-4aa5-9a8a-2329374363db)
<br/>

### 마이페이지 - 스크랩
- 스크랩한 이벤트 목록을 조회할 수 있습니다.
<br/>

![SCRAP](https://github.com/user-attachments/assets/cfd8977d-324a-461f-8b03-e9f2e511b720)
<br/>

### 메인페이지
- 각 자치구별, 월별, 유/무료 여부에 따른 이벤트 정보 목록을 조회할 수 있습니다.

![MAIN](https://github.com/user-attachments/assets/14e020d8-ef64-4a19-bb47-d39561fd142c)
<br/>

### 상세페이지
- 이벤트 정보를 상세하게 조회할 수 있습니다.
<br/>

![DETAIL](https://github.com/user-attachments/assets/d3693738-ca13-47ee-b14f-e887397a1b55)
<br/>

## 📺 시연 영상
- 클릭 시 이동합니다!

[![Evneto1](https://github.com/user-attachments/assets/0b2e0603-b9a8-4ec9-b648-8aa1f083ab27)](https://youtu.be/54uM2fqwv3s)
</br>

## 💾 배운 점
- 클론 코딩이나 강의를 통해 제작한 프로젝트가 아니라, 처음부터 직접 기획하고 개발한 프로젝트여서 많은 시행착오를 겪었다. 프로젝트 아이디어는 주변 지인들의 필요에 의해 정해졌지만, 이를 기반으로 어떤 기능을 구현하고 어떻게 개발을 시작할지 많은 고민을 하게 되었다.
- 예상보다 CSS가 까다로웠으며, 크기와 위치를 조정하는 과정에서 지속적인 수정과 보완 작업이 필요했다.
- 초기 개발 시 각각의 라우터별 컴포넌트에 기능을 개발하였지만, 각 라우터별 컴포넌트에 중복된 기능이 몇가지 있어 해당 기능들을 분리하여 재사용이 용이하도록 수정하였다. 이를 통해 컴포넌트별 코드의 중복을 줄일 수 있었고, 초기 프로젝트 개발 시 컴포넌트 아키텍처 설계 및 디자인 패턴의 중요성을 알게 되었다.
- 초기에는 각 라우터별 컴포넌트에 기능을 개발했으나, 몇 개의 중복된 기능 발견되어 이를 분리하고 재사용성을 높였다. 이 과정에서 컴포넌트 설계와 디자인 패턴의 중요성을 깨달았으며, 코드 중복을 줄이는 방법을 학습했다.
- 소셜 로그인 개발의 경우 한 번도 개발해 보지 않은 기능이다 보니 많은 시행착오를 겪었는데, 

## 📆 프로젝트 기간
### 23.04.18 ~ 23.11.02
- 프로젝트 구현 : 23.04.18 ~ 23.11.02
</br>
