import React from "react";
import styled from "styled-components";

import MyGame from "./components/MyGame";

import puzzle from "../img/puzzle.jpg";

class App extends React.Component {
   render() {
      return (
         <Container>
            <img src={puzzle} alt="puzzle" />
            <p>처음으로 만든 타입스크립트 문서</p>
            <MyGame title="LOL" />
         </Container>
      );
   }
}

export default App;

const Container = styled.div`
   padding: 50px 0;
   text-align: center;
   > img {
      width: 300px;
      height: 200px;
   }
`;
