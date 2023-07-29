import React from "react";
import Result from "./Result";

const Results = (props) => {
  return (
    <>
      <button
        onClick={props.handleReturn}
        style={{ display: props.hasSearched ? "block" : "none" }}
      >
        Back to search
      </button>
      <div style={{ display: props.hasSearched ? "block" : "none" }}>
        {props.movieList.map((item) => {
          return (
            <div>
              <img src={item.show.image.medium}></img>
              <h1>{item.show.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Results;
