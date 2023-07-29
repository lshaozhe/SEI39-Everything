// import useState
import React, { useState } from "react";
import "./styles.css";
// import the required components
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import Form from "./Components/Form";
// import the products array from products.js
import productsArr from "./products";
import Context from "./Context/context";

export default function App() {
  // add state for products and cart, both of which are empty arrays
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  // create a addToCart function that takes in an item as a param
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  // create a removeFromCart function that takes in an index as a param
  const removeFromCart = (index) => {
    const cartArr = cart.filter((d, i) => i !== index);
    setCart(cartArr);
  };

  const addToProducts = (product) => {
    setProducts([product, ...products]);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        addToProducts,
        addToCart,
        removeFromCart,
      }}
    >
      <div className="App">
        <h1>Big Time Shopping</h1>
        <Form />
        <div className="products">
          <AllTheThings />
          <MyShoppingCart />
        </div>
      </div>
    </Context.Provider>
  );
}
