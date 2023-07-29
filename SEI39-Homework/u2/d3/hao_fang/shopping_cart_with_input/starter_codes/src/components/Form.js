import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price };
    props.addToProducts(newProduct);
    setName("");
    setPrice("");
  };

  return (
    <div>
      {
        <form onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input value={name} onChange={handleNameChange}></input>
          <label>Price</label>
          <input value={price} onChange={handlePriceChange}></input>
          <button type="submit">Submit</button>
        </form>
      }
    </div>
  );
};

export default Form;
