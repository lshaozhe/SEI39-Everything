import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";

const firstImage =
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";
export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  const [bigImage, setBigImage] = useState(firstImage);
  const handleImageChange = (event) => {
    setBigImage(event.target.src);
    console.log(event.target.src);
  };

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {imagesArr.map((item) => {
            return (
              <img
                src={item.img}
                className="thumb"
                onClick={handleImageChange}
              ></img>
            );
          })}
        </div>
        <img src={bigImage} />
      </div>
    </div>
  );
}
