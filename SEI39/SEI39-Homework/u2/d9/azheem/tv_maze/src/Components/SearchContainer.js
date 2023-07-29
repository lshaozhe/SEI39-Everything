import React, { useContext } from "react";
import SomeContext from "../context/some-context";
import results from "./results";

const SearchContainer = () => {
  const someCtx = useContext(SomeContext);

  // function to manage changes to input field
  const handleSearchInput = (event) => {
    someCtx.setQuery(event.target.value.toLowerCase());
  };

  // function to look through results array for movies with titles containing search input
  const onSubmitQuery = (event) => {
    event.preventDefault();

    let matchedResult = [];

    for (let item of results) {
      if (item.show.name.toLowerCase().includes(someCtx.query)) {
        matchedResult.push(item);
      }
    }

    someCtx.setMovies(matchedResult);
    someCtx.setHasSearched(true);
  };

  return (
    <>
      <form className="container" onSubmit={onSubmitQuery}>
        <div className="row">
          <input
            id="searchInput"
            onChange={handleSearchInput}
            className="col-sm-8"
            type="text"
            placeholder="Enter a show name..."
          ></input>
          <button type="submit">Search</button>
        </div>
      </form>
    </>
  );
};

export default SearchContainer;
