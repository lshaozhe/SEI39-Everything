import React from "react";
import Main from "./pages/Main";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import { Redirect, Route, Switch } from "react-router-dom"; //switch allows us to route to exact path
import NavBar from "./components/NavBar";
import Details from "./pages/Details";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route exact path="/">
          {/* <Main /> */}
          <Redirect to="/page-one" />
          {/* for redirection */}
        </Route>
        <Route path="/page-one">
          <PageOne />
        </Route>
        <Route path="/page-one/:item">
          <Details />
        </Route>
        <Route path="/page-two">
          <PageTwo />
        </Route>
        <Route path="page-three">
          <PageThree />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
