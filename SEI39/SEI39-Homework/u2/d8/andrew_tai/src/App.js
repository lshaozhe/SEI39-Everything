import React, { useReducer } from "react";
import Controls from "./Components/Controls";
import Light from "./Components/Light";
import lightData from "./lightData";

console.log("lightData", lightData);
const lightReducer = (lightState, action) => {
  switch (action.level) {
    case "LOW":
      return (lightState = {
        color: action.payload.color,
        count: action.payload.count + 1,
      });
    case "MED":
      return (lightState = {
        color: action.payload.color,
        count: action.payload.count + 1,
      });
    case "HIGH":
      return (lightState = {
        color: action.payload.color,
        count: action.payload.count + 1,
      });
    case "OFF":
      return (lightState = {
        color: action.payload.color,
        count: action.payload.count + 1,
      });
    default:
      return (lightState = {
        color: action.payload.color,
        count: 0,
      });
  }
};

function App() {
  const [lightState, dispatchLightState] = useReducer(lightReducer, {
    color: "rgba(0,0,0,1)",
    count: 0,
  });

  return (
    <div className="App">
      <Controls
        controls={lightData}
        count={lightState.count}
        dispatchLightState={dispatchLightState}
      />
      <p>Number of Clicks: {lightState.count}</p>
      <button
        onClick={() => {
          dispatchLightState({
            payload: { color: lightState.color },
          });
        }}
      >
        Reset
      </button>
      <Light color={lightState.color} />
    </div>
  );
}

export default App;
