import React, { useState, useRef } from "react";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const validPriceRef = useRef();

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

    //added useRef to validate if input has $ sign here
    let inputPrice = validPriceRef.current.value;

    if (inputPrice.includes("$")) {
      props.onSave({ name: productName, price, description });
    } else {
      alert("please input price with $");
    }
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
        <input
          onChange={handlePriceChange}
          className="price"
          placeholder="price"
          type="string"
          ref={validPriceRef}
        />
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
