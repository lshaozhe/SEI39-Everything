import React from "react";
import "./styles.css";
import weatherInfo from "./weatherData";
import WeatherIcon from "./WeatherIcon";

function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      {weatherInfo.map((element) => (
        <WeatherIcon {...element} />
      ))}
    </div>
  );
}

export default App;
