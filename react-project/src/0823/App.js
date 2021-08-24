import React from "react";
import { BrowserRouter, HashRouter, Link, Route } from "react-router-dom";
import "./css/style.css";

import Counter from "./components/Counter";
import MyBTS from "./components/MyBTS";
import MyColor from "./components/MyColor";
import Home from "./Home";

class App extends React.Component {
   render() {
      return (
         <div className="App">
            <HashRouter basename="/">
               <ul className="menu-wrapper">
                  <li>
                     <Link to="/"> 수선화 </Link>
                  </li>
                  <li>
                     <Link to="/counter"> 카운터 </Link>
                  </li>
                  <li>
                     <Link to="/mycolor"> 칼라 </Link>
                  </li>
                  <li>
                     <Link to="/mybts"> 방탄 </Link>
                  </li>
               </ul>

               <Route exact path="/">
                  {" "}
                  <Home />{" "}
               </Route>
               <Route exact path="/counter">
                  {" "}
                  <Counter />{" "}
               </Route>
               <Route exact path="/mycolor">
                  {" "}
                  <MyColor kind="coffee" price="4500" />{" "}
               </Route>
               <Route exact path="/mybts">
                  {" "}
                  <MyBTS />{" "}
               </Route>
            </HashRouter>
         </div>
      );
   }
}

export default App;
