import React, { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.handleChange(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleInputChange}></input>
      <button onClick={props.onSubmit}>Random</button>
    </form>
  );
};

export default Form;
