import React, { useContext } from "react";
import LightContext from "../LightContext/LightContext";

function Controls(props) {
  const lightCtx = useContext(LightContext);

  const handleClick = (button) => {
    lightCtx.dispatchLightColourState({ type: button });
    lightCtx.setClickCount((prevClickCount) => {
      return (prevClickCount += 1);
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
