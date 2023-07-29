import React from "react";

const Result = (props) => {
  return (
    <div className="result">
      <img src={props.imgSrc}></img>
      <p>{props.title}</p>
    </div>
  );
};

export default Result;
