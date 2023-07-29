import React from "react";
import Result from "./Result";

const Results = (props) => {
  return (
    <div>
      <button onClick={props.handleSearchAgain}>Back to search</button>
      <Result searchResult={props.searchResult} />
    </div>
  );
};

export default Results;
