import React, { useState, useEffect } from "react";

import RandomizeButton from "./RandomizeButton";
import RandomGif from "./RandomGif";
import InputForm from "./InputForm";

const Menu = () => {
  const [gif, setGif] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const key = "ASDshNCOYutV6FncOkcKQYs2UgnTVsxk";

  const fetchGif = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();

      setGif({ img: data.data.images.original.url });
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  //////////

  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    fetchGif(url);
  }, []);

  //////////

  let content = "";

  if (gif) {
    content = (
      <>
        <img src={gif.img} width="400" height="400" />
      </>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <div className="loading">Loading...</div>;
  }

  //////////

  const randomGif = async () => {
    setIsLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    setGif({ img: data.data.images.original.url });
    setIsLoading(false);
  };

  //////////

  const selectGif = async (input) => {
    if (input) {
      setIsLoading(true);
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input}`;
      const res = await fetch(url);
      const data = await res.json();
      setGif({ img: data.data.images.original.url });
      let content = "";
      content = (
        <>
          <img src={gif.img} width="400" height="400" />
        </>
      );
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Render Giphy App</h1>
      <RandomizeButton randomGif={randomGif} />
      <br />
      <br />
      <InputForm selectGif={selectGif} />
      <RandomGif gif={gif} content={content} />
    </>
  );
};

export default Menu;
