import React, {useEffect, useState} from "react";
import Button from "./components/Button";
import Giphy from "./components/Giphy";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [gifURL, setGifURL] = useState("");
  const [random, setRandom] = useState(false);

  const myAPIKey="BGughFTKkJd2GyaUs2QUOImmNejoC2Lj";
  // let giphyAPI = `https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${myAPIKey}&limit=5`;
  const giphyAPI = `https://api.giphy.com/v1/gifs/random?api_key=${myAPIKey}&rating=g`;

  const apiCall = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await fetch(url, {signal});

      if (result.status !== 200) {
        throw new Error("Something went wrong.")
      }

      const gifData = await result.json();

      console.log(gifData);

      // random ? setGifURL(gifData.data.images.original.url) : setGifURL(gifData.data[0].images.original.url);
      setGifURL(gifData.data.images.original.url)

    } catch(err) {
      setError(err.message);
    }

    setIsLoading(false);
  }

  const generateRandomGif = () => {
    console.log(`button clicked`);

    setRandom((prev) => !prev);
  }

  useEffect(() => {
    const controller = new AbortController();
    apiCall(giphyAPI, controller.signal);

    return () => {
      controller.abort();
    }
  }, [random])

  let content = "";

  if (gifURL) {
    content = <Giphy url={gifURL} />
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Still loading...</p>;
  }

  return (
    <>
      <h1>Giphy</h1>
      <Button buttonText="Make API Call Again" onClick={generateRandomGif} />
      <h2>Use Giphy to pull some giphs</h2>
      {content}
    </>
  );
}

export default App;
