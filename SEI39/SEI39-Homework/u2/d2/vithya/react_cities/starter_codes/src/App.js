import React, { useState } from "react";
import "./styles.css";
import imageData from "./imageData.js";

const imagesArr = imageData;

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleClick = (e) => {
    setBigImage(e.target.src);
  };

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {imagesArr.map((element, index) => {
            return (
              <img
                key={index}
                className="thumb"
                src={element.img}
                alt={element.city}
                onClick={handleClick}
              />
            );
          })}
        </div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
