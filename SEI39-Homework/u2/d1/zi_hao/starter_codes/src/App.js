import React from "react";
import "./styles.css";
import WeatherIcon from "./WeatherIcon.js";
import weatherData from "./weatherData";

export default function App() {
  return (
    <section>
      <>
        <WeatherIcon
          img={weatherData[0].img}
          conditions={weatherData[0].conditions}
          time={weatherData[0].time}
        />
        <WeatherIcon
          img={weatherData[1].img}
          conditions={weatherData[1].conditions}
          time={weatherData[1].time}
        />
        <WeatherIcon
          img={weatherData[2].img}
          conditions={weatherData[2].conditions}
          time={weatherData[2].time}
        />
        <WeatherIcon
          img={weatherData[3].img}
          conditions={weatherData[3].conditions}
          time={weatherData[3].time}
        />
        <WeatherIcon
          img={weatherData[4].img}
          conditions={weatherData[4].conditions}
          time={weatherData[4].time}
        />
      </>
    </section>
  );
}