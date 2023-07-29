import React from "react";

const Search = (props) => {
  return (
    <>
      <div
        className="seach--box"
        style={{ display: props.hasSearched ? "none" : "block" }}
      >
        <input
          type="text"
          placeholder="Enter a Movie Title..."
          onChange={props.handleInput}
        ></input>
        <button onClick={props.handleSubmit}>Search</button>
      </div>
    </>
  );
};

export default Search;
