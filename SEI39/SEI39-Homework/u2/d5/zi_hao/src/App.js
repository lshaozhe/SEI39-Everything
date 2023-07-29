import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import productsArr from "./products";
import Form from "./Components/Form";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (index) => {
    const cartArr = cart.filter((d, i) => i !== index);
    setCart(cartArr);
  };

  const handleProducts = (newItem) => {
    setProducts([newItem, ...products]);
  };
  // reverse order to print new items from the bottom

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <div className="AllTheThings">
        <Form onSave={handleProducts} />
        <AllTheThings products={products} handleClick={addToCart} />
      </div>
      <MyShoppingCart cart={cart} handleClick={removeFromCart} />
    </div>
  );
}
