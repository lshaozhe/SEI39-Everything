import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      name,
      price,
      description,
    };

    props.onSubmit(newItem);

    setName("");
    setPrice("");
    setDescription("");
  }

  return (
    <div className="formHeader">
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <input
              placeholder="product name"
              value={name}
              type="text"
              onChange={handleNameChange}
            ></input>
          </div>
        </div>
        {/* ================================================= */}
        <div className="row">
          <div className="col-sm-6">
            <input
              placeholder="price"
              value={price}
              type="text"
              onChange={handlePriceChange}
            ></input>
          </div>
        </div>
        {/* ================================================= */}
        <div className="row">
          <div className="col-sm-6">
            <input
              placeholder="description"
              value={description}
              type="text"
              onChange={handleDescriptionChange}
            ></input>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;