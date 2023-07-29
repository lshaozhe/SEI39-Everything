import React, { useState, useEffect } from "react";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // const [submittedPrice, setSubmittedPrice] = useState("");
  const [invalidProductName, setInvalidProductName] = useState("");
  const [invalidPrice, setInvalidPrice] = useState("");

  useEffect(() => {
    setInvalidProductName(productName === "" || productName.length > 20);
  }, [productName]);

  useEffect(() => {
    setInvalidPrice(price.includes("-") || price === "");
  }, [price]);

  const handlePriceChange = (event) => {
    //if there's a number input from , change state of word
    setPrice(event.target.value);
  };

  const handleProductChange = (event) => {
    //if there's a word input from form, change state of word
    setProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: productName,
      price: parseInt(price),
      description: description,
    };

    if (invalidPrice === false && invalidProductName === false) {
      // setSubmittedPrice(price);
      props.addProduct(newProduct);

      setProductName("");
      setPrice("");
      setDescription("");
    }

    // console.log
  };

  const handleDescriptionChange = (event) => {
    //if there's a number input from , change state of word
    setDescription(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="product name"
          value={productName}
          onChange={handleProductChange}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={handlePriceChange}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <h2>{invalidProductName ? "Product name not valid" : ""}</h2>
      <h2>{invalidPrice ? "Price not valid" : ""}</h2>
      {/* <h2>submitted price: {submittedPrice}</h2> */}
    </div>
  );
};

export default Form;
