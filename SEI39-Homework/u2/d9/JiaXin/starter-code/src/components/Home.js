import React, { useState, useEffect } from "react";
import Search from "./Search";
import results from "./results";
import "./home.css";

const Home = (props) => {
  const [query, setQuery] = useState(""); //(title being searched)
  const [hasSearched, setHasSearched] = useState(false); //boolean determining wether to show the search input or the results
  let userInput = "";

  const handleUserInput = (event) => {
    userInput = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(userInput);
    setHasSearched(true);
  };

  let movieSelected = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i].show.name.toUpperCase().includes(query.toUpperCase()))
      movieSelected.push({
        name: results[i].show.name,
        url: results[i].show.image.medium,
      });
  }
  const onSearchAgain = (event) => {
    setQuery("");
    setHasSearched(false);
  };
  return (
    <div ClassName="container">
      <h1 className="header">TVMaze React</h1>
      <Search
        handleUserInput={handleUserInput}
        handleSubmit={handleSubmit}
        hasSearched={hasSearched}
        onSearchAgain={onSearchAgain}
      />

      <div ClassName="output">
        {movieSelected.map((element) => (
          <div>
            <img src={element.url}></img>
            <p>{element.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
