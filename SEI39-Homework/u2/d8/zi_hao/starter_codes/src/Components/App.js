import React, { useState, useReducer } from "react";
import Controls from "./Controls";
import Light from "./Light";
import lightData from "../lightData";

const countReducer = (countState, action) => {
  switch (action.type) {
    case "off":
      return { count: countState.count + 1, color: "rgba(0,0,0,1)" };
    case "low":
      return { count: countState.count + 1, color: "rgba(0,0,0,.6)" };
    case "medium":
      return { count: countState.count + 1, color: "rgba(0,0,0,.4)" };
    case "high":
      return { count: countState.count + 1, color: "rgba(0,0,0,.1)" };
    default:
      return (countState.count = 0);
  }
};

function App() {
  const controls = ["off", "low", "medium", "high"];
  const [countState, dispatchCountState] = useReducer(countReducer, {
    count: 0,
    color: "rgba(0,0,0,1)",
  });

  // const off = () => {
  //   dispatchCountState({ type: "off" });
  // };

  // const low = () => {
  //   dispatchCountState({ type: "low" });
  // };

  // const medium = () => {
  //   dispatchCountState({ type: "medium" });
  // };

  // const high = () => {
  //   dispatchCountState({ type: "high" });
  // };

  return (
    <div className="App">
      <Controls controls={controls} setState={dispatchCountState} />
      <p>Current count: {countState.count}</p>
      <button
        onClick={() => {
          dispatchCountState({ type: "" });
        }}
      >
        Reset Count
      </button>
      <Light color={countState.color} />
    </div>
  );
}

export default App;
