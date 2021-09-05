import React from "react";
import styled from "styled-components";

const Modal = ({ img, closing }) => {
   return (
      <Container>
         <div className="content">
            <img src={img} alt="album" />
            <span onClick={closing}>X</span>
         </div>
      </Container>
   );
};

export default Modal;

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   .content {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      span {
         margin-left: 20px;
         color: #fff;
         font-size: 4em;
         font-weight: lighter;
         cursor: pointer;
      }
   }
`;
