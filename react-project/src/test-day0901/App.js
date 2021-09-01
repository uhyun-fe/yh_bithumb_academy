// Redux, Material-UI 학습

import React, { Component } from "react";
import styled from "styled-components";

// Images
import sample from "../img/puzzle.jpg";

export class App extends Component {
   render() {
      return (
         <Container>
            <img src={sample} alt="sample" />
         </Container>
      );
   }
}

export default App;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   img {
      width: 90%;
      max-width: 700px;
   }
`;
