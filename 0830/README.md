# 2021.08.30

## 개요

-  interface를 활용한 typescript 함수 적용 (Generic 적용)
-  css style 프로그램 적용 (SCSS/SASS)
-  백엔드 프로그래밍
   -  jdk 설치, spring 설치, oracle 설치
   -  oracle 테이블 최소 3-4개 생성
   -  Axios를 이용한 연동
-  숙제
   -  제출 : (이름)0830_axios정리.pdf
   1. axios 개념 및 특징 요약 -> 3-5페이지 (AJAX, fetch 개념 제외)

## SCSS

-  [공식문서](https://sass-lang.com)
-  설치
   ```
   npm install -g sass node-sass classnames
   ```
-  scss

   -  @mixin, @include 사용
   -  예제 1

      ```
      /* 그룹화 -> % */
      %message-shared {
         padding: 10px;
         border: 2px solid green;
         background: crimson;
      }

      .App {
         @extend %message-shared; // @extend 로 가져와서 사용
      }
      ```

## Axios

-  이번주 실습

   -  test-day31 폴더
   -  영화사이트에서 데이터 가져오기
   -  Spring을 강사님이 세팅 후 배포 -> url 이용해서 데이터 가져오기

-  설치
   ```
   npm install axios
   ```
-  사용
   ```
   import axios from "axios";
   ```
