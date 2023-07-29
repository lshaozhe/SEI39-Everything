import React from "react";

function Controls(props) {
  const handleClick = (button) => {
    console.log("Controls - handleClick - button", button.name);
    props.dispatchLightState({
      level: button.name.toUpperCase(),
      payload: { color: button.color, count: props.count },
    });
  };

  const lightButtons = props.controls.map((d, i) => {
    return (
      <button key={i} onClick={() => handleClick(d)}>
        {d.name}
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
