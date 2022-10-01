import React, { useState } from "react";
import Fetch from "./Components/Fetch";
import Form from "./Form";
import Results from "./Results";

const App = () => {
  const [marketData, setMarketData] = useState([]);

  return (
    <div className="container">
      <Fetch setMarketData={setMarketData} />
      <div className="form-container">
        <Form />
      </div>
      <div className="results-container">
        <Results marketData={marketData} />
      </div>
    </div>
  );
};

export default App;
