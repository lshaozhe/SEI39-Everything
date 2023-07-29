import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const changeProductName = (event) => {
    setName(event.target.value);
  };

  const changeProductPrice = (event) => {
    setPrice(event.target.value);
  };

  const changeProductDescription = (event) => {
    setDescription(event.target.value);
  };

  const createItem = (event) => {
    event.preventDefault();
    props.onSave({
      name,
      price,
      description,
    });
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <>
      <form className="form">
        <div className="row">
          <div>
            <label htmlFor="product-name">Product Name</label>
          </div>
          <div>
            <input
              id="name"
              type="text"
              onChange={changeProductName}
              value={name}
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="price">Price</label>
          </div>
          <div>
            <input
              id="price"
              type="text"
              onChange={changeProductPrice}
              value={price}
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="description">Description</label>
          </div>
          <div>
            <input
              id="description"
              type="text"
              onChange={changeProductDescription}
              value={description}
            />
          </div>
        </div>
        <button className="submit-button" type="submit" onClick={createItem}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
