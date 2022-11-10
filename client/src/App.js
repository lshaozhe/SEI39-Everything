import React, { useRef, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./common/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OneProduct from "./pages/OneProduct";
import ContextStorage from "./misc/context";
import "./App.css";

function App() {
  const context = useRef({
    APIendpoint: "http://127.0.0.1:8000",
    cart: [],
    JWT: [],
  });
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <ContextStorage.Provider value={{ context, cart, setCart }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/viewproduct" element={<OneProduct />} />
        </Routes>
      </ContextStorage.Provider>
    </div>
  );
}

export default App;
