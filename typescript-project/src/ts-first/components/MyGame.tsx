import React from "react";
import styled from "styled-components";

import sample from "../../img/dog.jpg";

class MyGame extends React.Component {
   static defaultProps = {
      title: "aaa",
   };

   render() {
      return (
         <Container>
            <h2>MyGame.js문서 20:40</h2>
            <img src={sample} alt="sample" />
            <p>종류 : {"?"}</p>
         </Container>
      );
   }
}

export default MyGame;

const Container = styled.div`
   padding: 50px 0;
   text-align: center;
   background: rgba(0, 0, 0, 0.1);
   > img {
      width: 300px;
      height: 200px;
   }
`;
