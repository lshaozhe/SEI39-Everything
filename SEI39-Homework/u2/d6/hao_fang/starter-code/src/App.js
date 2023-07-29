import React, { useState, useEffect } from "react";
import Gif from "./components/Gif";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  // =========
  // Variables
  // =========
  const apiKey = "7YFiQWogQPElPcnQk4vvzk75luc1LQpo";
  const [gif, setGif] = useState();
  const [search, setSearch] = useState();
  const [error, setError] = useState(null);
  const [nonFavourite, setNonFavourite] = useState();
  const [favourite, setFavourite] = useState();
  const [viewFavourite, setViewFavourite] = useState(true);
  const [favouritePicked, setFavouritePicked] = useState(false);
  const [toggleButtonText, setToggleButtonText] =
    useState("View Favourite GIF");

  // =====
  // Fetch
  // =====
  const fetchPost = async (url, random = false) => {
    setError(null);

    try {
      const res = await fetch(url);

      const data = await res.json();

      if (random) {
        setGif(data.data.images.original.url);
      } else {
        setGif(data.data[0].images.original.url);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // =========
  // useEffect
  // =========

  useEffect(() => {
    fetchPost(
      `https://api.giphy.com/v1/gifs/search?api_key=7YFiQWogQPElPcnQk4vvzk75luc1LQpo&q=${search}&limit=1&offset=0&rating=g&lang=en`
    );
  }, [search]);

  useEffect(() => {
    fetchPost(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=1&rating=pg-13`
    );
  }, []);

  // ======
  // Events
  // ======

  const randomGif = () => {
    fetchPost(
      "https://api.giphy.com/v1/gifs/random?api_key=7YFiQWogQPElPcnQk4vvzk75luc1LQpo&tag=&rating=pg-13",
      true
    );
  };

  const pickFavourite = () => {
    setFavouritePicked(true);
    setFavourite(gif);
  };

  const toggle = () => {
    if (!favouritePicked) {
      alert("You have not picked a favourite GIF yet");
      return;
    }
    if (viewFavourite) {
      setViewFavourite(false);
      setNonFavourite(gif);
      setGif(favourite);
      setToggleButtonText("Back");
    } else {
      setViewFavourite(true);
      setGif(nonFavourite);
      setToggleButtonText("View Favourite GIF");
    }
  };

  // ======
  // Return
  // ======

  return (
    <div id="main">
      <h1>Giphy</h1>
      <Form search={search} setSearch={setSearch} />
      <Gif imageSrc={gif} />
      <Button className="bottomButtons" onClick={randomGif}>
        Random GIF
      </Button>
      <Button className="bottomButtons" onClick={pickFavourite}>
        Pick Favourite
      </Button>
      <Button className="bottomButtons" onClick={toggle}>
        {toggleButtonText}
      </Button>
      <p>{error}</p>
    </div>
  );
}

export default App;
