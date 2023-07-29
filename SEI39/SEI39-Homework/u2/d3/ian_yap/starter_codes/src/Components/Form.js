import React, { useState } from "react";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const addNewProduct = (event) => {
    setProductName(event.target.value);
  };
  const addNewPrice = (event) => {
    setPrice(event.target.value);
  };
  const addDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { productName, price, description };
    props.addProduct(newProduct);
    setProductName("");
    setPrice("");
    setDescription("");
  };

  return ()
};


export default Form