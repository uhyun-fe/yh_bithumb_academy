import React from "react";
import styled from "styled-components";

// Components
import Content from "./components/Content";

class App extends React.Component {
   render() {
      return (
         <Container>
            <Content />
         </Container>
      );
   }
}

export default App;

// styled-components
const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: linear-gradient(to right, rgba(20, 20, 20, 0.1) 10%, rgba(20, 20, 20, 0.7) 70%, rgba(20, 20, 20, 1)),
      url(https://source.unsplash.com/random/1920x1080?flower);
   background-size: cover;
`;
