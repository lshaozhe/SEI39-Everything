import React from "react";

const Form = (props) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search for GIFs..."
          onChange={props.handleInput}
        ></input>
      </form>
    </>
  );
};

export default Form;
