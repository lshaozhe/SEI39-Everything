import React, { useContext } from "react";
import Button from "../Common/Button";
import FetchContext from "../context/fetch-context";

const Card = (props) => {
  const ctx = useContext(FetchContext);

  const clickHandler = (e) => {
    if (!ctx.current.includes(e.currentTarget.children[0].innerText)) {
      ctx.current.push(e.currentTarget.children[0].innerText);
    }
  };

  return (
    <>
      <tr onClick={clickHandler}>
        <td>{props.element.name}</td>
        <td>{props.element.price}</td>
        <td>{props.element.change1h}</td>
        <td>{props.element.change24h}</td>
        <td>{props.element.ask}</td>
        <td>{props.element.bid}</td>
        <td>{props.element.volumeUsd24h}</td>
        <td>
          <Button className="favourite-button" value="Favourite" />
        </td>
      </tr>
    </>
  );
};

export default Card;
