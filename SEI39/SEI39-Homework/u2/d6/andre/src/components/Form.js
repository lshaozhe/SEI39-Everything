import React, { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    props.handleSearch(input);
  };

  return (
    <div className={props.className}>
      <input type="text" onChange={handleChange}></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
