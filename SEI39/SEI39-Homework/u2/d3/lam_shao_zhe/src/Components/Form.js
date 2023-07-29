import React, { useState } from "react";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [newItem, setNewItem] = useState({});

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
    props.onSave({ name: productName, price, description });
  };

  return (
    <>
      <form>
        <input
          onChange={handleNameChange}
          className="productName"
          placeholder="name"
          type="string"
        />
        <input onChange={handlePriceChange} className="price" placeholder="price" type="string" />
        <input
          onChange={handleDescriptionChange}
          className="description"
          placeholder="description"
          type="string"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default Form;
