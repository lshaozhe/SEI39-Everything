import React from "react";
import "./styles.css";
import weather from "./weatherData";
import WeatherIcon from "./WeatherIcons";

function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {weather.map((data) => (
          <WeatherIcon {...data} />
        ))}
        ;
        {/* {<WeatherIcon
          img={weather[0].img}
          conditions={weather[0].conditions}
          time={weather[0].time}
        />
        <WeatherIcon
          img={weather[1].img}
          conditions={weather[1].conditions}
          time={weather[1].time}
        />
        <WeatherIcon
          img={weather[2].img}
          conditions={weather[2].conditions}
          time={weather[2].time}
        />
        <WeatherIcon
          img={weather[3].img}
          conditions={weather[3].conditions}
          time={weather[3].time}
        />
        <WeatherIcon
          img={weather[4].img}
          conditions={weather[4].conditions}
          time={weather[4].time}
        // /> */}{" "}
      </section>
    </div>
  );
}

export default App;
