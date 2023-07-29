import React, { useState, useEffect } from "react";
import "./styles.css";

const FormComponent = (props) => {
  const [productName, setProductName] = useState("");
  // const [price, setPrice] = useState("");
  //const [description, setDescription] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [submittedPrice, setSubmittedPrice] = useState("");
  const [validPrice, setValidPrice] = useState(false);

  const [inputDescription, setInputDescription] = useState("");
  const [submittedDescription, setSubmittedDescription] = useState("");
  const [validDescription, setValidDescription] = useState(false);

  useEffect(() => {
    setValidDescription(inputDescription.includes(""));
  }, [inputDescription]);

  useEffect(() => {
    setValidPrice(parseFloat(inputPrice));
  }, [inputPrice]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setInputPrice(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setInputDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (productName !== "" && inputPrice !== "" && inputDescription !== "") {
      if (!isNaN(inputPrice)) {
        const newProduct = {
          name: productName,
          price: inputPrice,
          description: inputDescription,
        };
        props.onSave((prevState) => {
          return [newProduct, ...prevState];
        });
        console.log("is number");
        setSubmittedPrice(inputPrice);
      } else {
        console.log("not number");
        alert("Please Enter the valid number");
      }
      setSubmittedDescription(inputDescription);
    } else {
      console.log("Description Empty");
      alert("Please Enter the Description");
    }
    setProductName("");
    setInputPrice("");
    setInputDescription("");
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
              value={inputPrice}
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
              value={inputDescription}
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
