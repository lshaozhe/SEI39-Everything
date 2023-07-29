import React, { useState, useRef } from "react";
const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [validProduct, setValidProduct] = useState(true);
  const [validPrice, setValidPrice] = useState(true);
  const productInputRef = useRef();
  const priceInputRef = useRef();

  const isEnabled = validPrice === true && validProduct === true;
  const handleProductName = (event) => {
    setProductName(event.target.value);
    const productInput = productInputRef.current.value;

    //tests if input contains number
    const containsNumber = (str) => {
      return /\d/.test(str);
    };

    containsNumber(productInput) === true
      ? setValidProduct(false)
      : setValidProduct(true);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);

    const priceInput = priceInputRef.current.value;
    //tests if input contains any numbers
    const containsLetters = (str) => {
      return /[a-zA-Z]/.test(str);
    };

    containsLetters(priceInput)
      ? setValidPrice(false)
      : setValidPrice(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name: productName,
      price: price,
    };
    props.onSubmit(newProduct);

    setProductName("");
    setPrice("");
  };

  return (
    <>
      <form className="container" onSubmit={isEnabled ? handleSubmit : null}>
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="product">Product Name:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              onChange={handleProductName}
              value={productName}
              ref={productInputRef}
            />
            <p>
              {validProduct === true
                ? null
                : "Invalid product, product should not contain any numbers"}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="price">Price:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              onChange={handlePrice}
              value={price}
              ref={priceInputRef}
            />
          </div>
          <p>
            {validPrice === true
              ? null
              : "Invalid pricing format, price should contain only numbers"}
          </p>
        </div>
        <button type="submit" disabled={!isEnabled}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
