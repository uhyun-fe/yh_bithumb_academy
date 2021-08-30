import React, { Component } from "react";

// Styles
import "./css/base.scss";

// Images
import sample from "../img/dog.jpg";

// Components
import MyCount from "./components/MyCount";

export class App extends Component {
   render() {
      return (
         <div className="App">
            <img src={sample} alt="sample" width="300" height="150" />
            <MyCount />
         </div>
      );
   }
}

export default App;
