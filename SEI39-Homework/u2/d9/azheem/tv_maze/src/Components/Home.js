import React, { useState } from "react";
import SomeContext from "../context/some-context";
import SearchContainer from "./SearchContainer";
import Result from "./Result";

const Home = () => {
  // movies to show
  const [movies, setMovies] = useState([]);

  // query for title being searched
  const [query, setQuery] = useState("");

  // boolean determining whether to show the search input or the results
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <SomeContext.Provider
      value={{
        movies,
        setMovies,
        query,
        setQuery,
        hasSearched,
        setHasSearched,
      }}
    >
      <h1>React TVMaze</h1>
      {hasSearched ? <Result /> : <SearchContainer />}
    </SomeContext.Provider>
  );
};

export default Home;
