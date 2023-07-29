import React, { useReducer } from "react";
import Controls from "./Controls";
import lightData from "../lightData";
import Lights from "./Light";

const changeLight = (light, action) => {
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
};

function App() {
  const controls = ["off", "low", "medium", "high"];
  const [light, dispatchLight] = useReducer(changeLight, lightData[0].color);
  return (
    <div className="App">
      <Controls controls={controls} dispatch={dispatchLight} />
      <Lights color={light} />
    </div>
  );
}

export default App;
