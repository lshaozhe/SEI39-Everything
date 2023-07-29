import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Search from "./Search";
import Results from "./Results";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <h1>React TVMaze</h1>
      <Routes>
        <Route
          path="/"
          element={<Search setQuery={setQuery} query={query} />}
        />
        <Route
          path="/results"
          element={<Results setQuery={setQuery} query={query} />}
        />
      </Routes>
    </div>
  );
}
