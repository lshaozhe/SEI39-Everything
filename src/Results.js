import React from "react";
import Card from "./Components/Card";

const Results = (props) => {
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
        </tr>
      </thead>
      <tbody>
        {props.marketData.map((element) => (
          <Card key={element.name} element={element} />
        ))}
      </tbody>
    </table>
  );
};

export default Results;
