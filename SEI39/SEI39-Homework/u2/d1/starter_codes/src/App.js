import React from "react";
import "./styles.css";
import {weatherData} from "./components/weatherData";
import WeatherIcons from "./components/WeatherIcons";

export default function App() {

  // {function WeatherLoop() {
  //   const weatherDataElement = weatherData.map(weather => {
  //   return (<WeatherIcons img={weather.img} conditions={weather.conditions} time={weather.time}/>);
  //   });
  //   return weatherDataElement;
  // }
  
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
        {/* <WeatherIcons img={weatherData[0].img} conditions={weatherData[0].conditions} time={weatherData[0].time} />
        <WeatherIcons img={weatherData[1].img} conditions={weatherData[1].conditions} time={weatherData[1].time} />
        <WeatherIcons img={weatherData[2].img} conditions={weatherData[2].conditions} time={weatherData[2].time} />
        <WeatherIcons img={weatherData[3].img} conditions={weatherData[3].conditions} time={weatherData[3].time} />
        <WeatherIcons img={weatherData[4].img} conditions={weatherData[4].conditions} time={weatherData[4].time} /> */}
        
        {/* <WeatherLoop /> */}

        {weatherData.map(weather => {
          return (<WeatherIcons {...weather} />)
        })}

      </section>
      

      
    </div>
  );
}
