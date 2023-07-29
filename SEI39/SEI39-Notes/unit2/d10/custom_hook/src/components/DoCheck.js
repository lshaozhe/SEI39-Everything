import React from "react";
import useCompare from "../hooks/useCompare";

const DoCheck = (props) => {
  return <>{useCompare(props.input1, props.input2)}</>;
};

export default DoCheck;
