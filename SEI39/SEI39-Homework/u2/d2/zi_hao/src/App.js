// IMPORT useState
import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
const imageArr = [...imagesArr];

export default function App() {
  const [bigImage, setBigImage] = useState(imageArr[0].img);

  const changeImage = (e) => {
    setBigImage(e.target.src);
  };
  const images = imageArr.map((city) => {
    return (
      <>
        <img
          src={city.img}
          alt={city.city}
          className={city.img === bigImage ? "thumb-selected" : "thumb"}
          id={city.city}
          onClick={changeImage}
        />
      </>
    );
  });
  // USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
