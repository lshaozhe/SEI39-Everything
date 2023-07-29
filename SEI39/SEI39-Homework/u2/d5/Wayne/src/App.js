import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import productsArr from "./products";
import Form from "./Form";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  //===========================Lifting==============================

  const handleFormData = (enteredData) => {
    setProducts((prevState) => {
      return [...prevState, enteredData];
    });
  };

  //================================================================

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
      <div className="Formandeverytingelse">
        <Form onSubmit={handleFormData} />
        <div className="Allthethingsandshoppingcart">
          <div className="AllTheThings">
            <AllTheThings products={products} handleClick={addToCart} />
          </div>
          <MyShoppingCart cart={cart} handleClick={removeFromCart} />
        </div>
      </div>
    </div>
  );
}
