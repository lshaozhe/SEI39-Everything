import React, { useState } from "react";
import Result from "./Result";

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

  let returns = "";

  if (displayDetails) {
    returns = <Result title={movieSelected} />;
  } else {
    returns = results;
  }

  return <>{returns}</>;
};

export default Results;
