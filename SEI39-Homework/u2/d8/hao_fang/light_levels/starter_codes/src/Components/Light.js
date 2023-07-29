import React from "react";

function Lights(props) {
  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid",
    background: props.color,
  };

  return <div style={styles}></div>;
}

export default Lights;
