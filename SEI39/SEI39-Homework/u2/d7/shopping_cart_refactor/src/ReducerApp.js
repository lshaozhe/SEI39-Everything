import React, { useReducer, useState } from "react";
import "./styles.css";
import AllTheThings from "./useReducer/AllTheThings";
import MyShoppingCart from "./useReducer/MyShoppingCart";
import Form from "./useReducer/Form";
import productsArr from "./products";

const productsReducer = (products, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...products,
        createProduct(
          action.payload.name,
          action.payload.price,
          action.payload.description
        ),
      ];
  }
};

const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_CART":
      return [...cart, action.payload.item];
    case "REMOVE_CART":
      return cart.filter((d, i) => i !== action.payload.index);
  }
};

const createProduct = (name, price, description) => {
  return { name: name, price: price, description: description };
};

export default function App() {
  // const [products, setProducts] = useState(productsArr);
  const [products, dispatchProducts] = useReducer(productsReducer, productsArr);
  const [cart, dispatchCart] = useReducer(cartReducer, []);
  // const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form dispatchProducts={dispatchProducts} />
      <div className="products">
        <AllTheThings products={products} dispatchCart={dispatchCart} />
        <MyShoppingCart cart={cart} dispatchCart={dispatchCart} />
      </div>
    </div>
  );
}
