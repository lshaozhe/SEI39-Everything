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
            change1h: Math.round(element.change1h * 100000) / 1000,
            change24h: Math.round(element.change24h * 100000) / 1000,
            volumeUsd24h: Math.round(element.volumeUsd24h * 100) / 100,
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
      setFilteredCoins(tempArr);
    }
  }, [initialMarketData, props.search]);

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
    <div className="flex justify-center py-4 bg-gray-800 w-4/5 rounded-lg">
      <table className="w-full text-md text-left">
        <thead className=" text-gray-300 uppercase bg-gray-800 text-sm">
          <tr>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Price</th>
            <th className="py-3 px-6">Last 1 hour</th>
            <th className="py-3 px-6">Last 24 hour</th>
            <th className="py-3 px-6">Ask</th>
            <th className="py-3 px-6">Bid</th>
            <th className="py-3 px-6">Last 24 hour volume (USD)</th>
            <th className="py-3 px-6 text-center">Add to Watchlist</th>
          </tr>
        </thead>
        <tbody>{displayToggle()}</tbody>
      </table>
    </div>
  );
};

export default Results;
