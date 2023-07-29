import React from "react";
import ReactDOM from "react-dom";
import ReducerApp from "./ReducerApp";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ReducerApp />
  </React.StrictMode>,
  rootElement
);
