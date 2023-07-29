import React, { useRef } from "react";

const InputForm = (props) => {
  const inputRef = useRef();

  const addInput = (event) => {
    event.preventDefault();
    const input = inputRef.current.value;
    console.log(input);
    props.selectGif(input);
  };
  return (
    <>
      <form onSubmit={addInput}>
        <input className="gif-input" ref={inputRef} />
        <button>Search for GIF</button>
      </form>
    </>
  );
};

export default InputForm;
