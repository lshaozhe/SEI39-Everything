import React, { useContext, useState } from "react";
import FetchContext from "../context/fetch-context";
import Detailedview from "../Components/Detailedview";

const Watchlist = () => {
  const ctx = useContext(FetchContext);
  const [currentSelection, setCurrentSelection] = useState("AAVE/USD");

  const handleSelectionChange = (e) => {
    setCurrentSelection(e.target.value);
  };

  return (
    <div className="flex-col items-center justify-center rounded-lg py-4">
      <section className="bg-gray-800 w-full rounded p-4">
        <label htmlFor="selection" className="block mb-2 text-sm font-medium text-gray-400">
          Select Your Watched Coins
        </label>
        <select
          id="selection"
          onChange={handleSelectionChange}
          className=" border text-sm rounded-lg lock w-1/2 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
          <option value="" disabled selected>
            Choose a coin pair in your watchlist
          </option>
          {ctx.current.map((element) => (
            <option key={Math.random()} value={element}>
              {element}
            </option>
          ))}
        </select>
      </section>

      <div className="bg-gray-800 w-full px-4">
        <Detailedview currentSelection={currentSelection} />
      </div>
    </div>
  );
};

export default Watchlist;
