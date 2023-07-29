import React, { useReducer } from "react";

function Controls(props) {
  const handleClick = (button) => {
    props.dispatch({ type: button });
    console.log(button);
  };

  const lightButtons = props.controls.map((d, i) => {
    return (
      <button key={i} onClick={() => handleClick(d)}>
        {d}
      </button>
    );
  });

  return (
    <React.Fragment>
      <div className="controls">{lightButtons}</div>
    </React.Fragment>
  );
}

export default Controls;
