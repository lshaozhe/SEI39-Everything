import React from "react";
import WeatherIcons from "./WeatherIcons";

const weather = [
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
    conditions: "sunny",
    time: "day",
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
    conditions: "clear",
    time: "day",
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
    conditions: "clear",
    time: "day",
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
    conditions: "partly sunny",
    time: "night",
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
    conditions: "clear",
    time: "day",
  },
];

const WeatherData = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <WeatherIcons
              image={weather[0].img}
              conditions={weather[0].conditions}
              time={weather[0].time}
            />
          </div>
          <div className="col">
            <WeatherIcons
              image={weather[1].img}
              conditions={weather[1].conditions}
              time={weather[1].time}
            />
          </div>
          <div className="col">
            <WeatherIcons
              image={weather[2].img}
              conditions={weather[2].conditions}
              time={weather[2].time}
            />
          </div>
          <div className="col">
            <WeatherIcons
              image={weather[3].img}
              conditions={weather[3].conditions}
              time={weather[3].time}
            />
          </div>
          <div className="col">
            <WeatherIcons
              image={weather[4].img}
              conditions={weather[4].conditions}
              time={weather[4].time}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
