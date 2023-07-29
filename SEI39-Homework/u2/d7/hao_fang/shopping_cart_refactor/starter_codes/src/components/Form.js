import React, { useState, useEffect, useRef, useContext } from "react";
import Context1 from "../context/context1";

const Form = () => {
  const Ctx1 = useContext(Context1);
  const [price, setPrice] = useState("");
  const [validPrice, setValidPrice] = useState();
  const nameInputRef = useRef();

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  // If the price contains any non-numerical characters, it is invalid
  useEffect(() => {
    if (price !== "") {
      if (isNaN(Number(price))) {
        setValidPrice(false);
      } else {
        setValidPrice(true);
      }
    }
  }, [price]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameInput = nameInputRef.current.value;

    if (validPrice) {
      const newProduct = { name: nameInput, price: price };
      Ctx1.addToProducts(newProduct);
      nameInputRef.current.value = "";
      setPrice("");
    } else {
      alert("Price can only contain numbers");
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
