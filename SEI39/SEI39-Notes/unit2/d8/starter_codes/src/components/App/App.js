import React, { useState } from 'react';
import Home from '../Home/Home';
import './App.css';

function App() {
  const [price, setPrice] = useState(null);

  const handleClick = price => {
    setPrice(price);
  };

  return (
    <div>
      <nav>
        <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin prices</h1>
      </nav>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
