import React, { useState } from "react";

const Form = (props) => {
  const handleInputChange = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Enter a show name..."
          onChange={handleInputChange}
          value={props.value}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Form;
