import React, { useState, useEffect, useRef } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const [validName, setValidName] = useState();

  const [validPrice, setValidPrice] = useState();

  const nameInputRef = useRef();

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  // If the price contains any non-numerical characters, it is invalid
  useEffect(() => {
    if (isNaN(Number(price))) {
      setValidPrice(false);
    } else {
      setValidPrice(true);
    }
  }, [price]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameInput = nameInputRef.current.value;

    // If the name only contains numbers, it is invalid
    if (isNaN(Number(nameInput))) {
      setValidName(true);
      setName(nameInput);
    } else {
      setValidName(false);
    }

    if (validName && validPrice) {
      const newProduct = { name, price };
      props.addToProducts(newProduct);
      setName("");
      setPrice("");
    } else {
      alert("Please enter valid inputs");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input ref={nameInputRef}></input>
        <label>Price</label>
        <input value={price} onChange={handlePriceChange}></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        {validPrice
          ? "Price is valid"
          : "Price contains non-numerical characters"}
      </div>
    </>
  );
};

export default Form;
