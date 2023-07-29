import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";

const originalBackgroundImage =
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    originalBackgroundImage
  );

  const [trackImage, setTrackImage] = useState("");

  const handleImageChange = (event) => {
    setBackgroundImage(event.target.src);
    setTrackImage((event.target.className = "thumb2"));
    setTrackImage(
      imagesArr.map((item) => {
        item.className = "thumb";
      })
    );
  };

  // const handleTrackImage = (event) => {
  //   setTrackImage((event.target.className = "thumb2"));
  //   console.log("i am clicked 2");
  // };

  const x = imagesArr.map((item) => {
    return (
      <img
        src={item.img}
        key={item.img}
        className="thumb"
        onClick={handleImageChange}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {/* {imagesArr.map((item) => {
            return <img src={item.img} className="thumb" />;
          })} */}
          {x}
        </div>
        <img src={backgroundImage} />
      </div>
    </div>
  );
}
