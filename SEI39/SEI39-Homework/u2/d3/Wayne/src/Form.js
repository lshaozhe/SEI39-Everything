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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {/* ======================================================== */}
        <div className="row">
          <div className="col-sm-6">
            <input
              value={name}
              type="text"
              onChange={handleNameChange}
              placeholder="product name"
            ></input>
          </div>
        </div>
        {/* ======================================================== */}
        <div className="row">
          <div className="col-sm-6">
            <input
              value={price}
              type="text"
              onChange={handlePriceChange}
              placeholder="price"
            ></input>
          </div>
        </div>
        {/* ======================================================== */}
        <div className="row">
          <div className="col-sm-6">
            <input
              value={description}
              type="text"
              onChange={handleDescriptionChange}
              placeholder="description"
            ></input>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
