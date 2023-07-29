import React from "react";
import RightGrandChild from "./RightGrandChild";

export default function RightChild(props) {
  return (
    <div>
      Right Child
      <RightGrandChild {...props} />
    </div>
  );
}
