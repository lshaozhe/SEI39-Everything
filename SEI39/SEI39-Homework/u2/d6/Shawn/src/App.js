import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Button from "./components/Button";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  const [selection, setSelection] = useState("tank");
  const [post, setPost] = useState("");

  const fetchPost = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.data[0].images.original.url);

    setPost({
      images: data.data[0].images.original.url,
    });
  };

  let inputValue = "";

  const handleSetSelection = (event) => {
    inputValue = event.target.value;
    console.log(inputValue);
  };
  const handleClick = () => {
    setSelection(inputValue);
    console.log(setSelection);
  };

  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yPqmOe47JAjasRmUhUSkFIXPxSx6WmvM&q=${selection}&limit=1&offset=0&rating=g&lang=en`;
    fetchPost(url);
  }, [selection]);

  return (
    <div className="App">
      <Header className="content" />
      <Form handleSetSelection={handleSetSelection} className="content" />
      <Button handleClick={handleClick} className="content" />
      <div>
        <Image post={post} className="content" />
      </div>
    </div>
  );
}
