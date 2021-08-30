import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

interface Idate {
   year: number;
   month: string;
   date: number;
   day: string;
   hour: string;
   minute: string;
}

const MONTH_LIST: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LIST: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const ClockBox = () => {
   const [date, setDate] = useState<Idate>({
      year: 0,
      month: "",
      date: 0,
      day: "",
      hour: "",
      minute: "",
   });

   useEffect(() => {
      setClock();
      setInterval(() => {
         setClock();
      }, 10000);
   }, []);

   const setClock = () => {
      let now: Date = new Date();
      setDate({
         ...date,
         year: now.getFullYear(),
         month: MONTH_LIST[now.getMonth()],
         date: now.getDate(),
         day: DAY_LIST[now.getDay()],
         hour: addZero(now.getHours()),
         minute: addZero(now.getMinutes()),
      });
   };

   function addZero(num: number) {
      return num < 10 ? "0" + num : "" + num;
   }

   return (
      <Container>
         <Left>
            <DateNum>{date.date}</DateNum>
            <span>
               <span>{date.month}</span>
               <span>{date.year}</span>
            </span>
         </Left>
         <Right>
            <span>{date.day}</span>
            <span>
               {date.hour}:{date.minute}
            </span>
         </Right>
      </Container>
   );
};

export default ClockBox;

const Container = styled.section`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 50px;
   padding: 20px 50px 0;
   width: 100%;
`;

const Left = styled.div`
   display: flex;
   padding-top: 3px;
   > span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
         font-size: 0.9em;
         &:last-child {
            margin-top: 3px;
            font-weight: 300;
         }
      }
   }
`;

const DateNum = styled.span`
   margin-right: 5px;
   color: var(--main);
   font-size: 2.5em;
`;

const Right = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 3px;
   span {
      font-size: 1em;
      &:first-child {
         margin-bottom: 3px;
         font-size: 0.8em;
         font-weight: 300;
      }
   }
`;
