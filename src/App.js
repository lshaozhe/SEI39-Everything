import React, { useRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./pages/Main";
import Watchlist from "./pages/Watchlist";
import NavBar from "./Common/Navbar";
import FetchContext from "./context/fetch-context";

const App = () => {
  const watchlistArrRef = useRef([]);

  return (
    <FetchContext.Provider value={watchlistArrRef}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </FetchContext.Provider>
  );
};

export default App;
