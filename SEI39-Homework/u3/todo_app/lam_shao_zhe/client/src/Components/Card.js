import React, { useContext } from "react";
import contextStorage from "../context/context";
import Button from "../Common/Button";

const Card = (props) => {
  const ctx = useContext(contextStorage);

  const deleteHandler = (e) => {
    props.fetchPost(ctx.current + "/api/delete", "DELETE", JSON.stringify({ id: e.target.id }));
  };

  const updateHandler = (e) => {
    props.fetchPost(ctx.current + "/api/getone", "POST", JSON.stringify({ id: e.target.id }));
    props.setIsUpdateForm(e.target.id);
    console.log(e.target.id);
  };

  return (
    <div className="card-container">
      <h2>{props.element.title}</h2>
      <p>Date/Time: {props.element.time}</p>
      <p>Description: {props.element.description}</p>
      <p>Type: {props.element.category}</p>
      <p>Who?: {props.element.audience.map((e) => e + ", ")}</p>
      <p>organisation: {props.element.organisation}</p>
      <p>Address: {props.element.address}</p>
      <p>Recurring: {props.element.isRecurring}</p>

      <div className="button-container">
        <Button id={props.element._id} clickHandler={updateHandler} name={"Update"} />
        <Button id={props.element._id} clickHandler={deleteHandler} name={"Delete"} />
      </div>
    </div>
  );
};

export default Card;
