import React, { useState, useEffect, useRef } from "react";
import Giphy from "./Giphy";
import LoadingSpinner from "./LoadingSpinner";

const Form = () => {
  const giphyAPIKey = "gkZLO4YuMAeJ8XsuoS8kaSZgeqBE1zix";
  const inputRef = useRef();
  const [input, setInput] = useState("hi");
  const [post, setPost] = useState({
    url: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();

      setPost({
        url: data.data[0].images.original.url,
      });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  //   const handleInputChange = (event) => {
  //     setInput(event.target.value);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(inputRef.current.value);
  };

  useEffect(() => {
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=" +
      giphyAPIKey +
      "&q=" +
      input +
      "&limit=1&offset=0&rating=g&lang=en";
    const controller = new AbortController();
    fetchPost(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, [input]);

  let image = "";

  if (error) {
    image = <p>{error}</p>;
  }

  if (post) {
    image = (
      <div className="row centered">
        <Giphy imageURL={post.url} />
      </div>
    );
  }

  if (isLoading) {
    image = (
      <div className="row centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row centered">
          <div className="col">
            <input
              ref={inputRef}
              id="input"
              type="text"
              //   onChange={handleInputChange}
              placeholder="type of giphy"
            />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      {image}
    </>
  );
};

export default Form;
