import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./pages/Main";
import Watchlist from "./pages/Watchlist";
import NavBar from "./Components/Navbar";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
};

export default App;
