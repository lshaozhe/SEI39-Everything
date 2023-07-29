import React, { useState, useRef } from "react";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const addNewProduct = (event) => {
    setProductName(event.target.value);
  };
  const addNewPrice = (event) => {
    setPrice(event.target.value);
  };
  const addDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { productName, price, description };
    props.addProduct(newProduct);
    setProductName("");
    setPrice("");
    setDescription("");
  };

  return (
    <form>
      <input
        value={productName}
        type="text"
        placeholder="product name"
        onChange={addNewProduct}
      ></input>
      <input
        value={price}
        type="number"
        placeholder="price"
        onChange={addNewPrice}
      ></input>
      <input
        value={description}
        type="text"
        placeholder="description"
        onChange={addNewDescripion}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
