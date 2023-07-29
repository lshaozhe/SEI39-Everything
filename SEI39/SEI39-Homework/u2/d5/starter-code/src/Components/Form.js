import React, { useState, useEffect } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const inputNameRef = useRef();
  const inputPriceRef = useRef();

  const handleNewProduct = (e) => {
    setName(e.target.value);
  };
  const handleNewProductPrice = (e) => {
    setPrice(e.target.value);
  };
  const handleNewProductDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, price, description };
    props.addToThingsList(newItem);
    setName("");
    setPrice("");
    setDescription("");
  };

  const inputName = inputNameRef.current.value;
  const inputPrice = inputPriceRef.current.value;

  if (inputName != "" && inputPrice != "") {
    setValidSubmission(true);
    const newProduct = {
      name: productName,
      price,
      description,
    };

    props.onSave(newProduct);
  } else {
    setValidSubmission(false);
    alert("Product name and price are required.");
  }

  setProductName("");
  setPrice("");
  setDescription("");
};

return (
  <div>
    <input
      type="text"
      value={name}
      placeholder="product name"
      onChange={handleNewProduct}
    ></input>
    <input
      type="text"
      value={price}
      placeholder="price"
      onChange={handleNewProductPrice}
    ></input>
    <input
      type="text"
      value={description}
      placeholder="description"
      onChange={handleNewProductDescription}
    ></input>
    <button type="submit" onClick={handleSubmit}>
      Submit
    </button>
  </div>
);

export default Form;
