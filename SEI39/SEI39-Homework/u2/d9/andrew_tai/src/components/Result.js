import React from "react";

export default function Result(props) {
  return (
    <>
      <div className="result">
        <div className="image">
          <img
            src={
              props.image ||
              "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            }
            alt={props.name}
          />
        </div>
        <p>{props.name}</p>
      </div>
    </>
  );
}
