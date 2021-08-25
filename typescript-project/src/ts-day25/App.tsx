import React, { Component } from "react";
import styled from "styled-components";

// Components
import MyColor from "./components/MyColor";
import MyCounter from "./components/MyCounter";

// Images
import sample from "../img/puzzle.jpg";

export class App extends Component {
   render() {
      return (
         <Container>
            <img src={sample} alt="sample" />
            <MyColor kind="bithumb" desc="비트캠프" />
            {/* <MyCounter /> */}
         </Container>
      );
   }
}

export default App;

const Container = styled.div`
   padding: 20px;
   text-align: center;
   > img {
      width: 300px;
      height: 200px;
   }
`;
