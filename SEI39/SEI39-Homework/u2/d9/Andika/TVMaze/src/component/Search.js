import React, { useState } from "react";

const Search = (props) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    props.handleSearchInput(input);

    props.onSubmitQuery(input);
  };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <>{input}</>
    </>
  );
};

export default Search;
