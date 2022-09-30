import React, { useState } from "react";
import SomeContext from "../context/some-context";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <SomeContext.Provider value={(username, setUsername, email, setEmail)}>
      {/* anything within the context bound can inherit the states (username and email) within the App.js */}
      {/* you can nest AnotherContext.Provider here to access both context */}
      <div className="container">
        <h2>Component1</h2>
        <Component1 />
        <br />
        <h2>Component2</h2>
        <Component2 />
      </div>
    </SomeContext.Provider>
  );
};

export default App;
