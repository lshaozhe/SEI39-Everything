import React, { useState, useReducer } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";
console.log("lightData", lightData);
import SomeContext from "../Context/Some-context";

const lightColorReducer = (lightColorState, action) => {
  switch (action.type) {
    case "off":
      return { color: lightData[0].color };
    case "low":
      return { color: lightData[1].color };
    case "medium":
      return { color: lightData[2].color };
    case "high":
      return { color: lightData[3].color };
    default:
      return;
  }
};

function App() {
  const controls = ["off", "low", "medium", "high"];
  const [lightColorState, dispatchLightColorState] = useReducer(
    lightColorReducer,
    { color: "rgba(0,0,0,1)" }
  );
  const [clickCount, setClickCount] = useState(0);

  console.log(lightColorState);

  return (
    <SomeContext.Provider value={{ dispatchLightColorState, setClickCount }}>
      <div className="App">
        <Controls controls={controls} />
        <p>Number of clicks: {clickCount}</p>
        <button
          onClick={() => {
            setClickCount(0);
          }}
        >
          Reset
        </button>
        <Light color={lightColorState.color} />
      </div>
    </SomeContext.Provider>
  );
}

export default App;
