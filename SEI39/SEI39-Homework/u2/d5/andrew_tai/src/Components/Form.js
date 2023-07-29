import React, { useRef, useState } from "react";

export default function Form(props) {
  const [productDescription, setProductDescription] = useState("");
  const [validSubmission, setValidSubmission] = useState(true);
  const productNameRef = useRef();
  const productPriceRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputName = productNameRef.current.value;
    const inputPrice = productPriceRef.current.value;

    if (inputName !== "" && inputPrice !== "") {
      if (productNameRef.current.classList.contains("error")) {
        productNameRef.current.classList.remove("error");
      }
      if (productPriceRef.current.classList.contains("error")) {
        productPriceRef.current.classList.remove("error");
      }
      setValidSubmission(true);
    } else {
      if (inputName === "") {
        productNameRef.current.classList.add("error");
      }
      if (inputPrice === "") {
        productPriceRef.current.classList.add("error");
      }
      setValidSubmission(false);
      return;
    }

    const newProduct = {
      name: inputName,
      price: inputPrice,
      description: productDescription,
    };

    props.updateProducts(newProduct);
    productNameRef.current.value = "";
    productPriceRef.current.value = "";
    setProductDescription("");
  };

  const handleChangeDescription = (event) => {
    setProductDescription(event.target.value);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input id="productName" type="text" ref={productNameRef} />
        <label htmlFor="price">Price:</label>
        <input id="price" type="number" ref={productPriceRef} step="0.01" />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={productDescription}
          onChange={handleChangeDescription}
        />
        <button type="submit">Submit</button>
      </form>
      <p className="error-message">
        {validSubmission ? null : "You messed up. Check your inputs."}
      </p>
    </div>
  );
}
