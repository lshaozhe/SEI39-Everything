import React, { useContext } from "react";
import SomeContext from "../context/some-context";

function Controls() {
  const someCtx = useContext(SomeContext);
  const controls = ["off", "low", "med", "high"];

  const handleClick = (event) => {
    // console.log("Controls - handleClick - button", button);
    someCtx.setUserChoice(event.target.id);
    someCtx.setClickCount(someCtx.clickCount + 1);
  };

  const lightButtons = controls.map((d, i) => {
    return (
      <button key={i} id={d} onClick={handleClick}>
        {d}
      </button>
    );
  });

  const handleReset = () => {
    someCtx.setClickCount(0);
    someCtx.setUserChoice("");
  };

  return (
    <>
      <div className="controls">{lightButtons}</div>
      <div className="clickCount">Number of clicks: {someCtx.clickCount}</div>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Controls;
