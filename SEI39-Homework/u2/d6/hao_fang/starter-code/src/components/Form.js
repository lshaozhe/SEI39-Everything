import React, { useRef } from "react";

const Form = (props) => {
  const gifInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedGifInput = gifInputRef.current.value;
    props.setSearch(submittedGifInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={gifInputRef} placeholder="type of giphy"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
