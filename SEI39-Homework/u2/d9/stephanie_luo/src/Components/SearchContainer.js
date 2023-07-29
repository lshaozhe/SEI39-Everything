import React, { useState } from "react";
import Search from "./Search";
import Results from "./Results";

const SearchContainer = () => {
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchMovieSearchResults = async (input) => {
    if (input) {
      setHasSearched(true);

      const url = `https://api.tvmaze.com/search/shows?q=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data);
    }
  };

  //   console.log(movies);

  const searchAgain = () => {
    setHasSearched(false);
  };

  return (
    <div>
      {hasSearched ? (
        <Results onclick={searchAgain} movies={movies} />
      ) : (
        <Search fetchMovieSearchResults={fetchMovieSearchResults} />
      )}
    </div>
  );
};

export default SearchContainer;
