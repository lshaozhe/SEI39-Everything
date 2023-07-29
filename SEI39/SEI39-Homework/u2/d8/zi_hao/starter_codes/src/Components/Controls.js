import React from "react";

function Controls(props) {
  const handleClick = (button) => {
    props.setState({ type: button });
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
