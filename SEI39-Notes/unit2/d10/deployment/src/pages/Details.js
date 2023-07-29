import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();

  return (
    <section>
      <h1>Details of {params.item}</h1>
    </section>
  );
};

export default Details;
