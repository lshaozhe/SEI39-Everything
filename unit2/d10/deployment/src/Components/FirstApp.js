import React, { useState } from "react";

const FirstApp = () => {
  const [text, setText] = useState(false);

  const handleClick = () => {
    setText(true);
  };

  return (
    <div className="container">
      <h2>FirstApp Component</h2>
      {!text && <p>Original text</p>}
      {text && <p>After button click</p>}
      <button onClick={handleClick}>Change text</button>
    </div>
  );
};

export default FirstApp;
