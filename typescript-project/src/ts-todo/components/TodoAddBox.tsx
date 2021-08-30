import styled from "styled-components";

// Images
import plusIcon from "../assets/icons/plus.png";
import closeIcon from "../assets/icons/close.png";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

interface Iprops {
   adding: boolean;
   addTask: (v: string) => void;
   closing: () => void;
}

const TodoAddBox = (props: Iprops) => {
   const { adding, addTask, closing } = props;
   const [task, setTask] = useState<string>("");
   const inputRef = useRef<HTMLTextAreaElement>(null);

   useEffect(() => {
      if (adding) setTimeout(() => inputRef.current?.focus(), 600);
   }, [adding]);

   const closeContainer = () => {
      setTask("");
      closing();
   };

   const add = () => {
      setTask("");
      addTask(task);
   };

   return (
      <Container is_display={adding}>
         <CloseButton onClick={closeContainer} />
         <h2>Add New Task</h2>
         <Input ref={inputRef} value={task} onChange={({ target: { value } }) => setTask(value)} placeholder="wirte here..." />
         <AddButton onClick={add} />
      </Container>
   );
};

export default TodoAddBox;

interface Istyle {
   is_display: boolean;
}

const Container = styled.div<Istyle>`
   position: absolute;
   left: 0;
   bottom: ${(props) => (props.is_display ? "0" : "-85%")};
   padding: 30px 10% 0;
   height: 85%;
   width: 100%;
   text-align: right;
   background: #fff;
   transition: 0.6s ease-in-out;
   h2 {
      margin-bottom: 30px;
      font-size: 1.2em;
      font-weight: 500;
      text-align: left;
   }
`;

const CloseButton = styled.button`
   width: 20px;
   height: 20px;
   border: none;
   background: url(${closeIcon}) no-repeat;
   background-size: 20px;
   filter: invert(50%);
`;

const Input = styled.textarea`
   margin-bottom: 20px;
   width: 100%;
   height: 60%;
   font-weight: 300;
   border: none;
   outline: none;
   overflow: auto;
   resize: none;
`;

const AddButton = styled.button`
   position: absolute;
   left: 10%;
   bottom: 20px;
   width: 80%;
   height: 60px;
   border: none;
   border-radius: 10px;
   background: url(${plusIcon}) no-repeat;
   background-size: 20px;
   background-position: 51%;
   background-color: var(--main);
   opacity: 0.9;
   transition: 0.2s ease-in-out;
   &:hover {
      opacity: 1;
   }
`;
