import React, { useContext } from "react";
import SomeContext from "./some-context";

function Lights() {
  const someCtx = useContext(SomeContext);
  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "1px solid",
    background: someCtx.colors,
  };

  return <div style={styles}></div>;
}

export default Lights;
