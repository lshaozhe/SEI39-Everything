import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./Components/AllTheThings";
import MyShoppingCart from "./Components/MyShoppingCart";
import productsArr from "./products";
import Form from "./Components/Form";
import SomeContext from "./context/some-context";

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
    <SomeContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      <div className="App">
        <h1>Big Time Shopping</h1>
        <Form />
        <div className="cartLists">
          <div className="AllTheThings">
            <AllTheThings />
          </div>
          <MyShoppingCart />
        </div>
      </div>
    </SomeContext.Provider>
  );
}
