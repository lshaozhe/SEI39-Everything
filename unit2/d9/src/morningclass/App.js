import React from "react";
import useFetch from "./useFetch";

const App = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts");

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
