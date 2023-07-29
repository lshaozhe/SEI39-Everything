import React from "react";
import WeatherData from "./WeatherData";

const icons = [
  {
    weather: "day",
    imageLink: `http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg`,
  },
  {
    weather: "stormy",
    imageLink: `http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg`,
  },
  {
    weather: "cloudyDay",
    imageLink: `http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg`,
  },
  {
    weather: "cloudyNight",
    imageLink: `http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg`,
  },
];

const WeatherIcons = (props) => {
  return (
    <div>
      <img src={props.image} alt=""></img>
      <p>
        <span>conditions:</span> {props.conditions}
      </p>
      <p>
        <span>time:</span> {props.time}
      </p>
    </div>
  );
};

export default WeatherIcons;
