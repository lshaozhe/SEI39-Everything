import React, { useState } from "react";

const FormEntry = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { productName, price, description };
    props.addProduct(newProduct);
    setProductName("");
    setPrice("");
    setDescription("");
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="product name"
          value={productName}
          onChange={handleProductNameChange}
        />

        <input
          type="number"
          placeholder="price"
          value={price} //to clear out the form
          onChange={handlePriceChange}
        />

        <input
          type="text"
          placeholder="description"
          value={description} //to clear out the form
          onChange={handleProductDescriptionChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Item
        </button>
      </form>
    </>
  );
};

export default FormEntry;
