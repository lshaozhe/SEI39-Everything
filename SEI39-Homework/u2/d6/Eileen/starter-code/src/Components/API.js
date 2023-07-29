import { GiphyFetch } from "@giphy/js-fetch-api";
import React, { useState, useEffect } from "react";
import Giphy from "./Giphy";
const API = () => {
  const [post, setPost] = useState([]);
  const [input, setInput] = useState("");
  const [err, setErr] = useState(false);
  const giphy = new GiphyFetch("L2wZ920vMHBkD7RXQEP0lTBrmqm3B9eu");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (input === "") {
      setErr(true);
    }

    const fetchpost = async () => {
      const res = await giphy.search(input, { limit: 1 });
      console.log(res.data[0].images.original.url);
      setPost(res.data[0].images.original.url);
    };
    fetchpost();
    setErr(false);
    setInput("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for GIFS!"
        value={input}
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Search</button>
      {post && <Giphy gifs={post} />}
    </>
  );
};

export default API;
