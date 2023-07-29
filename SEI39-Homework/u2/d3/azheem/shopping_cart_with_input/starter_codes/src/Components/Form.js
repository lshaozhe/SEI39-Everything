import React, { useState, useRef } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      price,
      description,
    };

    props.onSave((prevState) => {
      return [...prevState, newProduct];
    });

    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          value={name}
          id="name"
          type="text"
          placeholder="product name"
          onChange={handleNameChange}
        />

        <input
          ref={priceRef}
          value={price}
          id="price"
          type="text"
          placeholder="price"
          onChange={handlePriceChange}
        />

        <input
          ref={descriptionRef}
          value={description}
          id="description"
          type="text"
          placeholder="description"
          onChange={handleDescriptionChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
