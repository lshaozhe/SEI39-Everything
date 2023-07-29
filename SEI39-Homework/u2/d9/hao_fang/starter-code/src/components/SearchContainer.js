import React, { useState } from "react";
import Search from "./Search";
import Results from "./Results";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <>
      <div className="home">
        <h1>TVMaze React</h1>
        {hasSearched === false && (
          <Search setQuery={setQuery} setHasSearched={setHasSearched} />
        )}
        {hasSearched && (
          <Results
            query={query}
            setQuery={setQuery}
            setHasSearched={setHasSearched}
          />
        )}
      </div>
    </>
  );
};

export default SearchContainer;
