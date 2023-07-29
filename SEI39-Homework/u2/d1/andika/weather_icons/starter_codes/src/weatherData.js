import WeatherIcons from "./WeatherIcons";

const weatherData = [
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
    conditions: "sunny",
    time: "day",
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
    conditions: "clear",
    time: "day",
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
    conditions: "clear",
    time: "day",
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
    conditions: "partly sunny",
    time: "night",
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
    conditions: "clear",
    time: "day",
  },
];

export default weatherData;

// function arrayOfComponent() {
//   const newArr = [];
//   for (item of weatherData) {
//     newArr.push(
//       <WeatherIcons img={item.img} conditions={item.conditions} prop3 />
//     );
//   }
//   return newArr;
// }
