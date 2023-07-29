import React, { useReducer, useState } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";
import LightContext from "../LightContext/LightContext";

const lightColourReducer = (lightColourState, action) => {
  switch (action.type) {
    case "off":
      return { colour: lightData[0].color };
    case "low":
      return { colour: lightData[1].color };
    case "medium":
      return { colour: lightData[2].color };
    case "high":
      return { colour: lightData[3].color };
    default:
      return;
  }
};

function App() {
  const controls = ["off", "low", "medium", "high"];
  const [lightColourState, dispatchLightColourState] = useReducer(
    lightColourReducer,
    { colour: "rgba(0,0,0,1)" }
  );
  const [clickCount, setClickCount] = useState(0);

  return (
    <LightContext.Provider value={{ dispatchLightColourState, setClickCount }}>
      <div className="App">
        <Controls controls={controls} />
        <Light color={lightColourState.colour} />
        <p>Number of clicks: {clickCount}</p>
        <button onClick={() => setClickCount(0)}>Reset</button>
      </div>
    </LightContext.Provider>
  );
}

export default App;
