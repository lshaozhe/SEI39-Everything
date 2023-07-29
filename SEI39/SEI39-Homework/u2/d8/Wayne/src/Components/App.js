import React, { useState } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";
import lightColors from "../lightData";
import SomeContext from "./some-context";

console.log("lightData", lightData);

function App() {
  const controls = ["off", "low", "medium", "high"];
  const [colors, setColors] = useState(lightData[0].color);
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setCount(0);
    setColors(lightData[0].color);
  };

  return (
    <SomeContext.Provider
      value={{ controls, lightColors, setColors, colors, count, setCount }}
    >
      <div className="App">
        <Controls />
        <p>Number of clicks: {count}</p>
        <button onClick={handleReset}>Reset</button>
        <Light />
      </div>
    </SomeContext.Provider>
  );
}

export default App;
