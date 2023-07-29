import React, { useState } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightColors from "../lightData";
console.log("lightData", lightColors);
import SomeContext from "../context/some-context";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [clickCount, setClickCount] = useState(0);

  return (
    <SomeContext.Provider
      value={{ userChoice, setUserChoice, clickCount, setClickCount }}
    >
      <div className="App">
        <Controls />
        {/* <Controls controls={controls} /> */}
        <Light />
      </div>
    </SomeContext.Provider>
  );
}

export default App;
