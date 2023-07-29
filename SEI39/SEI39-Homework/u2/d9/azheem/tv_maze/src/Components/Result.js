import React, { useContext } from "react";
import SomeContext from "../context/some-context";

const Result = () => {
  const someCtx = useContext(SomeContext);

  // function to set state back to render the search bar
  const onSearchAgain = () => {
    someCtx.setMovies([]);
    someCtx.setHasSearched(false);
  };

  return (
    <>
      <button onClick={onSearchAgain}>Search Again</button>
      <div>
        {someCtx.movies.length ? (
          someCtx.movies.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.show.image.medium} alt=""></img>
                <p>{item.show.name}</p>
              </div>
            );
          })
        ) : (
          <p>No Result!</p>
        )}
      </div>
    </>
  );
};

export default Result;
