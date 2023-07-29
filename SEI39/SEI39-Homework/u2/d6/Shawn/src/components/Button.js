import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>Change Giphy</button>
    </div>
  );
};

export default Button;
