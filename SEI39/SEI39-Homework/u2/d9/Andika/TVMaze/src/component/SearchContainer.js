import React, { useState, useEffect } from "react";
import Results from "./Results";
import Search from "./Search";
import results from "../results";

const SearchContainer = () => {
  const [searchMovie, setSearchMovie] = useState({
    query: "",
    hasSearch: false,
    // movies: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [listMovie, setListMovie] = useState("");

  const handleSearchInput = (input) => {
    setSearchMovie((prevState) => {
      return { ...prevState, query: input, hasSearch: true };
    });
  };

  const handleSearchAgain = () => {
    setSearchMovie({ hasSearch: false, input: "", query: [] });
  };

  const fetchPost = async (url, signal) => {
    setIsLoading(true); //start the loading animation
    setError(null);

    try {
      const res = await fetch(url, { signal: signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong");
      }
      const data = await res.json(); //convert string back to an object (array of object, or object of object)

      // console.log(data);

      setListMovie(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false); // turn off loading animation
  };

  useEffect(() => {
    const url = "https://api.tvmaze.com/search/shows?q=" + searchMovie.query;
    const controller = new AbortController();
    fetchPost(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, [searchMovie]);

  const onSubmitQuery = (input) => {
    let searchResultArr = [];

    setSearchMovie((prevState) => {
      return { ...prevState, movies: searchResultArr };
    });
    // console.log(searchResultArr);
  };
  return (
    <div>
      {!searchMovie.hasSearch ? (
        <Search
          handleSearchInput={handleSearchInput}
          onSubmitQuery={onSubmitQuery}
        />
      ) : (
        <Results
          searchResult={listMovie}
          handleSearchAgain={handleSearchAgain}
        />
      )}
      {console.log(listMovie)}
    </div>
  );
};

export default SearchContainer;
