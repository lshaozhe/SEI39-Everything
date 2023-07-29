import React from "react";

export default function WeatherIcons(props) {
  return (
    <div class="weather">
      <img src={props.img} alt="" />
      <p>
        <span>conditions:</span> {props.conditions}
      </p>
      <p>
        <span>time:</span> {props.time}
      </p>
    </div>
  );
}
