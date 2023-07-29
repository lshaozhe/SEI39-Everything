import React from "react";

const Search = (props) => {
  const handleQuery = (e) => {
    props.setQuery(e.target.value);
  };

  const handleSearch = () => {
    props.setHasSearched(true);
  };

  return (
    <div className="search">
      <input onChange={handleQuery} placeholder="Enter a Movie Title..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
