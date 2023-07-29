import React, { useState } from "react";
import Result from "./result";

const Results = (props) => {
  const [movieSelected, setMovieSelected] = useState({});
  const [displayDetails, setDisplayDetails] = useState(false);

  const showSelectedMovie = (data) => {
    setMovieSelected(data);
    setDisplayDetails(true);
  };

  const results = props.results.map((d, i) => {
    return (
      <div key={i} onClick={() => showSelectedMovie(d)}>
        <img src={d.show.image.medium} alt={d.show.name} />
        <p>{d.show.name}</p>
      </div>
    );
  });

  let result = "";

  if (displayDetails) {
    result = <Result title={movieSelected} />;
  } else {
    result = results;
  }

  return <>{result}</>;
};

export default Results;
