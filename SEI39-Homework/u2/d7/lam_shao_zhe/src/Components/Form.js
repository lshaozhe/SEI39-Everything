import React, { useState, useContext } from "react";
import SomeContext from "../context/context-holder";

const Form = () => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const SomeCtx = useContext(SomeContext);

  const handleSubmit = () => {
    SomeCtx.setProducts([product, ...SomeCtx.products]);
    setProduct({ name: "", price: "", description: "" });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <div className="wrapper">
      <div className="form-signin">
        <h2 className="form-signin-heading"></h2>
        <input
          onChange={() => handleChange(event)}
          value={product.name}
          type="text"
          className="form-control"
          name="name"
          placeholder="product name"
        />
        <input
          onChange={() => handleChange(event)}
          value={product.price}
          type="text"
          className="form-control"
          name="price"
          placeholder="price"
        />
        <input
          onChange={() => handleChange(event)}
          value={product.description}
          type="text"
          className="form-control"
          name="description"
          placeholder="description"
        />
        <button className="btn btn-lg btn-primary btn-block" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;