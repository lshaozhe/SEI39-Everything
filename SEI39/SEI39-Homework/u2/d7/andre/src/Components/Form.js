import React, { useState, useRef, useContext } from "react";
import SomeContext from "../context/some-context";

const Form = () => {
  const someCtx = useContext(SomeContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleNewProduct = (e) => {
    setName(e.target.value);
  };

  const handleNewProductPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleNewProductDescription = (e) => {
    setDescription(e.target.value);
  };

  //form validation
  let numbers = /^[0-9]+$/;
  const numberCheckRef = useRef();
  const nameCheckRef = useRef();
  const descriptionCheckRef = useRef();
  let productNameList = [];
  for (const items of someCtx.products) {
    productNameList.push(items.name);
  }
  //Change to useContext

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputName = nameCheckRef.current.value.toLowerCase();
    const inputPrice = numberCheckRef.current.value;
    const inputDescription = descriptionCheckRef.current.value;
    if (!(inputName === "" || inputPrice === "" || inputDescription === "")) {
      if (!productNameList.includes(inputName)) {
        if (inputPrice.match(numbers)) {
          const newItem = { name, price, description };
          someCtx.setProducts((prevState) => [newItem, ...prevState]);
          // props.addToThingsList(newItem);
          setName("");
          setPrice("");
          setDescription("");
        } else {
          alert("Price must be a numeral.");
        }
      } else {
        alert("Duplicate product name.");
      }
    } else {
      alert("Fill all fields.");
    }
  };

  return (
    <div>
      <input
        type="text"
        ref={nameCheckRef}
        value={name}
        placeholder="product name"
        onChange={handleNewProduct}
      ></input>
      <input
        type="text"
        ref={numberCheckRef}
        value={price}
        placeholder="price"
        onChange={handleNewProductPrice}
      ></input>
      <input
        type="text"
        ref={descriptionCheckRef}
        value={description}
        placeholder="description"
        onChange={handleNewProductDescription}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
