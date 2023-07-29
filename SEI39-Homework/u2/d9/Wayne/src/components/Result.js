import React from "react";

const Result = (props) => {
  return (
    <div>
      <img src={props.image}></img>
      <p>{props.name}</p>
    </div>
  );
};

export default Result;
