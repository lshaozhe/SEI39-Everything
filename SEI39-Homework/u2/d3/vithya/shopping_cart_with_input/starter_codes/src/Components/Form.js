import React, { useState } from "react";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      price: price,
      description: description,
    };
    props.onSave(newProduct);
  };

  return (
    <>
      <form className="container">
        <div className="row">
          <div className="col-sm-6">
            <label>Name</label>
          </div>
          <div className="col-sm-6">
            <input
              id="text"
              type="text"
              value={productName}
              onChange={handleNameChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <label>Price</label>
          </div>
          <div className="col-sm-6">
            <input
              id="text"
              type="text"
              value={price}
              onChange={handlePriceChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <label>Description</label>
          </div>
          <div className="col-sm-6">
            <input
              id="text"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add Item
        </button>
      </form>
    </>
  );
};

export default Form;
