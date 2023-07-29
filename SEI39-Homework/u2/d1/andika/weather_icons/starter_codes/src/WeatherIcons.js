import React from "react";
// import weatherData from "./weatherData";
import WeatherData2 from "./WeatherData2";

const WeatherIcons = (props) => {
  return (
    <div className="weather">
      <img src={props.img} alt="" />
      <WeatherData2 conditions={props.conditions} time={props.time} />
    </div>
  );
};

export default WeatherIcons;
