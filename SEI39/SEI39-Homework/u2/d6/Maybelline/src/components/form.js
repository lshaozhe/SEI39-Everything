import React, { useState, useEffect } from "react";
import Button from "./button";
import Gif from "./gifs";

const Input = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState({ image: "" });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();

      setResults({
        title: data.data.title,
        image: data.data[0].images.original.url,
      });
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const handleInputChange = (input) => {
    setInput(input);
    // console.log(input);
  };

  useEffect(() => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=J6UIXHoqp7UyZIIeNx9BrRwBL3kPHz00&limit=1&q=" +
      input;
    const controller = new AbortController();
    fetchPost(url);

    return () => {
      controller.abort();
    };
  }, [input]);

  return (
    <div className="centered">
      <Button onSubmit={handleInputChange} />
      <Gif isLoading={isLoading} results={results} />
    </div>
  );
};

export default Input;
