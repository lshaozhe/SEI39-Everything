import React, { useEffect, useState } from "react";
import SearchContainer from "./Container/SearchContainer";
import results from "./Container/results";
import Results from "./Results";

const Home = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [movieList, setMovieList] = useState([]);

  let userInput = "";

  const handleInput = (event) => {
    userInput = event.target.value;
  };
  console.log(query);

  const handleSubmit = (event) => {
    setHasSearched(true);
    setQuery(userInput);
  };
  console.log(hasSearched);

  const handleReturn = () => {
    setHasSearched(false);
  };

  const fetchPost = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovieList(data);
  };
  console.log(movieList);

  useEffect(() => {
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetchPost(url);
  }, [query]);

  return (
    <>
      <div>
        <h1 className="header">React TV Maze</h1>
      </div>
      <div>
        <SearchContainer
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          hasSearched={hasSearched}
        />
      </div>
      <Results
        movieList={movieList}
        setMovieList={setMovieList}
        hasSearched={hasSearched}
        handleReturn={handleReturn}
      />
    </>
  );
};

export default Home;
