import React from "react";

function Dashboard() {

  const activeStocks = 'https://financialmodelingprep.com/api/v3/stock/actives?apikey=YOUR KEY'

  return (
    <>
      <h1>Dashboard Page</h1>
      <table>
      <tr>
        <th>Company Name</th>
        <th>Price</th>
        <th>Change</th>
      </tr>
      <tr><td>Berkshire Hathaway Inc (BRK-A)</td><td>318504.00</td><td>964.00 (+0.30%)</td></tr>
    </table>
  </>
  );
}

export default Dashboard
