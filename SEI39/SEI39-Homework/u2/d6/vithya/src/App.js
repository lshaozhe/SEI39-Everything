import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "./components/Form";
import Gif from "./components/Gif";

function App() {
  const APIKEY = "95H0dO5sz78O4rSCPiDmGGd7hCFI4Oj4";

  const [input, setInput] = useState("hello");
  const [post, setPost] = useState(null);

  const handleFormInput = (newInput) => {
    setInput(newInput);
    console.log(newInput);
  };

  const fetchPost = async (url) => {
    setPost(null);

    try {
      const res = await fetch(url);
      const data = await res.json();

      setPost(data.data[0].images.original.url);
    } catch (err) {
      if (err.name !== "AbortError") {
        console.log(err.message);
      }
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${input}&limit=1&offset=0&rating=g&lang=en`;
    fetchPost(url);
  }, [input]);

  return (
    <>
      <header>
        <h1>Giphy</h1>
      </header>
      <div className="container">
        <Form onSave={handleFormInput} />
      </div>
      <br />

      <div className="container">
        <Gif post={post} />
      </div>
    </>
  );
}

export default App;
