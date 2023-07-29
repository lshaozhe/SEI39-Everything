import React from "react";

const Button = (props) => {
  return (
    <button className={props.id} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
