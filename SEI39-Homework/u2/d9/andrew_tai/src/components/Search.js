import React from "react";
import { NavLink } from "react-router-dom";

export default function Search(props) {
  const handleInputChange = (event) => {
    props.setQuery(event.target.value);
  };

  return (
    <>
      <input
        className="search-input"
        type="text"
        value={props.query}
        onChange={handleInputChange}
        placeholder="Enter a show name..."
      />
      <NavLink to={"/results"}>
        <button className="search-btn">Search</button>
      </NavLink>
    </>
  );
}
