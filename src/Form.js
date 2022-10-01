import React, { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState({ first: "", next: "" });

  const handleChange = (e) => {
    if (e.target.name === "first") {
      setSearch((prevState) => ({
        first: e.target.value,
        next: prevState.next,
      }));
    } else {
      setSearch((prevState) => ({
        first: prevState.first,
        next: e.target.value,
      }));
    }
  };

  return (
    <>
      <label htmlFor="first">First</label>
      <input name="first" onChange={handleChange}></input>

      <label htmlFor="second">Second</label>
      <input name="second" onChange={handleChange}></input>

      {JSON.stringify(search)}
    </>
  );
};

export default Form;
