// IMPORT useState
import React, { useState } from "react";
import imagesArr from "./imageData";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  const firstImage =
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60";
  // const noBorder = { border: "auto" };
  // const highlight = { border: "1px solid green" };
  // USE useState TO CREATE  [bigImage, setBigImage]
  const [bigImage, setBigImage] = useState(firstImage);
  const [borderState, setBorderState] = useState(0);
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const handleClick = (e) => {
    setBigImage(e.target.src);
  };

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {imagesArr.map((data) => (
            <img
              src={data.img}
              className={bigImage === data.img ? "selected" : "thumb"}
              alt={data.city}
              onClick={handleClick}
            ></img>
          ))}
          {/* RENDER THE IMAGES ARRAY  */}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
