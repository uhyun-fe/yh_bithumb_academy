import React, { Fragment } from "react";
import styled from "styled-components";

import puzzle from "../img/puzzle.jpg";

class App extends React.Component {
   render() {
      const add = (a, b, c, d, e) => {
         return a + b + c + d + e;
      };

      let arr = [5, 7, 9, 1, 3];
      console.log("result: ", add(...arr));
      console.log("-----------------------------------------");

      let x = [3, 4, 5];
      let y = [1, 2, ...x, 9, 100];
      let z = [1, 2, x, 9, 100];
      console.log("result: ", y); //  [1, 2, 3, 4, 5, 9, 100]
      console.log("result: ", z); //  [1, 2, [3, 4, 5], 9, 100]
      console.log("-----------------------------------------");

      let a = [1, 2, 3];
      let b = [7, 8, 9];
      a.push(b);
      console.log("result: ", a); //  [1, 2, 3, [7, 8, 9]]
      console.log("-----------------------------------------");

      let k = [1, 2, 3];
      let m = { name: "유현", age: 20 };
      const ob3 = [...k];
      const ob4 = { ...m };
      ob4.name = "빈센조";
      ob4.age = 34;
      console.log("result: ", ob3, " ", ob4); //  [1, 2, 3]  {name: "빈센조", age: 34}
      ob3.push(ob4);
      console.log("result: ", ob3); //  [1, 2, 3, {name: "빈센조", age: 34}]
      console.log("-----------------------------------------");

      return (
         <Fragment>
            <Container>
               <h1>전개연산 출력</h1>
               <img src={puzzle} alt="puzzle" />
               <p>let name = '화요일'</p>
               <p>{add(5, 7, 9, 1, 3)}</p>
            </Container>
         </Fragment>
      );
   }
}
export default App;

const Container = styled.div`
   padding: 50px 0;
   text-align: center;
   > img {
      width: 300px;
      height: 200px;
   }
`;

/* 첫번째 예제
import React from "react";
import styled from "styled-components";

import puzzle from "../img/puzzle.jpg";
import { My } from "./components/My";

class App extends React.Component {
   render() {
      return (
         <Container>
            <img src={puzzle} alt="puzzle" />
            <h2>App.js 07:14</h2>
            <My />
         </Container>
      );
   }
}
export default App;

const Container = styled.div`
   padding: 50px 0;
   text-align: center;
   > img {
      width: 300px;
      height: 200px;
   }
`;
 */
