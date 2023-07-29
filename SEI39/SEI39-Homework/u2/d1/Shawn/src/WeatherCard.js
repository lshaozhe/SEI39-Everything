import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="container">
      <div className="row div-border">
        <img src={props.img}></img>
        <div className="col-sm-5">
          <b>Conditions:</b> {props.conditions}
        </div>
        <div className="col-sm-5">
          <b>Time:</b> {props.time}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
