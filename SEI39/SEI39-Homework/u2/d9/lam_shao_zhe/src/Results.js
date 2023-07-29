import React from "react";
import Card from "./Card";

const Results = (props) => {
  const dataArr = props.postArr;

  const handleClick = () => {
    props.setForm(true);
  };

  return (
    <div className="results" style={{ display: props.showForm ? "none" : "" }}>
      <button onClick={handleClick}>Search Again</button>
      {dataArr.map((x) => (
        <Card key={x.id} element={x} />
      ))}
    </div>
  );
};

export default Results;
