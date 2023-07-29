import React, { useState, useRef } from "react";

const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [validSubmission, setValidSubmission] = useState(false);

  const inputNameRef = useRef();
  const inputPriceRef = useRef();

  const addNewProduct = (event) => {
    setProductName(event.target.value);
  };

  const addNewPrice = (event) => {
    setPrice(event.target.value);
  };

  const addNewDescripion = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
    <form>
      <input
        value={productName}
        ref={inputNameRef}
        type="text"
        placeholder="product name"
        onChange={addNewProduct}
      ></input>
      <input
        value={price}
        ref={inputPriceRef}
        type="number"
        placeholder="price"
        onChange={addNewPrice}
      ></input>
      <input
        value={description}
        type="text"
        placeholder="description"
        onChange={addNewDescripion}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
