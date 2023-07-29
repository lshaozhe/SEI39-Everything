import React from "react";
import "./styles.css";
import WeatherData from "./WeatherData";
import WeatherIcons from "./WeatherIcons";

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <WeatherIcons
        img={WeatherData[0].img}
        conditions={WeatherData[0].conditions}
        time={WeatherData[0].time}
      />
      <WeatherIcons
        img={WeatherData[1].img}
        conditions={WeatherData[1].conditions}
        time={WeatherData[1].time}
      />
      <WeatherIcons
        img={WeatherData[2].img}
        conditions={WeatherData[2].conditions}
        time={WeatherData[2].time}
      />
      <WeatherIcons
        img={WeatherData[3].img}
        conditions={WeatherData[3].conditions}
        time={WeatherData[3].time}
      />
      <WeatherIcons
        img={WeatherData[4].img}
        conditions={WeatherData[4].conditions}
        time={WeatherData[4].time}
      />
    </div>
  );
}
