import React, { useState, useRef, useEffect } from "react";

const Form = (props) => {
  // added in validPrice state for onChange validation. price state is updated after validation successful.
  const [price, setPrice] = useState("");
  const [validPrice, setValidPrice] = useState("");

  const [description, setDescription] = useState("");

  // const nameRef = useRef()
  // const priceRef = useRef();
  const descriptionRef = useRef();

  // form validation onChange to check if price is valid (must be numbers only)
  useEffect(() => {
    setValidPrice(!isNaN(price));
  }, [price]);

  // added in validName state for onChange validation. name state is updated after validation successful.
  const [name, setName] = useState("");
  const [validName, setValidName] = useState("");

  // form validation onChange to check if product name is valid (must contain alphabets, cannot be just numbers)
  useEffect(() => {
    setValidName(isNaN(name));
  }, [name]);

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

    // form validation onChange to check if name is valid, if invalid user wont be able to submit
    if (validName) {
      // form validation onChange to check if price is valid, if invalid user wont be able to submit
      if (validPrice) {
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
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          // ref={nameRef}
          value={name}
          id="name"
          type="text"
          placeholder="product name"
          onChange={handleNameChange}
        />

        <input
          // ref={priceRef}
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

      {/* text to inform user if price entered is valid or invalid. Changes as user types in input */}
      <p>{validPrice ? "Valid Price" : "Invalid Price"}</p>

      {/* text to inform user if name entered is valid or invalid. Changes as user types in input */}
      <p>{validName ? "Valid Name" : "Invalid Name"}</p>
    </>
  );
};

export default Form;
