import React, { useContext } from "react";
import LeftGrandChild from "./LeftGrandChild";
import SomeContext from "./context/some-context";

export default function LeftChild() {
  const someCtx = useContext(SomeContext);
  return (
    <div>
      Left Child
      <LeftGrandChild />
    </div>
  );
}
