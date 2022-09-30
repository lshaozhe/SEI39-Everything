import React from "react";
import LeftGreatGrandChild from "./LeftGreatGrandChild";

export default function LeftGrandChild(props) {
  return (
    <div>
      Left Grandchild
      <LeftGreatGrandChild />
    </div>
  );
}
