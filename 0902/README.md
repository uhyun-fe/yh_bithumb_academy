# 2021.09.02

## 학습목표

    - redux (store, reduce 개념)
    - 다음주
        - redux + redux-saga + material-UI + axios 프로젝트
        - spring
        - AWS

## Redux

-  redux : 리액트의 상태관리 라이브러리
   -  action
   -  reduce
   -  store
-  부모 -> 자식 (props전달)
-  자식 -> 부모 (이벤트().bind())
-  예제

   -  react-project/test-day0902 참조

-  [공부할 때 참고할 블로그](https://usonkrap.github.io/2018/12/15/React-Redux-Tutorial-for-Beginners.html)

## redux + redux-saga + material-UI + axios 프로젝트

-  설치

   ```
   npm install --save redux react-redux redux-actions @material-ui/core @material-ui/icons react-hook-form axios
   ```

-  data.json => 4000번 포트로 서버 띄워서 url로 접근
