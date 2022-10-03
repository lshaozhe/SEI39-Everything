import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.clickHandler}>
      {props.value}
    </button>
  );
};

export default Button;
