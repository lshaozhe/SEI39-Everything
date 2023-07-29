import React from "react";
import FirstApp from "./components/FirstApp";
import SecontApp from "./components/SecontApp";

function App() {
  return (
    <div className="container">
      <div className="row">
        <FirstApp />
      </div>
      <hr />
      <div className="row">
        <SecontApp />
      </div>
    </div>
  );
}

export default App;
