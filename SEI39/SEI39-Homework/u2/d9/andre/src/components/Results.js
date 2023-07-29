import React, { useContext } from "react";
import SearchContext from "./context/search-context";

const Results = () => {
  const searchCtx = useContext(SearchContext);
  const onSearchAgain = (e) => {
    searchCtx.setHasSearched(false);
    searchCtx.setMovies([]);
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <button onClick={onSearchAgain} className="w-25 btn btn-primary btn-md">
        Search Again
      </button>
      <br />
      <div className="d-flex flex-wrap justify-content-center">
        {!searchCtx.movies.length && <h1>No result!</h1>}
        {searchCtx.movies.map((movie, index) => {
          return (
            <div key={index} className="mx-5">
              <img src={movie.show.image.medium}></img>
              <p className="text-center">{movie.show.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Results;
