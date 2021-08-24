import React from "react";
import styled from "styled-components";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

class Clock extends React.Component {
   state = {
      date: new Date(),
   };

   getDate = () => {
      this.setState({ date: new Date() });
   };

   addZero = (num) => {
      return num < 10 ? "0" + num : "" + num;
   };

   componentDidMount() {
      this.oneMinuteCall = setInterval(() => this.getDate(), 1000);
   }

   componentWillUnmount() {
      clearInterval(this.oneMinuteCall);
   }

   render() {
      const { date } = this.state;

      return (
         <Container>
            <CurDate>{`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`}</CurDate>
            <CurDay>{DAYS.filter((d, i) => i === date.getDay())[0]}요일</CurDay>
            <CurTime>{`${this.addZero(date.getHours())} : ${this.addZero(date.getMinutes())} : ${this.addZero(date.getSeconds())}`}</CurTime>
         </Container>
      );
   }
}

export default Clock;

// styled-components
const Container = styled.div`
   margin-top: 40px;
   font-size: 40px;
   text-align: center;
`;

const CurDate = styled.div`
   font-size: 24px;
`;

const CurDay = styled.div`
   font-size: 25px;
   font-style: italic;
`;

const CurTime = styled.div`
   font-size: 25px;
   font-weight: 600;
`;
