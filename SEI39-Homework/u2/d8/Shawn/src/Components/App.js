import React, { useState } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";
import SomeContext from "./some-context";

console.log("lightData", lightData);

function App() {
  const controls = ["off", "low", "medium", "high"];
  const [color, setColor] = useState(lightData[0].color);
  const [clicks, setClicks] = useState(0);
  console.log(color);

  const handleReset = () => {
    setColor(lightData[0].color);
    setClicks(0);
  };

  return (
    <SomeContext.Provider
      value={{ controls, color, setColor, clicks, setClicks }}
    >
      <div className="App">
        <Controls controls={controls} />
        <p>Number of clicks: {clicks}</p>
        <button onClick={handleReset}>Reset</button>
        <Light />
      </div>
    </SomeContext.Provider>
  );
}

export default App;
