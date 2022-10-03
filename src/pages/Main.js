import React, { useState, useEffect } from "react";

import Form from "../Components/Form";
import LoadingSpinner from "../Common/LoadingSpinner";
import Results from "../Components/Results";

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
    const url = "https://ftx.com/api/markets";
    fetchPost(url);
  }, []);

  return (
    <div className="main">
      <div className="form-container">
        <Form search={search} setSearch={setSearch} />
      </div>
      <div className="loading-spinner">
        <section>
          {isLoading && (
            <div className="centered">
              <LoadingSpinner />
            </div>
          )}

          {!isLoading && error && <p>{error}</p>}
        </section>
      </div>
      <div className="results-container">
        <Results post={post} search={search} />
      </div>
    </div>
  );
};

export default Main;
