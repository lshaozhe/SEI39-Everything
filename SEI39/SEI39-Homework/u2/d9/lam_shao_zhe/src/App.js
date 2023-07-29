import React, { useState, useEffect } from "react";
import Results from "./Results";
import Form from "./Form";

const App = () => {
  const [movie, setMovie] = useState("");
  const dataArr = [];
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const fetchPost = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      for (let i = 0; i < data.length; i++) {
        dataArr.push({
          id: data[i].show.id,
          name: data[i].show.name,
          url: data[i].show.image?.medium,
        });
      }
      setPost(dataArr);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url = "https://api.tvmaze.com/search/shows?q=" + movie;
    const controller = new AbortController();
    fetchPost(url, controller.signal);

    return () => {
      controller.abort();
    }; //cleanup function runs first on re-rendering
  }, [movie]);

  return (
    <div className="home">
      <h1>React TV Maze</h1>
      <Form setMovie={setMovie} showForm={showForm} setForm={setShowForm} />
      <Results postArr={post} showForm={showForm} setForm={setShowForm} />
    </div>
  );
};

export default App;
