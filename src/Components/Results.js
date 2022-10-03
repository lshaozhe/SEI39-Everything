import React, { useState, useEffect } from "react";
import Card from "./Card";

const Results = (props) => {
  const [displayedMarketData, setDisplayedMarketData] = useState([]);

  useEffect(() => {
    for (const element of props.post) {
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
  }, [props.post]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Last 1 hour</th>
          <th>Last 24 hour</th>
          <th>Ask</th>
          <th>Bid</th>
          <th>Last 24 hour volume (USD)</th>
          <th>Favourite</th>
        </tr>
      </thead>
      <tbody>
        {displayedMarketData.map((element) => (
          <Card key={element.name} element={element} />
        ))}
      </tbody>
    </table>
  );
};

export default Results;
