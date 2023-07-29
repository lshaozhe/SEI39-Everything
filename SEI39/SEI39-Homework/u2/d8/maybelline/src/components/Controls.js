import React, { useContext } from "react";
import SomeContext from "../context/some.context";

function Controls(props) {
  const someCtx = useContext(SomeContext);
  const handleClick = (e) => {
    // console.log("Controls - handleClick - button", button);
    someCtx.setControl(e.target.id);
    someCtx.setCount(someCtx.count + 1);
  };

  const lightButtons = props.controls.map((d, i) => {
    return (
      <button key={i} onClick={handleClick} id={d}>
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
