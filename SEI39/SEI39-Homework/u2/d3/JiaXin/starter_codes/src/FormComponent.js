import React, { useState } from "react";
import "./styles.css";

const FormComponent = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name: productName,
      price: price,
      description: description,
    };

    props.onSave((prevState) => {
      return [...prevState, newProduct];
    });

    setProductName("");
    setPrice("");
    setDescription("");
  };
  return (
    <React.Fragment>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row">
          {/*<div className="col-sm-3">
            <label htmlFor="productName">Product Name</label>
  </div>*/}
          <div className="product_Name_box">
            <input
              value={productName}
              type="text"
              placeholder="product name"
              onChange={handleProductNameChange}
            />
          </div>
        </div>

        <div className="row">
          {/*<div className="col-sm-3">
            <label htmlFor="price">Price</label>
</div>*/}
          <div className="price_box">
            <input
              value={price}
              type="text"
              placeholder="price"
              onChange={handlePriceChange}
            />
          </div>
        </div>

        <div className="row">
          {/* <div className="col-sm-3">
            <label htmlFor="description">Description</label>
</div>*/}
          <div className="description_box">
            <input
              value={description}
              type="text"
              placeholder="description"
              onChange={handleDescriptionChange}
            />
          </div>
        </div>

        <button className="button" type="submit">
          Add Item
        </button>
      </form>

      <br />
      <br />
    </React.Fragment>
  );
};

export default FormComponent;
