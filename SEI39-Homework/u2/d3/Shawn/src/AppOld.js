import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import productsArr from "./products";

export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      name,
      price,
      description,
    };

    setProducts((prevState) => {
      return [...prevState, newItem];
    });

    setName("");
    setPrice("");
    setDescription("");
  }

  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const cartArr = cart.filter((d, i) => i !== index);
    setCart(cartArr);
  };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <div className="formHeader">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <input
                placeholder="product name"
                value={name}
                type="text"
                onChange={handleNameChange}
              ></input>
            </div>
          </div>
          {/* ================================================= */}
          <div className="row">
            <div className="col-sm-6">
              <input
                placeholder="price"
                value={price}
                type="text"
                onChange={handlePriceChange}
              ></input>
            </div>
          </div>
          {/* ================================================= */}
          <div className="row">
            <div className="col-sm-6">
              <input
                placeholder="description"
                value={description}
                type="text"
                onChange={handleDescriptionChange}
              ></input>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="products">
        <div className="AllTheThings">
          <AllTheThings products={products} handleClick={addToCart} />
        </div>
        <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}
