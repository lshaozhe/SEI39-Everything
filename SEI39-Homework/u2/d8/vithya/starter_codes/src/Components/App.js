import React, { useReducer } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";

const lightReducer = (lightState, action) => {
  switch (action.type) {
    case "off":
      return lightData[0];
    case "low":
      return lightData[1];
    case "med":
      return lightData[2];
    case "high":
      return lightData[3];
    default:
      return lightState;
  }
};

function App() {
  const controls = ["off", "low", "med", "high"];

  const [lightState, dispatchLightState] = useReducer(lightReducer, {
    name: "off",
    color: lightData[0].color,
  });

  return (
    <div className="App">
      <Controls controls={controls} setLight={dispatchLightState} />
      <Light color={lightState.color} />
    </div>
  );
}

export default App;
