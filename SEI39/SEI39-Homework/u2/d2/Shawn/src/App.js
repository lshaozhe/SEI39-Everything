// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";

const firstImage2 =
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";

export default function App() {
  const [bigImage2, setBigImage2] = useState(firstImage2);
  // const handleImageChange2 = (event) => {};

  const [border, borderGreen] = useState(border);
  const handleBorder = (event) => {
    borderGreen((event.target.className = "thumb2"));
    setBigImage2(event.target.src);
  };

  const thumbnailImages = imagesArr.map((item) => {
    return (
      <img
        src={item.img}
        className="thumb"
        onClick={handleBorder}
        key={item.img}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{thumbnailImages}</div>
        <img src={bigImage2} />
      </div>
    </div>
  );
}
