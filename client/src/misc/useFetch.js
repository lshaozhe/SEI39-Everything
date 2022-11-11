import { useState, useEffect } from "react";

// use of hook in a parent component:
// 3 argument/ params: url(required, string), method(optional, string), body(optional, obj)
// 3 return: response, isloading(for conditional rendering when loading is true), error

// Sample invocation
// const { response, isloading, error, fetchpost } = useFetch(
//     "https://jsonplaceholder.typicode.com/todos/", method(optional), body(optional)
//   );

const useFetch = (url, method = "GET", body = null) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchPost(url, method = "GET", body = null) {
    setIsLoading(true);
    setError(null);

    try {
      let access_key = sessionStorage.getItem("access_key");
      let headers = {};
      if (access_key) {
        headers = {
          "Content-Type": "application/json",
          Authentication: "Bearer " + access_key,
        };
      } else {
        headers = {
          "Content-Type": "application/json",
        };
      }

      const res = await fetch(url, {
        method,
        body,
        headers: headers,
      });

      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }
      const data = await res.json();

      // for JWT collection during fetch
      if (data.access !== undefined) {
        localStorage.setItem("access_key", JSON.stringify(data.access));
      }
      if (data.refresh !== undefined) {
        localStorage.setItem("refresh_key", JSON.stringify(data.refresh));
      }
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

  return { response, isLoading, error, fetchPost };
};

export default useFetch;
