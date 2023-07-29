import React, { useState, useReducer } from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
import productsArr from "./products";
import Form from "./components/Form";
import Context1 from "./context/context1";

const productsReducer = (productsState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        products: [...productsState.products, action.payload.newProduct],
      };
    default:
      return;
  }
};

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        cart: [...cartState.cart, action.payload.newItem],
      };
    case "REMOVE":
      return {
        cart: cartState.cart.filter((d, i) => i !== action.payload.index),
      };
    default:
      return;
  }
};

export default function App() {
  const [productsState, dispatchProductsState] = useReducer(productsReducer, {
    products: productsArr,
  });

  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    cart: [],
  });

  const addToCart = (newItem) => {
    dispatchCartState({ type: "ADD", payload: { newItem: newItem } });
  };

  const removeFromCart = (index) => {
    dispatchCartState({ type: "REMOVE", payload: { index: index } });
  };

  const addToProducts = (newProduct) => {
    dispatchProductsState({ type: "ADD", payload: { newProduct: newProduct } });
  };

  return (
    <Context1.Provider
      value={{
        productsState,
        addToProducts,
        cartState,
        addToCart,
        removeFromCart,
      }}
    >
      <div className="App">
        <h1>Big Time Shopping</h1>
        <Form />
        <div className="AllTheThings">
          <AllTheThings />
        </div>
        <MyShoppingCart />
      </div>
    </Context1.Provider>
  );
}
