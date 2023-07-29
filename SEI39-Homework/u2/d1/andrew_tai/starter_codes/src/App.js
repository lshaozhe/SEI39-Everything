import React from "react";
import "./styles.css";
import { weatherData } from "./weatherData";
import WeatherIcons from "./components/WeatherIcons";

export default function App() {
  function WeatherLoop() {
    const weatherArray = [];

    for (const key in weatherData) {
      weatherArray.push(
        <WeatherIcons
          img={weatherData[key].img}
          conditions={weatherData[key].conditions}
          time={weatherData[key].time}
        />
      );
    }
    console.log(weatherArray);

    return weatherArray;
  }

  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        <WeatherLoop />
      </section>
    </div>
  );
}
