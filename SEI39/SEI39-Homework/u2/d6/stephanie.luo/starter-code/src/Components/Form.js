import React from "react";

const Form = (props) => {
  return (
    <span>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      ></input>
    </span>
  );
};

export default Form;
