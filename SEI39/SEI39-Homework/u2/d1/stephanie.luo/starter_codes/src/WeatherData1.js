import React from "react";

const WeatherData1 = (props) => {
  return (
    <>
      <p>
        <span>conditions:</span>
        {props.conditions}
      </p>
      <p>
        <span>time:</span>
        {props.time}
      </p>
    </>
  );
};

export default WeatherData1;
