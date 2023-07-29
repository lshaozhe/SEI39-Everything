import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherData = () => {
  const weatherDatas = [
    {
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
      conditions: "sunny",
      time: "day",
    },
    {
      img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
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
  return (
    <div className="container">
      <WeatherCard
        img={weatherDatas[0].img}
        conditions={weatherDatas[0].conditions}
        time={weatherDatas[0].time}
      />
      <WeatherCard
        img={weatherDatas[1].img}
        conditions={weatherDatas[1].conditions}
        time={weatherDatas[1].time}
      />
      <WeatherCard
        img={weatherDatas[2].img}
        conditions={weatherDatas[2].conditions}
        time={weatherDatas[2].time}
      />
      <WeatherCard
        img={weatherDatas[3].img}
        conditions={weatherDatas[3].conditions}
        time={weatherDatas[3].time}
      />
      <WeatherCard
        img={weatherDatas[4].img}
        conditions={weatherDatas[4].conditions}
        time={weatherDatas[4].time}
      />
    </div>
  );
};

export default WeatherData;
