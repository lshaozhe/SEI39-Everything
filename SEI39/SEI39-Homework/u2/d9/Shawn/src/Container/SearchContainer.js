import React, { useState } from "react";

const SearchContainer = (props) => {
  return (
    <div
      className="search--box"
      style={{ display: props.hasSearched ? "none" : "block" }}
    >
      <input
        type="text"
        onChange={props.handleInput}
        placeholder="Enter a show name..."
      ></input>
      <button onClick={props.handleSubmit}>Search</button>
    </div>
  );
};

export default SearchContainer;
