import React, { useEffect, useState } from "react";
import Form from "./Components/Form";

export default function App() {
  const [display, setDisplay] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [isSearchMode, setIsSearchMode] = useState(false);

  const fetchPost = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      if (Array.isArray(data.data)) {
        const randomIndex = Math.floor(Math.random() * data.data.length);
        setDisplay({
          image: data.data[randomIndex].images.original.url,
          type: data.data.type,
        });
      } else {
        setDisplay({
          image: data.data.images.original.url,
          type: data.data.type,
        });
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const url =
      "https://api.giphy.com/v1/gifs/random?api_key=Kh65T1U6xhAebHvO6hsrHBhzDI2ed0Yx&tag=welcome&rating=g";

    fetchPost(url);
    setIsSearchMode(true);
  }, []);

  useEffect(() => {
    if (!isSearchMode) {
      return;
    }

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Kh65T1U6xhAebHvO6hsrHBhzDI2ed0Yx&q=${search}&limit=25&offset=0&rating=g&lang=en`;

    fetchPost(url);
  }, [search]);

  return (
    <div>
      <Form setSearch={setSearch} />
      <img src={`${display.image}`} alt="" />
    </div>
  );
}
