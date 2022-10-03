import React, { useState, useEffect } from "react";

import LoadingSpinner from "../Common/LoadingSpinner";

const Detailedview = (props) => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resolution, setResolution] = useState(60);

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
    const url = `https://ftx.com/api/markets/${props.currentSelection}/candles?resolution=${resolution}`;
    fetchPost(url);
  }, [props.currentSelection, resolution]);

  return (
    <>
      {props.currentSelection}
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
      <div className="details">{JSON.stringify(post)}</div>
    </>
  );
};

export default Detailedview;
