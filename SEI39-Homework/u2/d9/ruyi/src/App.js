import React from "react";
import Home from "./components/Home";
import {Route} from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
    </>
  );
}

export default App;
