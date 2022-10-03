import React, { useState, useEffect, useRef } from "react";
import Form from "./Components/Form";
import Results from "./Components/Results";

const Main = (props) => {
  const [displayedMarketData, setDisplayedMarketData] = useState([]);

  useEffect(() => {
    for (const element of props.marketData) {
      if (element.type === "spot") {
        setDisplayedMarketData((prevState) => [
          ...prevState,
          {
            name: element.name,
            price: Math.round(element.price * 10000) / 10000,
            ask: Math.round(element.ask * 10000) / 10000,
            bid: Math.round(element.bid * 10000) / 10000,
            change1h: Math.round(element.change1h * 1000) / 10 + "%",
            change24h: Math.round(element.change24h * 1000) / 10 + "%",
            volumeUsd24h: Math.round(element.volumeUsd24h),
            isFavourite: false,
          },
        ]);
      }
    }
  }, [props.marketData]);

  return (
    <>
      <div className="form-container">
        <Form />
      </div>

      <div className="results-container">
        <Results
          displayedMarketData={displayedMarketData}
          setDisplayedMarketData={setDisplayedMarketData}
        />
      </div>
    </>
  );
};

export default Main;
