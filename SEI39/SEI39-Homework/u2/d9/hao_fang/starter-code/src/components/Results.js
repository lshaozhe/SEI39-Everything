import { getSuggestedQuery } from "@testing-library/react";
import React from "react";
import resultsData from "../results";
import Result from "./Result";

const Results = (props) => {
  const allResults = resultsData.map((element, index) => {
    if (element.show.name.toLowerCase().includes(props.query)) {
      return (
        <Result
          key={index}
          imgSrc={element.show.image.original}
          title={element.show.name}
        />
      );
    }
  });

  const handleSearchAgain = () => {
    props.setQuery("");
    props.setHasSearched(false);
  };

  return (
    <div className="allResults">
      <button onClick={handleSearchAgain}>Search Again</button>
      {allResults}
    </div>
  );
};

export default Results;
