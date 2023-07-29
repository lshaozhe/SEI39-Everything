import React, { useEffect, useState } from "react";

import Button from "./Button";
import Giphy from "./Giphy";
let inputValue = "";
const ReactApp = () => {
  const [selection, setSelection] = useState("");
  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [randomImg, setRandomImg] = useState(false);
  const fetchPost = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      // setPost({
      //   data: data.images.original.url,
      // });
      // setPost(data.data[0].images.original.url);
      setPost(data.data.images.original.url);

      console.log(post);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };
  const handleSelectionChange = () => {
    setSelection(inputValue);
  };
  const handleInput = (event) => {
    inputValue = event.target.value;
  };
  const handleRandomChange = () => {
    setRandomImg((prev) => !prev);
  };
  useEffect(() => {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=l3BwxVL54asfAR049WLn0v5u8eK6ynA8&rating=g" +
      selection;
    fetchPost(url);
  }, [randomImg]);

  let content = "";
  if (post) {
    content = <Giphy url={post} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <form>
        <input placeholder="type of giphy" onChange={handleInput}></input>
        <Button
          buttonText="Make API Call Again"
          type="button"
          onClick={handleRandomChange}
        />
      </form>
      {content}
    </React.Fragment>
  );
};

export default ReactApp;
