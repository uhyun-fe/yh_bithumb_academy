import React from "react";

class My extends React.Component {
   render() {
      const cc = { fontSize: "16pt" };
      let name = "유현";
      let age = 26;
      return (
         <div style={cc}>
            My.js <br />
            이름 : {name} <br />
            나이 : {age} <br />
         </div>
      );
   }
}

export { My };
