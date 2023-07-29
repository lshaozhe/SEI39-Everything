import React, { useState } from "react";

export default function Form(props) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
    };

    props.updateProducts(newProduct);
    setProductName("");
    setProductPrice("");
    setProductDescription("");
  };

  const handleChangeName = (event) => {
    setProductName(event.target.value);
  };

  const handleChangePrice = (event) => {
    setProductPrice(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setProductDescription(event.target.value);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          id="productName"
          type="text"
          value={productName}
          onChange={handleChangeName}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={productPrice}
          onChange={handleChangePrice}
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={productDescription}
          onChange={handleChangeDescription}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
