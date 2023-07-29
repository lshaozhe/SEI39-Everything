import React, { useContext } from "react";
import SomeContext from "../context/some.context";
import lightColor from "./Color";

function Lights() {
  const someCtx = useContext(SomeContext);
  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "black",
  };

  if (someCtx.control) {
    styles.background = lightColor[someCtx.control];
  }

  return <div style={styles}></div>;
}

export default Lights;
