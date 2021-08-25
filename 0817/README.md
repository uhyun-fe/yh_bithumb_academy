# 2021.08.17

## 개요

-  리액트는?
   -  컴포넌트를 생성하고 활용하는 SPA
   -  클라이언트 프레임워크
   -  가상 dom 기술 사용
   -  reload할 때 시간 단축
-  기본 : html, css, js 지식
-  이벤트처리 : 화살표연산자, filter, map, concat
-  바벨 : js -> es6 변환하는 역할

---

## 개발환경 설정

1. node.js 설치
2. vscode 설치
3. npm install

   ```
   npm install -g npx
   npm install -g create-react-app
   npx create-react-app my-project
   cd my-project
   npm start
   ```

---

## 리액트 프로젝트 구성

```
- node_modules
- public
    ㄴ index.html
- src
    ㄴ img
    ㄴ index.js
    ㄴ App.js
- package.json
```

---

## 컴포넌트 여러가지 형식

-  function App() { return ( 'html tag' ); }
-  const App = () => { return ( 'html tag' ); }
-  class App '상속' '부모' { render() { return ( 'html tag' ); } }

---

## 과제 참고 문서

-  [리액트 공식 문서 예제 페이지](https://ko.reactjs.org/community/examples.html)
-  [강사님 github](https://github.com/posasi2000/bithumb)
