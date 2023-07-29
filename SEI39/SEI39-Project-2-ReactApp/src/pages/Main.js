import React, { useState, useEffect } from "react";

import Form from "../Components/Form";
import LoadingSpinner from "../Common/LoadingSpinner";
import Results from "../Components/Results";

const URL = "https://ftx.com/api/markets";

const Main = () => {
  const [search, setSearch] = useState({ first: "", next: "" });

  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      setPost(data.result);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPost(URL);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchPost(URL);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-col justify-center">
      <div className="flex justify-center items-center h-24">
        <Form search={search} setSearch={setSearch} />
      </div>
      <div className="flex justify-center items-center">
        <Results post={post} search={search} />
      </div>
      <div className="flex justify-center">
        <section>
          {isLoading && (
            <div className="centered">
              <LoadingSpinner />
            </div>
          )}

          {!isLoading && error && <p>{error}</p>}
        </section>
      </div>
    </div>
  );
};

export default Main;
