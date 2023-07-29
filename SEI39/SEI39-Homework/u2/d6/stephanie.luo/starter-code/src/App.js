import React, { useEffect, useState } from "react";
import Button from "./Components/Button";
import Label from "./Components/Label";
import Gif from "./Components/Gif";
import LoadingSpinner from "./Components/LoadingSpinner";
import Form from "./Components/Form";

function App() {
  let apiKey = "mdiRNtik2GDntaFbhKB5iL1whXVRwt2r";
  let giphyAPI = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`;

  const [gif, setGif] = useState({ imageUrl: "" });
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGif = async (url) => {
    // console.log("hi");
    setSearch(false);
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      if (search === false) {
        setGif(data.data.images.original.url);
      }

      if (search === true) {
        setGif(data.data[0].images.original.url);
      }
      //
    } catch (err) {
      setError(err.message);
      console.log(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchGif(giphyAPI);
  }, []);

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   fetchGif(giphyAPI);
  //   setGif(event.target.imageUrl);
  // };

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setSearch(true);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    let giphySearchAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input}&limit=25&offset=0&rating=g&lang=en`;
    fetchGif(giphySearchAPI);
    setGif(event.target.imageUrl);
    setInput("");
  };

  let content = "";

  if (gif) {
    content = <Gif imageUrl={gif} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <h1>
        <Label className="header" name="Giphy" />
      </h1>
      <Form
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="type of giphy"
      />
      <Button
        className="btn"
        type="submit"
        name="Submit"
        onClick={handleSearch}
      ></Button>
      <br />
      <br />
      <>{content}</>
      {/* <p>{JSON.stringify(input)}</p> */}
    </>
  );
}

export default App;
