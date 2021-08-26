import { useState } from "react";
import styled from "styled-components";

interface Istate {
   num: number;
}

function MyCounter() {
   const [state, setState] = useState<Istate>({
      num: 0,
   });

   // 1씩 증가
   const handleAdd = () => {
      setState({ ...state, num: state.num + 1 });
      // mycal();
   };

   // 1씩 감소
   const handleSub = () => {
      setState({ ...state, num: state.num - 1 });
   };

   // 랜덤 생성
   const handleRandom = () => {
      setState({ ...state, num: state.num + Math.floor(Math.random() * 5 + 1) });
   };

   // 예제 함수
   function mycal() {
      setState({ ...state, num: state.num + Math.floor(Math.random() * 5 + 1) });
   }

   return (
      <Container>
         <h2>MyCounter.tsx 문서</h2>
         <p>출력: {state.num}</p>
         <button onClick={handleAdd}>1씩증가</button>
         <button onClick={handleSub}>1씩감소</button>
         <button onClick={handleRandom}>랜덤생성</button>
      </Container>
   );
}

export default MyCounter;

const Container = styled.div`
   margin-bottom: 20px;
   padding: 20px;
   background: #def7d7;
   p {
      font-size: 20pt;
      font-weight: bold;
   }
   button {
      margin: 5px;
      padding: 5px 10px;
      color: red;
      font-size: 12pt;
   }
`;
