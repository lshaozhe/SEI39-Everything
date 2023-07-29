import React, { useState } from "react";
import "./styles.css";
// import the required components
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import Form from "./Components/Form";
import SomeContext from "./context/context-holder";
// import the products array from products.js
import productsArr from "./products";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  return (
    <>
      <SomeContext.Provider value={{ products, setProducts, cart, setCart }}>
        <div className="App">
          <h1>Big Time Shopping</h1>
          <Form />

          <div className="products">
            <AllTheThings />
            <MyShoppingCart />
          </div>
        </div>
      </SomeContext.Provider>
    </>
  );
}
