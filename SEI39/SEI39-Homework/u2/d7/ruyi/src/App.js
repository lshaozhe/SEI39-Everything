// import useState
import React, { useReducer, useState } from 'react';
import './styles.css';
// import the required components
import AllTheThings from './Components/AllTheThings';
import MyShoppingCart from './Components/MyShoppingCart';
import Form from './Components/Form';

// FOR USECONTEXT HW
// import Context from './context/context';

// import the products array from products.js
import productsArr from './products';

const productReducer = (product, action) => {
  switch (action.type) {
    case "ADD_TO_PRODUCTS":
      return [action.payload, ...product];
    default:
      return product;
  }
}

const cartReducer = (cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cart, action.payload];
    case "REMOVE_FROM_CART":
      return cart.filter((item, i) => i !== action.payload);
    default:
      return cart;
  }
}

// const createProduct = (newProduct) => {
//   return newProduct;
// }

export default function App() {
  // add state for products and cart, both of which are empty arrays
  // const [products, setProducts] = useState(productsArr);
  // const [cart, setCart] = useState([]);

  const [product, dispatchProduct] = useReducer(productReducer, productsArr);
  const [cart, dispatchCart] = useReducer(cartReducer,[]);

  // create a addToCart function that takes in an item as a param
  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  // };
  // create a removeFromCart function that takes in an index as a param
  // const removeFromCart = (index) => {
  //   const cartArr = cart.filter((d, i) => i !== index);
  //   setCart(cartArr);
  // };

  // const addToProducts = (product) => {
  //   setProducts([product, ...products]);
  // };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      {/* <Form handleSubmit={addToProducts} /> */}
      <Form dispatchProduct={dispatchProduct} />
      <div className="products">
        {/* <Context.Provider value={{products, cart}}>
          <AllTheThings products={products} handleClick={addToCart} />
          <MyShoppingCart cart={cart} handleClick={removeFromCart} />
        </Context.Provider> */}
          <AllTheThings products={product} dispatchCart={dispatchCart} />
          <MyShoppingCart cart={cart} dispatchCart={dispatchCart} />
      </div>
    </div>
  );
}
