import React from "react";
import Result from "./Result";

const Results = (props) => {
  const movies = props.movies;
  //   console.log(movies);

  const displayResults = movies.map((movie) => {
    return <Result src={movie.show.image.medium} alt={movie.show.name} />;
  });

  return (
    <>
      <button type="button" onClick={props.onClick}>
        Search Again
      </button>
      <div>{displayResults}</div>
    </>
  );
};

export default Results;
