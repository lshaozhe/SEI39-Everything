import React from "react";
import "./styles.css";
import { weatherData } from "./weatherData";
import WeatherIcons from "./weatherIcons";

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <div className="data">
        {weatherData.map((data) => (
          <WeatherIcons {...data} />
        ))}
      </div>
    </div>
  );
}
