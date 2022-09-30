import React, { useContext } from "react";
import SomeContext from "./context/some-context";

export default function LeftGreatGrandChild(props) {
  const someCtx = useContext(SomeContext);
  console.log({ someCtx });
  return (
    <div style={someCtx}>
      <p>Left Great Grandchild</p>
    </div>
  );
}
