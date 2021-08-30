import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./assets/styles/global-styles";

// Utils
import { getItem, setItem } from "./utils/localStorage";

// Components
import ClockBox from "./components/ClockBox";
import TodoItem from "./components/TodoItem";
import TodoAddBox from "./components/TodoAddBox";
import TodoUpdateBox from "./components/TodoUpdateBox";

// Images
import plusIcon from "./assets/icons/plus.png";

const LOCAL_KEY = "ts_todo";

interface Istate {
   adding: boolean;
   updating: boolean;
   update_id: number;
}

export interface Itodo {
   text: string;
   checked: boolean;
}

function App() {
   const [todoList, setTodoList] = useState<Itodo[]>([]);
   const [state, setState] = useState<Istate>({
      adding: false,
      updating: false,
      update_id: 0,
   });

   useEffect(() => {
      setTodoList(JSON.parse(getItem(LOCAL_KEY)) || []);
   }, []);

   // 등록 or 수정 박스 닫기
   const closing = () => {
      setState({ ...state, adding: false, updating: false, update_id: 0 });
   };

   // 할일 등록
   const handleAdd = (value: string) => {
      if (!value) return;
      const arr = todoList.concat({ text: value, checked: false });
      setItem({ key: LOCAL_KEY, value: JSON.stringify(arr) });
      setTodoList(arr);
      closing();
   };

   // 할일 텍스트 수정
   const handleUpdate = (index: number, value: string) => {
      if (!value) return;
      const arr = todoList.map((t, i) => (i === index ? { ...t, text: value } : t));
      setItem({ key: LOCAL_KEY, value: JSON.stringify(arr) });
      setTodoList(arr);
      closing();
   };

   // 할일 체크 or 해제
   const handleCheck = (index: number) => {
      const arr = todoList.map((t, i) => (i === index ? { ...t, checked: !t.checked } : t));
      setItem({ key: LOCAL_KEY, value: JSON.stringify(arr) });
      setTodoList(arr);
   };

   // 할일 삭제
   const handleDelete = (index: number) => {
      setItem({ key: LOCAL_KEY, value: JSON.stringify(todoList.filter((t, i) => i !== index)) });
      setTodoList(todoList.filter((t, i) => i !== index));
   };

   return (
      <>
         <GlobalStyle />
         <Container is_display={!state.adding && !state.updating}>
            <ClockBox />
            <TodoList>
               {todoList.length ? (
                  todoList.map((todo, index) => (
                     <TodoItem
                        key={index}
                        index={index}
                        item={todo}
                        checkItem={handleCheck}
                        updateItem={(index) => setState({ ...state, updating: true, update_id: index })}
                        deleteItem={handleDelete}
                     />
                  ))
               ) : (
                  <Guide onClick={() => setState({ ...state, adding: true })}>새로운 할 일을 등록해보세요!</Guide>
               )}
            </TodoList>
            <PlusButton onClick={() => setState({ ...state, adding: true })} />
            <TodoAddBox adding={state.adding} addTask={handleAdd} closing={closing} />
            <TodoUpdateBox
               updating={state.updating}
               item={todoList.length ? todoList[state.update_id].text : ""}
               item_id={state.update_id}
               updateTask={handleUpdate}
               closing={closing}
            />
         </Container>
      </>
   );
}

export default App;

interface Istyle {
   is_display: boolean;
}

const Container = styled.div<Istyle>`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
   padding: 20px 0;
   position: relative;
   width: 100%;
   max-width: 500px;
   height: 100vh;
   border: 1px solid #eaeaea;
   border-width: 0 1px;
   text-align: center;
   background: ${(props) => (props.is_display ? "#fff" : "rgba(0, 0, 0, 0.1)")};
   transition: 0.6s ease-in-out;
`;

const TodoList = styled.div`
   width: 100%;
   max-height: 67%;
   overflow-x: hidden;
   overflow-y: auto;
`;

const Guide = styled.span`
   display: block;
   padding: 30px 0;
   color: var(--main);
   font-weight: 300;
   cursor: pointer;
`;

const PlusButton = styled.button`
   position: absolute;
   bottom: 20px;
   width: 70px;
   height: 70px;
   border: none;
   border-radius: 50%;
   background: url(${plusIcon}) no-repeat;
   background-size: 50% 50%;
   background-position: 52% 49%;
   background-color: var(--main);
   /* box-shadow: 0 0 5px 1px var(--main); */
`;
