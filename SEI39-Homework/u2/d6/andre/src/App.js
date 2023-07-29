import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Gif from "./components/Gif";

function App() {
  const [url, setUrl] = useState(
    "https://api.giphy.com/v1/gifs/trending?api_key=N4xyfwdHsOQIHWOSpGDnnmE5KlGsRpFd&limit=25&rating=g"
  );
  const [post, setPost] = useState("");
  const [error, setError] = useState("");

  const handleSearch = (liftedData) => {
    setUrl(
      `https://api.giphy.com/v1/gifs/search?api_key=N4xyfwdHsOQIHWOSpGDnnmE5KlGsRpFd&q=${liftedData}&limit=25&offset=0&rating=g&lang=en`
    );
    console.log(url);
  };

  const fetchPost = async (url) => {
    try {
      const result = await fetch(url);
      if (result.status !== 200) {
        throw new Error("Something went wrong");
      }
      const response = await result.json();
      setPost(
        response.data[Math.round(Math.random() * 24)].images.original.url
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // handleChange -> change text on button press

  //handleSearch -> fetch posts on click

  useEffect(() => {
    fetchPost(url);
  }, [url]);

  return (
    <div className="container">
      <div className="row text-center">
        <h1>Giphy</h1>
      </div>
      <br />
      <Form
        className="d-flex justify-content-center"
        handleSearch={handleSearch}
      />
      <br />
      <div className="row justify-content-center">
        <Gif className="img-fluid" url={post} error={error} />
      </div>
    </div>
  );
}

export default App;
