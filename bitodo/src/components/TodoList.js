import React from "react";
import styled from "styled-components";

// Components
import TodoRow from "./TodoRow";

class TodoList extends React.Component {
   render() {
      const { list, setButton, updateItem, removeItem } = this.props;
      return (
         <Container>
            {list.map((item, i) => (
               <TodoRow key={i} index={i} todo={item} setButton={setButton} updateItem={updateItem} removeItem={removeItem} />
            ))}
            {list.length < 1 && <span>새로운 일정을 등록해보세요</span>}
         </Container>
      );
   }
}

export default TodoList;

// styled-components
const Container = styled.div`
   margin-top: 33px;
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
`;
