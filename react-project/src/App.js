import React from "react";
import "./App.css";
import dog from "./img/dog.jpg";

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <img src={dog} className="App-image" alt="dog" />
            <p>우리나라</p>
            <p>대한민국</p>
            <p>안녕하세요</p>
         </div>
      );
   }
}

export default App;
