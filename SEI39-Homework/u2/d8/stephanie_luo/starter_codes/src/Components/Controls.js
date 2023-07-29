import React, { useContext } from "react";
import SomeContext from "../Context/Some-context";

function Controls(props) {
  const someCtx = useContext(SomeContext);

  const handleClick = (button) => {
    console.log("Controls - handleClick - button", button);
    someCtx.dispatchLightColorState({ type: button });
    someCtx.setClickCount((prevClickCount) => {
      return prevClickCount + 1;
    });
  };

  const lightButtons = props.controls.map((d, i) => {
    return (
      <button key={i} onClick={() => handleClick(d)}>
        {d}
      </button>
    );
  });

  return (
    <>
      <div className="controls">{lightButtons}</div>
    </>
  );
}

export default Controls;
