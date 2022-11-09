import React, { useContext, useState } from "react";
import ContextStorage from "../misc/context";
import useFetch from "../misc/useFetch";
import SingleProductView from "./SingleProductView";
import Pagination from "./Pagination";

const MultiProductView = () => {
  const ctxURL = useContext(ContextStorage);
  const [currentPage, setCurrentPage] = useState(1);
  const { response } = useFetch(
    ctxURL.current.APIendpoint + "/api/products/getmany/?page=" + currentPage
  );

  const displayProducts = () => {
    if (response !== null) {
      let productArr = response.data.results;
      return productArr.map((element) => (
        <SingleProductView key={element.product_id} product={element} />
      ));
    }
  };

  const displayPagination = () => {
    if (response !== null) {
      return (
        <Pagination
          next={response.data.next}
          previous={response.data.previous}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      );
    }
  };

  return (
    <>
      <div className="grid-container">{displayProducts()}</div>
      <br />
      <div className="row">{displayPagination()}</div>
    </>
  );
};

export default MultiProductView;
