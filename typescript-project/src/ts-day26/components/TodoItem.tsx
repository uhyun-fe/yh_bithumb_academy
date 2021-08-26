import { useState } from "react";
import styled from "styled-components";

import deleteIcon from "../../img/delete.png";

interface IList {
   idx: number;
   todo: string;
   is_delete: boolean;
   onDelete: (id: number) => void;
}

function TodoItem(props: IList) {
   const handleDelete = () => {
      // 아이템 삭제
      props.onDelete(props.idx);
   };

   return (
      <Container>
         <p>아이템 {props.idx}</p>
         <button onClick={handleDelete}></button>
      </Container>
   );
}

export default TodoItem;

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
   padding: 0 20px;
   p {
      font-size: 15pt;
   }
   button {
      margin: 0 5px;
      width: 20px;
      height: 20px;
      border: none;
      background: none;
      cursor: pointer;
      background-image: url(${deleteIcon});
      background-size: 100% 100%;
      &:hover {
         opacity: 0.7;
      }
   }
`;
