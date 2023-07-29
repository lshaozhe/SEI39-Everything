import React, { useState } from "react";
const Form = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleProductName = (event) => {
    setProductName(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
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
      <form className="container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="product">Product Name:</label>
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              onChange={handleProductName}
              value={productName}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="price">Price:</label>
          </div>
          <div className="col-sm-6">
            <input type="number" onChange={handlePrice} value={price} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
