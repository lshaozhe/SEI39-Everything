import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
import productsArr from "./products";
import Form from "./components/Form";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const cartArr = cart.filter((d, i) => i !== index);
    setCart(cartArr);
  };

  const addToProducts = (newProduct) => {
    setProducts((prevState) => [newProduct, ...prevState]);
  };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form addToProducts={addToProducts} />
      <div className="AllTheThings">
        <AllTheThings products={products} handleClick={addToCart} />
      </div>
      <MyShoppingCart cart={cart} handleClick={removeFromCart} />
    </div>
  );
}
