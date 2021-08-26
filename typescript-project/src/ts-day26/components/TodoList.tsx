import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

// Components
import TodoItem from "./TodoItem";

// Interface
interface Iinput {
   input: string;
}

interface ITodoItem {
   idx: number;
   todo: string;
   is_delete: boolean;
   onDelete: (id: number) => void;
}

interface ITodoList {
   todoList: ITodoItem[];
}

function TodoList() {
   const [input, setInput] = useState<Iinput>({
      input: "",
   });

   const [todoList, setTodoList] = useState<ITodoList>({ todoList: [] });
   const [todoItem, setTodoItem] = useState<ITodoItem>({ idx: 0, todo: "sdf", is_delete: true, onDelete: () => console.log("Sdf") });

   useEffect(() => {
      console.log(input);
   }, [input]);

   const onSubmit = () => {};

   const handleInput = () => {};

   const onDelete = () => {};

   const handleSetTodoList = () => {};

   return (
      <Container>
         <h2>TodoList.tsx 문서</h2>
         <div>
            <form onSubmit={onSubmit}>
               <input
                  type="text"
                  placeholder="할 일을 입력하세요"
                  value={input.input}
                  onChange={({ target: { value } }) => setInput({ input: value })}
               />
               <button type="submit">등록</button>
            </form>
         </div>
         <TodoItem idx={1} todo={"todo"} is_delete={false} onDelete={(idx) => console.log(idx)} />
      </Container>
   );
}

export default TodoList;

const Container = styled.div`
   margin-bottom: 20px;
   padding: 20px;
   background: #dad7f7;
   form {
      display: flex;
      justify-content: space-between;
      input {
         padding: 0 20px;
         width: 70%;
         height: 40px;
         font-size: 14pt;
         border: none;
         border-radius: 10px;
         outline: none;
      }
      button {
         padding-top: 2px;
         width: 15%;
         font-size: 12pt;
         border: none;
         border-radius: 10px;
         background: #f2f2f2;
      }
   }
`;
