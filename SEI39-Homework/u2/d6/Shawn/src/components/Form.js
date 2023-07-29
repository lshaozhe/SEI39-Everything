import React from "react";

const Form = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.handleSetSelection}
        placeholder="type randomly"
      ></input>
    </div>
  );
};

export default Form;
