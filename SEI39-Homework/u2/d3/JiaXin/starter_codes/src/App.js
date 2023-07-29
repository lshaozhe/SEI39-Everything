import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import productsArr from "./products";
import FormComponent from "./FormComponent";

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

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <div className="FormComponent">
        <FormComponent onSave={setProducts} />
      </div>
      <div className="AllTheThings">
        <AllTheThings products={products} handleClick={addToCart} />
      </div>
      <div className="cart">
        <MyShoppingCart cart={cart} handleClick={removeFromCart} />
      </div>
    </div>
  );
}
