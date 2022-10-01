import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Fetch = (props) => {
  const [selection, setSelection] = useState("markets");
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url) => {
    setIsLoading(true);
    setError(null);
    setPost(null);

    try {
      const res = await fetch(url);

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();

      setPost(data);
      props.setMarketData(data.result);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url = "https://ftx.com/api/" + selection;
    fetchPost(url);
  }, [selection]);

  return (
    <div className="container">
      <section>
        {isLoading && <p>Loading... please wait</p>}

        {isLoading && (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}

        {!isLoading && error && <p>{error}</p>}
      </section>
    </div>
  );
};

export default Fetch;
