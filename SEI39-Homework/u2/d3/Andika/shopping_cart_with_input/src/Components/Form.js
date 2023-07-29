import React, { useState } from "react";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: productName,
      price: parseInt(price),
      description: description,
    };

    props.addProduct(newProduct);

    setProductName("");
    setPrice("");
    setDescription("");

    // console.log
  };

  const handleProductChange = (event) => {
    //if there's a word input from form, change state of word
    setProductName(event.target.value);
  };

  const handlePriceChange = (event) => {
    //if there's a number input from , change state of word
    setPrice(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    //if there's a number input from , change state of word
    setDescription(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="product name"
          value={productName}
          onChange={handleProductChange}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={handlePriceChange}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
