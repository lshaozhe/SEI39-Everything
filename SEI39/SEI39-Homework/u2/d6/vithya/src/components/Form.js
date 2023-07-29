import React, { useRef } from "react";

const Form = (props) => {
  const input = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGif = input.current.value;

    props.onSave(newGif);
  };

  return (
    <>
      <form className="container">
        <div className="row">
          <input
            id="text"
            type="text"
            ref={input}
            placeholder="type of giphy"
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
