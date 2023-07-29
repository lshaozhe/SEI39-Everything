import React, { useReducer } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";
import Lights from "./Light";
//1st para ->state , 2nd para ->action
function reducer(color, action) {
  switch (action.type) {
    case "off":
      return lightData[0].color;
    case "low":
      return lightData[1].color;
    case "medium":
      return lightData[2].color;
    case "high":
      return lightData[3].color;
  }
}

function App() {
  const [color, dispatchColor] = useReducer(reducer, lightData[0].color);
  const controls = ["off", "low", "medium", "high"];

  return (
    <div className="App">
      <Controls controls={controls} dispatch={dispatchColor} />
      <Lights color={color} />
    </div>
  );
}

export default App;
