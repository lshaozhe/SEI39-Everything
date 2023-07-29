import React, { useContext } from "react";
import SomeContext from "./some-context";
import lightData from "../lightData";

function Controls() {
  const someCtx = useContext(SomeContext);

  const handleClick = (d, i) => {
    console.log("Controls - handleClick - button", d, i);
    someCtx.setColor(lightData[i].color);
    someCtx.setClicks(someCtx.clicks + 1);
  };

  const lightButtons = someCtx.controls.map((d, i) => {
    return (
      <button key={i} onClick={() => handleClick(d, i)}>
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
