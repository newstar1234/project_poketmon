# Poketmon Sample Save Project

## Project 개요
### 포켓몬스터 게임을 기반으로 실전용 포켓몬 샘플 데이터를 저장하고 조회하는 웹사이트
### 프론트엔드

|폴더|설명|
|-----|-----|
|apis|API 연결 시 사용하는 함수 모음|
|assets|이미지 관련 파일|
|components|컴포넌트 단위 기능|
|constants|전역으로 사용되는 상수 모음|
|hooke|페이지네이션관련 hood|
|interface|인터페이스 모음|
|stores|상태관리를 위한 store|
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


### 보완할 사항
- DB
  - 단일 데이터베이스 사용으로 인한 지저분한 코드의 사용
  - 실제 사용되는 데이터의 타입이 모호함 -> 다시 확인하고 수정이 필요함
  - 추후 로그인 기능 추가시 테이블 사용에 대한 고민이 필요함
- 프론트엔드
  - UI/UX의 디자인이 미흡함 -> 좀 더 공부해서 깔끔한 화면을 구상할 필요가 있음
- 백엔드
  - 서비스 아키텍처의 각 영역 분배를 하지않고 단일로 처리함에 있어 코드의 유지,보수가 어려움(코드가 지저분함)
  - 추가하고싶은 API 존재 : 추후 보완을 통해 점차 복잡한 스킬을 사용하고자 함
    
