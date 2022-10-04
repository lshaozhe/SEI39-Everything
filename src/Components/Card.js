import React, { useContext } from "react";
import Button from "../Common/Button";
import FetchContext from "../context/fetch-context";

const Card = (props) => {
  const ctx = useContext(FetchContext);

  const clickHandler = (e) => {
    if (!ctx.current.includes(e.currentTarget.id)) {
      ctx.current.push(e.currentTarget.id);
    } else if (ctx.current.includes(e.currentTarget.id)) {
      ctx.current = ctx.current.filter(
        (element) => element !== e.currentTarget.id
      );
    }
  };

  return (
    <>
      <tr className="border-t-2 border-b-2 text-bold border-yellow-100 bg-gray-800 text-blue-100 hover:bg-gray-700 hover:text-lg">
        <td className="py-4 px-6 font-md text-white">{props.element.name}</td>
        <td className="py-4 px-6">{props.element.price}</td>
        <td
          className={
            props.element.change1h < 0
              ? "text-red-600 py-4 px-6"
              : "text-green-600 py-4 px-6"
          }
        >
          {props.element.change1h + "%"}
        </td>
        <td
          className={
            props.element.change24h < 0
              ? "text-red-600 py-4 px-6"
              : "text-green-600 py-4 px-6"
          }
        >
          {props.element.change24h + "%"}
        </td>
        <td className="py-4 px-6">{props.element.ask}</td>
        <td className="py-4 px-6">{props.element.bid}</td>
        <td className="py-4 px-6">{props.element.volumeUsd24h}</td>
        <td
          className="py-4 px-6"
          onClick={clickHandler}
          id={props.element.name}
        >
          <Button isClicked={ctx.current} name={props.element.name} />
        </td>
      </tr>
    </>
  );
};

export default Card;
