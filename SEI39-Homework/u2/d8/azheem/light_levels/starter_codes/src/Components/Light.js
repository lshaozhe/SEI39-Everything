import React, { useContext } from "react";
import SomeContext from "../context/some-context";
import lightColors from "../lightData";

function Lights() {
  const someCtx = useContext(SomeContext);

  const styles = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    // border: "1px solid",
    background: "black",
  };

  if (someCtx.userChoice) {
    styles.background = lightColors[someCtx.userChoice];
  }

  // useEffect(() => {
  //   return () => {
  //     styles.background = someCtx.userChoice;
  //   };
  // }, [someCtx.userChoice]);

  return <div style={styles}></div>;
}

export default Lights;
