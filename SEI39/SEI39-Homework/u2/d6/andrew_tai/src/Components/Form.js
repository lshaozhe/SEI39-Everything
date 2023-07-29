import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form(props) {
  const [search, setSearch] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    props.setSearch(search);
    setSearch("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Input type="text" value={search} onChange={setSearch} />
        <Button type="submit">Search!</Button>
      </form>
    </>
  );
}
