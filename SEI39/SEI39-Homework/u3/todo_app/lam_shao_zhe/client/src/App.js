import React, { useRef } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Appointment from "./pages/Appointment";
import Form from "./Components/Form";
import ContextStorage from "./context/context";

// import Main from "./pages/Main";
// import Watchlist from "./pages/Watchlist";
// import NavBar from "./Common/Navbar";
// import FetchContext from "./context/fetch-context";

const App = () => {
  const backendURL = useRef("http://127.0.0.1:5001");

  return (
    <ContextStorage.Provider value={backendURL}>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/main" element={<Appointment />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </ContextStorage.Provider>
  );
};

export default App;
