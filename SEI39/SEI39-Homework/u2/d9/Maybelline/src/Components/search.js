import React, { useState } from "react";
import Results from "../components/results";
import { results } from "./data";
import Form from "./form";
import { Switch, Route } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleQueryChange = (input) => {
    setQuery(input);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    const searchResults = results.filter((data) => {
      return data.show.name.toUpperCase().includes(query.toUpperCase());
    });
    setMovies(searchResults);
  };

  const nextSearch = () => {
    setHasSearched(false);
    setMovies([]);
    setQuery("");
  };

  return (
    <>
      {hasSearched ? (
        <>
          <button onClick={nextSearch}>Search Again</button>
          <Results results={movies} />
        </>
      ) : (
        <Form onChange={handleQueryChange} onSubmit={onSubmit} value={query} />
      )}
    </>
  );
};

export default Search;
