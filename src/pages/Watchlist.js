import React, { useContext } from "react";
import FetchContext from "../context/fetch-context";

const Watchlist = () => {
  const ctx = useContext(FetchContext);

  return (
    <FetchContext.Provider>
      <div className="watchlist">{JSON.stringify(ctx)}</div>
    </FetchContext.Provider>
  );
};

export default Watchlist;
