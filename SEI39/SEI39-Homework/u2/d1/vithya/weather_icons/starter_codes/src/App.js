import React from "react";
import "./styles.css";
import weatherData from "./weatherData.js";
import WeatherIcons from "./WeatherIcons";

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        <WeatherIcons
          src={weatherData[0].img}
          conditions={weatherData[0].conditions}
          time={weatherData[0].time}
        />

        <WeatherIcons
          src={weatherData[1].img}
          conditions={weatherData[1].conditions}
          time={weatherData[1].time}
        />

        <WeatherIcons
          src={weatherData[2].img}
          conditions={weatherData[2].conditions}
          time={weatherData[2].time}
        />

        <WeatherIcons
          src={weatherData[3].img}
          conditions={weatherData[3].conditions}
          time={weatherData[3].time}
        />

        <WeatherIcons
          src={weatherData[4].img}
          conditions={weatherData[4].conditions}
          time={weatherData[4].time}
        />
      </section>
    </div>
  );
}
