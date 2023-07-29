import React, { useContext } from "react";
import SomeContext from "./some-context";
import lightColorsData from "../lightData";

function Controls() {
  const someCtx = useContext(SomeContext);

  const handleClick = (d, i) => {
    console.log("Controls - handleClick - button");
    someCtx.setColors(lightColorsData[i].color);
    someCtx.setCount(someCtx.count + 1);
  };

  const lightButtons = someCtx.controls.map((d, i) => {
    return (
      <>
        <button key={i} onClick={() => handleClick(d, i)}>
          {d}
        </button>
      </>
    );
  });

  return (
    <>
      <div className="controls">{lightButtons}</div>
    </>
  );
}

export default Controls;
