import React from "react";
import results from "./results";
import "./home.css";
const Search = (props) => {
  if (props.hasSearched) {
    return (
      <button className="buttonSearchagain" onClick={props.onSearchAgain}>
        Search Again
      </button>
    );
  }
  return (
    <div className="Search">
      <form className="input">
        <input
          type="text"
          placeholder="Enter a show name..."
          onChange={props.handleUserInput}
        ></input>
        <button
          className="buttonSearch"
          type="submit"
          onClick={props.handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
