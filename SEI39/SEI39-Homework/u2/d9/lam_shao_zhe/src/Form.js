import React, { useState } from "react";

const Form = (props) => {
  const [inputChange, setInputChange] = useState("");

  const handleChange = (e) => {
    setInputChange(e.target.value);
  };

  const handleClickEvent = (e) => {
    e.preventDefault();
    props.setMovie(inputChange);
    setInputChange("");
    props.setForm(false);
  };

  return (
    <div style={{ display: props.showForm ? "" : "none" }}>
      <form>
        <input
          type="text"
          placeholder="Enter a show name"
          onChange={handleChange}
          value={inputChange}></input>
        <button onClick={handleClickEvent}>Search</button>
      </form>
    </div>
  );
};

export default Form;
