import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Result from "./Result";

export default function Results(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url + props.query);
      const data = await response.json();

      data.sort((a, b) => {
        if (a.show.name < b.show.name) {
          return -1;
        }
        if (a.show.name > b.show.name) {
          return 1;
        }
        return 0;
      });

      setMovies(data);
    } catch (error) {
      console.log(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url = "https://api.tvmaze.com/search/shows?q=";
    fetchData(url);

    return props.setQuery("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavLink to={"/"}>
        <button>Back to Search</button>
      </NavLink>
      {isLoading ? (
        <div className="loading">Loading... Please wait</div>
      ) : (
        <div className="display">
          {movies.map((element) => {
            return (
              <Result
                key={Math.random()}
                name={element.show.name}
                image={element.show.image?.original}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
