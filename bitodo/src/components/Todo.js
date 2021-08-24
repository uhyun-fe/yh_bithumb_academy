import React from "react";
import styled from "styled-components";

// Components
import TodoList from "./TodoList";

class Todo extends React.Component {
   state = {
      todoList: [],
      nowText: "",
      updateId: null,
      information: [
         { id: 0, name: "one", phone: "010-1111-1111" },
         { id: 1, name: "two", phone: "010-2222-2222" },
      ],
   };

   componentDidMount() {
      const todoList = localStorage.getItem("todoList");
      this.setState({ todoList: todoList !== null ? JSON.parse(todoList).map((t) => ({ text: t, is_select: false })) : [] });
   }

   setLocalTodoList = () => {
      localStorage.setItem("todoList", JSON.stringify(this.state.todoList.map((t) => t.text)));
   };

   // 입력 후 엔터
   handleInputKeyPress = ({ target, target: { value }, key }) => {
      if (key === "Enter") {
         if (!value) return;
         const { updateId, todoList, nowText } = this.state;
         const list =
            updateId === null
               ? todoList.concat({ text: value, is_select: false })
               : todoList.map((t, i) => ({ text: i === updateId ? nowText : t.text, is_select: false }));
         this.setState({ todoList: list, nowText: "", updateId: null }, this.setLocalTodoList);
      }
   };

   // 입력 시 nowText 변경
   updateNowText = ({ target: { value } }) => {
      this.setState({ nowText: value });
   };

   // 아이템 클릭 -> 해당 아이템 수정/삭제 버튼 생성
   handleSetControlButtons = (id) => {
      this.setState({ todoList: this.state.todoList.map((t, i) => ({ ...t, is_select: i === id })) });
   };

   // 수정버튼 클릭 -> input에 해당 값 넣기
   handleClickEdit = (id) => {
      this.setState({ nowText: this.state.todoList[id].text, updateId: id });
   };

   // 수정 취소
   handleCancelEdit = () => {
      this.setState({ nowText: "", updateId: null });
   };

   // 삭제버튼 클릭 -> 값 삭제
   handleClickRemove = (id) => {
      if (!window.confirm("삭제하시겠습니까?")) return;
      const { updateId, nowText } = this.state;
      this.setState(
         {
            todoList: this.state.todoList.filter((t, i) => i !== id),
            nowText: id === updateId ? "" : nowText,
            updateId: id === updateId ? null : updateId,
         },
         this.setLocalTodoList
      );
   };

   render() {
      return (
         <Container>
            {this.state.updateId !== null && (
               <UpdateGuide>
                  <span>{this.state.updateId + 1}번 수정중</span>
                  <button onClick={this.handleCancelEdit}>X</button>
               </UpdateGuide>
            )}
            <Input
               type="text"
               placeholder="오늘의 할 일 기록"
               value={this.state.nowText}
               onChange={this.updateNowText}
               onKeyPress={this.handleInputKeyPress}
            />
            <TodoList
               list={this.state.todoList}
               setButton={this.handleSetControlButtons}
               updateItem={this.handleClickEdit}
               removeItem={this.handleClickRemove}
            />
         </Container>
      );
   }
}

export default Todo;

// styled-components
const Container = styled.div`
   margin-top: 44px;
   text-align: center;
`;

const UpdateGuide = styled.div`
   display: flex;
   justify-content: center;
   margin-bottom: 10px;
   span {
      padding: 7px 10px;
      display: block;
      width: 70%;
      text-align: left;
      background: #fe9601;
   }

   button {
      width: 8%;
      color: #fff;
      font-size: 1.1em;
      border: none;
      background: #fe9601;
      cursor: pointer;
   }
`;

const Input = styled.input`
   padding: 7px 10px;
   width: 80%;
   height: 33px;
   outline: none;
   color: #fff;
   font-size: 22px;
   border: 1px solid #f2f2f2;
   border-radius: 11px;
   background: transparent;
   &::placeholder {
      color: #f2f2f2;
   }
`;
