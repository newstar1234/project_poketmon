# Poketmon Sample Save Project
---

## Project 개요
### 포켓몬스터 게임을 기반으로 실전용 포켓몬 샘플 데이터를 저장하고 조회하는 웹사이트
### 프론트엔드

|폴더|설명|
|-----|-----|
|apis|API 연결 시 사용하는 함수 모음|
|assets|이미지 관련 파일|
|components|컴포넌트 단위 기능|
|constants|전역으로 사용되는 상수 모음|
|interface|인터페이스 모음|
|utils|전역으로 사용되는 함수 모음|
|views|실제 화면|

### 백엔드

|폴더|설명|
|-----|-----|
|common|반환하는 code, message|
|config|web security 설정(CORS)|
|controller|프레젠테이션 영역|
|dto|request, response|
|entity|MySql|
|filter|web security|
|provider|JWT 토큰 생성|
|repository| 데이터 접근 영역|
|service|비즈니스 영역(implement)|
