import React, { useState } from "react";
import Button from "./Button";

const Receipt = (props) => {
  const [isPaid, setIsPaid] = useState(props.receipt.paid);

  const handleSubmit = () => {};

  return (
    <div className={isPaid ? "receipt-none" : "receipt"}>
      <h2>{props.receipt.person}</h2>
      <h3>Order</h3>
      <div className="order">
        <text>Main: {props.receipt.order.main}</text>
        <br />
        <text>Protein: {props.receipt.order.protein}</text>
        <br />
        <text>Rice: {props.receipt.order.rice}</text>
        <br />
        <text>Sauce: {props.receipt.order.sauce}</text>
        <br />
        <text>
          Topping:
          {props.receipt.order.toppings.map((element) => (
            <text key={element[0]}>{element + ", "}</text>
          ))}
        </text>
        <br />
        <text>Drinks: {props.receipt.order.drink}</text>
        <br />
        <text>Cost: {props.receipt.order.cost}</text>
        <br />
      </div>
      <div className="button-container">
        <Button handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Receipt;
