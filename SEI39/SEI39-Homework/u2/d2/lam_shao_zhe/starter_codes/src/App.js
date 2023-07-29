import React, { useState } from "react";
import "./styles.css";
import imageArr from "./imageData.js";

export default function App() {
  const [bigImage, setBigImage] = useState(imageArr[0]);

  const clickHandler = (e) => {
    setBigImage((prevState) => {
      return { ...prevState, img: e.target.src, city: e.target.alt };
    });
  };

  const images = imageArr.map((element) => {
    return (
      <img
        key={element.img}
        className={bigImage.img === element.img ? "thumb" : "thumb1"}
        src={element.img}
        alt={element.city}
        onClick={clickHandler}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {<img src={bigImage.img} id="bigimage" alt={bigImage.city} />}
      </div>
    </div>
  );
}
