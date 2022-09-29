import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./morningclass/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//1. install the react-router-dom with npm
//2. import browser router from the dom in index.js
//3. in index.js under render, wrap the App with browser router
//4. import router in App.js
