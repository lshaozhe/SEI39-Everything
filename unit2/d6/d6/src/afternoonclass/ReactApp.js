import React, { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const ReactApp = () => {
  const [selection, setSelection] = useState("1");
  const [post, setPost] = useState({
    id: "",
    title: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });
      //signal short hand for {signal: signal}

      //check out on fetch vs axios, axios dont return error 200
      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      setPost({
        id: data.id,
        title: data.title,
        body: data.body,
      });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  const handleSelectionChange = (e) => {
    setSelection(e.target.value);
  };

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts/" + selection;
    const controller = new AbortController();
    fetchPost(url, controller.signal);

    return () => {
      controller.abort();
    }; //cleanup function runs first on re-rendering
  }, [selection]);

  let content = "";

  if (error) {
    content = <p>{error}</p>;
  }

  if (post) {
    content = (
      <>
        <div>ID: {post.id}</div>
        <div>Title: {post.title}</div>
        <div>Body: {post.body}</div>
      </>
    );
  }

  if (isLoading) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <section>
        <h2>Selection</h2>
        <div className="row">
          <select id="selection" onChange={handleSelectionChange} className="col-md-12">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </section>
      <br />
      {/* <section>
        bringing this ouside of JSX
        {!isLoading && (
          <>
            <div>ID: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
          </>
        )}

        {isLoading && <p>Loading... Please wait</p>}
        {isLoading && (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && error && <p>{error}</p>}
      </section> */}
      <section>{content}</section>
    </>
  );
};

export default ReactApp;
