import React, { useState } from "react";
import Fetch from "./Components/Fetch";

const App = () => {
  const [marketData, setMarketData] = useState([]);

  return (
    <div className="container">
      <Fetch setMarketData={setMarketData} />
      {JSON.stringify(marketData)}
    </div>
  );
};

export default App;
