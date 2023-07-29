import React, { useEffect, useState } from "react";
import "./styles.css";
import Header from "./Components/Header";
import Button from "./Components/Button";
import Gif from "./Components/Gif";
import Form from "./Components/Form";

// const url = `https://api.giphy.com/v1/gifs/search?api_key=AbJuteQY3kWCZUM9hYJ99LFo8WIO5b6I&q=${searchItem}&limit=1&offset=0&rating=g&lang=en`;
let inputValue = "";
export default function App() {
  const [selection, setSelection] = useState("baby");
  const [post, setPost] = useState("");

  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=AbJuteQY3kWCZUM9hYJ99LFo8WIO5b6I&q=${selection}&limit=1&offset=0&rating=g&lang=en`;
    fetchPost(url);
  }, [selection]);

  const fetchPost = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data.data[0].images.original.url);

    setPost({
      image: data.data[0].images.original.url,
    });
  };

  // console.log(setPost);

  const handleClick = () => {
    setSelection(inputValue);
  };

  const handleInput = (event) => {
    inputValue = event.target.value;
  };

  return (
    <div className="display">
      <Header />
      <div className="formandbutton">
        <Form handleInput={handleInput} />
        <Button handleClick={handleClick} />
      </div>
      <Gif post={post} />
    </div>
  );
}
