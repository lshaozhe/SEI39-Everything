import React, { useState } from "react";
import Search from "./Search";
import results from "../results";
import Results from "./Results";
const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [movies, setMovies] = useState([]);

  const onSubmitQuery = (event) => {
    event.preventDefault();
    const moviesDisplayed = results.map((data) => {
      return data;
    });

    setMovies(moviesDisplayed);
    setHasSearched(true);
  };

  const onSearchAgain = () => {
    setHasSearched(false);
  };

  const handleSearchInput = (event) => {
    const input = event.target.value;
    const inputLowerCase = input.toLowerCase();
    setQuery(inputLowerCase);
  };

  if (hasSearched) {
    return <Results onClick={onSearchAgain} results={movies} input={query} />;
  } else {
    return (
      <Search
        onClick={onSubmitQuery}
        query={query}
        onChange={handleSearchInput}
      />
    );
  }
};

export default SearchContainer;
