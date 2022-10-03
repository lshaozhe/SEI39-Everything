import React, { useState, useEffect } from "react";
import Card from "./Card";

const Results = (props) => {
  const [initialMarketData, setInitialMarketData] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    for (const element of props.post) {
      if (element.type === "spot") {
        setInitialMarketData((prevState) => [
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

  useEffect(() => {
    let tempArr = JSON.parse(JSON.stringify(initialMarketData));
    let search1 = props.search.first.toLowerCase();
    let search2 = props.search.next.toLowerCase();
    if (search1 !== "" || search2 !== "") {
      tempArr = tempArr.filter((element) =>
        element.name.toLowerCase().includes(search1)
      );
      tempArr = tempArr.filter((element) =>
        element.name.toLowerCase().includes(search2)
      );
      setFilteredCoins(tempArr);
    } else {
      setFilteredCoins(initialMarketData);
    }
  }, [props.search]);

  const displayToggle = () => {
    if (filteredCoins.length === 0) {
      return initialMarketData.map((element) => (
        <Card key={Math.random()} element={element} />
      ));
    } else {
      return filteredCoins.map((element) => (
        <Card key={Math.random()} element={element} />
      ));
    }
  };

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
      <tbody>{displayToggle()}</tbody>
    </table>
  );
};

export default Results;
