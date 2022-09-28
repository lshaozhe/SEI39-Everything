import React from "react";
import Controls from './Controls'
import Light from './Light'
import lightData from '../lightData'
console.log('lightData', lightData)

function App() {
    const controls = ['off', "low", 'medium', 'high']
    
  return (
    <div className="App">
      <Controls controls={controls} />
      <Light />
    </div>

  );
}

export default App
