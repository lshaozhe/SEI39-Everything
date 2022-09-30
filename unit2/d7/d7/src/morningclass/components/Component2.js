import React, { useContext } from "react";
import SomeContext from "../context/some-context";

const Component2 = () => {
  const someCtx = useContext(SomeContext);
  return <p>{someCtx.email}</p>;
};

export default Component2;
