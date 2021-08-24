import React from "react";
import "./App.css";

import fs from "./Firestore.js";
import tulips from "../img/puzzle.jpg";

class App extends React.Component {
   render() {
      console.log("파이어베이스연동확인");
      console.log(fs);

      return (
         <div className="App">
            <img src={tulips} alt="튜립" width="400" height="150" />
            <p></p>
            <h3> 빗썸 Firebase 연결 </h3>
         </div>
      );
   }
}

export default App;
