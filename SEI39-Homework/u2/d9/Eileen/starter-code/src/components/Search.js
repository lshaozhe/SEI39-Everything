import React from "react";

const Search = (props) => {
  return (
    <div className="Search">
      <input
        type="text"
        onChange={props.onChange}
        value={props.query}
        placeholder="Search for movies!"
      ></input>
      <button type="submit" onClick={props.onClick}>
        Submit
      </button>
    </div>
  );
};

export default Search;
