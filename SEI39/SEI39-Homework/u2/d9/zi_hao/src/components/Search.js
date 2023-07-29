import React, { useRef } from "react";

const Search = (props) => {
  const inputRef = useRef();

  const addInput = (event) => {
    event.preventDefault();
    const input = inputRef.current.value;
    props.selectMovie(input);
  };
  return (
    <>
      <form onSubmit={addInput}>
        <input type="text" placeholder="Enter a movie title" ref={inputRef} />
        <button>Search</button>
      </form>
    </>
  );
};

export default Search;
