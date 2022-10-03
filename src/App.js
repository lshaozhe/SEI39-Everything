import React, { useState, useEffect, useRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./pages/Main";
import Watchlist from "./pages/Watchlist";
import NavBar from "./Components/Navbar";

import Fetch from "./Components/Fetch";

const App = () => {
  const [marketData, setMarketData] = useState([]);

  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      {/* <Fetch setMarketData={setMarketData} />
      <Main marketData={marketData} /> */}
    </div>
  );
};

export default App;
