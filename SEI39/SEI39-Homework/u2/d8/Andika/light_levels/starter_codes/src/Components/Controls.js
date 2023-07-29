import React from "react";

function Controls(props) {
  const handleClick = (d) => {
    // console.log("Controls - handleClick - button", switchName);
    // props.lightData.map((d, i) => {
    //   if (d.name === button) {
    //     props.handleLightChange(d.color);
    //   }
    // });
    // props.handleClickCount();
    props.dispatchLight({
      type: "COLOR_CHANGE",
      payload: { name: d.name, color: d.color },
    });
  };

  const lightButtons = props.lightData.map((d, i) => {
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
