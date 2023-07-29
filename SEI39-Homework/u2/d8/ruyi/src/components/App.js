import React, { useReducer, useState } from "react";
import Controls from './Controls'
import Light from './Light'
import lightData from '../lightData';
import CountContext from "../context/count-context";

const lightReducer = (lightLevel, action) => {
  switch (action.type) {
    case "OFF":
      return lightData[0];
    case "LOW":
      return lightData[1];
    case "MED":
      return lightData[2];
    case "HIGH":
      return lightData[3];
    default:
      return lightLevel;
  }
}

function App() {
    const controls = ['off', "low", 'med', 'high'];
    const [lightLevel, dispatchLightLevel] = useReducer(lightReducer, {name: 'off', color: 'rgba(0,0,0,1)'});

    const [count, setCount] = useState(0);
    
  return (
    <div className="App">
      <CountContext.Provider value={{count, setCount}}>
        <Controls controls={controls} dispatchLightLevel={dispatchLightLevel}/>
        <Light color={lightLevel.color} />
      </CountContext.Provider>
    </div>

  );
}

export default App
