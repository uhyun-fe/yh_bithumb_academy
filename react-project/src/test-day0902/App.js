import React from "react";
import styled from "styled-components";

// Images
import sample from "../img/handball.jpg";

// Components
import BoardForm from "./components/BoardForm";

export default function App() {
   return (
      <Container>
         <img src={sample} alt="sample" />
         <h1>Redux 개념 정리</h1>
         <BoardForm />
      </Container>
   );
}

const Container = styled.div`
   text-align: center;
   img {
      width: 80%;
      max-width: 700px;
   }
`;
