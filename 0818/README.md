# 2021.08.18

## 개요

-  render는 react에서 제공하는 함수
-  let, const 권장
-  에로우 함수 활용
-  리액트에서 사용하는 this.props, static, state...
   -  static
      ```
      static defaultProps = {
          price: "15000"
      }
      ...
      this.props.price 로 접근 가능
      ```
   -  state와 setState

## 실습

-  메인 App.js에서 컴포넌트 import하여 사용하기
   -> 데이터 주고 받기 (this.props 활용)
