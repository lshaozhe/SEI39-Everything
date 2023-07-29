import React, { useReducer } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";

const lightReducer = (lightState, action) => {
  switch (action.type) {
    case "low":
      return (lightState = {
        name: lightData[1].name,
        color: lightData[1].color,
        count: lightState.count + 1,
      });
    case "medium":
      return (lightState = {
        name: lightData[2].name,
        color: lightData[2].color,
        count: lightState.count + 1,
      });
    case "high":
      return (lightState = {
        name: lightData[3].name,
        color: lightData[3].color,
        count: lightState.count + 1,
      });
    case "off":
      return (lightState = {
        name: lightData[0].name,
        color: lightData[0].color,
        count: lightState.count + 1,
      });
    default:
      return lightState, (lightState.count = 0);
  }
};

function App() {
  const controls = ["off", "low", "medium", "high"];
  const [lightState, dispatchLightState] = useReducer(lightReducer, { count: 0 });

  return (
    <div className="App">
      <Controls controls={controls} setLight={dispatchLightState} />
      <p>Number of clicks: {lightState.count}</p>
      <button
        onClick={(e) => {
          dispatchLightState({ type: "" });
        }}>
        Reset
      </button>
      <br />
      <Light color={lightState.color} />
    </div>
  );
}

export default App;
