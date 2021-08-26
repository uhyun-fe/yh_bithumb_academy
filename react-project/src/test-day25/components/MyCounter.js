import React, { Component } from "react";
import styled from "styled-components";

class MyCounter extends Component {
   state = {
      num: 0,
   };

   handleAdd = () => {
      this.setState({ num: this.state.num + 1 });
   };

   handleSub = () => {
      this.setState({ num: this.state.num - 1 });
   };

   handleRandom = () => {
      // 1 ~ 5 사이 난수 생성 -> 소수점 버림처리
      let randNum = Math.floor(Math.random() * 5 + 1);
      this.setState({ num: this.state.num + randNum });
   };

   render() {
      return (
         <Container>
            <h1>MyCounter.js</h1>
            <p>{this.state.num}</p>
            <button onClick={this.handleAdd}>1씩 증가</button>
            <button onClick={this.handleSub}>1씩 감소</button>
            <button onClick={this.handleRandom}>랜덤 생성</button>
         </Container>
      );
   }
}

export default MyCounter;

const Container = styled.div`
   p {
      color: green;
      font-size: 20pt;
      font-weight: bold;
   }
   button {
      margin: 0 10px;
      color: red;
      font-size: 14pt;
   }
`;
