import React from "react";
import FavButton from "../Common/FavButton";

const Card = (props) => {
  return (
    <tr>
      <td>{props.element.name}</td>
      <td>{props.element.price}</td>
      <td>{props.element.change1h}</td>
      <td>{props.element.change24h}</td>
      <td>{props.element.ask}</td>
      <td>{props.element.bid}</td>
      <td>{props.element.volumeUsd24h}</td>
      <td>
        <FavButton />
      </td>
    </tr>
  );
};

export default Card;
