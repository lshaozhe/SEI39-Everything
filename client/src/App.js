import React, { useRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./common/Navbar";
import ContextStorage from "./misc/context";
import "./App.css";

function App() {
  const APIendpoint = useRef("http://127.0.0.1:8000");

  return (
    <div className="App">
      <ContextStorage.Provider value={APIendpoint}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ContextStorage.Provider>
    </div>
  );
}

export default App;
