import React, { useState, useEffect } from "react";
import Form from "./Form";

const App = () => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    src: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selection, setSelection] = useState(false);

  const fetchPost = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      setPost({
        id: data.data.id,
        title: data.data.title,
        src: data.data.images.original.url,
      });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  const handleSelectionChange = () => {
    if (selection === false) {
      setSelection(true);
    } else {
      setSelection(false);
    }
  };

  useEffect(() => {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=IoG9Vykt07y3uK3s5SLhkRN3bHuUwKbp&tag=&rating=g";
    const controller = new AbortController();
    fetchPost(url, controller.signal);

    return () => {
      controller.abort();
    };
  }, [selection]);

  return (
    <div className="container">
      <h1>Giphy</h1>
      <h1>{selection}</h1>
      <Form />
      <br />
      <br />
      <div className="img-container">
        {!isLoading && (
          <>
            <img src={post.src} alt={post.title}></img>
          </>
        )}
        {isLoading && <p>Loading... Please wait</p>}
        {!isLoading && error && <p>{error}</p>}
      </div>
      <button onClick={handleSelectionChange}>Refresh</button>
    </div>
  );
};

export default App;
