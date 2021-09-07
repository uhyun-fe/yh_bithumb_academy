import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import Home from "./components/Blog";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Album from "./components/Album";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const sections = [
   { title: "Home", url: "/" },
   { title: "대시보드", url: "/dashboard" },
   { title: "앨범", url: "/album" },
   { title: "가격표", url: "/pricing" },
   { title: "Velog", url: "https://velog.io/@feyouhyun0957" },
   { title: "로그인", url: "/login" },
   { title: "회원가입", url: "/signup" },
];

const App = () => {
   return (
      <React.Fragment>
         <CssBaseline />
         <Container maxWidth="lg">
            <Header title="Youhyun's Blog" sections={sections} />
            <main>
               <Router>
                  <Switch>
                     <Route exact path="/" component={Home} />
                     <Route path="/login" component={SignIn} />
                     <Route path="/signup" component={SignUp} />
                     <Route path="/dashboard" component={Dashboard} />
                     <Route path="/album" component={Album} />
                     <Route path="/pricing" component={Pricing} />
                     <Redirect from="*" to="/" />
                  </Switch>
               </Router>
            </main>
         </Container>
         <Footer title="YouHyun's Blog" description="최유현에 대해 더 알고싶으시면 좌측 상단의 'GITHUB'를 클릭해주세요!" />
      </React.Fragment>
   );
};

export default App;
