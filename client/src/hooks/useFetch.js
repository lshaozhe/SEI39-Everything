import { useState, useEffect } from "react";

// use of hook in a parent component:
// 3 argument/ params: url(required, string), method(optional, string), body(optional, obj)
// 3 return: response, isloading(for conditional rendering when loading is true), error

// Sample invocation
// const { response, isloading, error } = useFetch(
//     "https://jsonplaceholder.typicode.com/todos/", method(optional), body(optional)
//   );

const useFetch = (url, method = "GET", body = null) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchPost(url, method, body) {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method,
        body,
      });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchPost(url, method, body);

    return () => {
      setResponse(null);
    };
  }, [url, method, body]);

  return { response, isLoading, error };
};

export default useFetch;
