import React from "react";
import styled from "styled-components";

type Iprops = {
   kind: string;
   desc: string;
};

function MyColor(props: Iprops) {
   return (
      <Container>
         <h2>MyColor.tsx 문서</h2>
         <p>
            종류: {props.kind} / 설명: {props.desc}
         </p>
      </Container>
   );
}

export default MyColor;

const Container = styled.div`
   margin-bottom: 20px;
   padding: 20px;
   background: #f2f2f2;
`;
