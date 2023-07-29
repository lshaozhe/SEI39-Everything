import React from "react";
import "./styles.css";
import WeatherIcons from "./WeatherIcons";
import weatherData from "./weatherData";

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        <WeatherIcons
          img={weatherData[0].img}
          conditions={weatherData[0].conditions}
          time={weatherData[0].time}
        />
        <WeatherIcons
          img={weatherData[1].img}
          conditions={weatherData[1].conditions}
          time={weatherData[1].time}
        />
        <WeatherIcons
          img={weatherData[2].img}
          conditions={weatherData[2].conditions}
          time={weatherData[2].time}
        />
        <WeatherIcons
          img={weatherData[3].img}
          conditions={weatherData[3].conditions}
          time={weatherData[3].time}
        />
        <WeatherIcons
          img={weatherData[4].img}
          conditions={weatherData[4].conditions}
          time={weatherData[4].time}
        />
      </section>
    </div>
  );
}
