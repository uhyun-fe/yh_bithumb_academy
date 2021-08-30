// @ts-ignore
import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import TodoItem from "./TodoItem";

// 타입을 인터페이스로 선언
interface IInput {
   input: string;
}

// todo item
interface ITodoItem {
   idx: number;
   todo: string;
   isDelete: boolean;
   onDelete?: Function;
}

// todo list
interface ITodoList {
   todoList: ITodoItem[]; // ITodoItem 배열
}

export default function TodoList() {
   const [iInput, setInput] = useState<IInput>({
      input: "",
   });

   const [iTodoItem, setTodoItem] = useState<ITodoItem>({
      idx: 0,
      todo: "",
      isDelete: false,
   });

   const [iTodoList, setTodoList] = useState<ITodoList>({
      todoList: [iTodoItem],
   });

   useEffect(() => {
      setTodoList({
         todoList: iTodoList.todoList.concat(iTodoItem),
      });
   }, [iTodoItem]);

   const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault(); // 페이지 전환 막기
      if (iInput.input.length > 0) {
         setTodoItem({
            idx: iTodoItem.idx + 1,
            todo: iInput.input,
            isDelete: false,
         });
      }

      setInput({
         // input 창 초기화
         input: "",
      });
   };

   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput({
         input: value,
      });
   };

   const onDelete = (idx: number) => {
      const newTodo: ITodoItem[] = iTodoList.todoList.filter((item) => item.idx !== idx);
      setTodoList({
         todoList: newTodo,
      });
   };

   const TodoList = iTodoList.todoList.map((data, i) => (
      <React.Fragment key={i}>
         <TodoItem idx={data.idx} todo={data.todo} isDelete={data.isDelete} onDelete={onDelete} />
      </React.Fragment>
   ));

   const mc = { fontSize: "24pt", color: "green" };

   return (
      <div>
         <p></p>
         <br></br>
         <div style={mc}> todoList </div>
         <div>
            <form onSubmit={onSubmit}>
               <input type="text" name="content" value={iInput.input} onChange={handleInput} />
               <button type="submit">추가</button>
            </form>
         </div>
         <div>{TodoList}</div>
      </div>
   );
} //end 영임쌤
