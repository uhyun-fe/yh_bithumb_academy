# 2021.09.01

## 학습목표

    - redux (store, reduce 개념)
    - material-ui 학습

## 과제

1. test-axios 프로젝트
   -  (최유현)test-axios.zip -> 슬랙에 업로드
   -  간단한 설명 첨부 (접근방식)
   -  id, title, url, thumbnailUrl 표시
   -  [데이터 서버 url](https://jsonplaceholder.typicode.com/photos)
   -  9/8 까지 제출
2. material-ui 사용해서 Dashboard, Sign in, Blog, Album 4개항목 혼합해서 나만의 UI화면 완성
   -  (최유현)test-materialUI.zip -> 슬랙에 업로드
   -  js파일 5개 - 10개
   -  [첨조](https://material-ui.com/getting-started/templates/)
   -  실행된 화면 캡쳐 (5개정도)
   -  9/8 까지 제출

```
- components
    ㄴ Photo.js
- App.js
    <Photo 속성1, 속성2, 속성3, 속성4 />
    속성4에는 그림이미지출력
```

## Material-UI

-  [공식문서](https://material-ui.com/)
-  설치
   ```
   npm install react-hook-form
   npm install @material-ui/core @material-ui/icons
   ```

## Redux

-  [공식문서](https://ko.redux.js.org/)

-  설치

   ```
   npm install redux react-redux redux-actions
   ```

-  store

   -  액션이 일어날 때 (ex. 추가, 삭제 등), 액션에 따라 상태를 수정하고 저장하는 객체단위

-  action

   -  저장소로 데이터를 보내는 방법

-  reducer

   -  액션을 통해 어떤 이벤트 처리가 정의되었다면, 어플의 상태가 어떻게 변경되는지를 정하는 함수

-  예제
   -  BoardReducer.js -> 상수로 액션이름 정의
      ```
      import { createAction, handleAction } from "redux-actions";
      ```
