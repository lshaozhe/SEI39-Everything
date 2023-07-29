import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import Form from "./Form";
// import Label from "./Label";
import LoadingSpinner from "./LoadingSpinner";

const ReactApp = () => {
  const [selection, setSelection] = useState("");
  const [post, setPost] = useState({
    title: "",
    image: "",
  });
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
      setPost({
        title: data.data.title,
        image: data.data[0].images.original.url,
      });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  const handleChange = (input) => {
    // setSelection(!selection);
    setSelection(input);
  };

  useEffect(() => {
    // const url =
    //   "https://api.giphy.com/v1/gifs/random?api_key=Joni2tWmV4RCJzTZICrz4IEuVtECxHQc&tag=&rating=g";
    const url =
      "https://api.giphy.com/v1/gifs/search?api_key=Joni2tWmV4RCJzTZICrz4IEuVtECxHQc&q=" +
      selection +
      "&limit=1&offset=0&rating=g&lang=en";
    fetchPost(url);

    console.log(url);
  }, [selection]);

  return (
    <div className="centered">
      <Form handleChange={handleChange} />
      <Gif isLoading={isLoading} post={post} />
    </div>
  );
};

export default ReactApp;
