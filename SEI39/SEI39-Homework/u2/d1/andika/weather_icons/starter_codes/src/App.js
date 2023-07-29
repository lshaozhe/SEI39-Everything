import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherIcons from "./WeatherIcons";

export default function App() {
  return (
    <div className="App">
      <section>
        {weatherData.map((e) => {
          return (
            <WeatherIcons img={e.img} conditions={e.conditions} time={e.time} />
          );
        })}
      </section>
    </div>
    // function WeatherArray() {
    //   const array = [];
    //   for (const entry of weatherData) {
    //     array.push(
    //       <WeatherIcons
    //         img={entry.img}
    //         conditions={entry.conditions}
    //         time={entry.time}
    //       />
    //     );
    //   }

    //   return array;
    // }
    // console.log(weatherData);
  );
}
