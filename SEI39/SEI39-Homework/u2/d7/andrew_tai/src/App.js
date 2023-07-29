// import useState
import React, { useState } from "react";
import "./styles.css";
// import the required components
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import Form from "./Components/Form";
// import the products array from products.js
import productsArr from "./products";

export const someCtx = React.createContext();

export default function App() {
  // add state for products and cart, both of which are empty arrays
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  return (
    <someCtx.Provider value={{ products, setProducts, cart, setCart }}>
      <div className="App">
        <h1>Big Time Shopping</h1>
        <Form />
        <div className="products">
          <AllTheThings />
          <MyShoppingCart />
        </div>
      </div>
    </someCtx.Provider>
  );
}
