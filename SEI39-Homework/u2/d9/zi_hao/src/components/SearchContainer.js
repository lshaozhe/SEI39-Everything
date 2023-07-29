import React, { useState } from "react";
import Search from "./Search";
import Results from "./Results";

const SearchContainer = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const selectMovie = async (input) => {
    if (input) {
      setHasSearched(true);
      const url = `https://api.tvmaze.com/search/shows?q=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data);
      //   console.log(data[0].show.image.original);
    }
  };

  return (
    <div>
      {hasSearched ? (
        movies.map((movie) => {
          return (
            <Results
              img={movie.show.image?.medium}
              name={movie.show.name}
              setHasSearched={setHasSearched}
            />
          );
        })
      ) : (
        <Search selectMovie={selectMovie} />
      )}
    </div>
  );
};

export default SearchContainer;
