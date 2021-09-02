import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Images
import sample from "../img/handball.jpg";

// Components
import BoardForm from "./components/BoardForm";
import BoardItem from "./components/BoardItem";

const App = ({ boards }) => {
   return (
      <Container>
         <img src={sample} alt="sample" />
         <h1>Redux 개념 정리</h1>
         <BoardForm />
         <table border="1" align="center">
            <tbody>
               <tr align="center" bgcolor="yellow">
                  <td width="50">No</td>
                  <td width="100">Name</td>
                  <td width="200">Title</td>
                  <td width="120">Date</td>
                  <td width="100">삭제버튼</td>
               </tr>
               {boards.map((row) => (
                  <BoardItem key={row.b_no} row={row}></BoardItem>
               ))}
            </tbody>
         </table>
      </Container>
   );
};

const mapStateToProps = (state) => {
   return {
      boards: state.boards,
      selectBoad: state.selectedBoard,
   };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);

const Container = styled.div`
   text-align: center;
   img {
      width: 80%;
      max-width: 700px;
   }
   table {
   }
`;

// dispatch 최적화에 대해
// 한 dispatch에 여러 액션이 동시에 수행되도록 batching 하기
// 다만, 간단한 CRUD 앱의 경우 굳이 이런 공수를 들여 최적화할 필요는 없음
// 실시간으로 많은 양의 데이터를 주고받는 앱의 경우에 필요함
// e.g. 코인 거래소(실시간 호가 렌더), 채팅앱(실시간 동시다발적 채팅)
