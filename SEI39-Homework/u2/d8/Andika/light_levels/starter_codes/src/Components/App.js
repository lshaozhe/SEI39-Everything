import React, { useState, useReducer } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";
console.log("lightData", lightData);

// const lightReducer

const lightReducer = (light, action) => {
  switch (action.type) {
    case "COLOR_CHANGE":
      // const testArr = lightData.map((d, i) => {
      //   if (d.name === action.payload.name) {
      //     console.log(d.color);
      //     return d.color;
      //   }
      // });
      // console.log(testArr.join(""));
      // return testArr.join("");
      return { color: action.payload.color, click: light.click + 1 };
    case "RESET":
      return { color: "rgba(0,0,0,1)", click: 0 };
  }
};

function App() {
  const controls = ["off", "low", "med", "high"];
  const lightOffColor = "rgba(0,0,0,1)";

  const [light, dispatchLight] = useReducer(lightReducer, {
    color: lightOffColor,
    click: 0,
  });
  // const [light, setLight] = useState(lightOffColor);
  // const [count, setCount] = useState(0);

  // const handleLightChange = (input) => {
  //   setLight(input);
  // };

  // const handleClickCount = () => {
  //   setCount(count + 1);
  // };
  // console.log(light);

  const handleReset = () => {
    dispatchLight({ type: "RESET" });
  };

  // console.log(light);
  return (
    <div className="App">
      {(() => {
        console.log({ light });
      })()}
      <Controls
        dispatchLight={dispatchLight}
        lightData={lightData}
        controls={controls}
        // handleLightChange={handleLightChange}
        // handleClickCount={handleClickCount}
      />
      <h1>Number of clicks: {light.click}</h1>
      <button onClick={handleReset}>Reset</button>
      <Light color={light.color} />
    </div>
  );
}

export default App;
