import React, { useState } from "react";

const Button = (props) => {
  const [input, setInput] = useState("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(input);
    // console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleInputChange}></input>
      <button type="submit" onClick={props.onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Button;
