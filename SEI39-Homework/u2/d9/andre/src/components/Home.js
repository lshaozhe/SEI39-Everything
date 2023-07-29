import React, { useState } from "react";
import SearchContext from "./context/search-context";
import Results from "./Results";
import Search from "./Search";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        movies,
        setMovies,
        query,
        setQuery,
        hasSearched,
        setHasSearched,
      }}
    >
      <div className="container-fluid d-flex align-items-center flex-column">
        <h1 className="text-justify mt-3" style={{ color: "cornflowerblue" }}>
          TVMAZE React
        </h1>
        <br />
        {hasSearched === false ? <Search /> : <Results />}
      </div>
    </SearchContext.Provider>
  );
};

export default Home;
