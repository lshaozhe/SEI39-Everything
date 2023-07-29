// IMPORT useState -- done
import React, { useState } from "react";
import imagesArr from "./imageData";
import "./styles.css";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr -- done

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] -- done
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY -- done
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL -- done
  const handleClick = (e) => {
    let imageURL = e.target.src;
    // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL -- done
    setBigImage(imageURL);
  };

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT -- done
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL -- done
  const images = imagesArr.map(function (data) {
    return (
      <img
        className="thumb"
        src={data.img}
        alt={data.city}
        onClick={handleClick}
      ></img>
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {/* RENDER THE IMAGES ARRAY -- done */}
          {images}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage -- done */}
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
