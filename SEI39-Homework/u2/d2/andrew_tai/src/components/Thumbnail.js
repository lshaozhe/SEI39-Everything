import React from "react";

export default function Thumbnail(props) {
  return (
    <img
      className={`thumb ${props.bigImage === props.img ? "selected" : ""}`}
      src={props.img}
      alt={props.city}
      onClick={props.click}
    />
  );
}
