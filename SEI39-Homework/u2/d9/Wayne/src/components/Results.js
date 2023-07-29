import React from "react";
import Result from "./Result";

const Results = (props) => {
  const displayItems = props.movieList.map((item) => {
    return <Result name={item.show.name} image={item.show.image.medium} />;
  });

  return (
    <>
      <button
        onClick={props.handleReturn}
        className="button--return"
        style={{ display: props.hasSearched ? "block" : "none" }}
      >
        Search Again
      </button>
      <div style={{ display: props.hasSearched ? "block" : "none" }}>
        {displayItems}
      </div>
    </>
  );
};

export default Results;
