// import useState
import React, { useState } from "react";
import "./styles.css";
// import the required components
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import Form from "./Components/Form";
// import the products array from products.js
import productsArr from "./products";

export default function App() {
  // add state for products and cart, both of which are empty arrays
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <SomeContext.Provider value={{ products, setProducts, cart, setCart }}>
        <Form />
        <div className="products">
          <AllTheThings />
          <MyShoppingCart />
        </div>
      </SomeContext.Provider>
    </div>
  );
}
