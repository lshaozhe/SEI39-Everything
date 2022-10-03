import React, { useState, useEffect, useRef } from "react";
import Main from "./Main";
import Fetch from "./Components/Fetch";

const App = () => {
  const [marketData, setMarketData] = useState([]);

  return (
    <div className="container">
      <Fetch setMarketData={setMarketData} />
      <Main marketData={marketData} />
    </div>
  );
};

export default App;
