// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
import imageData from "./imageData";

const imagesArr = imageData;

export default function App() {
  const [bigImage, setBigImage] = useState(imageData[0].img);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClick = (event) => {
    setBigImage(event.target.src);
    setSelectedImage(event.target.src);
  };

  const images = imagesArr.map((item) => {
    return (
      <img
        src={item.img}
        alt={item.city}
        className={selectedImage === item.img ? "thumbSelected thumb" : "thumb"}
        onClick={handleClick}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
