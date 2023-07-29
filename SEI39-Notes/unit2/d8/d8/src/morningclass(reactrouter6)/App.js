import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import NavBar from "./components/NavBar";
import Details from "./pages/Details";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/page-one" />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThree />} />
        <Route path="/page-one/:item" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
