import React from "react";

const Card = (props) => {
  return (
    <div className="Result_item">
      <img className="Result_item_image" src={props.element.url} alt={props.element.name} />
      <p className="Result_item_title">{props.element.name}</p>
    </div>
  );
};

export default Card;
