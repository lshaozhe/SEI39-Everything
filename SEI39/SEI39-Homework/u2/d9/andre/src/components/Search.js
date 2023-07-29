import React, { useContext, useState } from "react";
import results from "./data";
import SearchContext from "./context/search-context";

const Search = () => {
  const [search, setSearch] = useState("");
  const searchCtx = useContext(SearchContext);
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  const onSubmitQuery = (e) => {
    searchCtx.setQuery(search);
    searchCtx.setHasSearched(true);
    const movieList = [];
    for (let items of results) {
      if (items.show.name.toLowerCase().includes(search)) {
        movieList.push(items);
      }
    }
    searchCtx.setMovies(movieList);
  };

  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <input
        type="text"
        placeholder="Enter a Movie Title..."
        className="w-75"
        onChange={handleSearchInput}
      ></input>
      <br />
      <button className="w-25 btn btn-primary btn-md" onClick={onSubmitQuery}>
        Search
      </button>
    </div>
  );
};

export default Search;
