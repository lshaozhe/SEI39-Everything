import React from "react";

const Label = (props) => {
  return (
    <>
      <label className={props.className}>{props.name}</label>
    </>
  );
};

export default Label;
