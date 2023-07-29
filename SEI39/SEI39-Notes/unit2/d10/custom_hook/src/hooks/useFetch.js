import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await fetch(url);
    const data = await res.json();

    setData(data);
  }, [url]);

  return data;
};

export default useFetch;
