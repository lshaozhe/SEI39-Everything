import React, { useState } from "react";
import orderArr from "./data";
import Receipt from "./Receipt";
import style from "./style.css";

const Parent = () => {
  return (
    <>
      <h1>KORILLA</h1>
      <div className="container">
        {orderArr.map((element) => {
          return <Receipt receipt={element} key={element.person} />;
        })}
      </div>
    </>
  );
};

export default Parent;
