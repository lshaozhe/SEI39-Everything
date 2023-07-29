import React from "react";
import "./styles.css";
import WeatherIcons from "./WeatherIcons";
import weatherData from "./weatherData";
import WeatherData1 from "./WeatherData1";

// for 1st part
// export default function App() {
//   return (
//     <div className="App">
//       <h1>My WeatherIcons App</h1>
//       <section>
//         {weatherData.map((props) => {
//           return (
//             <WeatherIcons
//               img={props.img}
//               conditions={props.conditions}
//               time={props.time}
//             />
//           );
//         })}
//       </section>
//     </div>
//   );
// }

// for looping
// export default function App() {
//   function GetWeather() {
//     const weatherArray = [];
//     for (const weather in weatherData) {
//       weatherArray.push(
//         <WeatherIcons
//           img={weatherData[weather].img}
//           conditions={weatherData[weather].conditions}
//           time={weatherData[weather].time}
//         />
//       );
//     }
//     return weatherArray;
//   }

//   return (
//     <div className="App">
//       <h1>My WeatherIcons App</h1>
//       <section>
//         <GetWeather />
//       </section>
//     </div>
//   );
// }

// for bonus part
export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {weatherData.map((props) => {
          return (
            <div className="weather">
              <WeatherIcons img={props.img} />
              <WeatherData1 conditions={props.conditions} time={props.time} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
