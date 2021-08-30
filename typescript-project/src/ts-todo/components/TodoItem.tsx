import styled from "styled-components";

// Interface
import { Itodo } from "../App";

// Images
import correctIcon from "../assets/icons/correct.png";
import checkIcon from "../assets/icons/check.png";
import updateIcon from "../assets/icons/edit.png";
import deleteIcon from "../assets/icons/trash.png";

interface Iprops {
   index: number;
   item: Itodo;
   checkItem: (index: number) => void;
   updateItem: (index: number) => void;
   deleteItem: (index: number) => void;
}

const TodoItem = ({ index, item, checkItem, updateItem, deleteItem }: Iprops) => {
   return (
      <Container>
         <TextBox>
            {item.checked && (
               <div>
                  <img src={correctIcon} alt="checked" />
               </div>
            )}
            <div>
               {item.text.split("\n").map((t, i) => (
                  <span key={i}>
                     {item.checked ? <del>{t}</del> : t}
                     <br />
                  </span>
               ))}
            </div>
         </TextBox>
         <ButtonBox checked={item.checked}>
            <button className="check" onClick={() => checkItem(index)} />
            <button className="update" onClick={() => updateItem(index)} />
            <button className="delete" onClick={() => deleteItem(index)} />
         </ButtonBox>
      </Container>
   );
};

export default TodoItem;

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   position: relative;
   left: 0;
   width: 140%;
   transition: 0.2s ease-in-out;
   &:hover {
      left: -40%;
      background: #f2f2f2;
   }
`;

const TextBox = styled.div`
   display: flex;
   align-items: center;
   padding: 20px 50px;
   width: 95%;
   height: 100%;
   text-align: left;
   img {
      margin-right: 10px;
      width: 13px;
      height: 13px;
   }
   del {
      color: #afafaf;
   }
`;

interface Istyle {
   checked: boolean;
}

const ButtonBox = styled.div<Istyle>`
   display: flex;
   justify-content: flex-end;
   align-items: stretch;
   position: relative;
   width: 40%;
   button {
      width: 100%;
      height: 100%;
      border: none;
      opacity: 0.9;
      &.check {
         background: url(${checkIcon}) no-repeat;
         background-size: 20px;
         background-position: 53%;
         background-color: ${(props) => (props.checked ? "#afafaf" : "#46b39d")};
      }
      &.update {
         background: url(${updateIcon}) no-repeat;
         background-size: 20px;
         background-position: 53%;
         background-color: #f0ca4d;
      }
      &.delete {
         background: url(${deleteIcon}) no-repeat;
         background-size: 20px;
         background-position: 53%;
         background-color: #de5b49;
      }
      &:hover {
         opacity: 1;
      }
   }
`;
