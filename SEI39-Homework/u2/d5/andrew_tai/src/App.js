import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import productsArr from "./products";
import Form from "./Components/Form";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  const updateProducts = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

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
      <Form updateProducts={updateProducts} />
      <div className="products">
        <AllTheThings products={products} handleClick={addToCart} />
        <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}
