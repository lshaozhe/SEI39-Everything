import React, { useState } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";
import SomeContext from "../context/some-context";
console.log("lightData", lightData);

function App() {
  const controls = ["off", "low", "medium", "high"];
  const [control, setControl] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setControl("off");
    setCount(0);
  };

  return (
    <SomeContext.Provider value={{ control, setControl, count, setCount }}>
      <div className="App">
        <Controls controls={controls} />
        <p>Number of clicks: {count}</p>
        <button onClick={handleClick}>reset</button>
        <Light />
      </div>
    </SomeContext.Provider>
  );
}

export default App;
