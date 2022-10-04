import React from "react";

const Form = (props) => {
  const handleChange = (e) => {
    if (e.target.name === "first") {
      props.setSearch((prevState) => ({
        first: e.target.value,
        next: prevState.next,
      }));
    } else {
      props.setSearch((prevState) => ({
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
    </>
  );
};

export default Form;
