import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./common/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OneProduct from "./pages/OneProduct";
import ContextStorage from "./misc/context";
import AuthVerify from "./misc/AuthVerify";
import "./App.css";

function App() {
  const context = useRef({
    APIendpoint: "http://127.0.0.1:8000",
    isAdmin: false,
    isAuthenticated: false,
    userName: "",
  });
  const [cart, setCart] = useState([]);
  const [currentSelection, setCurrentSelection] = useState("1");

  return (
    <div className="App">
      <ContextStorage.Provider
        value={{
          context,
          cart,
          setCart,
          currentSelection,
          setCurrentSelection,
        }}
      >
        <AuthVerify />
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
