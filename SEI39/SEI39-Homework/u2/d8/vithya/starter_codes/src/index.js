import React from "react";
import ReactDOM from "react-dom";
import App from './Components/App'

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


/* INSTRUCTIONS
1. Fork the codesandbox
2. Import and use useReducer in App. It should replace
   the if statements and control state
3. Make a Controls Component that has 4 buttons
   – off, low, medium, high
4. Make the Light Component that will show 4 diff 
  shades of black based on which control button was clicked

Here is a list of rgba colors you could uses
   'off' - 'rgba(0,0,0,1)'
   'low' - 'rgba(0,0,0,.6)'
   'medium' - 'rgba(0,0,0,.3)'
   'high' - 'rgba(0,0,0,.1)'
*/