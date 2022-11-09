import React, { useContext } from "react";
import ContextStorage from "../misc/context";
import useFetch from "../misc/useFetch";
import SingleProductView from "./SingleProductView";

const MultiProductView = () => {
  const ctxURL = useContext(ContextStorage);
  const { response } = useFetch(ctxURL.current + "/api/products/getmany/");

  const displayToggle = () => {
    if (response !== null) {
      let productArr = response.data.results;
      return productArr.map((element) => (
        <SingleProductView key={element.product_id} product={element} />
      ));
    }
  };

  return <div className="grid-container">{displayToggle()}</div>;
};

export default MultiProductView;
