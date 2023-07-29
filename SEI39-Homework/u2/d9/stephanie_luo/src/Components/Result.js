import React from "react";

// component to display the details of the movies

const Result = (props) => {
  return (
    <div className="imageContainer">
      <img src={props.src} alt={props.alt}></img>
      <div className="title">{props.alt}</div>
    </div>
  );
};

export default Result;
