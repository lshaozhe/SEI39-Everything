import React from "react";
import Context1 from "../context/context1";

function Controls(props) {
  const someContext = useContext(Context1);
  const handleClick = (button) => {
    console.log("Controls - handleClick - button", button);
    someContext.dispatchLightColorState({ type: button });
    someContext.setClickCount((prevClickCount) => {
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
