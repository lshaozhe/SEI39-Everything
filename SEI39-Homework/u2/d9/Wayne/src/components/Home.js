import React, { useState, useEffect } from "react";
import Search from "./Search";
import "../style.css";
import Results from "./Results";

const Home = () => {
  const url = "https://api.tvmaze.com/search/shows?q=";
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [movieList, setMovieList] = useState([]);

  let userInput = "";

  const handleInput = (event) => {
    userInput = event.target.value;
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    setQuery(userInput);
    setHasSearched(true);

    console.log("I am clicked");
  };

  console.log(hasSearched);
  const handleReturn = (event) => {
    // event.preventDefault();
    setHasSearched(false);
  };

  const fetchPost = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovieList(data);
  };

  useEffect(() => {
    const urltofetch = `${url}${query}`;
    fetchPost(urltofetch);
  }, [query]);

  return (
    <>
      <div>
        <h1 className="header">TVMaze React</h1>
        <Search
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          hasSearched={hasSearched}
        />
        <Results
          movieList={movieList}
          handleReturn={handleReturn}
          hasSearched={hasSearched}
        />
      </div>
    </>
  );
};

export default Home;
