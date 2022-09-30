import React from "react";
import styles from "./Button.module.css";
//note that .module.css is js regconisable to automatically export the file
//hence we do not need to type export within the css

const Button = (props) => {
  return (
    <button
      // the props.classname below will allow button styles to be overwritten from the styles defined in the css
      className={`button ${styles.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}>
      {props.children}
      {/* .children refers to whatever is within the <></> tags */}
    </button>
  );
};

export default Button;
