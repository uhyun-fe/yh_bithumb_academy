import React from "react";
import styled from "styled-components";

// Icons
import editIcon from "../assets/icons/edit.png";
import deleteIcon from "../assets/icons/delete.png";

class TodoRow extends React.Component {
   // shouldComponentUpdate(nextProps) {
   //    if (this.props.todo.text === nextProps.todo.text) return false;
   //    return true;
   // }

   // this.props.removeItem(this.props.index);

   render() {
      const { index, todo, setButton, updateItem, removeItem } = this.props;
      return (
         <Container>
            <Item>
               <span onClick={() => setButton(index)}>{`${index + 1}. ${todo.text}`}</span>
               {todo.is_select ? (
                  <ButtonBox>
                     <button className="edit" onClick={() => updateItem(index)} />
                     <button className="delete" onClick={() => removeItem(index)} />
                  </ButtonBox>
               ) : (
                  ""
               )}
            </Item>
         </Container>
      );
   }
}

export default TodoRow;

// styled-components
const Container = styled.div`
   margin: 13px 0;
   padding-bottom: 10px;
   width: 80%;
   text-align: left;
   border-bottom: 1px solid #afafaf;
`;

const Item = styled.div`
   display: flex;
   justify-content: space-between;
   position: relative;
   width: 100%;
   font-size: 24px;
   &:hover {
      color: #afafaf;
      top: -2px;
   }

   span {
      width: 100%;
      cursor: pointer;
   }
`;

const ButtonBox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 80px;

   button {
      margin: 0 5px;
      width: 30px;
      height: 30px;
      border: none;
      background: none;
      filter: invert(100);
      cursor: pointer;
      &:hover {
         opacity: 0.7;
      }
      &.edit {
         background-image: url(${editIcon});
         background-size: 100% 100%;
      }
      &.delete {
         background-image: url(${deleteIcon});
         background-size: 100% 100%;
      }
   }
`;
