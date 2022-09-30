import React, { useState, useReducer } from "react";

//useReducer works the same way as useState, but for more complex data type
const countReducer = (countState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { count: countState.count + 1 };
    case "DECREASE":
      return { count: countState.count - 1 };
  }
};

const ReactApp = () => {
  //useReducer takes in a function and the initial function
  //declare a state and a "pointer to the dispatcher function"
  const [countState, dispatchCountState] = useReducer(countReducer, { count: 0 });
  //   const [count, setCount] = useState(0);

  const increase = () => {
    //when dispatch is called, it takes in the "action"
    dispatchCountState({ type: "INCREASE" });
  };

  const decrease = () => {
    dispatchCountState({ type: "DECREASE" });
  };

  return (
    <>
      <h1 className="centered">{countState.count}</h1>
      <div className="centered">
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    </>
  );
};

export default ReactApp;
