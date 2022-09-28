import React  from "react";
import "./Currencies.css";
import listOfCurrencies from "./list.json";

function Currencies() {
  
    let list = listOfCurrencies.map(item => {
      return (
        <div className="currency" key={item.currency}>
          <p>
            <a href={"/price/" + item.currency}>{item.currency}</a>:{" "}
            {item.country}
          </p>
        </div>
      );
    });

    return <div>{list}</div>;
  
}

export default Currencies;
